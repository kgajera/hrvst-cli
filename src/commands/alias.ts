import { CommandBuilder } from "yargs";
import { commands } from "./alias/index";

export const command = "alias <command>";
export const description = "Manage aliases for creating time entries";
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
