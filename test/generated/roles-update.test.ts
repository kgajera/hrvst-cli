/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst roles update", async () => {
  const { stdout } = await execaCommand("node dist/cli.js roles update --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js roles update

    Updates the specific role by setting the values of the parameters passed

    Options:
          --help     Show help                                             [boolean]
      -r, --role_id  The ID of the role you're updating.                  [required]
      -n, --name     The name of the role.
      -f, --fields   Comma separated list of fields to display in the output.
      -o, --output   The output format: json, table"
  `);
});