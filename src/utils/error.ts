import { AxiosError } from "axios";
import chalk from "chalk";
import { Argv, exit } from "yargs";
import { ConfigNotFoundError } from "./config";

export const failHandler = (
  message: string,
  error: Error,
  yargs: Argv
): void => {
  if (error) {
    if ("isAxiosError" in error) {
      const httpError = error as AxiosError;
      const data = httpError.response?.data;

      if (httpError.response?.status === 401) {
        message =
          "Your authentication token is either expired or invalid. Run `hrvst login` to reauthenticate.";
      } else if (data.message?.length) {
        message = data.message;
      } else {
        message = JSON.stringify(data, null, 2);
      }
    } else if (error instanceof ConfigNotFoundError) {
      message = "Config not found. Did you run `hrvst login`?";
    } else if (message === null) {
      message = error.message;
    }
  } else if (message) {
    yargs.showHelp("error");
    message = `\n${message}\n`;
  }

  console.error(chalk.red(message));
  exit(1, error);
};
