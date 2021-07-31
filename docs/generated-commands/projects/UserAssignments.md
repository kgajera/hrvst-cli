# Project User Assignments

Information pertaining to retrieving, creating, editing, and deleting user assignments. Admin or project manager permissions required. Project managers can only see user assignments of projects they manage.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/)

## List all user assignments

Returns a list of your projects user assignments, active and archived. The user assignments are returned sorted by creation date, with the most recently created user assignments appearing first.

The response contains an object with a `user_assignments` property that contains an array of up to `per_page` user assignments. Each entry in the array is a separate user assignment object. If no more user assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your user assignments.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#list-all-user-assignments)

```
hrvst projects user-assignments list
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active user assignments and false to return inactive user assignments.                                                                                        | false    |
| `--updated_since` | Only return user assignments that have been updated since the given date and time.                                                                                                     | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |

## List user assignments for a specific project

Returns a list of user assignments for the project identified by PROJECT_ID. The user assignments are returned sorted by creation date, with the most recently created user assignments appearing first.

The response contains an object with a `user_assignments` property that contains an array of up to `per_page` user assignments. Each entry in the array is a separate user assignment object. If no more user assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your user assignments.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#list-all-user-assignments-for-a-specific-project)

```
hrvst projects user-assignments list-by-project
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`    | The ID of the project whose user assignments you're retrieving.                                                                                                                        | true     |
| `--user_id`       | Only return user assignments belonging to the user with the given ID.                                                                                                                  | false    |
| `--is_active`     | Pass true to only return active user assignments and false to return inactive user assignments.                                                                                        | false    |
| `--updated_since` | Only return user assignments that have been updated since the given date and time.                                                                                                     | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |

## Retrieve a specific user assignment

Retrieves the user assignment with the given ID. Returns a user assignment object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#retrieve-a-user-assignment)

```
hrvst projects user-assignments get
```

| Option                 | Description                                                                | Required |
| ---------------------- | -------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that contains the user assignment you're retrieving. | true     |
| `--user_assignment_id` | The ID of the user assignment you're retrieving.                           | true     |

## Create a user assignment

Creates a new user assignment object. Returns a user assignment object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#create-a-user-assignment)

```
hrvst projects user-assignments create
```

| Option                 | Description                                                                                                                                                                                                                                              | Required |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that you're creating the user assignment for.                                                                                                                                                                                      | true     |
| `--user_id`            | The ID of the user to associate with the project.                                                                                                                                                                                                        | true     |
| `--is_active`          | Whether the user assignment is active or archived. Defaults to true.                                                                                                                                                                                     | false    |
| `--is_project_manager` | Determines if the user has project manager permissions for the project. Defaults to false for users with Regular User permissions and true for those with Project Managers or Administrator permissions.                                                 | false    |
| `--use_default_rates`  | Determines which billable rate(s) will be used on the project for this user when bill_by is People. When true, the project will use the user’s default billable rates. When false, the project will use the custom rate defined on this user assignment. | false    |
| `--hourly_rate`        | Rate used when the project’s bill_by is Tasks. Defaults to null when billing by task hourly rate, otherwise 0.                                                                                                                                           | false    |
| `--budget`             | Budget used when the project’s budget_by is task or task_fees.                                                                                                                                                                                           | false    |

## Update a user assignment

Updates the specific user assignment by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a user assignment object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#update-a-user-assignment)

```
hrvst projects user-assignments update
```

| Option                 | Description                                                                                                                                                                                                                                              | Required |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that contains the user assignment you're updating.                                                                                                                                                                                 | true     |
| `--user_assignment_id` | The ID of the user assignment you're updating.                                                                                                                                                                                                           | true     |
| `--is_active`          | Pass true to only return active user assignments and false to return inactive user assignments.                                                                                                                                                          | false    |
| `--is_project_manager` | Determines if the user has project manager permissions for the project.                                                                                                                                                                                  | false    |
| `--use_default_rates`  | Determines which billable rate(s) will be used on the project for this user when bill_by is People. When true, the project will use the user’s default billable rates. When false, the project will use the custom rate defined on this user assignment. | false    |
| `--hourly_rate`        | Custom rate used when the project’s bill_by is People and use_default_rates is false.                                                                                                                                                                    | false    |
| `--budget`             | Budget used when the project’s budget_by is person.                                                                                                                                                                                                      | false    |

## Delete a user assignment

Delete a user assignment. Deleting a user assignment is only possible if it has no time entries or expenses associated with it. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/#delete-a-user-assignment)

```
hrvst projects user-assignments delete
```

| Option                 | Description                                                              | Required |
| ---------------------- | ------------------------------------------------------------------------ | -------- |
| `--project_id`         | The ID of the project that contains the user assignment you're deleting. | true     |
| `--user_assignment_id` | The ID of the user assignment you're deleting.                           | true     |
