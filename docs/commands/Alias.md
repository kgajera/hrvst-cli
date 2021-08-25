# Alias

## List all aliases

List all aliases you have created.

```
hrvst alias list
```

## Create an alias

Creates an alias for a project and task assignment. You will be prompted to select a project and a task. After creating an alias, you can use it to start a timer: `hrvst start YOUR_ALIAS`

```
hrvst alias create <alias>
```

| Argument  | Description        | Required |
| --------- | ------------------ | -------- |
| `<alias>` | Name of the alias. | true     |

## Delete an alias

Permanently delete an alias.

```
hrvst alias delete <alias>
```

| Argument  | Description                  | Required |
| --------- | ---------------------------- | -------- |
| `<alias>` | Name of the alias to delete. | true     |
