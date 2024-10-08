/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst open api", async () => {
  const { stdout } = await execaCommand("node dist/cli.js open api --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js open api

    Harvest API V2 documentation

    Options:
      --help  Show help                                                    [boolean]"
  `);
});
