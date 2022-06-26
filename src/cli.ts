#!/usr/bin/env node

import chalk from "chalk";
import yargs from "yargs";
import { failHandler } from "./utils/error";
import updateNotifier from "./utils/update-notifier";

updateNotifier();

yargs
  .commandDir("commands")
  .commandDir("generated-commands")
  .demandCommand()
  .recommendCommands()
  .strictCommands()
  .completion()
  .help()
  .epilogue(
    chalk.gray(
      "For more information, see: https://kgajera.github.io/hrvst-cli\n"
    )
  )
  .fail(failHandler).argv;
