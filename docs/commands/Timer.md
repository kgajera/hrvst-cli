# Timer

## Start a timer

Create a timer entry that is a running timer. You will be prompted to pick a project and task assignment.

```
hrvst start [alias]
```

### Arguments

| Argument  | Description                        | Required |
| --------- | ---------------------------------- | -------- |
| `[alias]` | Alias for a project id and task id | false    |

### Options

| Option         | Description                                             | Required |
| -------------- | ------------------------------------------------------- | -------- |
| `--project_id` | The ID of the project to associate with the time entry. | false    |
| `--task_id`    | The ID of the task to associate with the time entry.    | false    |
| `--notes`      | Any notes to be associated with the time entry.         | false    |

## Update notes for a timer

Append or overwrite notes for a running time entry.

```
hrvst note <notes>
```

### Arguments

| Argument  | Description                                  | Required |
| --------- | -------------------------------------------- | -------- |
| `<notes>` | The note to append or set on the time entry. | true     |

### Options

| Option        | Description                                               | Required |
| ------------- | --------------------------------------------------------- | -------- |
| `--overwrite` | Pass true to overwrite existing notes. Defaults to false. | false    |

## Stop a timer

Stop a time entry that is a running timer.

```
hrvst stop
```
