import { Chip } from "@nextui-org/react";
import { PurchaseOrderStatus } from "../../../features/purchase_orders/model/PurchaseOrder";
import { Color } from "../../config/types";

interface Props {
  status: PurchaseOrderStatus;
  variant?:
    | "shadow"
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "dot"
    | undefined;
}

const statusMap: Record<PurchaseOrderStatus, { color: Color }> = {
  APPROVED: { color: "primary" },
  CANCELED: { color: "danger" },
  COMPLETED: { color: "success" },
  PENDING: { color: "warning" },
  REJECTED: { color: "danger" },
};

export const MyPoStatusChip = ({ status, variant = "shadow" }: Props) => {
  return (
    <Chip color={statusMap[status].color} variant={variant}>
      {status}
    </Chip>
  );
};
