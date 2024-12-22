import { TableCell, TableRow } from "@nextui-org/react";
import { dataTableAdater } from "../../../shared/adapters/data_table_adapter";
import { MyTable } from "../../../shared/components/form/table/MyTable";
import { PurchaseOrder } from "../model/PurchaseOrder";
import { PO_COLUMNS } from "../utils/columns";
import { RenderPOCell } from "./render_po_table_cell";
import { useNavigate } from "@tanstack/react-router";

interface Props {
  data: PurchaseOrder[];
  isLoading?: boolean;
}

export const MyPoTable = ({ data, isLoading = false }: Props) => {
  const navigate = useNavigate();
  return (
    <MyTable
      columns={PO_COLUMNS}
      data={dataTableAdater(data)}
      isFullWidthTable
      isHeaderSticky
      isLoading={isLoading}
      renderBody={(el) => (
        <TableRow key={el.id}>
          {(columnKey) => (
            <TableCell>
              {RenderPOCell({
                columnKey: columnKey as string,
                item: el,
                handleNavigate: (item) => {
                  console.log(item);
                  navigate({
                    to: `/purchase_orders/${item.id}`,
                    replace: false,
                  });
                },
              })}
            </TableCell>
          )}
        </TableRow>
      )}
    />
  );
};
