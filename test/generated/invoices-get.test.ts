/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices get", async () => {
  const { stdout } = await execaCommand("node dist/cli.js invoices get --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices get

    Retrieves the invoice with the given ID

    Options:
          --help        Show help                                          [boolean]
      -i, --invoice_id  The ID of the invoice you're retrieving.          [required]
      -f, --fields      Comma separated list of fields to display in the output.
      -o, --output      The output format: json, table"
  `);
});
