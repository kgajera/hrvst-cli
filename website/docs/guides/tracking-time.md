---
id: tracking-time
---

# Tracking Time

There are two different ways to track time:

- [Log time](#log-time) - create a time entry specifying the number of hours to log
- [Timer](#timer) - create a time entry that is a running timer

For a full list of commands and their options, view the [Time Tracking](/cli/time-tracking) CLI reference.

## Log time

Create a new time entry specifying the number of hours to log:

```
hrvst log <hours> [alias]
```

You will be prompted to pick a project and task assignment or you can use an [alias](/cli/alias).

:::tip

[Create an alias](/cli/alias#create-an-alias) to skip the project and task assignment prompts!

:::

Add notes to the time entry by using one of the following options:

- Use the string `--notes` option to pass your notes
- Use the boolean `--editor` option to launch an editor to write your notes

## Timer

Below are commands to track time via a timer.

### Starting a timer

Create a new time entry that is a running timer:

```
hrvst start [alias]
```

You will be prompted to pick a project and task assignment or you can use an [alias](/cli/alias).

:::tip

[Create an alias](/cli/alias#create-an-alias) to skip the project and task assignment prompts!

:::

Add notes to the time entry by using one of the following options:

- Use the string `--notes` option to pass your notes
- Use the boolean `--editor` option to launch an editor to write your notes

### Appending notes to a timer

Append notes to a running time entry:

```
hrvst note
```

You will be prompted to launch your editor.

### Stopping a timer

Stop a running time entry:

```
hrvst stop
```

Add notes to the time entry by using one of the following options:

- Use the string `--notes` option to pass your notes
- Use the boolean `--editor` option to launch an editor to write your notes
