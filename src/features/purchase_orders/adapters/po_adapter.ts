import { GetPOServiceResponse, PurchaseOrder } from "../model/PurchaseOrder";

export function poAdapter(data: any): PurchaseOrder {
  return {
    id: data?.id ?? 0,
    userId: data?.userId ?? "",
    sawmill: data?.sawmill ?? "",
    po: data?.po ?? "",
    grade: data?.grade ?? "",
    thikness: data?.thikness ?? "",
    width: data?.width ?? "",
    large: data?.large ?? "",
    quantity: data?.quantity ?? "",
    client: data?.client ?? "",
    inspectionDate: data?.inspectionDate ?? "",
    port: data?.port ?? "",
    etd: data?.etd ?? "",
    eta: data?.eta ?? "",
    status: data?.status ?? "",
  };
}

export function poAdapterResponse(data: any): GetPOServiceResponse {
  return {
    ok: data?.ok ?? false,
    message: data?.message ?? "Error, no data found",
    data: {
      pos: data?.data?.pos?.map(poAdapter) ?? [],
      total: data?.data?.total ?? 0,
    },
  };
}
