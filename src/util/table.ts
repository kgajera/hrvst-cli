import Table from "cli-table";
import get from "lodash/get";
import isPlainObject from "lodash/isPlainObject";

type ColumnValue = boolean | null | number | string | TableData | undefined;
type TableData = { [key: string]: ColumnValue };

/**
 * Create a table to list all `data` elements
 *
 * @param options Options for table; `head` is required and should be a key of
 * a `data` element
 * @param data Array of data to be displayed in table
 * @returns Table instance
 */
export function horizontalTable(
  options: { head: string[] },
  data: TableData[]
): Table {
  const table = new Table(options);

  for (const element of data) {
    const values = [];

    for (const key of options.head) {
      const value = get(element, key.trim());
      values.push(displayValue(value));
    }

    table.push(values);
  }
  return table;
}

/**
 * Create a vertical table (key/value columns) to be used for a single record
 *
 * @param data Data object to be displayed in table
 * @param keys Keys of `data` object to display. If omitted, all will be displayed.
 * @returns Table instance
 */
export function verticalTable(data: TableData, keys: string[] = []): Table {
  const table = new Table();
  addVerticalTableRows(table, data, [], keys);
  return table;
}

/**
 * Converts column value into a string
 *
 * @param value Value to be displayed in table
 * @returns `value` as a string
 */
function displayValue(value: ColumnValue): string {
  return value === null || value === undefined ? "" : String(value);
}

/**
 * Pushes rows to the table for each key in the `data` object. For nested
 * objects, it will display each nested object field using dot notation.
 *
 * @param table Table instance
 * @param data Object to display in table
 * @param parentKeys Parent keys for nested objects
 * @param displayKeys Keys of `data` object to display in table
 */
function addVerticalTableRows(
  table: Table,
  data: TableData,
  parentKeys: string[] = [],
  displayKeys: string[]
) {
  const keys = Object.keys(data);

  for (const key of keys) {
    const value = data[key];
    const keyPath = [...parentKeys, key];

    if (isPlainObject(value)) {
      addVerticalTableRows(table, value as TableData, keyPath, displayKeys);
    } else {
      const keyPathDotNotation = keyPath.join(".");
      if (
        displayKeys?.length &&
        displayKeys.indexOf(keyPathDotNotation) === -1
      ) {
        continue;
      }

      const stringValue = displayValue(value);
      if (stringValue.length) {
        table.push({ [keyPathDotNotation]: displayValue(value) });
      }
    }
  }
}
