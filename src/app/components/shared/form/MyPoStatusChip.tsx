import { Chip } from "@nextui-org/react";
import { PurchaseOrderStatus } from "../../../domain/PurchaseOrder";
import { Color } from "../../../shared/config/types";

interface Props {
  status: PurchaseOrderStatus;
}

const statusMap: Record<PurchaseOrderStatus, { color: Color }> = {
  APPROVED: { color: "primary" },
  CANCELED: { color: "danger" },
  COMPLETED: { color: "success" },
  PENDING: { color: "warning" },
  REJECTED: { color: "danger" },
};

export const MyPoStatusChip = ({ status }: Props) => {
  return (
    <Chip color={statusMap[status].color} variant="shadow">
      {status}
    </Chip>
  );
};
