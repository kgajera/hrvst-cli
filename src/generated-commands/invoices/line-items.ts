/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import { Argv } from "yargs";
export const command = "line-items <command>";
export const description = `[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object)`;
export const builder = (yargs: Argv) =>
  yargs.commandDir("line-items").version(false);
export const handler = () => {};