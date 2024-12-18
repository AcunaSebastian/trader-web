import { BASE_URL } from "../../../shared/config/constant";
import { fetcher } from "../../../shared/config/fetcher";
import { poAdapterResponse } from "../adapters/po_adapter";
import { GetPOServiceResponse } from "../model/PurchaseOrder";

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

    return poAdapterResponse(data);
  } catch (error) {
    throw Error("Error en getPosService " + error);
  }
}
