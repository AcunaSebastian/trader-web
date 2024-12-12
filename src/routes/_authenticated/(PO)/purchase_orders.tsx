import { createFileRoute } from "@tanstack/react-router";
import { MyPoTable } from "../../../app/components/PO/MyPoTable";
import { MyPagination } from "../../../app/components/shared/form/table/MyPagination";
import { useGetPo } from "../../../app/hooks/useGetPo";

export const Route = createFileRoute("/_authenticated/(PO)/purchase_orders")({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  const { isLoading, data } = useGetPo();
  const search = Route.useSearch<{ page: number; limit: number }>();

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
          <MyPoTable data={data.register} />
          <MyPagination total={data.total} initialPage={search.page} />
        </div>
      </main>
    </div>
  );
}
