/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users get", async () => {
  const { stdout } = await execaCommand("node dist/cli.js users get --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users get

    Retrieves the user with the given ID

    Options:
          --help     Show help                                             [boolean]
      -u, --user_id  The ID of the user you're retrieving.                [required]
      -f, --fields   Comma separated list of fields to display in the output.
      -o, --output   The output format: json, table"
  `);
});