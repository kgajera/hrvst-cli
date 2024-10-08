/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst tasks create", async () => {
  const { stdout } = await execaCommand("node dist/cli.js tasks create --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js tasks create

    Creates a new task object

    Options:
          --help                 Show help                                 [boolean]
      -n, --name                 The name of the task.                    [required]
      -b, --billable_by_default  Used in determining whether default tasks should be
                                  marked billable when creating a new project. Defau
                                 lts to true
      -d, --default_hourly_rate  The default hourly rate to use for this task when i
                                 t is added to a project. Defaults to 0.
      -i, --is_default           Whether this task should be automatically added to
                                 future projects. Defaults to false.
      -s, --is_active            Whether this task is active or archived. Defaults t
                                 o true.
      -f, --fields               Comma separated list of fields to display in the ou
                                 tput.
      -o, --output               The output format: json, table"
  `);
});
