import chalk from "chalk";
import get from "lodash/get";
import pick from "lodash/pick";
import { Url } from "postman-collection";
import { Arguments, CommandBuilder } from "yargs";
import {
  request,
  handler as defaultHandler,
} from "../generated-commands/time-entries/create";
import { Alias, getConfig } from "../utils/config";
import { urlArgOptions } from "../utils/postman-request-command";
import {
  getCurrentLocalISOString,
  normalizeProjectAndTaskAssignment,
} from "../utils/timer";

type StartTimerArguments = Arguments & {
  alias?: string;
  notes?: string;
  project_id?: number;
  task_id?: number;
};

export const command = "start [alias]";

export const describe = "Create a running time entry";

export const builder: CommandBuilder = (yargs) => {
  const defaultOptions = urlArgOptions(new Url(request.url));
  const options = pick(defaultOptions, "notes", "project_id", "task_id");
  Object.values(options).forEach((o) => (o.demandOption = false));
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
    const alias: Alias = get(
      config,
      `accountConfig.${config.accountId}.aliases.${args.alias}`
    );
    if (!alias) {
      console.error(chalk.yellow("Alias not found"));
      return;
    }
    await defaultHandler(
      Object.assign(defaultArgs, args, {
        project_id: alias.projectId,
        task_id: alias.taskId,
      })
    );
  } else {
    const demandedArgs = await normalizeProjectAndTaskAssignment(args);
    await defaultHandler(Object.assign(defaultArgs, demandedArgs));
  }
};
