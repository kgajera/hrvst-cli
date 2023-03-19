/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
import { commands } from "./project-assignments/index";
export const command = "project-assignments <command>";
export const description = `Admin permissions required, except when retrieving the currently authenticated user’s project assignments.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
