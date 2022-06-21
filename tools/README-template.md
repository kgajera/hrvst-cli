# Harvest CLI

[![npm version](https://badge.fury.io/js/hrvst-cli.svg)](https://badge.fury.io/js/hrvst-cli)
[![Tests](https://github.com/kgajera/hrvst-cli/actions/workflows/tests.yml/badge.svg)](https://github.com/kgajera/hrvst-cli/actions/workflows/tests.yml)

This is an unofficial Harvest CLI that contains all features available in Harvest's [REST API V2](https://help.getharvest.com/api-v2/). The majority of the CLI is generated from an export of Harvest's [Postman Collection](https://help.getharvest.com/api-v2/introduction/overview/postman-collection/).

In addition to supporting features of the REST API, the Harvest CLI provides convenient ways to [track time](#tracking-time).

## Getting Started

### Install

Install the CLI using the `npm` package manager:

```
npm install -g hrvst-cli
```

### Log in with your Harvest account

To authenticate with Harvest's REST API, [client side OAuth2](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#for-client-side-applications) is used. To initiate this, run:

```
hrvst login
```

You’ll be prompted to launch your browser and log in to Harvest to grant Harvest CLI access to your account.

## Tracking Time

Below are commands to track time via a timer. For a full list of options, view the [Timer](/docs/commands/Timer.md) docs.

### Starting a timer

Create a new time entry that is a running timer:

```
hrvst start
```

You will be prompted to pick a project and task assignment or you can use an [alias](/docs/commands/Alias.md)!

### Appending notes to a timer

Append notes to a running time entry:

```
hrvst note <notes>
```

### Stopping a timer

Stop a running time entry:

```
hrvst stop
```

## CLI Command Reference

<pre>
{{COMMAND_DICTIONARY}}
</pre>
