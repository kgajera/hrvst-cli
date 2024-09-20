/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
import { commands } from "./item-categories/index";
export const command = "item-categories <command>";
export const description = `Admin or project manager permissions required.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
