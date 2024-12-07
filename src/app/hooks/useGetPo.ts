import { useCallback, useEffect, useState } from "react";
import { getPosService } from "../services/pos/get-pos-service";
import authStore from "../store/authStore";
import { PurchaseOrder } from "../domain/PurchaseOrder";
import toast from "react-hot-toast";

export function useGetPo() {
  const [data, setData] = useState<PurchaseOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = authStore((state) => state.token);
  const [firstLoad, setFirstLoad] = useState(true);
  const getService = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getPosService({ token });

      if (!response.ok) {
        toast.error(response.message);
      }
      setData(response.data);
      toast.success("Purchase Orders loaded");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, token]);

  useEffect(() => {
    if (!firstLoad) return;
    setFirstLoad(false);
    getService();
  }, [isLoading, getService, setFirstLoad, firstLoad]);

  return {
    isLoading,
    data,

    getService,
  };
}
