# Time Tracking

There are two different ways to track time:

- [Log time](#log-time) - create a time entry specifying the number of hours to log
- [Timer](#timer) - create a time entry that is a running timer

## Log time

Create a timer entry specifiying the number of hours to log. You will be prompted to pick a project and task assignment.

```
hrvst log <hours> [alias]
```

#### Arguments

| Argument  | Description                         | Required |
| --------- | ----------------------------------- | -------- |
| `<hours>` | Amount of hours to log as decimal.  | true     |
| `[alias]` | Alias for a project id and task id. | false    |

#### Options

| Option         | Description                                                                   | Required |
| -------------- | ----------------------------------------------------------------------------- | -------- |
| `--project_id` | The ID of the project to associate with the time entry.                       | false    |
| `--task_id`    | The ID of the task to associate with the time entry.                          | false    |
| `--notes`      | Any notes to be associated with the time entry.                               | false    |
| `--editor`     | Boolean to launch editor to write notes to be associated with the time entry. | false    |

## Timer

### Start a timer

Create a timer entry that is a running timer. You will be prompted to pick a project and task assignment.

```
hrvst start [alias]
```

#### Arguments

| Argument  | Description                         | Required |
| --------- | ----------------------------------- | -------- |
| `[alias]` | Alias for a project id and task id. | false    |

#### Options

| Option         | Description                                                                   | Required |
| -------------- | ----------------------------------------------------------------------------- | -------- |
| `--project_id` | The ID of the project to associate with the time entry.                       | false    |
| `--task_id`    | The ID of the task to associate with the time entry.                          | false    |
| `--notes`      | Any notes to be associated with the time entry.                               | false    |
| `--editor`     | Boolean to launch editor to write notes to be associated with the time entry. | false    |

### Update notes for a timer

Append or overwrite notes for a running time entry. You will be prompted to launch your editor.

```
hrvst note
```

#### Options

| Option        | Description                                             | Required |
| ------------- | ------------------------------------------------------- | -------- |
| `--notes`     | The note to append or set on the time entry.            | false    |
| `--overwrite` | Boolean to overwrite existing notes. Defaults to false. | false    |

### Stop a timer

Stop a time entry that is a running timer.

```
hrvst stop
```

#### Options

| Option        | Description                                                                   | Required |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| `--notes`     | The note to append or set on the time entry.                                  | false    |
| `--overwrite` | Boolean to overwrite existing notes. Defaults to false.                       | false    |
| `--editor`    | Boolean to launch editor to write notes to be associated with the time entry. | false    |
