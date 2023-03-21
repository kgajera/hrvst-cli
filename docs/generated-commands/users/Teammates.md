# User Teammates

undefined

## List all assigned teammates

Returns a list of assigned teammates for the user identified by `USER_ID`. The `USER_ID` must belong to a user that is a Manager, if not, a `422 Unprocessable Entity` status code will be returned.

The response contains an object with a `teammates` property that contains an array of up to `per_page` teammates. Each entry in the array is a separate teammate object. If no more teammates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your teammates.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/teammates/#list-all-assigned-teammates-for-a-specific-user)

```
hrvst users teammates list-by-user
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--user_id`  | The ID of the manager you are listing teammates for.                    | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Update a user's assigned teammates

Updates the the assigned teammates for a specific user. Returns list of assigned teammates and a `200 OK` response code if the call succeeded. The `USER_ID` must belong to a user that is a Manager, if not, a `422 Unprocessable Entity` status code will be returned.

Adding teammates for the first time will add the `people_manager` [access role](https://help.getharvest.com/api-v2/users-api/users/users/#access-roles) to the Manager. Any IDs not included in the `teammate_ids` that are currently assigned will be unassigned from the Manager. Use an empty array to unassign all users. This will also remove the `people_manager` access role from the Manager.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/teammates/#update-a-users-assigned-teammates)

```
hrvst users teammates update
```

| Option             | Description                                                             | Required |
| ------------------ | ----------------------------------------------------------------------- | -------- |
| `--user_id`        | The ID of the Manager you are listing teammates for.                    | true     |
| `--teammate_ids[]` | ID of user you want to assign to the Manager.                           | true     |
| `--page`           | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page`       | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`         | Comma separated list of fields to display in the output.                | false    |
| `--output`         | The output format: json, table                                          | false    |
