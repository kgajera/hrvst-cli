/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst roles delete", async () => {
  const { stdout } = await execaCommand("node dist/cli.js roles delete --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js roles delete

    Delete a role

    Options:
          --help     Show help                                             [boolean]
      -r, --role_id  The ID of the role you're updating.                  [required]
      -f, --fields   Comma separated list of fields to display in the output.
      -o, --output   The output format: json, table"
  `);
});
