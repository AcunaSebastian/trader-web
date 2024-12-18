interface Props {
  url: string;
  options?: RequestInit;
}

export interface GeneralResponse {
  ok: boolean;
  message: string;
}

export interface GeneralResponseWithData<T> {
  ok: boolean;
  message: string;
  data: T;
}

export async function fetcher<T>({ url, options }: Props) {
  const response = await fetch(url, options);

  const contentType =
    response.headers.get("Content-Type") ?? "application/json";

  switch (contentType) {
    case "application/xml":
      return response.text() as Promise<T>;
    case "text/plain":
      return response.text() as Promise<T>;
    case "blob":
      return response.blob() as Promise<T>;
    case "application/json":
    default:
      return response.json() as Promise<T>;
  }
}
