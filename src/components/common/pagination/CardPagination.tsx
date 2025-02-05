import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { IPaginationState } from "@/types/commonTypes";
import { Group, HStack, PaginationRootProps } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export interface ICardPagination extends PaginationRootProps {
  pageParams: IPaginationState;
  setPageParams: Dispatch<SetStateAction<IPaginationState>>;
}
export default function CardPagination({
  pageParams,
  setPageParams,
  ...rest
}: ICardPagination) {
  return (
    <PaginationRoot
      {...rest}
      pageSize={pageParams.pageSize}
      onPageChange={(e) =>
        setPageParams({ ...pageParams, pageIndex: e.page - 1 })
      }
    >
      <HStack justifyContent={"flex-end"}>
        <Group attached>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </Group>
      </HStack>
    </PaginationRoot>
  );
}
