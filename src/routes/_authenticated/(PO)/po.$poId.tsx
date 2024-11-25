import { Button, Chip, Input } from '@nextui-org/react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/(PO)/po/$poId')({
  loader: async () => {},
  component: () => <PurchaseOrdersPage />,
})

function PurchaseOrdersPage() {
  //   const { poId } = Route.useParams();
  return (
    <div className="p-4 px-8">
      <header>
        <h1 className="text-3xl font-bold">#PO3124124124</h1>
        <h4 className="text-sm">
          LLasa, Klang, Malaysia
          <Chip radius="sm" variant="shadow" color="success" className="ml-2">
            Enviada
          </Chip>
        </h4>
      </header>
      <main className="mt-6">
        <form className="flex flex-col gap-4">
          <div className="flex gap-4 items-start w-ful flex-col md:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <Input label="PO #" size="sm" variant="flat" />
              <div className="flex gap-4 items-end">
                <Input label="Thickness" size="sm" variant="flat" />
                <Input label="Width" size="sm" variant="flat" />
                <Input label="Large" size="sm" variant="flat" />
              </div>
              <div className="flex gap-4">
                <Input label="Grade" size="sm" variant="flat" />
                <Input label="M3" size="sm" variant="flat" />
              </div>
              <Input label="Client" size="sm" variant="flat" />
              <Input
                label="Inspection Date"
                size="sm"
                variant="flat"
                type="date"
              />
              <Input label="Port" size="sm" variant="flat" />
              <div className="flex gap-4">
                <Input label="ETD" type="date" size="sm" variant="flat" />
                <Input label="ETA" type="date" size="sm" variant="flat" />
              </div>
            </div>
            <div className="md:-mt-8 flex flex-col gap-2  w-full">
              <h3>Documents</h3>
              <div className="bg-neutral-700  rounded-lg p-4">
                <ul>
                  <li>document1.pdf</li>
                  <li>document2.pdf</li>
                  <li>document3.pdf</li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="flex gap-4 justify-end md:w-[50%] px-2">
            <Button color="default" as={Link} to="/purchase_orders" replace>
              Cancelar
            </Button>
            <Button color="primary"> Guardar</Button>
          </footer>
        </form>
      </main>
    </div>
  )
}
