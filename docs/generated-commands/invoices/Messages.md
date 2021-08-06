# Invoice Messages

Admin permissions required.

## List all messages for an invoice

Returns a list of messages associated with a given invoice. The invoice messages are returned sorted by creation date, with the most recently created messages appearing first.

The response contains an object with an `invoice_messages` property that contains an array of up to `per_page` messages. Each entry in the array is a separate message object. If no more messages are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your messages.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#list-all-messages-for-an-invoice)

```
hrvst invoices messages list-by-invoice
```

| Option            | Description                                                                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--invoice_id`    | The ID of the invoice that contains the messages you are listing.                                                                                                                      | true     |
| `--updated_since` | Only return invoice messages that have been updated since the given date and time.                                                                                                     | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100.                                                                                                                 | false    |
| `--fields`        | Comma separated list of fields to display in console table output.                                                                                                                     | false    |

## Create an invoice message

Creates a new invoice message object. Returns an invoice message object and a 201 Created response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#create-an-invoice-message)

```
hrvst invoices messages create
```

| Option                             | Description                                                                                           | Required |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| `--invoice_id`                     | The ID of the invoice that you're creating the message for.                                           | true     |
| `--recipients[0]email`             | Email of the message recipient.                                                                       | true     |
| `--recipients[0]name`              | Name of the message recipient.                                                                        | true     |
| `--subject`                        | The message subject.                                                                                  | false    |
| `--body`                           | The message body.                                                                                     | false    |
| `--include_link_to_client_invoice` | Whether to include a link to the client invoice in the message body. Not used when thank_you is true. | false    |
| `--attach_pdf`                     | Whether to attach the invoice PDF to the message email.                                               | false    |
| `--send_me_a_copy`                 | Whether to email a copy of the message to the current user.                                           | false    |
| `--thank_you`                      | Whether this is a thank you message.                                                                  | false    |
| `--event_type`                     | The type of invoice event that occurred with the message: send, close, draft, re-open, or view.       | false    |
| `--fields`                         | Comma separated list of fields to display in console table output.                                    | false    |

## Mark a draft invoice as sent

Creates a new invoice message object and marks the invoice as sent. Returns an invoice message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-a-draft-invoice-as-sent)

```
hrvst invoices messages mark-draft-invoice-as-sent
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're sending.                              | true     |
| `--event_type` | Pass “send” to mark the invoice as sent.                           | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Mark an open invoice as closed

Creates a new invoice message object and marks the invoice as closed. Returns an invoice message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-an-open-invoice-as-closed)

```
hrvst invoices messages mark-open-invoice-as-closed
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're closing.                              | true     |
| `--event_type` | Pass “close” to mark the invoice as closed.                        | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Re-open a closed invoice

Creates a new invoice message object and re-opens a closed invoice. Returns an invoice message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#re-open-a-closed-invoice)

```
hrvst invoices messages re-open-closed-invoice
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're closing.                              | true     |
| `--event_type` | Pass "re-open" to re-open the invoice                              | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Mark an open invoice as a draft

Creates a new invoice message object and marks an open invoice as a draft. Returns an invoice message object and a `201 Created` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-an-open-invoice-as-a-draft)

```
hrvst invoices messages mark-open-invoice-as-draft
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice you're marking as a draft.                   | true     |
| `--event_type` | Pass “draft” to mark the invoice as a draft.                       | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |

## Delete an invoice message

Delete an invoice message. Returns a `200 OK` response code if the call succeeded.

[Link to Documentation](https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#delete-an-invoice-message)

```
hrvst invoices messages delete
```

| Option         | Description                                                        | Required |
| -------------- | ------------------------------------------------------------------ | -------- |
| `--invoice_id` | The ID of the invoice that contains the message you are deleting.  | true     |
| `--message_id` | The ID of the message you are deleting.                            | true     |
| `--fields`     | Comma separated list of fields to display in console table output. | false    |
