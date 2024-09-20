/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects user-assignments update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects user-assignments update --help",
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects user-assignments update

    Updates the specific user assignment by setting the values of the parameters pas
    sed

    Options:
          --help                Show help                                  [boolean]
      -p, --project_id          The ID of the project that contains the user assignm
                                ent you're updating.                      [required]
      -u, --user_assignment_id  The ID of the user assignment you're updating.
                                                                          [required]
      -i, --is_active           Pass true to only return active user assignments and
                                 false to return inactive user assignments.
      -s, --is_project_manager  Determines if the user has project manager permissio
                                ns for the project.
      -e, --use_default_rates   Determines which billable rate(s) will be used on th
                                e project for this user when bill_by is People. When
                                 true, the project will use the user’s default billa
                                ble rates. When false, the project will use the cust
                                om rate defined on this user assignment.
      -h, --hourly_rate         Custom rate used when the project’s bill_by is Peopl
                                e and use_default_rates is false.
      -b, --budget              Budget used when the project’s budget_by is person.
      -f, --fields              Comma separated list of fields to display in the out
                                put.
      -o, --output              The output format: json, table"
  `);
});
