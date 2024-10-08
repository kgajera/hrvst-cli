/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst roles list", async () => {
  const { stdout } = await execaCommand("node dist/cli.js roles list --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js roles list

    Returns a list of roles in the account

    Options:
          --help      Show help                                            [boolean]
      -p, --page      The page number to use in pagination. Use \`all\` to retrieve al
                      l pages.
      -e, --per_page  The number of records to return per page. Can range between
                      1 and 2000.
      -f, --fields    Comma separated list of fields to display in the output.
      -o, --output    The output format: json, table"
  `);
});
