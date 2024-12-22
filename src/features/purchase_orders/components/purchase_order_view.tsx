import { MyPoTable } from "./MyPoTable";

import { Route } from "../../../routes/_authenticated/(PO)/purchase_orders";
import { useGetPo } from "../hooks/useGetPo";
import { MyPagination } from "../../../shared/components/form/table/MyPagination";
import { Chip } from "@nextui-org/react";
import { MyButton } from "../../../shared/components/form/MyButton";

export default function PurchaseOrderView() {
  const { isLoading, data, total } = useGetPo();
  const search = Route.useSearch<{ page: number; limit: number }>();
  const navigate = Route.useNavigate();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <header className="px-6 py-4 flex flex-col gap-4">
        <section className="flex items-center gap-2 justify-between">
          <h1 className="text-3xl font-bold">Purchase Orders</h1>
          <MyButton
            color="primary"
            variant="shadow"
            onClick={() => navigate({ to: `/purchase_orders`, replace: false })}
          >
            Add PO
          </MyButton>
        </section>

        <section className="flex flex-col gap-2">
          <h4 className="text-medium font-light"> filters applied: </h4>
          <div>
            <Chip
              className="p-2"
              color="secondary"
              endContent={<div className="p-2">X</div>}
            >
              po1
            </Chip>
          </div>
        </section>
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
