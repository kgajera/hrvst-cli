# Harvest CLI

[![npm version](https://badge.fury.io/js/hrvst-cli.svg)](https://badge.fury.io/js/hrvst-cli)
[![Tests](https://github.com/kgajera/hrvst-cli/actions/workflows/tests.yml/badge.svg)](https://github.com/kgajera/hrvst-cli/actions/workflows/tests.yml)

This is an unofficial Harvest CLI that contains all features available in Harvest's [REST API V2](https://help.getharvest.com/api-v2/). The majority of the CLI is generated from an export of Harvest's [Postman Collection](https://help.getharvest.com/api-v2/introduction/overview/postman-collection/).

In addition to supporting features of the REST API, the Harvest CLI provides convenient ways to [track time](/docs/commands/TimeTracking.md).

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

## CLI Command Reference

<pre>
<a href="/docs/commands/Alias.md#list-all-aliases">hrvst alias list</a>
<a href="/docs/commands/Alias.md#create-an-alias">hrvst alias create &lt;alias&gt;</a>
<a href="/docs/commands/Alias.md#delete-an-alias">hrvst alias delete &lt;alias&gt;</a>
<a href="/docs/generated-commands/Clients.md#create-a-client">hrvst clients create</a>
<a href="/docs/generated-commands/Clients.md#delete-a-client">hrvst clients delete</a>
<a href="/docs/generated-commands/Clients.md#retrieve-a-specific-client">hrvst clients get</a>
<a href="/docs/generated-commands/Clients.md#list-all-clients">hrvst clients list</a>
<a href="/docs/generated-commands/Clients.md#update-a-client">hrvst clients update</a>
<a href="/docs/generated-commands/clients/Contacts.md#create-a-contact">hrvst clients contacts create</a>
<a href="/docs/generated-commands/clients/Contacts.md#delete-a-contact">hrvst clients contacts delete</a>
<a href="/docs/generated-commands/clients/Contacts.md#retrieve-a-specific-contact">hrvst clients contacts get</a>
<a href="/docs/generated-commands/clients/Contacts.md#list-all-contacts">hrvst clients contacts list</a>
<a href="/docs/generated-commands/clients/Contacts.md#update-a-contact">hrvst clients contacts update</a>
<a href="/docs/generated-commands/Company.md#retrieve-a-company">hrvst company get</a>
<a href="/docs/commands/Completion.md">hrvst completion</a>
<a href="/docs/generated-commands/Estimates.md#create-an-estimate">hrvst estimates create</a>
<a href="/docs/generated-commands/Estimates.md#delete-an-estimate">hrvst estimates delete</a>
<a href="/docs/generated-commands/Estimates.md#retrieve-a-specific-estimate">hrvst estimates get</a>
<a href="/docs/generated-commands/Estimates.md#list-all-estimates">hrvst estimates list</a>
<a href="/docs/generated-commands/Estimates.md#update-an-estimate">hrvst estimates update</a>
<a href="/docs/generated-commands/estimates/ItemCategories.md#create-an-estimate-item-category">hrvst estimates item-categories create</a>
<a href="/docs/generated-commands/estimates/ItemCategories.md#delete-an-estimate-item-category">hrvst estimates item-categories delete</a>
<a href="/docs/generated-commands/estimates/ItemCategories.md#retrieve-a-specific-estimate-item-category">hrvst estimates item-categories get</a>
<a href="/docs/generated-commands/estimates/ItemCategories.md#list-all-estimate-item-categories">hrvst estimates item-categories list</a>
<a href="/docs/generated-commands/estimates/ItemCategories.md#update-an-estimate-item-category">hrvst estimates item-categories update</a>
<a href="/docs/generated-commands/estimates/LineItems.md#create-an-estimate-line-item">hrvst estimates line-items create</a>
<a href="/docs/generated-commands/estimates/LineItems.md#delete-an-invoice-line-item">hrvst estimates line-items delete</a>
<a href="/docs/generated-commands/estimates/LineItems.md#update-an-estimate-line-item">hrvst estimates line-items update</a>
<a href="/docs/generated-commands/estimates/Messages.md#create-an-estimate-message">hrvst estimates messages create</a>
<a href="/docs/generated-commands/estimates/Messages.md#delete-an-estimate-message">hrvst estimates messages delete</a>
<a href="/docs/generated-commands/estimates/Messages.md#list-all-messages-for-an-estimate">hrvst estimates messages list-by-estimate</a>
<a href="/docs/generated-commands/estimates/Messages.md#mark-a-draft-estimate-as-sent">hrvst estimates messages mark-draft-estimate-as-sent</a>
<a href="/docs/generated-commands/estimates/Messages.md#re-open-a-closed-estimate">hrvst estimates messages re-open-closed-estimate</a>
<a href="/docs/generated-commands/Expenses.md#create-an-expense">hrvst expenses create</a>
<a href="/docs/generated-commands/Expenses.md#delete-an-expense">hrvst expenses delete</a>
<a href="/docs/generated-commands/Expenses.md#retrieve-a-specific-expense">hrvst expenses get</a>
<a href="/docs/generated-commands/Expenses.md#list-all-expenses">hrvst expenses list</a>
<a href="/docs/generated-commands/Expenses.md#update-an-expense">hrvst expenses update</a>
<a href="/docs/generated-commands/expenses/Categories.md#create-an-expense-category">hrvst expenses categories create</a>
<a href="/docs/generated-commands/expenses/Categories.md#delete-an-expense-category">hrvst expenses categories delete</a>
<a href="/docs/generated-commands/expenses/Categories.md#retrieve-a-specific-expense-category">hrvst expenses categories get</a>
<a href="/docs/generated-commands/expenses/Categories.md#list-all-expense-categories">hrvst expenses categories list</a>
<a href="/docs/generated-commands/expenses/Categories.md#update-an-expense-category">hrvst expenses categories update</a>
<a href="/docs/generated-commands/Invoices.md#create-a-free-form-invoice">hrvst invoices create</a>
<a href="/docs/generated-commands/Invoices.md#delete-an-invoice">hrvst invoices delete</a>
<a href="/docs/generated-commands/Invoices.md#retrieve-a-specific-invoice">hrvst invoices get</a>
<a href="/docs/generated-commands/Invoices.md#list-all-invoices">hrvst invoices list</a>
<a href="/docs/generated-commands/Invoices.md#update-an-invoice">hrvst invoices update</a>
<a href="/docs/generated-commands/invoices/ItemCategories.md#create-an-invoice-item-category">hrvst invoices item-categories create</a>
<a href="/docs/generated-commands/invoices/ItemCategories.md#delete-an-invoice-item-category">hrvst invoices item-categories delete</a>
<a href="/docs/generated-commands/invoices/ItemCategories.md#retrieve-a-specific-invoice-item-category">hrvst invoices item-categories get</a>
<a href="/docs/generated-commands/invoices/ItemCategories.md#list-all-invoice-item-categories">hrvst invoices item-categories list</a>
<a href="/docs/generated-commands/invoices/ItemCategories.md#update-an-invoice-item-category">hrvst invoices item-categories update</a>
<a href="/docs/generated-commands/invoices/LineItems.md#create-an-invoice-line-item">hrvst invoices line-items create</a>
<a href="/docs/generated-commands/invoices/LineItems.md#delete-an-invoice-line-item">hrvst invoices line-items delete</a>
<a href="/docs/generated-commands/invoices/LineItems.md#update-an-invoice-line-item">hrvst invoices line-items update</a>
<a href="/docs/generated-commands/invoices/Messages.md#create-an-invoice-message">hrvst invoices messages create</a>
<a href="/docs/generated-commands/invoices/Messages.md#delete-an-invoice-message">hrvst invoices messages delete</a>
<a href="/docs/generated-commands/invoices/Messages.md#list-all-messages-for-an-invoice">hrvst invoices messages list-by-invoice</a>
<a href="/docs/generated-commands/invoices/Messages.md#mark-a-draft-invoice-as-sent">hrvst invoices messages mark-draft-invoice-as-sent</a>
<a href="/docs/generated-commands/invoices/Messages.md#mark-an-open-invoice-as-closed">hrvst invoices messages mark-open-invoice-as-closed</a>
<a href="/docs/generated-commands/invoices/Messages.md#mark-an-open-invoice-as-a-draft">hrvst invoices messages mark-open-invoice-as-draft</a>
<a href="/docs/generated-commands/invoices/Messages.md#re-open-a-closed-invoice">hrvst invoices messages re-open-closed-invoice</a>
<a href="/docs/commands/TimeTracking.md#log-time">hrvst log &lt;hours&gt; [alias]</a>
<a href="/docs/commands/Login.md">hrvst login</a>
<a href="/docs/commands/TimeTracking.md#update-notes-for-a-timer">hrvst note</a>
<a href="/docs/generated-commands/Projects.md#create-a-project">hrvst projects create</a>
<a href="/docs/generated-commands/Projects.md#delete-a-project">hrvst projects delete</a>
<a href="/docs/generated-commands/Projects.md#retrieve-a-specific-project">hrvst projects get</a>
<a href="/docs/generated-commands/Projects.md#list-all-projects">hrvst projects list</a>
<a href="/docs/generated-commands/Projects.md#update-a-project">hrvst projects update</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#create-a-task-assignment">hrvst projects task-assignments create</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#delete-a-task-assignment">hrvst projects task-assignments delete</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#retrieve-a-specific-task-assignment">hrvst projects task-assignments get</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#list-all-task-assignments">hrvst projects task-assignments list</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#list-task-assignments-for-a-specific-project">hrvst projects task-assignments list-by-project</a>
<a href="/docs/generated-commands/projects/TaskAssignments.md#update-a-task-assignment">hrvst projects task-assignments update</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#create-a-user-assignment">hrvst projects user-assignments create</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#delete-a-user-assignment">hrvst projects user-assignments delete</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#retrieve-a-specific-user-assignment">hrvst projects user-assignments get</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#list-all-user-assignments">hrvst projects user-assignments list</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#list-user-assignments-for-a-specific-project">hrvst projects user-assignments list-by-project</a>
<a href="/docs/generated-commands/projects/UserAssignments.md#update-a-user-assignment">hrvst projects user-assignments update</a>
<a href="/docs/generated-commands/Roles.md#create-a-role">hrvst roles create</a>
<a href="/docs/generated-commands/Roles.md#delete-a-role">hrvst roles delete</a>
<a href="/docs/generated-commands/Roles.md#retrieve-a-specific-role">hrvst roles get</a>
<a href="/docs/generated-commands/Roles.md#list-all-roles">hrvst roles list</a>
<a href="/docs/generated-commands/Roles.md#update-a-role">hrvst roles update</a>
<a href="/docs/commands/TimeTracking.md#start-a-timer">hrvst start [alias]</a>
<a href="/docs/commands/TimeTracking.md#stop-a-timer">hrvst stop</a>
<a href="/docs/generated-commands/Tasks.md#create-a-task">hrvst tasks create</a>
<a href="/docs/generated-commands/Tasks.md#delete-a-task">hrvst tasks delete</a>
<a href="/docs/generated-commands/Tasks.md#retrieve-a-specific-task">hrvst tasks get</a>
<a href="/docs/generated-commands/Tasks.md#list-all-tasks">hrvst tasks list</a>
<a href="/docs/generated-commands/Tasks.md#update-a-task">hrvst tasks update</a>
<a href="/docs/generated-commands/TimeEntries.md#create-a-time-entry-via-start-and-end-time">hrvst time-entries create</a>
<a href="/docs/generated-commands/TimeEntries.md#delete-a-time-entry">hrvst time-entries delete</a>
<a href="/docs/generated-commands/TimeEntries.md#delete-a-time-entrys-external-reference">hrvst time-entries delete-external-reference</a>
<a href="/docs/generated-commands/TimeEntries.md#retrieve-a-specific-time-entry">hrvst time-entries get</a>
<a href="/docs/generated-commands/TimeEntries.md#list-all-time-entries">hrvst time-entries list</a>
<a href="/docs/generated-commands/TimeEntries.md#restart-a-stopped-time-entry">hrvst time-entries restart</a>
<a href="/docs/generated-commands/TimeEntries.md#stop-a-running-time-entry">hrvst time-entries stop</a>
<a href="/docs/generated-commands/TimeEntries.md#update-a-time-entry">hrvst time-entries update</a>
<a href="/docs/generated-commands/Users.md#create-a-user">hrvst users create</a>
<a href="/docs/generated-commands/Users.md#delete-a-user">hrvst users delete</a>
<a href="/docs/generated-commands/Users.md#retrieve-a-specific-user">hrvst users get</a>
<a href="/docs/generated-commands/Users.md#list-all-users">hrvst users list</a>
<a href="/docs/generated-commands/Users.md#retrieve-the-currently-authenticated-user">hrvst users me</a>
<a href="/docs/generated-commands/Users.md#update-a-user">hrvst users update</a>
<a href="/docs/generated-commands/users/BillableRates.md#create-a-billable-rate">hrvst users billable-rates create</a>
<a href="/docs/generated-commands/users/BillableRates.md#retrieve-a-specific-billable-rate">hrvst users billable-rates get</a>
<a href="/docs/generated-commands/users/BillableRates.md#list-all-billable-rates-for-a-specific-user">hrvst users billable-rates list-by-user</a>
<a href="/docs/generated-commands/users/CostRates.md#create-a-cost-rate">hrvst users cost-rates create</a>
<a href="/docs/generated-commands/users/CostRates.md#retrieve-a-specific-cost-rate">hrvst users cost-rates get</a>
<a href="/docs/generated-commands/users/CostRates.md#list-all-cost-rates-for-a-specific-user">hrvst users cost-rates list-by-user</a>
<a href="/docs/generated-commands/users/ProjectAssignments.md#list-active-project-assignments">hrvst users project-assignments list-by-user</a>
<a href="/docs/generated-commands/users/ProjectAssignments.md#list-active-project-assignments-for-the-currently-authenticated-user">hrvst users project-assignments me</a>
</pre>
