#!/usr/bin/env node

import yargs from "yargs";
import { failHandler } from "./util/error";

yargs
  .commandDir("commands")
  .commandDir("generated-commands")
  .demandCommand()
  .recommendCommands()
  .strictCommands()
  .help()
  .fail(failHandler).argv;
