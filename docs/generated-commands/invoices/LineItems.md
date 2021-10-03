# Line Items

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object)

## Update an invoice line item

Update an exisitng line item on an invoice. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#update-an-invoice-line-item)

[Invoice item categories](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)

```
hrvst invoices line-items update
```

| Option                       | Description                                                                         | Required |
| ---------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `--invoice_id`               | The ID of the invoice that contains the line items you're updating.                 | true     |
| `--line_items[0]id`          | The ID of the line item you want to update.                                         | true     |
| `--line_items[0]kind`        | The name of an invoice item category.                                               | false    |
| `--line_items[0]description` | Text description of the line item.                                                  | false    |
| `--line_items[0]unit_price`  | The individual price per unit.                                                      | false    |
| `--line_items[0]quantity`    | The unit quantity of the item.                                                      | false    |
| `--line_items[0]taxed`       | Whether the invoice’s tax percentage applies to this line item. Defaults to false.  | false    |
| `--line_items[0]taxed2`      | Whether the invoice’s tax2 percentage applies to this line item. Defaults to false. | false    |
| `--fields`                   | Comma separated list of fields to display in the output.                            | false    |
| `--output`                   | The output format: json, table                                                      | false    |

## Create an invoice line item

Create a new line item on an invoice. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#create-an-invoice-line-item)

[Invoice item categories](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/)

```
hrvst invoices line-items create
```

| Option                       | Description                                                                         | Required |
| ---------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `--invoice_id`               | The ID of the invoice you're creating the line item for.                            | true     |
| `--line_items[0]kind`        | The name of an invoice item category.                                               | true     |
| `--line_items[0]description` | Text description of the line item.                                                  | true     |
| `--line_items[0]unit_price`  | The individual price per unit.                                                      | true     |
| `--line_items[0]quantity`    | The unit quantity of the item.                                                      | true     |
| `--line_items[0]taxed`       | Whether the invoice’s tax percentage applies to this line item. Defaults to false.  | true     |
| `--line_items[0]taxed2`      | Whether the invoice’s tax2 percentage applies to this line item. Defaults to false. | true     |
| `--fields`                   | Comma separated list of fields to display in the output.                            | false    |
| `--output`                   | The output format: json, table                                                      | false    |

## Delete an invoice line item

Delete a line item from an invoice. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#delete-an-invoice-line-item)

```
hrvst invoices line-items delete
```

| Option                    | Description                                                        | Required |
| ------------------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id`            | The ID of the invoice that contains the line item you're deleting. | true     |
| `--line_items[0]id`       | The ID of the line item you want to delete.                        | true     |
| `--line_items[0]_destroy` | Gives the command to delete the line item.                         | true     |
| `--fields`                | Comma separated list of fields to display in the output.           | false    |
| `--output`                | The output format: json, table                                     | false    |
