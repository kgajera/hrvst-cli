# Users

Admin permissions required, except when retrieving the currently authenticated user.

## Retrieve the currently authenticated user

Retrieves the currently authenticated user. Returns a user object and a `200 OK` response code.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#retrieve-the-currently-authenticated-user)

```
hrvst users me
```

| Option     | Description                                              | Required |
| ---------- | -------------------------------------------------------- | -------- |
| `--fields` | Comma separated list of fields to display in the output. | false    |
| `--output` | The output format: json, table                           | false    |

## List all users

Returns a list of your users. The users are returned sorted by creation date, with the most recently created users appearing first.

The response contains an object with a `users` property that contains an array of up to `per_page` users. Each entry in the array is a separate user object. If no more users are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your users.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#list-all-users)

```
hrvst users list
```

| Option            | Description                                                               | Required |
| ----------------- | ------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active users and false to return inactive users. | false    |
| `--updated_since` | Only return users that have been updated since the given date and time.   | false    |
| `--page`          | The page number to use in pagination. Use `all` to retrieve all pages.    | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 2000.   | false    |
| `--fields`        | Comma separated list of fields to display in the output.                  | false    |
| `--output`        | The output format: json, table                                            | false    |

## Retrieve a specific user

Retrieves the user with the given ID. Returns a user object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#retrieve-a-user)

```
hrvst users get
```

| Option      | Description                                              | Required |
| ----------- | -------------------------------------------------------- | -------- |
| `--user_id` | The ID of the user you're retrieving.                    | true     |
| `--fields`  | Comma separated list of fields to display in the output. | false    |
| `--output`  | The output format: json, table                           | false    |

## Create a user

Creates a new user object. Returns a user object and a `201 Created` response code if the call succeeded.

### Access Roles

To set permissions for a user, use the `access_roles` parameter. A user must be one of the following: `member`, `manager`, or `administrator`.

- If no `access_role` parameter is sent, a user defaults to ‘member’.
- If a user is a `manger` they can have other access roles set for more specific permissions in Harvest.
- The role of `people_manager` is determined by whether the user has teammates assigned to them, which can be added through the teammates api. If you downgrade a People Manager’s access role to Member, they will no longer be a People Manager and their assigned teammates will be removed.

| **Access Role Name** | **Description**                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `administrator`      | For users who need the most control to manage your account. Administrators can see and do everything.                                                                                                     |
| `manager`            | For users who need more access to people and project reports. Managers can track time and expenses, and edit, approve, and run reports for all time and expenses tracked to selected projects and people. |
| `member`             | For users who just need to track time and expenses.                                                                                                                                                       |

| **Additional Manager Access Role Names** | **Description**                                                                                                                                      |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project_creator`                        | User can create projects, and edit projects that they manage.                                                                                        |
| `billable_rates_manager`                 | User can see billable rates and amounts for projects and people they manage.                                                                         |
| `managed_projects_invoice_drafter`       | User can create and edit draft invoices for projects they manage.                                                                                    |
| `managed_projects_invoice_manager`       | User can send and fully manage all invoices for projects they manage (record payments, edit non-drafts, send reminders and thank-yous, delete, etc). |
| `client_and_task_manager`                | User can create and edit all clients and tasks on the account.                                                                                       |
| `time_and_expenses_manager`              | User can create and edit time and expenses for people and projects they manage.                                                                      |
| `estimates_manager`                      | User can create and edit all estimates on the account.                                                                                               |

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#create-a-user)

```
hrvst users create
```

| Option                                | Description                                                                               | Required |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | -------- |
| `--first_name`                        | The first name of the user.                                                               | true     |
| `--last_name`                         | The last name of the user.                                                                | true     |
| `--email`                             | The email address of the user.                                                            | true     |
| `--telephone`                         | The telephone number for the user.                                                        | false    |
| `--timezone`                          | The user’s timezone. Defaults to the company’s timezone.                                  | false    |
| `--has_access_to_all_future_projects` | Whether the user should be automatically added to future projects.                        | false    |
| `--is_contractor`                     | Whether the user is a contractor or an employee.                                          | false    |
| `--is_active`                         | Whether the user is active or archived.                                                   | false    |
| `--weekly_capacity`                   | The number of hours per week this person is available to work in seconds.                 | false    |
| `--default_hourly_rate`               | The billable rate to use for this user when they are added to a project.                  | false    |
| `--cost_rate`                         | The cost rate to use for this user when calculating a project’s costs vs billable amount. | false    |
| `--roles[]`                           | Descriptive names of the business roles assigned to this person.                          | false    |
| `--access_roles[]`                    | Access Role(s) that determine the user’s permissions in Harvest.                          | false    |
| `--fields`                            | Comma separated list of fields to display in the output.                                  | false    |
| `--output`                            | The output format: json, table                                                            | false    |

## Update a user

Updates the specific user by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a user object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#update-a-user)

```
hrvst users update
```

| Option                                | Description                                                                               | Required |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | -------- |
| `--user_id`                           | The ID of the user you're updating.                                                       | true     |
| `--first_name`                        | The first name of the user.                                                               | false    |
| `--last_name`                         | The last name of the user.                                                                | false    |
| `--email`                             | The email address of the user.                                                            | false    |
| `--telephone`                         | The telephone number for the user.                                                        | false    |
| `--timezone`                          | The user’s timezone. Defaults to the company’s timezone.                                  | false    |
| `--has_access_to_all_future_projects` | Whether the user should be automatically added to future projects.                        | false    |
| `--is_contractor`                     | Whether the user is a contractor or an employee.                                          | false    |
| `--is_active`                         | Whether the user is active or archived.                                                   | false    |
| `--weekly_capacity`                   | The number of hours per week this person is available to work in seconds.                 | false    |
| `--default_hourly_rate`               | The billable rate to use for this user when they are added to a project.                  | false    |
| `--cost_rate`                         | The cost rate to use for this user when calculating a project’s costs vs billable amount. | false    |
| `--roles[]`                           | Descriptive names of the business roles assigned to this person.                          | false    |
| `--access_roles[]`                    | Access Role(s) that determine the user’s permissions in Harvest.                          | false    |
| `--fields`                            | Comma separated list of fields to display in the output.                                  | false    |
| `--output`                            | The output format: json, table                                                            | false    |

## Delete a user

Delete a user. Deleting a user is only possible if they have no time entries or expenses associated with them. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#delete-a-user)

```
hrvst users delete
```

| Option      | Description                                              | Required |
| ----------- | -------------------------------------------------------- | -------- |
| `--user_id` | The ID of the user you're deleting.                      | true     |
| `--fields`  | Comma separated list of fields to display in the output. | false    |
| `--output`  | The output format: json, table                           | false    |
