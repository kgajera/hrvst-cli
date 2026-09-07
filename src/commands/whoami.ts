import postman from "postman-collection";
import { Arguments, CommandBuilder } from "yargs";
import { request as meRequest } from "../generated-commands/users/me";
import { getConfig } from "../utils/config";
import { httpRequest } from "../utils/postman-request-command";
import spinner from "../utils/spinner";
import { verticalTable } from "../utils/table";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  timezone?: string;
  access_roles?: string[];
}

type WhoamiArguments = Arguments & {
  output?: string;
};

export const command = "whoami";

export const describe = "Display the currently authenticated user";

export const builder: CommandBuilder = (yargs) =>
  yargs
    .option("output", {
      alias: "o",
      describe: "The output format: json, table",
    })
    .version(false);

export const handler = async (args: WhoamiArguments): Promise<void> => {
  const config = await getConfig();

  const { data: user } = await spinner(() =>
    httpRequest<User>(meRequest.method, new postman.Url(meRequest.url)),
  );

  if (args.output === "json") {
    console.log(JSON.stringify(user, null, 2));
    return;
  }

  console.log(
    verticalTable({
      Name: `${user.first_name} ${user.last_name}`.trim(),
      Email: user.email,
      "User ID": user.id,
      "Account ID": config.accountId,
      Timezone: user.timezone,
      "Access Roles": user.access_roles?.join(", "),
    }).toString(),
  );
};
