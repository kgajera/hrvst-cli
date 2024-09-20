import chalk from "chalk";
import _ from "lodash";
import { CommandBuilder } from "yargs";
import { getConfig, saveConfig } from "../../utils/config";
import { horizontalTable } from "../../utils/table";

export const command = "list";

export const describe = "List aliases";

export const builder: CommandBuilder = (yargs) => {
  return yargs.version(false);
};

export const handler = async (): Promise<void> => {
  const config = await getConfig();
  const aliases =
    _.get(config, `accountConfig.${config.accountId}.aliases`) || {};
  const aliasNames = Object.keys(aliases);

  if (aliasNames.length) {
    const table = horizontalTable(
      {
        head: ["alias", "project_id", "task_id"],
      },
      aliasNames.map((alias) => ({
        alias,
        project_id: aliases[alias].projectId,
        task_id: aliases[alias].taskId,
      })),
    );
    console.log(table.toString());
  } else {
    console.error(chalk.yellow("No aliases found"));
  }

  await saveConfig(config);
};
