import { MyPoTable } from "./MyPoTable";

import { Route } from "../../../routes/_authenticated/(PO)/purchase_orders";
import { useGetPo } from "../hooks/useGetPo";
import { MyPagination } from "../../../shared/components/form/table/MyPagination";

export default function PurchaseOrderView() {
  const { isLoading, data, total } = useGetPo();
  const search = Route.useSearch<{ page: number; limit: number }>();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">Purchase Orders</h1>
      </header>
      <main>
        <div className=" flex flex-col p-2 gap-6 w-full overflow-x-auto">
          <MyPoTable data={data} isLoading={isLoading} />
          <MyPagination total={total} initialPage={search.page} />
        </div>
      </main>
    </div>
  );
}
