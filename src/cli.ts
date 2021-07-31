import yargs from "yargs";

yargs
  .commandDir("commands")
  .commandDir("generated-commands")
  .demandCommand()
  .recommendCommands()
  .strict()
  .help().argv;
