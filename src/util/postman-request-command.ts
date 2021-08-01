import axios, { AxiosResponse, Method } from "axios";
import chalk from "chalk";
import { DescriptionDefinition, Url, UrlDefinition } from "postman-collection";
import { Arguments, CommandModule, Options } from "yargs";
import { getConfig } from "./config";
import spinner from "./spinner";
import { horizontalTable, verticalTable } from "./table";

const USER_AGENT = "hrvst-cli";

export interface Request {
  method: string;
  url: UrlDefinition;
}

export interface CommandConfig {
  describe: string;
  command: string;
  request: Request;
}

export default ({
  command,
  describe,
  request,
}: CommandConfig): CommandModule => {
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
    handler: async (args) => {
      try {
        const { data } = await spinner(() =>
          httpRequest(request.method, url, args)
        );

        if ("page" in data) {
          const path = request.url.path as string[];
          const resourceName = path[path.length - 1];
          const records = data[resourceName];

          if (!records.length) {
            console.log(`No ${resourceName} found`);
          } else {
            const record = records[0];
            const table = horizontalTable(
              {
                head: [
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
          console.log(verticalTable(data).toString());
        }
      } catch (error) {
        if (error.isAxiosError && error.response.data.message?.length) {
          console.error(chalk.red(error.response.data.message));
        } else {
          throw error;
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
async function httpRequest(
  method: string,
  url: Url,
  args: Arguments
): Promise<AxiosResponse> {
  const config = await getConfig();
  if (!config) {
    throw new Error("Config not found. Did you run `hrvst login`?");
  }

  // Variable value must be a string for it to get substituted when calling getPath()
  url.variables.each(
    (variable) => variable.key && variable.set(String(args[variable.key]))
  );

  url.query.each((param) => {
    if (param.key) {
      param.update({ key: param.key, value: String(args[param.key]) });
    }
  });

  return axios.request({
    baseURL: `${url.protocol}://${url.getHost()}`,
    headers: {
      "User-Agent": USER_AGENT,
      Authorization: `Bearer ${config.accessToken}`,
      "Harvest-Account-ID": config.accountId,
    },
    method: method as Method,
    url: url.getPathWithQuery(),
  });
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

  return options;
}
