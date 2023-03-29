import chalk from "chalk";
import _ from "lodash";
import { Arguments, CommandBuilder } from "yargs";
import { getConfig, saveConfig } from "../../utils/config";

type DeleteAliasArguments = Arguments & {
  alias: string;
};

export const command = "delete <alias>";

export const describe = "Delete an alias";

export const builder: CommandBuilder = (yargs) => {
  return yargs.version(false);
};

export const handler = async (args: DeleteAliasArguments): Promise<void> => {
  const config = await getConfig();
  const aliases = _.get(config, `accountConfig.${config.accountId}.aliases`);
  if (args.alias in aliases) {
    delete aliases[args.alias];
    await saveConfig(config);
  } else {
    console.error(chalk.yellow(`Alias does not exist`));
  }
};
