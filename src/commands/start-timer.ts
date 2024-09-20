import chalk from "chalk";
import _ from "lodash";
import postman from "postman-collection";
import { Arguments, CommandBuilder, Options } from "yargs";
import {
  request,
  handler as defaultHandler,
} from "../generated-commands/time-entries/create";
import { Alias, getConfig } from "../utils/config";
import { urlArgOptions } from "../utils/postman-request-command";
import {
  getCurrentLocalISOString,
  getNotes,
  normalizeProjectAndTaskAssignment,
} from "../utils/timer";

type StartTimerArguments = Arguments & {
  alias?: string;
  editor?: boolean;
  notes?: string;
  project_id?: number;
  task_id?: number;
};

export const command = "start [alias]";

export const describe = "Create a running time entry";

export const builder: CommandBuilder = (yargs) => {
  const defaultOptions = urlArgOptions(new postman.Url(request.url));
  const options: Record<string, Options> = defaultOptions;

  delete options["hours"];
  delete options["spent_date"];
  delete options["user_id"];

  Object.values(options).forEach((o) => (o.demandOption = false));
  options["editor"] = {
    alias: "e",
    description: "Launch editor to add notes",
    type: "boolean",
  };
  return yargs
    .positional("alias", {
      describe: "Alias for project id and task id",
    })
    .options(options)
    .version(false);
};

export const handler = async (args: StartTimerArguments): Promise<void> => {
  const defaultArgs = {
    fields: "client.name,id,is_running,notes,project.name,spent_date,task.name",
    spent_date: getCurrentLocalISOString(),
  };

  if (args.alias?.length) {
    const config = await getConfig();
    const alias: Alias = _.get(
      config,
      `accountConfig.${config.accountId}.aliases.${args.alias}`,
    );
    if (!alias) {
      console.error(chalk.yellow("Alias not found"));
      return;
    }
    await defaultHandler(
      Object.assign(defaultArgs, args, {
        notes: await getNotes(args),
        project_id: alias.projectId,
        task_id: alias.taskId,
      }),
    );
  } else {
    const demandedArgs = await normalizeProjectAndTaskAssignment(args);
    await defaultHandler(
      Object.assign(defaultArgs, demandedArgs, { notes: await getNotes(args) }),
    );
  }
};
