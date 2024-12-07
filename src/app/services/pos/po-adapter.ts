import { PurchaseOrder } from "../../domain/PurchaseOrder";
import { GetPOServiceResponse } from "./get-pos-service";

export function poAdapter(data: GetPOServiceResponse) {
  return {
    ok: data?.ok ?? false,
    message: data?.message ?? "Error, no data found",
    data:
      data?.data?.map((el) => {
        const re: PurchaseOrder = {
          id: el?.id ?? 0,
          userId: el?.userId ?? 0,
          sawmill: el?.sawmill ?? "",
          po: el?.po ?? "",
          grade: el?.grade ?? "",
          thikness: el?.thikness ?? "",
          width: el?.width ?? "",
          large: el?.large ?? "",
          quantity: el?.quantity ?? "",
          client: el?.client ?? "",
          inspectionDate: el?.inspectionDate ?? "",
          port: el?.port ?? "",
          etd: el?.etd ?? "",
          eta: el?.eta ?? "",
          status: el?.status ?? "",
        };

        return re;
      }) ?? [],
  };
}
