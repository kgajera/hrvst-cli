# Estimates

Information pertaining to retrieving, creating, editing, and deleting estimates. Admin permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/)

[Supported currencies](https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/)

## List all estimates

Returns a list of your estimates. The estimates are returned sorted by issue date, with the most recently issued estimates appearing first.

The response contains an object with a `estimates` property that contains an array of up to `per_page` estimates. Each entry in the array is a separate estimate object. If no more estimates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your estimates.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#list-all-estimates)

```
hrvst estimates list
```

| Option            | Description                                                                                                  | Required |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| `--client_id`     | Only return estimates belonging to the client with the given ID.                                             | false    |
| `--updated_since` | Only return estimates that have been updated since the given date and time.                                  | false    |
| `--from`          | Only return estimates with an issue_date on or after the given date.                                         | false    |
| `--to`            | Only return estimates with an issue_date on or before the given date.                                        | false    |
| `--state`         | Only return estimates with a state matching the value provided. Options: draft, sent, accepted, or declined. | false    |
| `--page`          | The page number to use in pagination. Use `all` to retrieve all pages.                                       | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 2000.                                      | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                                     | false    |
| `--output`        | The output format: json, table                                                                               | false    |

## Retrieve a specific estimate

Retrieves the estimate with the given ID. Returns an estimate object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#retrieve-an-estimate)

```
hrvst estimates get
```

| Option          | Description                                              | Required |
| --------------- | -------------------------------------------------------- | -------- |
| `--estimate_id` | The ID of the estimate you're retrieving.                | true     |
| `--fields`      | Comma separated list of fields to display in the output. | false    |
| `--output`      | The output format: json, table                           | false    |

## Create an estimate

Creates a new estimate object. Returns an estimate object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#create-an-estimate)

```
hrvst estimates create
```

| Option                       | Description                                                                                                                | Required |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id`                | The ID of the client this estimate belongs to.                                                                             | true     |
| `--number`                   | If no value is set, the number will be automatically generated.                                                            | false    |
| `--purchase_order`           | The purchase order number.                                                                                                 | false    |
| `--tax`                      | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.               | false    |
| `--tax2`                     | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.               | false    |
| `--discount`                 | This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.                                              | false    |
| `--subject`                  | The estimate subject.                                                                                                      | false    |
| `--notes`                    | Any additional notes to include on the estimate.                                                                           | false    |
| `--currency`                 | The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies | false    |
| `--issue_date`               | Date the invoice was issued. Defaults to today’s date.                                                                     | false    |
| `--line_items[0]kind`        | The name of an estimate item category.                                                                                     | false    |
| `--line_items[0]description` | Text description of the first line item.                                                                                   | false    |
| `--line_items[0]unit_price`  | The individual price per unit.                                                                                             | false    |
| `--line_items[0]quantity`    | The unit quantity of the item.                                                                                             | false    |
| `--line_items[0]taxed`       | Whether the estimate’s tax percentage applies to this line item.                                                           | false    |
| `--line_items[0]taxed2`      | Whether the estimate’s tax2 percentage applies to this line item.                                                          | false    |
| `--fields`                   | Comma separated list of fields to display in the output.                                                                   | false    |
| `--output`                   | The output format: json, table                                                                                             | false    |

## Update an estimate

Updates the specific estimate by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an estimate object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#update-an-estimate)

```
hrvst estimates update
```

| Option             | Description                                                                                                                | Required |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--estimate_id`    | The ID of the estimate you're updating.                                                                                    | true     |
| `--client_id`      | The ID of the client this estimate belongs to.                                                                             | false    |
| `--number`         | If no value is set, the number will be automatically generated.                                                            | false    |
| `--purchase_order` | The purchase order number.                                                                                                 | false    |
| `--tax`            | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.               | false    |
| `--tax2`           | This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.               | false    |
| `--discount`       | This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.                                              | false    |
| `--subject`        | The estimate subject.                                                                                                      | false    |
| `--notes`          | Any additional notes to include on the estimate.                                                                           | false    |
| `--currency`       | The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies | false    |
| `--issue_date`     | Date the invoice was issued. Defaults to today’s date.                                                                     | false    |
| `--fields`         | Comma separated list of fields to display in the output.                                                                   | false    |
| `--output`         | The output format: json, table                                                                                             | false    |

## Delete an estimate

Delete an estimate. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#delete-an-estimate)

```
hrvst estimates delete
```

| Option          | Description                                              | Required |
| --------------- | -------------------------------------------------------- | -------- |
| `--estimate_id` | The ID of the estimate you're deleting.                  | true     |
| `--fields`      | Comma separated list of fields to display in the output. | false    |
| `--output`      | The output format: json, table                           | false    |
