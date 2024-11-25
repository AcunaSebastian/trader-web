import { createLazyFileRoute } from "@tanstack/react-router";
import { MyPoTable } from "../../../app/components/PO/MyPoTable";
import { Pagination } from "@nextui-org/react";

export const Route = createLazyFileRoute(
  "/_authenticated/(PO)/purchase_orders"
)({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Purchase Orders</h1>
      </header>
      <main>
        <div className=" flex flex-col p-2 gap-6 w-full overflow-x-auto">
          <MyPoTable />
          <Pagination
            className=" flex justify-end w-full"
            showShadow
            total={10}
            initialPage={1}
            color="secondary"
          />
        </div>
      </main>
    </div>
  );
}
