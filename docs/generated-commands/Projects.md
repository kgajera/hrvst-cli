# Projects

Information pertaining to retrieving, creating, editing, and deleting projects. Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/)

## List all projects

Returns a list of your projects. The projects are returned sorted by creation date, with the most recently created projects appearing first.

The response contains an object with a `projects` property that contains an array of up to `per_page projects`. Each entry in the array is a separate project object. If no more projects are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your projects.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/#list-all-projects)

```
hrvst projects list
```

| Option            | Description                                                                                                                                                                                         | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active projects and false to return inactive projects.                                                                                                                     | false    |
| `--client_id`     | Only return projects belonging to the client with the given ID.                                                                                                                                     | false    |
| `--updated_since` | Only return projects that have been updated since the given date and time.                                                                                                                          | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |

## Retrieve a specific project

Retrieves the project with the given ID. Returns a project object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/#retrieve-a-project)

```
hrvst projects get
```

| Option         | Description                              | Required |
| -------------- | ---------------------------------------- | -------- |
| `--project_id` | The ID of the project you're retrieving. | true     |

## Create a project

Creates a new project object. Returns a project object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/#create-a-project)

```
hrvst projects create
```

| Option                                  | Description                                                                                                      | Required |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id`                           | The ID of the client to associate this project with.                                                             | true     |
| `--name`                                | The name of the project.                                                                                         | true     |
| `--is_billable`                         | Whether the project is billable or not.                                                                          | true     |
| `--bill_by`                             | The method by which the project is invoiced. Options: Project, Tasks, People, or none.                           | true     |
| `--budget_by`                           | The method by which the project is budgeted. Options, project, project_cost, task, task_fees, person, or none.   | true     |
| `--is_active`                           | Whether the project is active or archived. Defaults to true                                                      | false    |
| `--is_fixed_fee`                        | Whether the project is a fixed-fee project or not.                                                               | false    |
| `--hourly_rate`                         | Rate for projects billed by Project Hourly Rate.                                                                 | false    |
| `--budget`                              | The budget in hours for the project when budgeting by time.                                                      | false    |
| `--budget_is_monthly`                   | Option to have the budget reset every month. Defaults to false.                                                  | false    |
| `--notify_when_over_budget`             | Whether project managers should be notified when the project goes over budget. Defaults to false.                | false    |
| `--over_budget_notification_percentage` | Percentage value used to trigger over budget email alerts. Example: use 10.0 for 10.0%.                          | false    |
| `--show_budget_to_all`                  | Option to show project budget to all employees. Does not apply to Total Project Fee projects. Defaults to false. | false    |
| `--cost_budget`                         | The monetary budget for the project when budgeting by money.                                                     | false    |
| `--cost_budget_include_expenses`        | Option for budget of Total Project Fees projects to include tracked expenses. Defaults to false.                 | false    |
| `--fee`                                 | The amount you plan to invoice for the project. Only used by fixed-fee projects.                                 | false    |
| `--notes`                               | Notes about the project.                                                                                         | false    |
| `--starts_on`                           | Date the project was started.                                                                                    | false    |
| `--ends_on`                             | Date the project will end.                                                                                       | false    |

## Update a project

Updates the specific project by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a project object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/#update-a-project)

```
hrvst projects update
```

| Option                                  | Description                                                                                                      | Required |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`                          | The ID of the project you're retrieving.                                                                         | true     |
| `--client_id`                           | The ID of the client to associate this project with.                                                             | false    |
| `--name`                                | The name of the project.                                                                                         | false    |
| `--is_billable`                         | Whether the project is billable or not.                                                                          | false    |
| `--bill_by`                             | The method by which the project is invoiced. Options: Project, Tasks, People, or none.                           | false    |
| `--budget_by`                           | The method by which the project is budgeted. Options, project, project_cost, task, task_fees, person, or none.   | false    |
| `--is_active`                           | Whether the project is active or archived. Defaults to true                                                      | false    |
| `--is_fixed_fee`                        | Whether the project is a fixed-fee project or not.                                                               | false    |
| `--hourly_rate`                         | Rate for projects billed by Project Hourly Rate.                                                                 | false    |
| `--budget`                              | The budget in hours for the project when budgeting by time.                                                      | false    |
| `--budget_is_monthly`                   | Option to have the budget reset every month. Defaults to false.                                                  | false    |
| `--notify_when_over_budget`             | Whether project managers should be notified when the project goes over budget. Defaults to false.                | false    |
| `--over_budget_notification_percentage` | Percentage value used to trigger over budget email alerts. Example: use 10.0 for 10.0%.                          | false    |
| `--show_budget_to_all`                  | Option to show project budget to all employees. Does not apply to Total Project Fee projects. Defaults to false. | false    |
| `--cost_budget`                         | The monetary budget for the project when budgeting by money.                                                     | false    |
| `--cost_budget_include_expenses`        | Option for budget of Total Project Fees projects to include tracked expenses. Defaults to false.                 | false    |
| `--fee`                                 | The amount you plan to invoice for the project. Only used by fixed-fee projects.                                 | false    |
| `--notes`                               | Notes about the project.                                                                                         | false    |
| `--starts_on`                           | Date the project was started.                                                                                    | false    |
| `--ends_on`                             | Date the project will end.                                                                                       | false    |

## Delete a project

Deletes a project and any time entries or expenses tracked to it. However, invoices associated with the project will not be deleted. If you don’t want the project’s time entries and expenses to be deleted, you should archive the project instead.

[Link to documentation](https://help.getharvest.com/api-v2/projects-api/projects/projects/#delete-a-project)

```
hrvst projects delete
```

| Option         | Description                            | Required |
| -------------- | -------------------------------------- | -------- |
| `--project_id` | The ID of the project you're deleting. | true     |
