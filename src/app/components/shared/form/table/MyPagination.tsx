import { Pagination } from "@nextui-org/react";
import { Route } from "../../../../../routes/__root";

interface Props {
  total: number;
  initialPage?: number;
}
export const MyPagination = ({ total = 0, initialPage = 1 }: Props) => {
  const search = Route.useSearch<{ page: number; limit: number }>();
  const navigate = Route.useNavigate();
  const totalPage = Math.ceil(total / search.limit);

  return (
    <Pagination
      onChange={(page) => {
        navigate({ search: { page: page, limit: search.limit } });
      }}
      className=" flex justify-end w-full"
      showShadow
      total={totalPage}
      initialPage={initialPage}
      color="secondary"
    />
  );
};
