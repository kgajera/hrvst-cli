/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
import { commands } from "./expenses/index";
export const command = "expenses <command>";
export const description = `Information pertaining to retrieving, creating, editing, and deleting expenses.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
