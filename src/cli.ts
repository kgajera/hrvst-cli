#!/usr/bin/env node

import chalk from "chalk";
import yargs, { Arguments, CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import { getAliasNamesSync } from "./utils/config";
import { failHandler } from "./utils/error";
import updateNotifier from "./utils/update-notifier";
import { commands } from "./commands";
import { commands as generatedCommands } from "./generated-commands";

function inCompletionMode(): boolean {
  return (
    process.env.YARGS_COMPLETION === "1" ||
    process.argv.includes("--get-yargs-completions") ||
    process.env.HRVST_COMPLETION === "1"
  );
}

if (!inCompletionMode()) {
  updateNotifier();
}

const shouldCompleteAlias = (current: string, argv: Arguments): boolean => {
  if (argv._[1] === "start" && argv._.length === 3) {
    return true;
  }

  if (argv._[1] === "log" && !isNaN(Number(argv._[2])) && argv._.length === 4) {
    return true;
  }

  if (argv._[1] === "alias" && argv._[2] === "delete" && argv._.length === 4) {
    return true;
  }

  return false;
};

yargs(hideBin(process.argv))
  .command([...(commands as CommandModule[]), ...generatedCommands])
  .demandCommand()
  .recommendCommands()
  .strictCommands()
  .completion(
    "completion",
    "Generate shell completion script",
    (current, argv, completionFilter, done) => {
      if (shouldCompleteAlias(current, argv)) {
        completionFilter(() => {
          try {
            done(getAliasNamesSync());
          } catch {
            done([]);
          }
        });
      } else {
        completionFilter();
      }
    },
  )
  .help()
  .epilogue(
    chalk.gray(
      "For more information, see: https://kgajera.github.io/hrvst-cli\n",
    ),
  )
  .fail(failHandler)
  .parse();
