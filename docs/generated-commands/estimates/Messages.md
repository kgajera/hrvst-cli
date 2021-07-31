# Estimate Messages

Information pertaining to retrieving, creating, and deleting estimate messages, as well as accepting, declining, and re-opening estimates. Admin permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/)

## List all messages for an estimate

Returns a list of messages associated with a given estimate. The estimate messages are returned sorted by creation date, with the most recently created messages appearing first.

The response contains an object with an `estimate_messages` property that contains an array of up to `per_page` messages. Each entry in the array is a separate message object. If no more messages are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your messages.

[Link to Documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#list-all-messages-for-an-estimate)

```
hrvst estimates messages list-by-estimate
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--estimate_id`   | The ID of the estimate that contains the messages you're retrieving.                                                                                                                   | true     |
| `--updated_since` | Only return estimate messages that have been updated since the given date and time.                                                                                                    | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |

## Create an estimate message

Creates a new estimate message object. Returns an estimate message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#create-an-estimate-message)

```
hrvst estimates messages create
```

| Option                 | Description                                                                                          | Required |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| `--estimate_id`        | The ID of the invoice that you're creating the message for.                                          | true     |
| `--recipients[0]email` | Email of the message recipient.                                                                      | true     |
| `--recipients[0]name`  | Name of the message recipient.                                                                       | true     |
| `--subject`            | The message subject.                                                                                 | false    |
| `--body`               | The message body.                                                                                    | false    |
| `--send_me_a_copy`     | Whether to email a copy of the message to the current user.                                          | false    |
| `--event_type`         | If provided, runs an event against the estimate. Options: “accept”, “decline”, “re-open”, or “send”. | false    |

## Delete an estimate message

Delete an estimate message. Returns a `200 OK` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#delete-an-estimate-message)

```
hrvst estimates messages delete
```

| Option          | Description                                                       | Required |
| --------------- | ----------------------------------------------------------------- | -------- |
| `--estimate_id` | The ID of the invoice that contains the message you are deleting. | true     |
| `--message_id`  | The ID of the message you are deleting.                           | true     |

## Mark a draft estimate as sent

Creates a new estimate message object and marks the estimate as sent. Returns an `estimate message` object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#mark-a-draft-estimate-as-sent)

```
hrvst estimates messages mark-draft-estimate-as-sent
```

| Option           | Description                                    | Required |
| ---------------- | ---------------------------------------------- | -------- |
| `--estimates_id` | The ID of the estimate you're marking as sent. | true     |
| `--event_type`   | Pass “send” to mark the estimate as sent.      | true     |

## Re-open a closed estimate

Creates a new estimate message object and re-opens a closed estimate. Returns an `estimate` message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#re-open-a-closed-estimate)

```
hrvst estimates messages re-open-closed-estimate
```

| Option          | Description                               | Required |
| --------------- | ----------------------------------------- | -------- |
| `--estimate_id` | The ID of the estimate you're re-opening. | true     |
| `--event_type`  | Pass "re-open" to re-open the estimate    | true     |
