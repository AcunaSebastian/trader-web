import { PurchaseOrder } from "../../domain/PurchaseOrder";
import { BASE_URL } from "../../shared/config/constant";
import { fetcher, GeneralResponse } from "../../shared/config/fetcher";
import { poAdapter } from "./po-adapter";

export interface GetPOServiceResponse extends GeneralResponse {
  data: DataPOType;
}

export type DataPOType = {
  register: PurchaseOrder[];
  total: number;
};

interface Props {
  token: string;
  params?: string;
}

export async function getPosService({ token, params }: Props) {
  try {
    const data = await fetcher<GetPOServiceResponse>({
      url: `${BASE_URL}/v1/api/purchase-orders/get-po${params}`,
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
    return {
      ok: false,
      message: "Error en getPosService " + error,
      data: { register: [], total: 0 },
    };
  }
}
