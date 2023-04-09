/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices list", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices list --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices list

    Returns a list of your invoices

    Options:
          --help           Show help                                       [boolean]
      -c, --client_id      Only return invoices belonging to the client with the giv
                           en ID.
      -p, --project_id     Only return invoices associated with the project with the
                            given ID.
      -u, --updated_since  Only return invoices that have been updated since the giv
                           en date and time.
      -f, --from           Only return invoices with an issue_date on or after the g
                           iven date.
      -t, --to             Only return invoices with an issue_date on or before the
                           given date.
      -s, --state          Only return invoices with a state matching the value prov
                           ided. Options: draft, open, paid, or closed.
      -a, --page           The page number to use in pagination. Use \`all\` to retrie
                           ve all pages.
      -e, --per_page       The number of records to return per page. Can range bet
                           ween 1 and 2000.
      -i, --fields         Comma separated list of fields to display in the output.
      -o, --output         The output format: json, table"
  `);
});