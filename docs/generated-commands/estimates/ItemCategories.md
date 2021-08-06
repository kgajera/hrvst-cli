# Estimate Item Categories

Information pertaining to retrieving, creating, editing, and deleting invoice item categories. Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/)

## List all estimate item categories

Returns a list of your estimate item categories. The estimate item categories are returned sorted by creation date, with the most recently created estimate item categories appearing first.

The response contains an object with a `estimate_item_categories` property that contains an array of up to `per_page` estimate item categories. Each entry in the array is a separate estimate item category object. If no more estimate item categories are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your estimate item categories.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/#list-all-estimate-item-categories)

```
hrvst estimates item-categories list
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--updated_since` | Only return estimate item categories that have been updated since the given date and time.                                                                                             | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`        | Comma separated list of fields to display in console table output.                                                                                                                     | false    |

## Retrieve a specific estimate item category

Retrieves the estimate item category with the given ID. Returns an estimate item category object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/#retrieve-an-estimate-item-category)

```
hrvst estimates item-categories get
```

| Option                        | Description                                                        | Required |
| ----------------------------- | ------------------------------------------------------------------ | -------- |
| `--estimate_item_category_id` | The ID of the estimate item category you're retrieving.            | true     |
| `--fields`                    | Comma separated list of fields to display in console table output. | false    |

## Create an estimate item category

Creates a new estimate item category object. Returns an estimate item category object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/#create-an-estimate-item-category)

```
hrvst estimates item-categories create
```

| Option     | Description                                                        | Required |
| ---------- | ------------------------------------------------------------------ | -------- |
| `--name`   | The name of the estimate item category.                            | true     |
| `--fields` | Comma separated list of fields to display in console table output. | false    |

## Update an estimate item category

Updates the specific estimate item category by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an estimate item category object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/#update-an-estimate-item-category)

```
hrvst estimates item-categories update
```

| Option                        | Description                                                        | Required |
| ----------------------------- | ------------------------------------------------------------------ | -------- |
| `--estimate_item_category_id` | The ID of the estimate item category you're updating.              | true     |
| `--name`                      | The name of the estimate item category.                            | true     |
| `--fields`                    | Comma separated list of fields to display in console table output. | false    |

## Delete an estimate item category

Delete an estimate item category. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/#delete-an-estimate-item-category)

```
hrvst estimates item-categories delete
```

| Option                        | Description                                                        | Required |
| ----------------------------- | ------------------------------------------------------------------ | -------- |
| `--estimate_item_category_id` | The ID of the estimate item category you're deleting.              | true     |
| `--fields`                    | Comma separated list of fields to display in console table output. | false    |
