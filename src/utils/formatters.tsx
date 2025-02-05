import { IPaginationState } from "@/types/commonTypes";

export const formatKeyToLabel = (key: string) => {
  return key
    .replace(/([A-Z])/g, " $1") // Adds space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalizes the first letter
};

export const paginateData = <T,>(
  data: T[],
  { pageIndex, pageSize }: IPaginationState
) => data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
