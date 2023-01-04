/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
export const command = "time-entries <command>";
export const description = `Information pertaining to retrieving, creating, editing, and deleting time entries.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .commandDir("time-entries")
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);