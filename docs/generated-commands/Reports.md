# Reports

Information pertaining to retrieving various reports. Admin or project manager permissions required.

[Link to documentation](https://help.getharvest.com/api-v2/reports-api/)

## Uninvoiced Report

The Uninvoiced Report highlights the uninvoiced hours and expenses for all billable projects in a given timeframe.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

Note: Each request requires both the `from` and `to` parameters to be supplied in the URL’s query string. The timeframe supplied cannot exceed 1 year (365 days).

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/uninvoiced-report/)

```
hrvst reports uninvoiced-report
```

| Option       | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `--from`     | Only report on expenses with a spent_date on or after the given date.   | true     |
| `--to`       | Only report on expenses with a spent_date on or before the given date.  | true     |
| `--page`     | The page number to use in pagination. Use `all` to retrieve all pages.  | false    |
| `--per_page` | The number of records to return per page. Can range between 1 and 2000. | false    |
| `--fields`   | Comma separated list of fields to display in the output.                | false    |
| `--output`   | The output format: json, table                                          | false    |

## Project Budget Report

The Project Budget Report highlights budget information for projects that have been assigned a budget.

The response contains an object with a `results` property that contains an array of up to `per_page` results. Each entry in the array is a separate result object. If no more results are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your results.

[Link to Documentation](https://help.getharvest.com/api-v2/reports-api/reports/project-budget-report/)

```
hrvst reports project-budget-report
```

| Option        | Description                                                                     | Required |
| ------------- | ------------------------------------------------------------------------------- | -------- |
| `--page`      | The page number to use in pagination. Use `all` to retrieve all pages.          | false    |
| `--per_page`  | The number of records to return per page. Can range between 1 and 2000.         | false    |
| `--is_active` | Pass true to only return active projects and false to return inactive projects. | false    |
| `--fields`    | Comma separated list of fields to display in the output.                        | false    |
| `--output`    | The output format: json, table                                                  | false    |
