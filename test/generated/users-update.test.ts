/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users update", async () => {
  const { stdout } = await execaCommand("node dist/cli.js users update --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users update

    Updates the specific user by setting the values of the parameters passed

    Options:
          --help                               Show help                   [boolean]
      -u, --user_id                            The ID of the user you're updating.
                                                                          [required]
      -f, --first_name                         The first name of the user.
      -l, --last_name                          The last name of the user.
      -e, --email                              The email address of the user.
      -t, --telephone                          The telephone number for the user.
      -i, --timezone                           The user’s timezone. Defaults to the
                                               company’s timezone.
      -h, --has_access_to_all_future_projects  Whether the user should be automatica
                                               lly added to future projects.
      -s, --is_contractor                      Whether the user is a contractor or a
                                               n employee.
      -a, --is_active                          Whether the user is active or archive
                                               d.
      -w, --weekly_capacity                    The number of hours per week this per
                                               son is available to work in seconds.
      -d, --default_hourly_rate                The billable rate to use for this us
                                               er when they are added to a project.

      -c, --cost_rate                          The cost rate to use for this user w
                                               hen calculating a project’s costs vs
                                                billable amount.
      -r, --roles[]                            Descriptive names of the business rol
                                               es assigned to this person.
      -o, --access_roles[]                     Access Role(s) that determine the use
                                               r’s permissions in Harvest.
          --fields                             Comma separated list of fields to dis
                                               play in the output.
      -p, --output                             The output format: json, table"
  `);
});