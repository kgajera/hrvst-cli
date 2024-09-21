import _ from "lodash";
import postman from "postman-collection";
import { Arguments, CommandModule, Options } from "yargs";
import { getConfig } from "./config";
import spinner from "./spinner";
import { horizontalTable, verticalTable } from "./table";

export const USER_AGENT = "hrvst-cli (https://www.npmjs.com/package/hrvst-cli)";

export interface Request {
  method: string;
  url: postman.UrlDefinition;
}

export interface CommandConfig {
  describe: string;
  command: string;
  request: Request;
}

type PostmanRequestArguments = Arguments & {
  fields?: string;
  format?: "json" | "table";
};

type AsyncHandlerCommandModule = Omit<CommandModule, "handler"> & {
  handler: (args: Arguments) => Promise<void>;
};

export default ({
  command,
  describe,
  request,
}: CommandConfig): AsyncHandlerCommandModule => {
  const url = new postman.Url(request.url);

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
      const path = request.url.path as string[];
      const resourceName = path[path.length - 1];
      const outputFields = args.fields?.length ? args.fields.split(",") : [];
      let output = await spinner(async () => apiRequest());

      async function apiRequest(page?: number) {
        const fetchAll = args.page === "all";
        const requestArgs = Object.assign({}, args);
        if (page || fetchAll) {
          requestArgs.page = page || 1;
        }

        const { data } = await httpRequest(request.method, url, requestArgs);
        // "results" is used in responses of report endpoints
        const objects = data[resourceName] ?? data["results"];

        if (data.page && Array.isArray(objects)) {
          if (fetchAll && data.next_page) {
            objects.push(...(await apiRequest(data.next_page)));
          }

          return objects;
        }

        return data;
      }

      switch (args.output) {
        case "json":
          if (Array.isArray(output)) {
            output = outputFields.length
              ? _.map(output, _.partialRight(_.pick, outputFields))
              : output;
          } else {
            output = outputFields.length
              ? _.pick(output, outputFields)
              : output;
          }
          console.log(JSON.stringify(output, null, 2));
          break;
        default: {
          if (Array.isArray(output)) {
            if (!output?.length) {
              console.log(`No ${resourceName} found`);
            } else {
              const record = output[0];
              const table = horizontalTable(
                {
                  head: outputFields.length
                    ? outputFields
                    : [
                        "id",
                        ...Object.keys(record).filter((k) =>
                          k.match(/_?(email|hours|name)$/i),
                        ),
                      ],
                },
                output,
              );
              console.log(table.toString());
            }
          } else {
            console.log(verticalTable(output, outputFields).toString());
          }
        }
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
  url: postman.Url,
  args: Partial<Arguments> = {},
): Promise<{ data: T }> {
  const config = await getConfig();

  // Variable value must be a string for it to get substituted when calling getPath()
  url.variables.each(
    (variable) => variable.key && variable.set(String(args[variable.key])),
  );

  // Add each argument property as a query parameter. Rather than looping
  // through the query parameters defined in Postman's, `url.query`, this allows
  // supporting additional query parameters (mainly for array elements that
  // will contain the index in the param name)
  for (const key in args) {
    if (key !== "_" && key !== "$0" && !url.variables.has(key)) {
      url.query.upsert(
        new postman.QueryParam({
          key,
          value: String(args[key]),
        }),
      );
    }
  }

  // Ensure each param is not disabled if it has a value, or otherwise disable it
  // so empty query parameters are not added to the URL which can lead to
  // validation errors (an example of this is the `per_page` parameter).
  url.query.each((param) => {
    param.disabled = !param.value || !param.value.length;
  });

  const options: RequestInit = {
    headers: {
      "User-Agent": USER_AGENT,
      Authorization: `Bearer ${config.accessToken}`,
      "Harvest-Account-ID": config.accountId,
      "Content-Type": "application/json",
    },
    method,
  };

  let urlPath;

  if (method === "GET") {
    urlPath = url.getPathWithQuery();
  } else {
    urlPath = url.getPath();
    options.body = JSON.stringify(url.query.toObject(true));
  }

  const res = await fetch(
    `${url.protocol}://${url.getHost()}${urlPath}`,
    options,
  );

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error(
        "Your authentication token is either expired or invalid. Run `hrvst login` to reauthenticate.",
      );
    }

    const data = await res.json();

    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error(JSON.stringify(data, null, 2));
  }

  return { data: await res.json() };
}

/**
 * Get command options for the URL's path variables and query parameters
 *
 * @param url Postman URL instance
 * @returns yargs Options object
 */
export function urlArgOptions(url: postman.Url): Record<string, Options> {
  const options: Record<string, Options> = {};
  const usedAliases: string[] = [];

  const addOption = (
    key?: string | null,
    description?: string | postman.DescriptionDefinition,
    demandOption?: boolean,
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
    "Comma separated list of fields to display in the output.",
  );

  addOption("output", "The output format: json, table");

  return options;
}
