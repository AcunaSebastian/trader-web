import { MyButton } from "../../../shared/components/form/MyButton";
import { MyPoStatusChip } from "../../../shared/components/form/MyPoStatusChip";
import { PropertyViewIcon } from "../../../shared/icons/PropertyViewIcon";
import { PurchaseOrder } from "../model/PurchaseOrder";

interface RenderCellProps {
  columnKey: string;
  item: PurchaseOrder;
  handleNavigate?(item: PurchaseOrder): void;
}
export const RenderPOCell = ({
  columnKey,
  item,
  handleNavigate,
}: RenderCellProps) => {
  // const cell = item[columnKey];
  switch (columnKey) {
    case "#":
    default:
      return <span>{item.id}</span>;
    case "Actions":
      return (
        <MyButton
          isIconOnly
          color="default"
          size="sm"
          onClick={() => handleNavigate?.(item)}
        >
          <PropertyViewIcon size={20} color="white" />
        </MyButton>
      );
    case "Sawmill":
      return <span>{item.sawmill}</span>;
    case "PO":
      return <span>{item.po}</span>;
    case "Grade":
      return <span>{item.grade}</span>;
    case "Measure":
      return <span>{`${item.width}x${item.thikness}x${item.large}`}</span>;
    case "M3":
      return <span>{item.quantity}</span>;
    case "Client":
      return <span>{item.client}</span>;
    case "Port":
      return <span>{item.port}</span>;
    case "Insp":
      return <span>{item.inspectionDate}</span>;
    case "ETD":
      return <span>{item.etd}</span>;
    case "ETA":
      return <span>{item.eta}</span>;
    case "Status":
      return <MyPoStatusChip status={item.status} />;
    case "Comments":
      return <span></span>;
    case "Documents":
      return <span></span>;
  }
};
