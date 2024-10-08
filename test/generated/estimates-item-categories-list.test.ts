/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst estimates item-categories list", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js estimates item-categories list --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js estimates item-categories list

    Returns a list of your estimate item categories

    Options:
          --help           Show help                                       [boolean]
      -u, --updated_since  Only return estimate item categories that have been updat
                           ed since the given date and time.
      -p, --page           The page number to use in pagination. Use \`all\` to retrie
                           ve all pages.
      -e, --per_page       The number of records to return per page. Can range betwe
                           en 1 and 2000.
      -f, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});
