# User Billable Rates

Admin permissions required.

## List all billable rates for a specific user

Returns a list of billable rates for the user identified by `USER_ID`. The billable rates are returned sorted by `start_dat`e, with the oldest starting billable rates appearing first.

The response contains an object with a `billable_rates` property that contains an array of up to `per_page` billable rates. Each entry in the array is a separate billable rate object. If no more billable rates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your billable rates.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/billable-rates/#list-all-billable-rates-for-a-specific-user)

```
hrvst users billable-rates list-by-user
```

| Option       | Description                                                                                                                                                                            | Required |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--user_id`  | The ID of the user whose billable rates you're listing.                                                                                                                                | true     |
| `--page`     | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |

## Retrieve a specific billable rate

Retrieves the billable rate with the given ID. Returns a billable rate object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/billable-rates/#retrieve-a-billable-rate)

```
hrvst users billable-rates get
```

| Option               | Description                                               | Required |
| -------------------- | --------------------------------------------------------- | -------- |
| `--user_id`          | The ID of the user whose billable rate you're retrieving. | true     |
| `--billable_rate_id` | The ID of the billable rate you're retrieving.            | true     |

## Create a billable rate

Creates a new billable rate object. Returns a billable rate object and a `201 Created` response code if the call succeeded.

- Creating a billable rate with no start_date will replace a user’s existing rate(s).
- Creating a billable rate with a start_date that is before a user’s existing rate(s) will replace those billable rates with the new one.

[Link to documentation](https://help.getharvest.com/api-v2/users-api/users/billable-rates/#create-a-billable-rate)

```
hrvst users billable-rates create
```

| Option         | Description                                                              | Required |
| -------------- | ------------------------------------------------------------------------ | -------- |
| `--user_id`    | The ID of the user that you're creating a billable rate for.             | true     |
| `--amount`     | The amount of the billable rate.                                         | true     |
| `--start_date` | The date the billable rate is effective. Cannot be a date in the future. | false    |
