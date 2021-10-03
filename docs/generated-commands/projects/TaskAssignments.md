# Project Task Assignments

Information pertaining to retrieving, creating, editing, and deleting task assignments. Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/)

## List all task assignments

Returns a list of your task assignments. The task assignments are returned sorted by creation date, with the most recently created task assignments appearing first.

The response contains an object with a `task_assignments` property that contains an array of up to `per_page` task assignments. Each entry in the array is a separate task assignment object. If no more task assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your task assignments.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#list-all-task-assignments)

```
hrvst projects task-assignments list
```

| Option            | Description                                                                                     | Required |
| ----------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active task assignments and false to return inactive task assignments. | false    |
| `--updated_since` | Only return task assignments that have been updated since the given date and time.              | false    |
| `--page`          | The page number to use in pagination. Use `all` to retrieve all pages.                          | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                          | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                        | false    |
| `--output`        | The output format: json, table                                                                  | false    |

## List task assignments for a specific project

Returns a list of your task assignments for the project identified by PROJECT_ID. The task assignments are returned sorted by creation date, with the most recently created task assignments appearing first.

The response contains an object with a `task_assignments` property that contains an array of up to `per_page` task assignments. Each entry in the array is a separate task assignment object. If no more task assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your task assignments.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#list-all-task-assignments-for-a-specific-project)

```
hrvst projects task-assignments list-by-project
```

| Option           | Description                                                                                     | Required |
| ---------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `--project_id`   | The ID of the project that contains the task assignments you're retrieving.                     | true     |
| `--is_active`    | Pass true to only return active task assignments and false to return inactive task assignments. | false    |
| `--update_since` | Only return task assignments that have been updated since the given date and time.              | false    |
| `--page`         | The page number to use in pagination. Use `all` to retrieve all pages.                          | false    |
| `--per_page`     | The number of records to return per page. Can range between 1 and 100.                          | false    |
| `--fields`       | Comma separated list of fields to display in the output.                                        | false    |
| `--output`       | The output format: json, table                                                                  | false    |

## Retrieve a specific task assignment

Retrieves the task assignment with the given ID. Returns a task assignment object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#retrieve-a-task-assignment)

```
hrvst projects task-assignments get
```

| Option                 | Description                                                                                     | Required |
| ---------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that contains the task assignment you're retrieving.                      | true     |
| `--task_assignment_id` | The ID of the task assignment you're retrieving.                                                | true     |
| `--is_active`          | Pass true to only return active task assignments and false to return inactive task assignments. | false    |
| `--updated_since`      | Only return task assignments that have been updated since the given date and time.              | false    |
| `--page`               | The page number to use in pagination. Use `all` to retrieve all pages.                          | false    |
| `--per_page`           | The number of records to return per page. Can range between 1 and 100.                          | false    |
| `--fields`             | Comma separated list of fields to display in the output.                                        | false    |
| `--output`             | The output format: json, table                                                                  | false    |

## Create a task assignment

Creates a new task assignment object. Returns a task assignment object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#create-a-task-assignment)

```
hrvst projects task-assignments create
```

| Option          | Description                                                                                                    | Required |
| --------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`  | The ID of the project that you're creating the task assignment for.                                            | true     |
| `--task_id`     | The ID of the task to associate with the project.                                                              | true     |
| `--is_active`   | Whether the task assignment is active or archived. Defaults to true.                                           | false    |
| `--billable`    | Whether the task assignment is billable or not. Defaults to false.                                             | false    |
| `--hourly_rate` | Rate used when the project’s bill_by is Tasks. Defaults to null when billing by task hourly rate, otherwise 0. | false    |
| `--budget`      | Budget used when the project’s budget_by is task or task_fees.                                                 | false    |
| `--fields`      | Comma separated list of fields to display in the output.                                                       | false    |
| `--output`      | The output format: json, table                                                                                 | false    |

## Update a task assignment

Updates the specific task assignment by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a task assignment object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#update-a-task-assignment)

```
hrvst projects task-assignments update
```

| Option                 | Description                                                                                     | Required |
| ---------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that contains the task assignments you're updating.                       | true     |
| `--task_assignment_id` | The ID of the task assignment you're updating.                                                  | true     |
| `--is_active`          | Pass true to only return active task assignments and false to return inactive task assignments. | false    |
| `--update_since`       | Only return task assignments that have been updated since the given date and time.              | false    |
| `--page`               | The page number to use in pagination. Use `all` to retrieve all pages.                          | false    |
| `--per_page`           | The number of records to return per page. Can range between 1 and 100.                          | false    |
| `--fields`             | Comma separated list of fields to display in the output.                                        | false    |
| `--output`             | The output format: json, table                                                                  | false    |

## Delete a task assignment

Delete a task assignment. Deleting a task assignment is only possible if it has no time entries associated with it. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/#delete-a-task-assignment)

```
hrvst projects task-assignments delete
```

| Option                 | Description                                                               | Required |
| ---------------------- | ------------------------------------------------------------------------- | -------- |
| `--project_id`         | The ID of the project that contains the task assignments you're deleting. | true     |
| `--task_assignment_id` | The ID of the task assignment you're deleting.                            | true     |
| `--fields`             | Comma separated list of fields to display in the output.                  | false    |
| `--output`             | The output format: json, table                                            | false    |
