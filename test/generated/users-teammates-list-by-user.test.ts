/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users teammates list-by-user", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js users teammates list-by-user --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users teammates list-by-user

    Returns a list of assigned teammates for the user identified by \`USER_ID\`

    Options:
          --help      Show help                                            [boolean]
      -u, --user_id   The ID of the manager you are listing teammates for.[required]
      -p, --page      The page number to use in pagination. Use \`all\` to retrieve al
                      l pages.
      -e, --per_page  The number of records to return per page. Can range between 1
                      and 2000.
      -f, --fields    Comma separated list of fields to display in the output.
      -o, --output    The output format: json, table"
  `);
});