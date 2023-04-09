/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst estimates messages mark-draft-estimate-as-sent", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js estimates messages mark-draft-estimate-as-sent --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js estimates messages mark-draft-estimate-as-sent

    Creates a new estimate message object and marks the estimate as sent

    Options:
          --help          Show help                                        [boolean]
      -e, --estimates_id  The ID of the estimate you're marking as sent.  [required]
      -v, --event_type    Pass “send” to mark the estimate as sent.       [required]
      -f, --fields        Comma separated list of fields to display in the output.
      -o, --output        The output format: json, table"
  `);
});