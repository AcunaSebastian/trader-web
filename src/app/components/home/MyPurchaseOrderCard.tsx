import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { PropertyViewIcon } from "../../shared/icons/PropertyViewIcon";

export const MyPurchaseOrderCard = () => {
  return (
    <Card className="min-w-64" isFooterBlurred inlist={true}>
      <CardHeader className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold"># PO 231241</h2>
          <p className="text-sm font-light">Leonera, Concepcion</p>
          <p className="text-xs font-extralight">22-10-2024</p>
        </div>
        <span className="text-2xl font-extrabold px-4 py-2 rounded-full border-large border-red-600">
          P
        </span>
      </CardHeader>
      <CardBody>
        <p>details</p>
        <ul className="list-disc ml-4">
          <li>1 40x40x120 mm</li>
          <li>1 40x40x120 mm</li>
          <li>1 40x40x120 mm</li>
        </ul>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Link to="/purchase_orders">
          <PropertyViewIcon color="white" />
        </Link>
      </CardFooter>
    </Card>
  );
};
