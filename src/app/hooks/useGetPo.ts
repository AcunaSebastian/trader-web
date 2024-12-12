import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DataPOType, getPosService } from "../services/pos/get-pos-service";
import authStore from "../store/authStore";
import { Route } from "../../routes/_authenticated";

export function useGetPo() {
  const search = Route.useSearch();

  const [data, setData] = useState<DataPOType>({ register: [], total: 0 });
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
        setData(response.data);
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

    console.log("q", query);
    getService({
      params: query,
    });
  }, [getService, search]);

  return {
    isLoading,
    data,

    getService,
  };
}
