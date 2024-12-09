import { Pagination } from "@nextui-org/react";

interface Props {
  total: number;
  initialPage?: number;
  itemsPerPage?: number;
  onChangePage?: (page: number) => void;
}
export const MyPagination = ({
  total,
  initialPage = 1,
  itemsPerPage = 10,
  onChangePage,
}: Props) => {
  const totalPage = Math.ceil(total / itemsPerPage);

  return (
    <Pagination
      onChange={onChangePage}
      className=" flex justify-end w-full"
      showShadow
      total={totalPage}
      initialPage={initialPage}
      color="secondary"
    />
  );
};
