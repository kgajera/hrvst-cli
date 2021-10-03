# Line Items

[Link to documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object)

## Create an estimate line item

Create a new line item on an estimate. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#create-an-estimate-line-item)

```
hrvst estimates line-items create
```

| Option                       | Description                                                       | Required |
| ---------------------------- | ----------------------------------------------------------------- | -------- |
| `--estimate_id`              | The ID of the estimate that you're creating the line item for.    | true     |
| `--line_items[0]kind`        | The name of an estimate item category.                            | true     |
| `--line_items[0]description` | Text description of the line item.                                | true     |
| `--line_items[0]unit_price`  | The individual price per unit.                                    | true     |
| `--line_items[0]quantity`    | The unit quantity of the item.                                    | true     |
| `--line_items[0]taxed`       | Whether the estimate's tax percentage applies to this line item.  | true     |
| `--line_items[0]taxed2`      | Whether the estimate's tax2 percentage applies to this line item. | true     |
| `--fields`                   | Comma separated list of fields to display in the output.          | false    |
| `--output`                   | The output format: json, table                                    | false    |

## Update an estimate line item

Update an exisitng line item on an estimate. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#update-an-estimate-line-item)

```
hrvst estimates line-items update
```

| Option                       | Description                                                         | Required |
| ---------------------------- | ------------------------------------------------------------------- | -------- |
| `--estimate_id`              | The ID of the estimate that contains the line item you're updating. | true     |
| `--line_items[0]id`          | The ID of the line item you want to update.                         | true     |
| `--line_items[0]kind`        | The name of an estimate item category.                              | false    |
| `--line_items[0]description` | Text description of the line item.                                  | false    |
| `--line_items[0]unit_price`  | The individual price per unit.                                      | false    |
| `--line_items[0]quantity`    | The unit quantity of the item.                                      | false    |
| `--line_items[0]taxed`       | Whether the estimate's tax percentage applies to this line item.    | false    |
| `--line_items[0]taxed2`      | Whether the estimate's tax2 percentage applies to this line item.   | false    |
| `--fields`                   | Comma separated list of fields to display in the output.            | false    |
| `--output`                   | The output format: json, table                                      | false    |

## Delete an invoice line item

Update an exisitng line item on an estimate. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#update-an-estimate-line-item)

```
hrvst estimates line-items delete
```

| Option                    | Description                                                         | Required |
| ------------------------- | ------------------------------------------------------------------- | -------- |
| `--estimate_id`           | The ID of the estimate that contains the line item you're deleting. | true     |
| `--line_items[0]id`       | The ID of the line item you want to delete.                         | true     |
| `--line_items[0]_destroy` | Gives the command to delete the line item.                          | true     |
| `--fields`                | Comma separated list of fields to display in the output.            | false    |
| `--output`                | The output format: json, table                                      | false    |
