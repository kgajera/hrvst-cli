# Invoice Item Categories

Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)

## List all invoice item categories

Returns a list of your invoice item categories. The invoice item categories are returned sorted by creation date, with the most recently created invoice item categories appearing first.

The response contains an object with a `invoice_item_categories` property that contains an array of up to `per_page` invoice item categories. Each entry in the array is a separate invoice item category object. If no more invoice item categories are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your invoice item categories.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)

```
hrvst invoices item-categories list
```

| Option            | Description                                                                               | Required |
| ----------------- | ----------------------------------------------------------------------------------------- | -------- |
| `--updated_since` | Only return invoice item categories that have been updated since the given date and time. | false    |
| `--page`          | The page number to use in pagination. Use `all` to retrieve all pages.                    | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 2000.                   | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                  | false    |
| `--output`        | The output format: json, table                                                            | false    |

## Retrieve a specific invoice item category

Retrieves the invoice item category with the given ID. Returns an invoice item category object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#retrieve-an-invoice-item-category)

```
hrvst invoices item-categories get
```

| Option                       | Description                                              | Required |
| ---------------------------- | -------------------------------------------------------- | -------- |
| `--invoice_item_category_id` | The ID of the invoice item category you're retrieving.   | true     |
| `--fields`                   | Comma separated list of fields to display in the output. | false    |
| `--output`                   | The output format: json, table                           | false    |

## Create an invoice item category

Creates a new invoice item category object. Returns an invoice item category object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#create-an-invoice-item-category)

```
hrvst invoices item-categories create
```

| Option     | Description                                              | Required |
| ---------- | -------------------------------------------------------- | -------- |
| `--name`   | The name of the invoice item category.                   | true     |
| `--fields` | Comma separated list of fields to display in the output. | false    |
| `--output` | The output format: json, table                           | false    |

## Update an invoice item category

Updates the specific invoice item category by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an invoice item category object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#update-an-invoice-item-category)

```
hrvst invoices item-categories update
```

| Option                       | Description                                              | Required |
| ---------------------------- | -------------------------------------------------------- | -------- |
| `--invoice_item_category_id` | The ID of the invoice item category you're updating.     | true     |
| `--name`                     | The name of the invoice item category.                   | false    |
| `--fields`                   | Comma separated list of fields to display in the output. | false    |
| `--output`                   | The output format: json, table                           | false    |

## Delete an invoice item category

Delete an invoice item category. Deleting an invoice item category is only possible if `use_as_service` and `use_as_expense` are both false. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#delete-an-invoice-item-category)

```
hrvst invoices item-categories delete
```

| Option                       | Description                                              | Required |
| ---------------------------- | -------------------------------------------------------- | -------- |
| `--invoice_item_category_id` | The ID of the invoice item category you're deleting.     | true     |
| `--fields`                   | Comma separated list of fields to display in the output. | false    |
| `--output`                   | The output format: json, table                           | false    |
