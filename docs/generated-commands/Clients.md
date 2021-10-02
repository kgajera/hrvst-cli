# Clients

Information pertaining to retrieving, created, editing, and deleting clients.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/)

[Supported currencies](https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/)

## List all clients

Returns a list of your clients. The clients are returned sorted by creation date, with the most recently created clients appearing first.

The response contains an object with a `clients` property that contains an array of up to `per_page` clients. Each entry in the array is a separate client object. If no more clients are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your clients.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/#list-all-clients)

```
hrvst clients list
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`     | Pass true to only return active clients and false to return inactive clients.                                                                                                          | false    |
| `--updated_since` | Only return clients that have been updated since the given date and time.                                                                                                              | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                                                                                                               |          |
| `--output`        | The output format: json, table                                                                                                                                                         |          |

## Retrieve a specific client

Retrieves the client with the given ID. Returns a client object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/#retrieve-a-client)

```
hrvst clients get
```

| Option        | Description                                              | Required |
| ------------- | -------------------------------------------------------- | -------- |
| `--client_id` | The ID of the client you're retrieving.                  | true     |
| `--fields`    | Comma separated list of fields to display in the output. |          |
| `--output`    | The output format: json, table                           |          |

## Create a client

Creates a new client object. Returns a client object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/#create-a-client)

[List of supported currencies](https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/)

```
hrvst clients create
```

| Option        | Description                                                                                                                                                                                               | Required |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--name`      | A textual description of the client.                                                                                                                                                                      | true     |
| `--is_active` | Whether the client is active, or archived. Defaults to true.                                                                                                                                              | false    |
| `--address`   | A textual representation of the client’s physical address. May include new line characters.                                                                                                               | false    |
| `--currency`  | The currency used by the client. If not provided, the company’s currency will be used. See a list of supported currencies: https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/ | false    |
| `--fields`    | Comma separated list of fields to display in the output.                                                                                                                                                  |          |
| `--output`    | The output format: json, table                                                                                                                                                                            |          |

## Update a client

Updates the specific client by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a client object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/#update-a-client)

[List of supported currencies](https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/)

```
hrvst clients update
```

| Option        | Description                                                                                                                                                                                               | Required |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id` | The ID of the client you're updating.                                                                                                                                                                     | true     |
| `--name`      | A textual description of the client.                                                                                                                                                                      | false    |
| `--is_active` | Whether the client is active, or archived. Defaults to true.                                                                                                                                              | false    |
| `--address`   | A textual representation of the client’s physical address. May include new line characters.                                                                                                               | false    |
| `--currency`  | The currency used by the client. If not provided, the company’s currency will be used. See a list of supported currencies: https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/ | false    |
| `--fields`    | Comma separated list of fields to display in the output.                                                                                                                                                  |          |
| `--output`    | The output format: json, table                                                                                                                                                                            |          |

## Delete a client

Delete a client. Deleting a client is only possible if it has no projects, invoices, or estimates associated with it. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/clients/#delete-a-client)

```
hrvst clients delete
```

| Option        | Description                                              | Required |
| ------------- | -------------------------------------------------------- | -------- |
| `--client_id` | The ID of the client you're deleting.                    | true     |
| `--fields`    | Comma separated list of fields to display in the output. |          |
| `--output`    | The output format: json, table                           |          |
