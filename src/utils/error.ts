import chalk from "chalk";
import yargs from "yargs";
import { ConfigNotFoundError } from "./config";

export const failHandler = (
  message: string,
  error: Error,
  yargs: yargs.Argv,
): void => {
  if (error) {
    if (error instanceof ConfigNotFoundError) {
      message = "Config not found. Did you run `hrvst login`?";
    } else if (message === null) {
      message = error.message;
    }
  } else if (message) {
    yargs.showHelp("error");
    message = `\n${message}\n`;
  }

  console.error(chalk.red(message));
  process.exit(1);
};
