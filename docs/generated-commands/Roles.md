# Roles

Information pertaining to retrieving, creating, editing, and deleting roles. Admin permissions and Team feature required.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/)

## List all roles

Returns a list of roles in the account. The roles are returned sorted by creation date, with the most recently created roles appearing first.

The response contains an object with a `roles` property that contains an array of up to `per_page` roles. Each entry in the array is a separate role object. If no more roles are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your roles.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/#list-all-roles)

```
hrvst roles list
```

| Option       | Description                                                                                                                                                                                         | Required |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--page`     | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |
| `--fields`   | Comma separated list of fields to display in console table output.                                                                                                                                  | false    |

## Retrieve a specific role

Retrieves the role with the given ID. Returns a role object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/#retrieve-a-role)

```
hrvst roles get
```

| Option      | Description                                                        | Required |
| ----------- | ------------------------------------------------------------------ | -------- |
| `--role_id` | The ID of the role you're retrieving.                              | true     |
| `--fields`  | Comma separated list of fields to display in console table output. | false    |

## Create a role

Creates a new role object. Returns a role object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/#create-a-role)

```
hrvst roles create
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--name`       |                                                                    | true     |
| `--user_ids[]` | The IDs of the users assigned to this role.                        | false    |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Update a role

Updates the specific role by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a role object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/#update-a-role)

```
hrvst roles update
```

| Option      | Description                                                        | Required |
| ----------- | ------------------------------------------------------------------ | -------- |
| `--role_id` | The ID of the role you're updating.                                | true     |
| `--name`    | The name of the role.                                              | false    |
| `--fields`  | Comma separated list of fields to display in console table output. | false    |

## Delete a role

Delete a role. Deleting a role will unlink it from any users it was assigned to. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/roles-api/roles/roles/#delete-a-role)

```
hrvst roles delete
```

| Option      | Description                                                        | Required |
| ----------- | ------------------------------------------------------------------ | -------- |
| `--role_id` | The ID of the role you're updating.                                | true     |
| `--fields`  | Comma separated list of fields to display in console table output. | false    |
