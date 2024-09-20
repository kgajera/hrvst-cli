/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users me", async () => {
  const { stdout } = await execaCommand("node dist/cli.js users me --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users me

    Retrieves the currently authenticated user

    Options:
          --help    Show help                                              [boolean]
      -f, --fields  Comma separated list of fields to display in the output.
      -o, --output  The output format: json, table"
  `);
});
