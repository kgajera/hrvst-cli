/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
import { commands } from "./cost-rates/index";
export const command = "cost-rates <command>";
export const description = `Admin permissions required.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
