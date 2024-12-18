import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { PurchaseOrder } from "../model/PurchaseOrder";
import { DocumentAttachmentIcon } from "../../../shared/icons/DocumentAttachent";
import { PropertyViewIcon } from "../../../shared/icons/PropertyViewIcon";
import { MyPoStatusChip } from "../../../shared/components/form/MyPoStatusChip";

interface Props {
  data: PurchaseOrder[];
}

const COLUMNS = [
  { title: "#", allowsSorting: true },
  { title: "Actions", allowsSorting: false },
  { title: "Sawmill", allowsSorting: true },
  { title: "PO", allowsSorting: true },
  { title: "Grade", allowsSorting: true },
  { title: "Measure", allowsSorting: true },
  { title: "M3", allowsSorting: true },
  { title: "Client", allowsSorting: true },
  { title: "Port", allowsSorting: true },
  { title: "Insp. Date", allowsSorting: true },
  { title: "ETD", allowsSorting: true },
  { title: "ETA", allowsSorting: true },
  { title: "Status", allowsSorting: true },
  { title: "Comments", allowsSorting: true },
  { title: "Documents", allowsSorting: true },
];

export const MyPoTable = ({ data }: Props) => {
  return (
    <Table fullWidth>
      <TableHeader>
        {COLUMNS.map((column) => {
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
      <TableBody>
        {data?.map((el, idx) => {
          return (
            <TableRow key={el.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                <Button
                  isIconOnly
                  color="default"
                  size="sm"
                  as={Link}
                  to="/po/15"
                >
                  <PropertyViewIcon size={20} color="white" />
                </Button>
              </TableCell>
              <TableCell>{el.sawmill}</TableCell>
              <TableCell>{el.po}</TableCell>
              <TableCell>{el.grade}</TableCell>
              <TableCell>
                {`${el.thikness} x ${el.width} x ${el.large}`}
              </TableCell>
              <TableCell>{el.quantity}</TableCell>
              <TableCell>{el.client}</TableCell>
              <TableCell>{el.port}</TableCell>
              <TableCell>{el.inspectionDate}</TableCell>
              <TableCell>{el.etd}</TableCell>
              <TableCell>{el.eta}</TableCell>
              <TableCell>
                <MyPoStatusChip status={el.status} />
              </TableCell>
              <TableCell>{""}</TableCell>
              <TableCell>
                <Button isIconOnly size="sm" color="default">
                  <DocumentAttachmentIcon size={20} color="white" />
                </Button>
              </TableCell>
            </TableRow>
          );
        }) ?? (
          <TableRow>
            <TableCell>No data</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
