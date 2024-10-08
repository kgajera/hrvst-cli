/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects user-assignments get", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects user-assignments get --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects user-assignments get

    Retrieves the user assignment with the given ID

    Options:
          --help                Show help                                  [boolean]
      -p, --project_id          The ID of the project that contains the user assignm
                                ent you're retrieving.                    [required]
      -u, --user_assignment_id  The ID of the user assignment you're retrieving.
                                                                          [required]
      -f, --fields              Comma separated list of fields to display in the out
                                put.
      -o, --output              The output format: json, table"
  `);
});
