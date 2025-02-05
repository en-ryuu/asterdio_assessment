import { ReactNode } from "react";

export type IWithChildrenProps = {
  children: ReactNode;
};

export type IPaginationState = {
  pageIndex: number;
  pageSize: number;
};
