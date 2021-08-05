import chalk from "chalk";
import inquirer, { ChoiceOptions } from "inquirer";
import pick from "lodash/pick";
import { Url } from "postman-collection";
import { Arguments, CommandBuilder } from "yargs";
import {
  request,
  handler as defaultHandler,
} from "../generated-commands/time-entries/create";
import { urlArgOptions } from "../util/postman-request-command";
import spinner from "../util/spinner";
import { getAssignmentChoices, getCurrentLocalISOString } from "../util/timer";

type StartTimerArguments = Arguments & {
  project_id?: number;
  task_id?: number;
};

export const command = "start";

export const describe = "Create a running time entry";

export const builder: CommandBuilder = (yargs) => {
  const defaultOptions = urlArgOptions(new Url(request.url));
  const options = pick(defaultOptions, "notes", "project_id", "task_id");
  Object.values(options).forEach((o) => (o.demandOption = false));
  return yargs.options(options).version(false);
};

export const handler = async (args: StartTimerArguments): Promise<void> => {
  const { projectChoices, taskChoices } = await spinner(() =>
    getAssignmentChoices()
  );
  let argTaskChoices: ChoiceOptions[] | undefined;

  if (args.project_id) {
    // Task choices if a project argument was provided
    argTaskChoices = taskChoices(args.project_id);

    // Bail if no tasks are found for the given project id argument
    if (!argTaskChoices?.length) {
      console.error(
        chalk.red(
          `No task assignments found for project id: ${args.project_id}`
        )
      );
      return;
    }
  }

  // Prompt for project_id and task_id if not given as arguments
  const answers = await inquirer.prompt([
    {
      name: "project_id",
      type: "list",
      message: "Select a project:",
      choices: projectChoices,
      when: !args.project_id,
    },
    {
      name: "task_id",
      type: "list",
      message: "Select a task:",
      choices: (answers) => argTaskChoices || taskChoices(answers.project_id),
      when: !args.task_id,
    },
  ]);

  defaultHandler(
    Object.assign(
      {
        spent_date: getCurrentLocalISOString(),
      },
      args,
      answers
    )
  );
};
