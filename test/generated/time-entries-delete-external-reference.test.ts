/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst time-entries delete-external-reference", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js time-entries delete-external-reference --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js time-entries delete-external-reference

    Delete a time entry’s external reference

    Options:
          --help           Show help                                       [boolean]
      -t, --time_entry_id  The ID of the time entry whose external reference you're
                           deleting.                                      [required]
      -f, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});
