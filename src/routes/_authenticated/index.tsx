import { createFileRoute } from "@tanstack/react-router";
import { MyPurchaseOrderCard } from "../../app/components/home/MyPurchaseOrderCard";
import { MyCircularProgress } from "../../app/shared/MyCircularProgress";

export const Route = createFileRoute("/_authenticated/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-4 flex flex-col gap-8">
      <section>
        <header className="flex items-center gap-2">
          <MyCircularProgress
            value={5}
            maxValue={10}
            color="success"
            valueLabel="5 / 10"
            classNames={{ svg: "w-20 h-20" }}
          />
          <h1 className="text-3xl font-bold">Purchase Orders</h1>
        </header>
        <main className="mt-4">
          <p>Latest purchase orders.</p>
          <div className="flex flex-wrap gap-8 justify-start">
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
          </div>
        </main>
      </section>
      <section>
        <header className="flex items-center gap-2">
          <MyCircularProgress
            value={2}
            maxValue={7}
            color="warning"
            valueLabel="2 / 7"
            classNames={{ svg: "w-20 h-20" }}
          />
          <h1 className="text-3xl font-bold">Inspections</h1>
        </header>
        <main className="mt-4">
          <p>Latest Inspections</p>
          <div className="flex flex-wrap gap-8 justify-start">
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
            <MyPurchaseOrderCard />
          </div>
        </main>
      </section>
    </div>
  );
}
