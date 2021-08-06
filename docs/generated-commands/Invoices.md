# Invoices

Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/)

## List all invoices

Returns a list of your invoices. The invoices are returned sorted by issue date, with the most recently issued invoices appearing first.

The response contains an object with a `invoices` property that contains an array of up to `per_page` invoices. Each entry in the array is a separate invoice object. If no more invoices are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your invoices.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#list-all-invoices)

```
hrvst invoices list
```

| Option            | Description                                                                                                                                                                                         | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id`     | Only return invoices belonging to the client with the given ID.                                                                                                                                     | false    |
| `--project_id`    | Only return invoices associated with the project with the given ID.                                                                                                                                 | false    |
| `--updated_since` | Only return invoices that have been updated since the given date and time.                                                                                                                          | false    |
| `--from`          | Only return invoices with an issue_date on or after the given date.                                                                                                                                 | false    |
| `--to`            | Only return invoices with an issue_date on or before the given date.                                                                                                                                | false    |
| `--state`         | Only return invoices with a state matching the value provided. Options: draft, open, paid, or closed.                                                                                               | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |
| `--fields`        | Comma separated list of fields to display in console table output.                                                                                                                                  | false    |

## Retrieve a specific invoice

Retrieves the invoice with the given ID. Returns an invoice object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#retrieve-an-invoice)

```
hrvst invoices get
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're retrieving.                           | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Create a free-form invoice

Creates a new invoice object. Returns an invoice object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#create-a-free-form-invoice)

```
hrvst invoices create
```

| Option                       | Description                                                                                                                      | Required |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id`                | The ID of the client this invoice belongs to.                                                                                    | true     |
| `--retainer_id`              | The ID of the retainer associated with this invoice.                                                                             | false    |
| `--estimate_id`              | The ID of the estimate associated with this invoice.                                                                             | false    |
| `--number`                   | If no value is set, the number will be automatically generated.                                                                  | false    |
| `--purchase_order`           | The purchase order number.                                                                                                       | false    |
| `--tax`                      | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.                     | false    |
| `--tax2`                     | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.                     | false    |
| `--discount`                 | This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.                                                    | false    |
| `--subject`                  | The invoice subject.                                                                                                             | false    |
| `--notes`                    | Any additional notes to include on the invoice.                                                                                  | false    |
| `--currency`                 | The currency used by the invoice. If not provided, the client’s currency will be used. See a list of supported currencies        | false    |
| `--issue_date`               | Date the invoice was issued. Defaults to today’s date.                                                                           | false    |
| `--due_date`                 | Date the invoice is due. Defaults to the issue_date if no payment_term is specified.                                             | false    |
| `--payment_term`             | The timeframe in which the invoice should be paid. Defaults to custom. Options: upon receipt, net 15, net 30, net 45, or net 60. | false    |
| `--line_items[0]kind`        | The name of an invoice item category.                                                                                            | false    |
| `--line_items[0]description` | Text description of the first line item.                                                                                         | false    |
| `--line_items[0]unit_price`  | The individual price per unit.                                                                                                   | false    |
| `--line_items[0]quantity`    | The unit quantity of the item.                                                                                                   | false    |
| `--line_items[0]taxed`       | Whether the invoice’s tax percentage applies to this line item.                                                                  | false    |
| `--line_items[0]taxed2`      | Whether the invoice’s tax2 percentage applies to this line item.                                                                 | false    |
| `--line_items[1]kind`        | The name of an invoice item category.                                                                                            | false    |
| `--line_items[1]description` | Text description of the second line item.                                                                                        | false    |
| `--line_items[1]unit_price`  | The individual price per unit.                                                                                                   | false    |
| `--line_items[1]quantity`    | The unit quantity of the item.                                                                                                   | false    |
| `--line_items[1]taxed`       | Whether the invoice’s tax percentage applies to this line item.                                                                  | false    |
| `--line_items[1]taxed2`      | Whether the invoice’s tax2 percentage applies to this line item.                                                                 | false    |
| `--fields`                   | Comma separated list of fields to display in console table output.                                                               | false    |

## Update an invoice

Updates the specific invoice by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an invoice object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#update-an-invoice)

```
hrvst invoices update
```

| Option             | Description                                                                                                               | Required |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--invoice_id`     | The ID of the invoice you're updating.                                                                                    | true     |
| `--client_id`      | The ID of the client this invoice belongs to.                                                                             | false    |
| `--retainer_id`    | The ID of the retainer associated with this invoice.                                                                      | false    |
| `--estimate_id`    | The ID of the estimate associated with this invoice.                                                                      | false    |
| `--number`         | If no value is set, the number will be automatically generated.                                                           | false    |
| `--purchase_order` | The purchase order number.                                                                                                | false    |
| `--tax`            | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.              | false    |
| `--tax2`           | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.              | false    |
| `--discount`       | This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.                                             | false    |
| `--subject`        | The invoice subject.                                                                                                      | false    |
| `--notes`          | Any additional notes to include on the invoice.                                                                           | false    |
| `--currency`       | The currency used by the invoice. If not provided, the client’s currency will be used. See a list of supported currencies | false    |
| `--issue_date`     | Date the invoice was issued. Defaults to today’s date.                                                                    | false    |
| `--due_date`       | Date the invoice is due.                                                                                                  | false    |
| `--payment_term`   | The timeframe in which the invoice should be paid. Options: upon receipt, net 15, net 30, net 45, or net 60.              | false    |
| `--fields`         | Comma separated list of fields to display in console table output.                                                        | false    |

## Delete an invoice

Delete an invoice. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#delete-an-invoice)

```
hrvst invoices delete
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're deleting.                             | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |
