/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst reports expense-reports clients-expense-report", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js reports expense-reports clients-expense-report --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js reports expense-reports clients-expense-report

    Clients Expense Report shows expense totals for each client where expenses are p
    resent for a given timeframe

    Options:
          --help      Show help                                            [boolean]
      -f, --from      Only report on expenses with a spent_date on or after the give
                      n date.                                             [required]
      -t, --to        Only report on expenses with a spent_date on or before the giv
                      en date.                                            [required]
      -p, --page      The page number to use in pagination. Use \`all\` to retrieve al
                      l pages.
      -e, --per_page  The number of records to return per page. Can range between 1
                       and 2000.
      -i, --fields    Comma separated list of fields to display in the output.
      -o, --output    The output format: json, table"
  `);
});
