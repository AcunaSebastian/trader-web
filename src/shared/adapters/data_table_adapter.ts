import { v4 as uuid } from "uuid";

interface TableData {
  rowId: string;
}

export type DataTable<T> = TableData & T;

export function dataTableAdater<T>(data: T[]): DataTable<T>[] {
  return data.map((el) => {
    return {
      rowId: uuid(),
      ...el,
    };
  });
}
