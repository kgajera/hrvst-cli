/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst time-entries restart", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js time-entries restart --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js time-entries restart

    Restarting a time entry is only possible if it isn’t currently running

    Options:
          --help           Show help                                       [boolean]
      -t, --time_entry_id  The ID of the time entry you're restarting.    [required]
      -f, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});
