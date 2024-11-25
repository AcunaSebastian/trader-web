import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { PropertyViewIcon } from "../../shared/icons/PropertyViewIcon";
import { DocumentAttachmentIcon } from "../../shared/icons/DocumentAttachent";

export const MyPoTable = () => {
  return (
    <Table fullWidth>
      <TableHeader>
        <TableColumn allowsSorting>#</TableColumn>
        <TableColumn>Actions</TableColumn>
        <TableColumn>Sawmill</TableColumn>
        <TableColumn>PO</TableColumn>
        <TableColumn>Grade</TableColumn>
        <TableColumn>Measure</TableColumn>
        <TableColumn>M3</TableColumn>
        <TableColumn>Client</TableColumn>
        <TableColumn>Port</TableColumn>
        <TableColumn>Insp. Date</TableColumn>
        <TableColumn>ETD</TableColumn>
        <TableColumn>ETA</TableColumn>
        <TableColumn>Comments</TableColumn>
        <TableColumn>Documents</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key={1}>
          <TableCell>15</TableCell>
          <TableCell>
            <Button isIconOnly color="default" size="sm" as={Link} to="/po/15">
              <PropertyViewIcon size={20} color="white" />
            </Button>
          </TableCell>
          <TableCell>Llasa</TableCell>
          <TableCell>PO#070324MAR</TableCell>
          <TableCell className="whitespace-nowrap">COL B NO BS 2</TableCell>
          <TableCell className="whitespace-nowrap">32 x 90 x 2M UP</TableCell>
          <TableCell>150</TableCell>
          <TableCell>Super Woordlands</TableCell>
          <TableCell>Klang, Malaysia</TableCell>
          <TableCell className="whitespace-nowrap">12-05-2024</TableCell>
          <TableCell className="whitespace-nowrap">08-05-2024</TableCell>
          <TableCell className="whitespace-nowrap">26-06-2024</TableCell>
          <TableCell>
            <Chip radius="sm" variant="shadow" color="success">
              Enviada
            </Chip>
          </TableCell>
          <TableCell>
            <Button isIconOnly size="sm" color="default">
              <DocumentAttachmentIcon size={20} color="white" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
