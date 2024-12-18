import { createFileRoute } from "@tanstack/react-router";
import PurchaseOrderView from "../../../features/purchase_orders/components/purchase_order_view";

export const Route = createFileRoute("/_authenticated/(PO)/purchase_orders")({
  component: PurchaseOrderView,
});
