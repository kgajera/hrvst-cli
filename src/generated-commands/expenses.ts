/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import { Argv } from "yargs";
export const command = "expenses <command>";
export const description = `Information pertaining to retrieving, creating, editing, and deleting expenses.`;
export const builder = (yargs: Argv) =>
  yargs.commandDir("expenses").version(false);
export const handler = () => {};