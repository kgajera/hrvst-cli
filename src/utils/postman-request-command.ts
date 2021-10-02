import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import {
  DescriptionDefinition,
  QueryParam,
  Url,
  UrlDefinition,
} from "postman-collection";
import { Arguments, CommandModule, Options } from "yargs";
import { getConfig } from "./config";
import spinner from "./spinner";
import { horizontalTable, verticalTable } from "./table";

export const USER_AGENT = "hrvst-cli (https://www.npmjs.com/package/hrvst-cli)";

export interface Request {
  method: string;
  url: UrlDefinition;
}

export interface CommandConfig {
  describe: string;
  command: string;
  request: Request;
}

type PostmanRequestArguments = Arguments & {
  fields?: string;
};

type AsyncHandlerCommandModule = Omit<CommandModule, "handler"> & {
  handler: (args: Arguments) => Promise<void>;
};

export default ({
  command,
  describe,
  request,
}: CommandConfig): AsyncHandlerCommandModule => {
  const url = new Url(request.url);

  return {
    command,
    aliases: command.match(/^(create|delete|get|list|update)$/)
      ? [command.charAt(0)]
      : [],
    describe,
    builder: (args) => {
      const options = urlArgOptions(url);
      return args.options(options).version(false);
    },
    handler: async (args: PostmanRequestArguments) => {
      const { data } = await spinner(() =>
        httpRequest(request.method, url, args)
      );
      const tableFields = args.fields?.length ? args.fields.split(",") : [];

      if ("page" in data) {
        const path = request.url.path as string[];
        const resourceName = path[path.length - 1];
        const records = data[resourceName];

        if (!records?.length) {
          console.log(`No ${resourceName} found`);
        } else {
          const record = records[0];
          const table = horizontalTable(
            {
              head: tableFields.length
                ? tableFields
                : [
                    "id",
                    ...Object.keys(record).filter((k) =>
                      k.match(/_?(email|name)$/i)
                    ),
                  ],
            },
            records
          );
          console.log(table.toString());
        }
      } else {
        console.log(verticalTable(data, tableFields).toString());
      }
    },
  };
};

/**
 * Send HTTP request configured from an instance of Postman URL
 *
 * @param method HTTP method
 * @param url Postman URL instance
 * @param args Command line arguments to substitute in URL
 * @returns HTTP response
 */
export async function httpRequest<T = any>(
  method: string,
  url: Url,
  args: Partial<Arguments> = {}
): Promise<AxiosResponse<T>> {
  const config = await getConfig();

  // Variable value must be a string for it to get substituted when calling getPath()
  url.variables.each(
    (variable) => variable.key && variable.set(String(args[variable.key]))
  );

  // Add each argument property as a query parameter. Rather than looping
  // through the query parameters defined in Postman's, `url.query`, this allows
  // supporting additional query parameters (mainly for array elements that
  // will contain the index in the param name)
  for (const key in args) {
    if (key !== "_" && key !== "$0" && !url.variables.has(key)) {
      url.query.upsert(
        new QueryParam({
          key,
          value: String(args[key]),
        })
      );
    }
  }

  // Ensure each param is not disabled if it has a value, or otherwise disable it
  // so empty query parameters are not added to the URL which can lead to
  // validation errors (an example of this is the `per_page` parameter).
  url.query.each((param) => {
    param.disabled = !param.value || !param.value.length;
  });

  const options: AxiosRequestConfig = {
    baseURL: `${url.protocol}://${url.getHost()}`,
    headers: {
      "User-Agent": USER_AGENT,
      Authorization: `Bearer ${config.accessToken}`,
      "Harvest-Account-ID": config.accountId,
    },
    method: method as Method,
  };

  if (method === "GET") {
    options.url = url.getPathWithQuery();
  } else {
    options.url = url.getPath();
    options.data = url.getQueryString();
  }

  return axios.request(options);
}

/**
 * Get command options for the URL's path variables and query parameters
 *
 * @param url Postman URL instance
 * @returns yargs Options object
 */
export function urlArgOptions(url: Url): Record<string, Options> {
  const options: Record<string, Options> = {};
  const usedAliases: string[] = [];

  const addOption = (
    key?: string | null,
    description?: string | DescriptionDefinition,
    demandOption?: boolean
  ) =>
    key &&
    (options[key] = {
      alias: alias(key),
      demandOption,
      describe: description?.toString(),
    });

  // Get unique alias for key
  const alias = (key: string) => {
    let charPosition = 0;
    do {
      const char = key.charAt(charPosition);
      if (char.match(/[A-Za-z]/) && usedAliases.indexOf(char) === -1) {
        usedAliases.push(char);
        return char;
      }
    } while (++charPosition < key.length);
  };

  // Add required option for all path variables
  url.variables.each((v) => addOption(v.key, v.description, true));

  // Add options for all query parameters
  url.query.each((q) => addOption(q.key, q.description, q.disabled !== true));

  // Add option to control which fields are outputted to the console
  addOption(
    "fields",
    "Comma separated list of fields to display in console table output.",
    false
  );

  return options;
}
