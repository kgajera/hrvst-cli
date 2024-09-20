/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst expenses create", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js expenses create --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js expenses create

    Creates a new expense object

    Options:
          --help                 Show help                                 [boolean]
      -p, --project_id           The ID of the project associated with this expense.
                                                                          [required]
      -e, --expense_category_id  The ID of the expense category this expense is bein
                                 g tracked against.                       [required]
      -s, --spent_date           Date the expense occurred.               [required]
      -u, --user_id              The ID of the user associated with this expense. De
                                 faults to the ID of the currently authenticated use
                                 r.
      -n, --units                The quantity of units to use in calculating the tot
                                 al_cost of the expense.
      -t, --total_cost           The total amount of the expense.
      -o, --notes                Textual notes used to describe the expense.

      -b, --billable             Whether this expense is billable or not. Defaults t
                                 o true.
      -f, --fields               Comma separated list of fields to display in the ou
                                 tput.
          --output               The output format: json, table"
  `);
});
