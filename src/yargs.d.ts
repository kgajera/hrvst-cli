import "yargs";

/**
 * Workaround to support: https://github.com/yargs/yargs/blob/main/docs/advanced.md#example-command-hierarchy-using-indexmjs
 */

declare module "yargs" {
  interface Argv<T = Record<string, unknown>> {
    command(modules: Partial<CommandModule<T, any>>[]): Argv<T>;
  }
}
