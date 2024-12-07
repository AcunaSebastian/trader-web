import { PurchaseOrder } from "../../domain/PurchaseOrder";
import { BASE_URL } from "../../shared/config/constant";
import { fetcher, GeneralResponse } from "../../shared/config/fetcher";
import { poAdapter } from "./po-adapter";

export interface GetPOServiceResponse extends GeneralResponse {
  data: PurchaseOrder[];
}

interface Props {
  token: string;
}

export async function getPosService({ token }: Props) {
  try {
    const data = await fetcher<GetPOServiceResponse>({
      url: BASE_URL + "/v1/api/purchase-orders/get-po",
      options: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    });

    return poAdapter(data);
  } catch (error) {
    return { ok: false, message: "Error en getPosService " + error, data: [] };
  }
}
