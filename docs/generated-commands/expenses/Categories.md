# Expense Categories

Information pertaining to retrieving, created, editing, and deleting expense categories.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/)

## List all expense categories

Returns a list of your expense categories. The expense categories are returned sorted by creation date, with the most recently created expense categories appearing first.

The response contains an object with a `expense_categories` property that contains an array of up to `per_page` expense categories. Each entry in the array is a separate expense category object. If no more expense categories are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your expense categories.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/)

```
hrvst expenses categories list
```

| Option           | Description                                                                                                                                                                            | Required |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--is_active`    | Pass true to only return active expense categories and false to return inactive expense categories.                                                                                    | false    |
| `--update_since` | Only return expense categories that have been updated since the given date and time.                                                                                                   | false    |
| `--page`         | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`     | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`       | Comma separated list of fields to display in the output.                                                                                                                               |          |
| `--output`       | The output format: json, table                                                                                                                                                         |          |

## Retrieve a specific expense category

Retrieves the company for the currently authenticated user. Returns a company object and a `200 OK` response code.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/#retrieve-an-expense-category)

```
hrvst expenses categories get
```

| Option                  | Description                                              | Required |
| ----------------------- | -------------------------------------------------------- | -------- |
| `--expense_category_id` | The ID of the expense category you're retrieving.        | true     |
| `--fields`              | Comma separated list of fields to display in the output. |          |
| `--output`              | The output format: json, table                           |          |

## Create an expense category

Retrieves the company for the currently authenticated user. Returns a company object and a `200 OK` response code.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/#create-an-expense-category)

```
hrvst expenses categories create
```

| Option         | Description                                              | Required |
| -------------- | -------------------------------------------------------- | -------- |
| `--name`       | The name of the expense category.                        | true     |
| `--unit_name`  | The unit name of the expense category.                   | false    |
| `--unit_price` | The unit price of the expense category.                  | false    |
| `--is_active`  | Whether the expense category is active or archived.      | false    |
| `--fields`     | Comma separated list of fields to display in the output. |          |
| `--output`     | The output format: json, table                           |          |

## Update an expense category

Updates the specific expense category by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an expense category object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/#update-an-expense-category)

```
hrvst expenses categories update
```

| Option                  | Description                                              | Required |
| ----------------------- | -------------------------------------------------------- | -------- |
| `--expense_category_id` | The ID of the expense category you're updating.          | true     |
| `--name`                | The name of the expense category.                        | false    |
| `--unit_name`           | The unit name of the expense category.                   | false    |
| `--unit_price`          | The unit price of the expense category.                  | false    |
| `--is_active`           | Whether the expense category is active or archived.      | false    |
| `--fields`              | Comma separated list of fields to display in the output. |          |
| `--output`              | The output format: json, table                           |          |

## Delete an expense category

Delete an expense category. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/#delete-an-expense-category)

```
hrvst expenses categories delete
```

| Option                  | Description                                              | Required |
| ----------------------- | -------------------------------------------------------- | -------- |
| `--expense_category_id` | The ID of the expense category you're retrieving.        | true     |
| `--fields`              | Comma separated list of fields to display in the output. |          |
| `--output`              | The output format: json, table                           |          |
