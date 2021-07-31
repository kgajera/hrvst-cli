# Time Entries

Information pertaining to retrieving, creating, editing, and deleting time entries.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/)

## List all time entries

Returns a list of your time entries. The time entries are returned sorted by `spent_at` date. At this time, the sort option can’t be customized.

The response contains an object with a `time_entries` property that contains an array of up to `per_page` time entries. Each entry in the array is a separate time entry object. If no more time entries are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your time entries.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#list-all-time-entries)

```
hrvst time-entries list
```

| Option                    | Description                                                                                                                                                                                         | Required |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--user_id`               | Only return time entries belonging to the user with the given ID.                                                                                                                                   | false    |
| `--client_id`             | Only return time entries belonging to the client with the given ID.                                                                                                                                 | false    |
| `--task_id`               | Only return time entries belonging to the task with the given ID.                                                                                                                                   | false    |
| `--external_reference_id` | Only return time entries with the given external_reference ID.                                                                                                                                      | false    |
| `--is_billed`             | Pass true to only return time entries that have been invoiced and false to return time entries that have not been invoiced.                                                                         | false    |
| `--is_running`            | Pass true to only return running time entries and false to return non-running time entries.                                                                                                         | false    |
| `--updated_since`         | Only return time entries that have been updated since the given date and time.                                                                                                                      | false    |
| `--from`                  | Only return time entries with a spent_date on or after the given date.                                                                                                                              | false    |
| `--to`                    | Only return time entries with a spent_date on or before the given date.                                                                                                                             | false    |
| `--page`                  | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page`              | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |

## Retrieve a specific time entry

Retrieves the time entry with the given ID. Returns a time entry object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#retrieve-a-time-entry)

```
hrvst time-entries get
```

| Option            | Description                                 | Required |
| ----------------- | ------------------------------------------- | -------- |
| `--time_entry_id` | The ID of the time entry you're retrieving. | true     |

## Create a time entry via duration

Creates a new time entry object. Returns a time entry object and a `201 Created` response code if the call succeeded.

You should only use this method to create time entries when your account is configured to track time via duration. You can verify this by visiting the Settings page in your Harvest account or by checking if `wants_timestamp_timers` is false in the [Company API.](https://help.getharvest.com/api-v2/company-api/company/company/)

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#create-a-time-entry-via-duration)

```
hrvst time-entries create
```

| Option                            | Description                                                                                                                                                                                                                 | Required |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`                    | The ID of the project to associate with the time entry.                                                                                                                                                                     | true     |
| `--task_id`                       | The ID of the task to associate with the time entry.                                                                                                                                                                        | true     |
| `--spent_date`                    | The ISO 8601 formatted date on which the time entry was spent.                                                                                                                                                              | true     |
| `--user_id`                       | The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.                                                                                                                     | false    |
| `--hours`                         | The current amount of time tracked. If provided, the time entry will be created with the specified hours and is_running will be set to false. If not provided, hours will be set to 0.0 and is_running will be set to true. | false    |
| `--notes`                         | Any notes to be associated with the time entry.                                                                                                                                                                             | false    |
| `--external_reference[id]`        | The ID of the service's equivalent of a task, card, etc.                                                                                                                                                                    | false    |
| `--external_reference[group_id]`  | The ID of the service's equivalent of a project, board, etc.                                                                                                                                                                | false    |
| `--external_reference[permalink]` | The URL of where the time is being tracked.                                                                                                                                                                                 | false    |

## Create a time entry via start and end time

Creates a new time entry object. Returns a time entry object and a `201 Created` response code if the call succeeded.

You should only use this method to create time entries when your account is configured to **track time via start and end time**. You can verify this by visiting the **Settings** page in your Harvest account or by checking if `wants_timestamp_timers` is true in the [Company API.](https://help.getharvest.com/api-v2/company-api/company/company/)

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#create-a-time-entry-via-start-and-end-time)

```
hrvst time-entries create
```

| Option                            | Description                                                                                                              | Required |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| `--project_id`                    | The ID of the project to associate with the time entry.                                                                  | true     |
| `--task_id`                       | The ID of the task to associate with the time entry.                                                                     | true     |
| `--spent_date`                    | The ISO 8601 formatted date the time entry was spent.                                                                    | true     |
| `--user_id`                       | The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.                  | false    |
| `--started_time`                  | The time the entry started. Defaults to the current time. Example: “8:00am”.                                             | true     |
| `--ended_time`                    | The time the entry ended. If provided, is_running will be set to false. If not provided, is_running will be set to true. | true     |
| `--notes`                         | Any notes to be associated with the time entry.                                                                          | false    |
| `--external_reference[id]`        | The ID of the service's equivalent of a task, card, etc.                                                                 | false    |
| `--external_reference[group_id]`  | The ID of the service's equivalent of a project, board, etc.                                                             | false    |
| `--external_reference[permalink]` | The URL of where the time is being tracked.                                                                              | false    |

## Restart a stopped time entry

Restarting a time entry is only possible if it isn’t currently running. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#restart-a-stopped-time-entry)

```
hrvst time-entries restart
```

| Option            | Description                                 | Required |
| ----------------- | ------------------------------------------- | -------- |
| `--time_entry_id` | The ID of the time entry you're restarting. | true     |

## Stop a running time entry

Stopping a time entry is only possible if it’s currently running. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#stop-a-running-time-entry)

```
hrvst time-entries stop
```

| Option            | Description                               | Required |
| ----------------- | ----------------------------------------- | -------- |
| `--time_entry_id` | The ID of the time entry you're stopping. | true     |

## Update a time entry

Updates the specific time entry by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a time entry object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#update-a-time-entry)

```
hrvst time-entries update
```

| Option                            | Description                                                                  | Required |
| --------------------------------- | ---------------------------------------------------------------------------- | -------- |
| `--time_entry_id`                 | The ID of the time entry you're updating.                                    | true     |
| `--project_id`                    | The ID of the project to associate with the time entry.                      | false    |
| `--task_id`                       | The ID of the task to associate with the time entry.                         | false    |
| `--spent_date`                    | The ISO 8601 formatted date the time entry was spent.                        | false    |
| `--started_time`                  | The time the entry started. Defaults to the current time. Example: “8:00am”. | false    |
| `--ended_time`                    | The time the entry ended.                                                    | false    |
| `--hours`                         | The current amount of time tracked.                                          | false    |
| `--notes`                         | Any notes to be associated with the time entry.                              | false    |
| `--external_reference[id]`        | The ID of the service's equivalent of a task, card, etc.                     | false    |
| `--external_reference[group_id]`  | The ID of the service's equivalent of a project, board, etc.                 | false    |
| `--external_reference[permalink]` | The URL of where the time is being tracked.                                  | false    |

## Delete a time entry

Delete a time entry. Deleting a time entry is only possible if it’s not closed and the associated project and task haven’t been archived. However, Admins can delete closed entries. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#delete-a-time-entrys-external-reference)

```
hrvst time-entries delete
```

| Option            | Description                               | Required |
| ----------------- | ----------------------------------------- | -------- |
| `--time_entry_id` | The ID of the time entry you're deleting. | true     |

## Delete a time entry's external reference.

Delete a time entry’s external reference. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/#delete-a-time-entrys-external-reference)

```
hrvst time-entries delete
```

| Option            | Description                                                        | Required |
| ----------------- | ------------------------------------------------------------------ | -------- |
| `--time_entry_id` | The ID of the time entry whose external reference you're deleting. | true     |
