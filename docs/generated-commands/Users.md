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
| `--fields` | Comma separated list of fields to display in the output. |          |
| `--output` | The output format: json, table                           |          |

## List all users

Returns a list of your users. The users are returned sorted by creation date, with the most recently created users appearing first.

The response contains an object with a `users` property that contains an array of up to `per_page` users. Each entry in the array is a separate user object. If no more users are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your users.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#list-all-users)

```
hrvst users list
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active users and false to return inactive users.                                                                                                              | false    |
| `--updated_since` | Only return users that have been updated since the given date and time.                                                                                                                | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                                                                                                               |          |
| `--output`        | The output format: json, table                                                                                                                                                         |          |

## Retrieve a specific user

Retrieves the user with the given ID. Returns a user object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#retrieve-a-user)

```
hrvst users get
```

| Option      | Description                                              | Required |
| ----------- | -------------------------------------------------------- | -------- |
| `--user_id` | The ID of the user you're retrieving.                    | true     |
| `--fields`  | Comma separated list of fields to display in the output. |          |
| `--output`  | The output format: json, table                           |          |

## Create a user

Creates a new user object. Returns a user object and a `201 Created` response code if the call succeeded.

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
| `--is_admin`                          | Whether the user has admin permissions.                                                   | false    |
| `--is_project_manager`                | Whether the user has project manager permissions. Defaults to false.                      | false    |
| `--can_see_rates`                     | Whether the user can see billable rates on projects. Only applicable to project managers. | false    |
| `--can_create_projects`               | Whether the user can create projects. Only applicable to project managers.                | false    |
| `--can_create_invoices`               | Whether the user can create invoices. Only applicable to project managers.                | false    |
| `--is_active`                         | Whether the user is active or archived.                                                   | false    |
| `--weekly_capacity`                   | The number of hours per week this person is available to work in seconds.                 | false    |
| `--default_hourly_rate`               | The billable rate to use for this user when they are added to a project.                  | false    |
| `--cost_rate`                         | The cost rate to use for this user when calculating a project’s costs vs billable amount. | false    |
| `--fields`                            | Comma separated list of fields to display in the output.                                  |          |
| `--output`                            | The output format: json, table                                                            |          |

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
| `--is_admin`                          | Whether the user has admin permissions.                                                   | false    |
| `--is_project_manager`                | Whether the user has project manager permissions. Defaults to false.                      | false    |
| `--can_see_rates`                     | Whether the user can see billable rates on projects. Only applicable to project managers. | false    |
| `--can_create_projects`               | Whether the user can create projects. Only applicable to project managers.                | false    |
| `--can_create_invoices`               | Whether the user can create invoices. Only applicable to project managers.                | false    |
| `--is_active`                         | Whether the user is active or archived.                                                   | false    |
| `--weekly_capacity`                   | The number of hours per week this person is available to work in seconds.                 | false    |
| `--default_hourly_rate`               | The billable rate to use for this user when they are added to a project.                  | false    |
| `--cost_rate`                         | The cost rate to use for this user when calculating a project’s costs vs billable amount. | false    |
| `--fields`                            | Comma separated list of fields to display in the output.                                  |          |
| `--output`                            | The output format: json, table                                                            |          |

## Delete a user

Delete a user. Deleting a user is only possible if they have no time entries or expenses associated with them. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/users/#delete-a-user)

```
hrvst users delete
```

| Option      | Description                                              | Required |
| ----------- | -------------------------------------------------------- | -------- |
| `--user_id` | The ID of the user you're deleting.                      | true     |
| `--fields`  | Comma separated list of fields to display in the output. |          |
| `--output`  | The output format: json, table                           |          |
