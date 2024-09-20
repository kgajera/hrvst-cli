#!/usr/bin/env node

import chalk from "chalk";
import yargs, { CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import { failHandler } from "./utils/error";
import updateNotifier from "./utils/update-notifier";
import { commands } from "./commands";
import { commands as generatedCommands } from "./generated-commands";

updateNotifier();

yargs(hideBin(process.argv))
  .command([...(commands as CommandModule[]), ...generatedCommands])
  .demandCommand()
  .recommendCommands()
  .strictCommands()
  .completion("completion", "Generate shell completion script")
  .help()
  .epilogue(
    chalk.gray(
      "For more information, see: https://kgajera.github.io/hrvst-cli\n",
    ),
  )
  .fail(failHandler).argv;
