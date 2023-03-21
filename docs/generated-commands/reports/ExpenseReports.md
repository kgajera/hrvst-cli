# Expense Reports

Information pertaining to retrieving expense reports.

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/)

## Clients Expense Report

Clients Expense Report shows expense totals for each client where expenses are present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each expense report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days)

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/#clients-report)

```
hrvst reports expense-reports clients-expense-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Projects Expense Report

Projects Expense Report shows expense totals for each project where expenses are present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each expense report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days)

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/#projects-report)

```
hrvst reports expense-reports projects-expense-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Expense Categories Report

Expense Categories Report shows expense totals for each expense category where expenses are present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each expense report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days)

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/#expense-categories-report)

```
hrvst reports expense-reports categories-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Team Expense Report

Team Expense Report shows expense totals for each user where expenses are present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each expense report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days)

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/#team-report)

```
hrvst reports expense-reports team-expense-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |
