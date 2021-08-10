#!/usr/bin/env node

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
  .help()
  .fail(failHandler).argv;
