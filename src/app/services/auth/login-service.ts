import { MyUser } from "../../domain/user";
import { BASE_URL } from "../../shared/config/constant";
import { fetcher, GeneralResponse } from "../../shared/config/fetcher";

export interface LoginServiceResponse extends GeneralResponse {
  data: {
    user: MyUser;
    token: string;
  } | null;
}

export async function loginService(
  user: Omit<MyUser, "id" | "isActive">
): Promise<LoginServiceResponse> {
  try {
    const response = await fetcher<LoginServiceResponse>({
      url: BASE_URL + "/v1/api/auth/login",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
    });
    return response;
  } catch (error) {
    return {
      ok: false,
      message: "Error en loginService " + error,
      data: null,
    };
  }
}
