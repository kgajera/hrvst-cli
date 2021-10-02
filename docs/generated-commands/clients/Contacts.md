# Contacts

Information pertaining to client contacts.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/)

## List all contacts

Returns a list of your contacts. The contacts are returned sorted by creation date, with the most recently created contacts appearing first.

The response contains an object with a `contacts` property that contains an array of up to `per_page` contacts. Each entry in the array is a separate contact object. If no more contacts are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your contacts.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/#list-all-contacts)

```
hrvst clients contacts list
```

| Option            | Description                                                                                                                                                                                         | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `--client_id`     | Only return contacts belonging to the client with the given ID.                                                                                                                                     | false    |
| `--updated_since` | Only return contacts that have been updated since the given date and time.                                                                                                                          | false    |
| `--page`          | The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1) | false    |
| `--per_page`      | The number of records to return per page. Can range between 1 and 100. (Default: 100)                                                                                                               | false    |
| `--fields`        | Comma separated list of fields to display in the output.                                                                                                                                            |          |
| `--output`        | The output format: json, table                                                                                                                                                                      |          |

## Retrieve a specific contact

Retrieves the contact with the given ID. Returns a contact object and a `200 OK` response code if a valid identifier was provided.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/#retrieve-a-contact)

```
hrvst clients contacts get
```

| Option         | Description                                              | Required |
| -------------- | -------------------------------------------------------- | -------- |
| `--contact_id` | The ID of the contact you're retrieving.                 | true     |
| `--fields`     | Comma separated list of fields to display in the output. |          |
| `--output`     | The output format: json, table                           |          |

## Create a contact

Creates a new contact object. Returns a contact object and a `201 Created` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/#create-a-contact)

```
hrvst clients contacts create
```

| Option           | Description                                              | Required |
| ---------------- | -------------------------------------------------------- | -------- |
| `--client_id`    | The ID of the client associated with this contact.       | true     |
| `--first_name`   | The first name of the contact.                           | true     |
| `--last_name`    | The last name of the contact.                            | false    |
| `--title`        | The title of the contact.                                | false    |
| `--email`        | The contact’s email address.                             | false    |
| `--phone_office` | The contact’s office phone number.                       | false    |
| `--phone_mobile` | The contact’s mobile phone number.                       | false    |
| `--fax`          | The contact’s fax number.                                | false    |
| `--fields`       | Comma separated list of fields to display in the output. |          |
| `--output`       | The output format: json, table                           |          |

## Update a contact

Updates the specific contact by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a contact object and a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/#update-a-contact)

```
hrvst clients contacts update
```

| Option           | Description                                              | Required |
| ---------------- | -------------------------------------------------------- | -------- |
| `--contact_id`   | The ID of the contact you're updating.                   | true     |
| `--client_id`    | The ID of the client associated with this contact.       | false    |
| `--first_name`   | The first name of the contact.                           | false    |
| `--last_name`    | The last name of the contact.                            | false    |
| `--title`        | The title of the contact.                                | false    |
| `--email`        | The contact’s email address.                             | false    |
| `--phone_office` | The contact’s office phone number.                       | false    |
| `--phone_mobile` | The contact’s mobile phone number.                       | false    |
| `--fax`          | The contact’s fax number.                                | false    |
| `--fields`       | Comma separated list of fields to display in the output. |          |
| `--output`       | The output format: json, table                           |          |

## Delete a contact

Delete a contact. Returns a `200 OK` response code if the call succeeded.

[Link to documentation](https://help.getharvest.com/api-v2/clients-api/clients/contacts/#delete-a-contact)

```
hrvst clients contacts delete
```

| Option         | Description                                              | Required |
| -------------- | -------------------------------------------------------- | -------- |
| `--contact_id` | The ID of the contact you're deleting.                   | true     |
| `--fields`     | Comma separated list of fields to display in the output. |          |
| `--output`     | The output format: json, table                           |          |
