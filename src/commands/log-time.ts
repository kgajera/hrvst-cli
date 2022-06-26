import chalk from "chalk";
import pick from "lodash/pick";
import { Url } from "postman-collection";
import { Arguments, CommandBuilder, Options } from "yargs";
import { request } from "../generated-commands/time-entries/create";
import { urlArgOptions } from "../utils/postman-request-command";
import { handler as startTimerHandler } from "./start-timer";

type LogTimeArguments = Arguments & {
  alias?: string;
  hours: number;
  notes?: string;
  project_id?: number;
  task_id?: number;
};

export const command = "log <hours> [alias]";

export const describe = "Create a time entry";

export const builder: CommandBuilder = (yargs) => {
  const defaultOptions = urlArgOptions(new Url(request.url));
  const options: Record<string, Options> = pick(
    defaultOptions,
    "notes",
    "project_id",
    "task_id"
  );
  Object.values(options).forEach((o) => (o.demandOption = false));
  options["editor"] = {
    alias: "e",
    description: "Launch editor to add notes",
    type: "boolean",
  };
  return yargs
    .positional("hours", {
      describe: "Amount of hours to log",
      type: "number",
    })
    .positional("alias", {
      describe: "Alias for project id and task id",
    })
    .options(options)
    .version(false);
};

export const handler = async (args: LogTimeArguments): Promise<void> => {
  if (isNaN(args.hours)) {
    console.error(chalk.red("Hours must be a valid number"));
    return;
  }

  const formatTime = (date: Date) =>
    date
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace(" ", "")
      .toLowerCase();

  const hoursInSeconds = args.hours * 60 * 60;
  const date = new Date();
  date.setSeconds(date.getSeconds() - hoursInSeconds);

  await startTimerHandler({
    fields: "client.name,id,hours,notes,project.name,spent_date,task.name",
    started_time: formatTime(date),
    ended_time: formatTime(new Date()),
    ...args,
  });
};
