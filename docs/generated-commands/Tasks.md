# Tasks

Information pertaining to retrieving, creating, editing, and deleting tasks. Admin permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/)

## List all tasks

Returns a list of your tasks. The tasks are returned sorted by creation date, with the most recently created tasks appearing first.

The response contains an object with a `tasks` property that contains an array of up to `per_page` tasks. Each entry in the array is a separate task object. If no more tasks are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your tasks.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/#list-all-tasks)

```
hrvst tasks list
```

| Option            | Description                                                                                                                                                                                         | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active tasks and false to return inactive tasks.                                                                                                                           | false    |
| `--updated_since` | Only return tasks that have been updated since the given date and time.                                                                                                                             | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |

## Retrieve a specific task

Retrieves the task with the given ID. Returns a task object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/#retrieve-a-task)

```
hrvst tasks get
```

| Option      | Description                           | Required |
| ----------- | ------------------------------------- | -------- |
| `--task_id` | The ID of the task you're retrieving. | true     |

## Create a task

Creates a new task object. Returns a task object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/#create-a-task)

```
hrvst tasks create
```

| Option                  | Description                                                                                                       | Required |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| `--name`                | The name of the task.                                                                                             | true     |
| `--billable_by_default` | Used in determining whether default tasks should be marked billable when creating a new project. Defaults to true | false    |
| `--default_hourly_rate` | The default hourly rate to use for this task when it is added to a project. Defaults to 0.                        | false    |
| `--is_default`          | Whether this task should be automatically added to future projects. Defaults to false.                            | false    |
| `--is_active`           | Whether this task is active or archived. Defaults to true.                                                        | false    |

## Update a task

Updates the specific task by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a task object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/#update-a-task)

```
hrvst tasks update
```

| Option                  | Description                                                                                      | Required |
| ----------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `--task_id`             | The ID of the task you're updating.                                                              | true     |
| `--name`                | The name of the task.                                                                            | false    |
| `--billable_by_default` | Used in determining whether default tasks should be marked billable when creating a new project. | false    |
| `--default_hourly_rate` | The default hourly rate to use for this task when it is added to a project.                      | false    |
| `--is_default`          | Whether this task should be automatically added to future projects.                              | false    |
| `--is_active`           | Whether this task is active or archived.                                                         | false    |

## Delete a task

Delete a task. Deleting a task is only possible if it has no time entries associated with it. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/#delete-a-task)

```
hrvst tasks delete
```

| Option      | Description                         | Required |
| ----------- | ----------------------------------- | -------- |
| `--task_id` | The ID of the task you're deleting. | true     |
