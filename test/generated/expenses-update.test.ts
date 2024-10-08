/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst expenses update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js expenses update --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js expenses update

    Updates the specific expense by setting the values of the parameters passed

    Options:
          --help                 Show help                                 [boolean]
      -e, --expense_id           The ID of the expense you're updating.   [required]
      -p, --project_id           The ID of the project associated with this expense.
      -x, --expense_category_id  The ID of the expense category this expense is bein
                                 g tracked against.
      -s, --spent_date           Date the expense occurred.
      -u, --units                The quantity of units to use in calculating the tot
                                 al_cost of the expense.
      -t, --total_cost           The total amount of the expense.
      -n, --notes                Textual notes used to describe the expense.

      -b, --billable             Whether this expense is billable or not.
      -d, --delete_receipt       Whether an attached expense receipt should be delet
                                 ed. Pass true to delete the expense receipt.
      -f, --fields               Comma separated list of fields to display in the ou
                                 tput.
      -o, --output               The output format: json, table"
  `);
});
