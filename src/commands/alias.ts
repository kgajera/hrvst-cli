import { CommandBuilder } from "yargs";

export const command = "alias <command>";
export const description = "Manage aliases for creating time entries";
export const builder: CommandBuilder = (yargs) =>
  yargs
    .commandDir("alias")
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
