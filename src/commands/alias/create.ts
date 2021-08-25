import chalk from "chalk";
import setWith from "lodash/setWith";
import { Arguments, CommandBuilder, Options } from "yargs";
import { getConfig, saveConfig } from "../../utils/config";
import { normalizeProjectAndTaskAssignment } from "../../utils/timer";

type CreateAliasArguments = Arguments & {
  project_id?: number;
  task_id?: number;
};

export const command = "create <alias>";

export const describe = "Create an alias";

export const builder: CommandBuilder = (yargs) => {
  const options: Record<string, Options> = {
    project_id: {
      alias: "p",
      describe: "The ID of the project to associate with the alias.",
      demandOption: false,
    },
    task_id: {
      alias: "t",
      describe: "The ID of the task to associate with the alias.",
      demandOption: false,
    },
  };
  return yargs.options(options).version(false);
};

export const handler = async (args: CreateAliasArguments): Promise<void> => {
  const config = await getConfig();
  const { project_id, task_id } = await normalizeProjectAndTaskAssignment(args);

  setWith(
    config,
    `accountConfig.${config.accountId}.aliases.${args.alias}`,
    {
      projectId: project_id,
      taskId: task_id,
    },
    Object
  );

  await saveConfig(config);

  console.log(
    chalk.green(
      `Alias created! You can now start a timer using: hrvst start ${args.alias}`
    )
  );
};
