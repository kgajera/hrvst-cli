/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices item-categories update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices item-categories update --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices item-categories update

    Updates the specific invoice item category by setting the values of the paramete
    rs passed

    Options:
          --help                      Show help                            [boolean]
      -i, --invoice_item_category_id  The ID of the invoice item category you're upd
                                      ating.                              [required]
      -n, --name                      The name of the invoice item category.
      -f, --fields                    Comma separated list of fields to display in t
                                      he output.
      -o, --output                    The output format: json, table"
  `);
});