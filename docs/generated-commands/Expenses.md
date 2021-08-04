# Expenses

Information pertaining to retrieving, creating, editing, and deleting expenses.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/)

## List all expenses

Returns a list of your expenses. If accessing this endpoint as an Admin, all expenses in the account will be returned. The expenses are returned sorted by the `spent_at` date, with the most recent expenses appearing first.

The response contains an object with a `expenses` property that contains an array of up to `per_page` expenses. Each entry in the array is a separate expense object. If no more expenses are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your expenses.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/#list-all-expenses)

```
hrvst expenses list
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--user_id`       | Only return expenses belonging to the user with the given ID.                                                                                                                          | false    |
| `--client_id`     | Only return expenses belonging to the client with the given ID.                                                                                                                        | false    |
| `--project_id`    | Only return expenses belonging to the project with the given ID.                                                                                                                       | false    |
| `--is_billed`     | Pass true to only return expenses that have been invoiced and false to return expenses that have not been invoiced.                                                                    | false    |
| `--updated_since` | Only return expenses that have been updated since the given date and time.                                                                                                             | false    |
| `--from`          | Only return expenses with a spent_date on or after the given date.                                                                                                                     | false    |
| `--to`            | Only return expenses with a spent_date on or before the given date.                                                                                                                    | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |

## Retrieve a specific expense

Retrieves the expense with the given ID. Returns an expense object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/#retrieve-an-expense)

```
hrvst expenses get
```

| Option         | Description                              | Required |
| -------------- | ---------------------------------------- | -------- |
| `--expense_id` | The ID of the expense you're retrieving. | true     |

## Create an expense

Creates a new expense object. Returns an expense object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/#create-an-expense)

```
hrvst expenses create
```

| Option                  | Description                                                                                              | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | -------- |
| `--project_id`          | The ID of the project associated with this expense.                                                      | true     |
| `--expense_category_id` | The ID of the expense category this expense is being tracked against.                                    | true     |
| `--spent_date`          | Date the expense occurred.                                                                               | true     |
| `--user_id`             | The ID of the user associated with this expense. Defaults to the ID of the currently authenticated user. | false    |
| `--units`               | The quantity of units to use in calculating the total_cost of the expense.                               | false    |
| `--total_cost`          | The total amount of the expense.                                                                         | false    |
| `--notes`               | Textual notes used to describe the expense.                                                              | false    |
| `--billable`            | Whether this expense is billable or not. Defaults to true.                                               | false    |

## Update an expense

Updates the specific expense by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an expense object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/#update-an-expense)

```
hrvst expenses update
```

| Option                  | Description                                                                                     | Required |
| ----------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `--expense_id`          | The ID of the expense you're updating.                                                          | true     |
| `--project_id`          | The ID of the project associated with this expense.                                             | false    |
| `--expense_category_id` | The ID of the expense category this expense is being tracked against.                           | false    |
| `--spent_date`          | Date the expense occurred.                                                                      | false    |
| `--units`               | The quantity of units to use in calculating the total_cost of the expense.                      | false    |
| `--total_cost`          | The total amount of the expense.                                                                | false    |
| `--notes`               | Textual notes used to describe the expense.                                                     | false    |
| `--billable`            | Whether this expense is billable or not.                                                        | false    |
| `--delete_receipt`      | Whether an attached expense receipt should be deleted. Pass true to delete the expense receipt. | false    |

## Delete an expense

Delete an expense. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/#delete-an-expense)

```
hrvst expenses delete
```

| Option         | Description                            | Required |
| -------------- | -------------------------------------- | -------- |
| `--expense_id` | The ID of the expense you're deleting. | true     |
