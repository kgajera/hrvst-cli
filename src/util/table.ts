import Table from "cli-table";
import get from "lodash/get";

type ColumnValue = boolean | null | number | string | undefined;

export function horizontalTable(
  options: { head: string[] },
  data: { [key: string]: ColumnValue }[]
): Table {
  const table = new Table(options);

  for (const element of data) {
    const values = [];

    for (const key of options.head) {
      const value = get(element, key);
      values.push(displayValue(value));
    }

    table.push(values);
  }
  return table;
}

export function verticalTable(data: { [key: string]: ColumnValue }): Table {
  const table = new Table();
  const keys = Object.keys(data);
  for (const key of keys) {
    const value = data[key];
    table.push({ [key]: displayValue(value) });
  }
  return table;
}

function displayValue(value: ColumnValue) {
  return value === null || value === undefined ? "" : value;
}
