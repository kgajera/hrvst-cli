/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst expenses categories list", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js expenses categories list --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js expenses categories list

    Returns a list of your expense categories

    Options:
          --help          Show help                                        [boolean]
      -i, --is_active     Pass true to only return active expense categories and fal
                          se to return inactive expense categories.
      -u, --update_since  Only return expense categories that have been updated sinc
                          e the given date and time.
      -p, --page          The page number to use in pagination. Use \`all\` to retriev
                          e all pages.
      -e, --per_page      The number of records to return per page. Can range betwee
                          n 1 and 2000.
      -f, --fields        Comma separated list of fields to display in the output.
      -o, --output        The output format: json, table"
  `);
});
