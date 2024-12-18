import { GeneralResponseWithData } from "../../../shared/config/fetcher";

export type PurchaseOrderStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELED"
  | "COMPLETED";

export interface PurchaseOrder {
  id: number;
  userId: number;
  sawmill: string;
  po: string;
  grade: string;
  thikness: string;
  width: string;
  large: string;
  quantity: string;
  client: string;
  inspectionDate: string;
  port: string;
  etd: string;
  eta: string;
  status: PurchaseOrderStatus;
}

export type GetPOServiceResponse = GeneralResponseWithData<{
  pos: PurchaseOrder[];
  total: number;
}>;
