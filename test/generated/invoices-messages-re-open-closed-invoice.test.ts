/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices messages re-open-closed-invoice", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices messages re-open-closed-invoice --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices messages re-open-closed-invoice

    Creates a new invoice message object and re-opens a closed invoice

    Options:
          --help        Show help                                          [boolean]
      -i, --invoice_id  The ID of the invoice you're closing.             [required]
      -e, --event_type  Pass "re-open" to re-open the invoice             [required]
      -f, --fields      Comma separated list of fields to display in the output.
      -o, --output      The output format: json, table"
  `);
});
