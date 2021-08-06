# User Project Assignments

Admin permissions required, except when retrieving the currently authenticated user’s project assignments.

## List active project assignments

Returns a list of active project assignments for the user identified by `USER_ID`. The project assignments are returned sorted by creation date, with the most recently created project assignments appearing first.

The response contains an object with a `project_assignments` property that contains an array of up to `per_page` project assignments. Each entry in the array is a separate project assignment object. If no more project assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your project assignments.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/project-assignments/#list-active-project-assignments)

```
hrvst users project-assignments list-by-user
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--user_id`       | The ID of the user whose project assignments you're listing.                                                                                                                           | true     |
| `--updated_since` | Only return project assignments that have been updated since the given date and time.                                                                                                  | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`        | Comma separated list of fields to display in console table output.                                                                                                                     | false    |

## List active project assignments for the currently authenticated user

Returns a list of your active project assignments for the currently authenticated user. The project assignments are returned sorted by creation date, with the most recently created project assignments appearing first.

The response contains an object with a `project_assignments` property that contains an array of up to `per_page` project assignments. Each entry in the array is a separate project assignment object. If no more project assignments are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your project assignments.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/project-assignments/#list-active-project-assignments-for-the-currently-authenticated-user)

```
hrvst users project-assignments me
```

| Option       | Description                                                                                                                                                                            | Required |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--page`     | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`   | Comma separated list of fields to display in console table output.                                                                                                                     | false    |
