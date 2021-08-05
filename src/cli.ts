#!/usr/bin/env node

import chalk from "chalk";
import yargs from "yargs";
import { ConfigNotFoundError } from "./util/config";

yargs
  .commandDir("commands")
  .commandDir("generated-commands")
  .demandCommand()
  .recommendCommands()
  .strict()
  .help()
  .fail(function (_, error) {
    if (error instanceof ConfigNotFoundError) {
      console.error(chalk.red("Config not found. Did you run `hrvst login`?"));
      process.exit(1);
    }
  }).argv;
