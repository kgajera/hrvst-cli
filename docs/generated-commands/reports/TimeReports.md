# Time Reports

Information pertaining to retrieving time entries reports.

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/time-reports/)

## Clients Time Report

Clients Time Report shows the hours and billable information for each client where tracked time is present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each time report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days).

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/time-reports/#clients-report)

```
hrvst reports time-reports clients-time-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Projects Time Report

Projects Time Report shows the hours and billable information for each project where tracked time is present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each time report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days).

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/time-reports/#projects-report)

```
hrvst reports time-reports projects-time-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Tasks Time Report

Tasks Time Report shows the hours and billable information for each task where tracked time is present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each time report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days).

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/time-reports/#tasks-report)

```
hrvst reports time-reports tasks-time-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Team Time Report

Team Time Report shows the hours and billable information for each user where tracked time is present for a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each time report request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days).

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/time-reports/#team-report)

```
hrvst reports time-reports team-time-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |
