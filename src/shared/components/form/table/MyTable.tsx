import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { DataTable } from "../../../adapters/data_table_adapter";
import { MyTableColumns } from "../../../config/interfaces";
import { MyCircularProgress } from "../../MyCircularProgress";

export interface MyTableProps<T> {
  columns: MyTableColumns[];
  data: DataTable<T>[];
  isLoading: boolean;
  renderBody(rowItem: T): JSX.Element;
  isFullWidthTable?: boolean;
  isHeaderSticky?: boolean;
}

export function MyTable<T>({
  isLoading,
  isFullWidthTable,
  isHeaderSticky,
  columns,
  data,
  renderBody,
}: MyTableProps<T>) {
  return (
    <Table fullWidth={isFullWidthTable} isHeaderSticky={isHeaderSticky}>
      <TableHeader>
        {columns.map((column) => {
          return (
            <TableColumn
              key={column.title}
              allowsSorting={column.allowsSorting}
            >
              {column.title}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={data}
        loadingContent={
          <MyCircularProgress valueLabel="Loading..." color="primary" />
        }
        emptyContent="No Data"
      >
        {(items) => renderBody?.(items)}
      </TableBody>
    </Table>
  );
}
