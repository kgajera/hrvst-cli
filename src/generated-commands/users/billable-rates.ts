/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import { Argv } from "yargs";
export const command = "billable-rates <command>";
export const description = `Admin permissions required.`;
export const builder = (yargs: Argv) =>
  yargs.commandDir("billable-rates").version(false);
export const handler = () => {};