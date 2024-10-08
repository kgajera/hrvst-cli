/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices line-items delete", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices line-items delete --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices line-items delete

    Delete a line item from an invoice

    Options:
          --help                   Show help                               [boolean]
      -i, --invoice_id             The ID of the invoice that contains the line item
                                    you're deleting.                      [required]
      -l, --line_items[0]id        The ID of the line item you want to delete.
                                                                          [required]
      -n, --line_items[0]_destroy  Gives the command to delete the line item.
                                                                          [required]
      -f, --fields                 Comma separated list of fields to display in the
                                   output.
      -o, --output                 The output format: json, table"
  `);
});
