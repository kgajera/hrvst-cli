# User Cost Rates

Admin permissions required.

## List all cost rates for a specific user

Returns a list of cost rates for the user identified by `USER_ID`. The cost rates are returned sorted by `start_date`, with the oldest starting cost rates appearing first.

The response contains an object with a `cost_rates` property that contains an array of up to `per_page` cost rates. Each entry in the array is a separate cost rate object. If no more cost rates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your cost rates.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/cost-rates/#list-all-cost-rates-for-a-specific-user)

```
hrvst users cost-rates list-by-user
```

| Option       | Description                                                            | Required |
| ------------ | ---------------------------------------------------------------------- | -------- |
| `--user_id`  | The ID of the user whose cost rates you're retrieving.                 | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages. | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 100. | false    |
| `--fields`   | Comma separated list of fields to display in the output.               |          |
| `--output`   | The output format: json, table                                         |          |

## Retrieve a specific cost rate

Retrieves the cost rate with the given ID. Returns a cost rate object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/cost-rates/#retrieve-a-cost-rate)

```
hrvst users cost-rates get
```

| Option           | Description                                               | Required |
| ---------------- | --------------------------------------------------------- | -------- |
| `--user_id`      | The ID of the user whose billable rate you're retrieving. | true     |
| `--cost_rate_id` | The ID of the cost rate you're retrieving.                | true     |
| `--fields`       | Comma separated list of fields to display in the output.  |          |
| `--output`       | The output format: json, table                            |          |

## Create a cost rate

Creates a new cost rate object. Returns a cost rate object and a `201 Created` response code if the call succeeded.

- Creating a cost rate with no start_date will replace a user’s existing rate(s).
- Creating a cost rate with a start_date that is before a user’s existing rate(s) will replace those cost rates with the new one.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/cost-rates/#create-a-cost-rate)

```
hrvst users cost-rates create
```

| Option         | Description                                                          | Required |
| -------------- | -------------------------------------------------------------------- | -------- |
| `--user_id`    | The ID of the user that you're creating a cost rate for.             | true     |
| `--amount`     | The amount of the cost rate.                                         | true     |
| `--start_date` | The date the cost rate is effective. Cannot be a date in the future. | false    |
| `--fields`     | Comma separated list of fields to display in the output.             |          |
| `--output`     | The output format: json, table                                       |          |
