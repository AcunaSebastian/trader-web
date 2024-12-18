import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Route } from "../../../routes/_authenticated";
import authStore from "../../authentication/store/authStore";
import { PurchaseOrder } from "../model/PurchaseOrder";
import { getPosService } from "../services/get_pos_service";

export function useGetPo() {
  const search = Route.useSearch();

  const [data, setData] = useState<PurchaseOrder[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = authStore((state) => state.token);
  const getService = useCallback(
    async ({ params = "" }: { params?: string }) => {
      try {
        setIsLoading(true);
        const response = await getPosService({ token, params });

        if (!response.ok) {
          toast.error(response.message);
        }

        setData(response.data.pos);
        setTotal(response.data.total);
        // toast.success("Purchase Orders loaded");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, token]
  );

  useEffect(() => {
    const query = `?${Object.entries(search)
      .map((el) => el.map((el) => `${el}`).join("="))
      .join("&")}`;

    getService({
      params: query,
    });
  }, [getService, search]);

  return {
    isLoading,
    data,
    total,
    getService,
  };
}
