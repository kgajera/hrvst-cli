/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects user-assignments list-by-project", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects user-assignments list-by-project --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects user-assignments list-by-project

    Returns a list of user assignments for the project identified by PROJECT_ID

    Options:
          --help           Show help                                       [boolean]
      -p, --project_id     The ID of the project whose user assignments you're retri
                           eving.                                         [required]
      -u, --user_id        Only return user assignments belonging to the user with t
                           he given ID.
      -i, --is_active      Pass true to only return active user assignments and fals
                           e to return inactive user assignments.
      -d, --updated_since  Only return user assignments that have been updated since
                            the given date and time.
      -a, --page           The page number to use in pagination. Use \`all\` to retrie
                           ve all pages.
      -e, --per_page       The number of records to return per page. Can range betwe
                           en 1 and 2000.
      -f, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});
