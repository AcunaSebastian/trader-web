import { createLazyFileRoute } from "@tanstack/react-router";
import { MyPoTable } from "../../../app/components/PO/MyPoTable";
import { Pagination } from "@nextui-org/react";
import { useGetPo } from "../../../app/hooks/useGetPo";

export const Route = createLazyFileRoute(
  "/_authenticated/(PO)/purchase_orders"
)({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  const { isLoading, data } = useGetPo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Purchase Orders</h1>
      </header>
      <main>
        <div className=" flex flex-col p-2 gap-6 w-full overflow-x-auto">
          <MyPoTable data={data} />
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
