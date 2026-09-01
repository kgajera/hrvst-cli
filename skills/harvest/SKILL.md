---
name: harvest
description: Track time and manage Harvest with the hrvst CLI (hrvst-cli). Use when the user wants to start/stop timers, log hours, list or edit time entries, or work with Harvest projects, tasks, clients, invoices, estimates, expenses, or reports.
license: MIT
metadata:
  author: kgajera
  version: "3.0.0"
---

# Harvest CLI (hrvst)

Wraps the full Harvest REST API v2 plus time-tracking conveniences. Docs: https://kgajera.github.io/hrvst-cli

## Setup

- Install: `npm install -g hrvst-cli`
- Auth: `hrvst login` (opens browser OAuth flow; token stored in `~/.hrvst/config.json`)
- If a command fails with an auth error, ask the user to run `hrvst login` themselves.

**IMPORTANT:** Commands prompt interactively for missing required parameters, which
hangs a non-interactive session. Always pass every required flag/positional explicitly.
Never use `--editor`/`-e` flags.

## Time tracking

```sh
hrvst start -p <project_id> -t <task_id> -n "notes"   # start a running timer
hrvst start <alias>                                   # start via saved alias
hrvst stop                                            # stop the running timer
hrvst stop -n "what was done"                         # stop and append notes (-o overwrites)
hrvst note -n "more notes"                            # append notes to running timer (-o overwrites)
hrvst log 1.5 <alias> -n "what was done"              # log hours without a timer
hrvst log 2 -p <project_id> -t <task_id> -n "notes"
hrvst time-entries restart --time_entry_id <id>       # resume a stopped entry as a running timer
```

- `hrvst log` always logs **today** (it computes start/end from the current clock). To log
  hours on a past date: `hrvst time-entries create --project_id <id> --task_id <id> --spent_date YYYY-MM-DD --hours 2 --notes "..."`
- `note` without `-n`, and `stop`/`note` with multiple timers running, prompt interactively — avoid.

Check what's running: `hrvst time-entries list --is_running true --output json`

## Aliases

Aliases bind a project_id + task_id pair to a short name for `start`/`log`:

```sh
hrvst alias list
hrvst alias create <name> -p <project_id> -t <task_id>
hrvst alias delete <name>
```

Prefer an existing alias when the user names a project loosely; run `hrvst alias list` first.

## Finding IDs

```sh
hrvst users me --output json                 # current user (works without admin)
hrvst users project-assignments me --output json      # projects+tasks assignable to me
hrvst projects list --is_active true --output json --fields id,name,client   # admin/PM only
hrvst tasks list --output json --fields id,name                              # admin only
```

Prefer `project-assignments me` — it works for any user and includes each project's task assignments, so it covers both project and task IDs. Fall back to it when `projects list` or `tasks list` returns a 403.

## Resource commands (CRUD)

`clients`, `contacts`, `projects`, `tasks`, `users`, `roles`, `time-entries`, `invoices`, `estimates`, `expenses`, `company` — each supports `list` (`l`), `get` (`g`), `create` (`c`), `update` (`u`), `delete` (`d`). Nested groups exist, e.g. `projects task-assignments`, `projects user-assignments`, `users billable-rates`, `invoices` line items/messages. Run `hrvst <resource> --help` to discover flags — don't guess.

`get`/`update`/`delete` take the record ID as `--<resource>_id` (e.g. `--time_entry_id`,
`--project_id`, `--client_id`, `--invoice_id`) — there is no generic `--id` flag.

```sh
hrvst time-entries list --from 2026-09-01 --to 2026-09-07 --output json
hrvst time-entries update --time_entry_id <id> --notes "updated note"
hrvst time-entries delete --time_entry_id <id>
```

Dates are `YYYY-MM-DD`. Deletes are destructive — confirm with the user first
(`projects delete` also removes all tracked time and expenses).

## Reports (admin/PM permissions required)

```sh
hrvst reports time-reports projects-time-report --from 2026-09-01 --to 2026-09-30
hrvst reports time-reports team-time-report --from ... --to ...
hrvst reports time-reports clients-time-report --from ... --to ...
hrvst reports time-reports tasks-time-report --from ... --to ...
hrvst reports expense-reports <command>
hrvst reports project-budget-report
hrvst reports uninvoiced-report --from ... --to ...
```

## Other commands

- `hrvst status` — Harvest service health (no auth needed); useful when API calls fail unexpectedly
- `hrvst open <page>` — open Harvest in the browser: `time` (`-w` for week view), `expenses`, `reports`, `profile`, `accounts`. Bare `hrvst open` prompts interactively — always pass a page.

## Output & pagination

- `--output json` for parsing, `--output table` (default) for display to the user
- `--fields id,name,...` to trim columns
- List commands paginate: `--page all` fetches every page, `--per_page 1..2000`

## Permissions

Some command groups need elevated Harvest permissions: `tasks`, `roles`, `estimates` (admin); `projects`, `invoices`, `reports` (admin or project manager); `users` (admin, except `users me`). On a 403, report the permission requirement rather than retrying.
