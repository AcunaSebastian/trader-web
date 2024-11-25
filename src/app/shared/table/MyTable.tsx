import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export interface MyTableProps {
  columns: MyTableColumns[];
  data: unknown[];
  renderBody?(rowItem: unknown): JSX.Element;
}

export interface MyTableColumns {
  title: string;
  allowsSorting?: boolean;
}

export const MyTable = ({ columns, data }: MyTableProps) => {
  return (
    <Table fullWidth>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn allowsSorting={column.allowsSorting}>
            {column.title}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data.length == 0 ? (
          <TableRow>
            <TableCell colSpan={columns.length}>No data</TableCell>
          </TableRow>
        ) : (
          <div></div>
          // data.map((rowItem) => {
          //   return <TableRow> {renderBody?.(rowItem)} </TableRow>;
          // })
        )}
      </TableBody>
    </Table>
  );
};
