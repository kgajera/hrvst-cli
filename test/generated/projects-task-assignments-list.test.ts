/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects task-assignments list", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects task-assignments list --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects task-assignments list

    Returns a list of your task assignments

    Options:
          --help           Show help                                       [boolean]
      -i, --is_active      Pass true to only return active task assignments and fals
                           e to return inactive task assignments.
      -u, --updated_since  Only return task assignments that have been updated since
                            the given date and time.
      -p, --page           The page number to use in pagination. Use \`all\` to retrie
                           ve all pages.
      -e, --per_page       The number of records to return per page. Can range betwe
                           en 1 and 2000.
      -f, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});
