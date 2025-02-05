"use client";
import EmptyStateComponent from "@/components/common/EmptyState";
import CardFilter from "@/components/common/filter/CardFilter";
import CardPagination from "@/components/common/pagination/CardPagination";
import PageLayout from "@/components/layouts/PageLayout";
import EventsCardSkeleton from "@/features/events/components/EventsCardSkeleton";
import { IPaginationState } from "@/types/commonTypes";
import { paginateData } from "@/utils/formatters";
import { Grid, Separator } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface CardListPageLayoutProps<T> {
  title: string;
  data: T[];
  isLoading: boolean;
  emptyStateMessage: string;
  filterKeys: (keyof T)[];
  renderItem: (item: T) => ReactNode;
}

export default function CardListPageLayout<T extends object>({
  title,
  data,
  isLoading,
  filterKeys,
  emptyStateMessage,
  renderItem,
}: CardListPageLayoutProps<T>) {
  const [filteredData, setFilteredData] = useState<T[] | undefined>();
  const [pageParams, setPageParams] = useState<IPaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });

  useEffect(() => {
    setPageParams((prev) => ({ ...prev, pageIndex: 0 }));
  }, [filteredData]);

  const currentData = filteredData ?? data ?? [];
  const paginatedData = paginateData(currentData, pageParams);

  return (
    <PageLayout pageTitle={title}>
      <Skeleton loading={isLoading}>
        <CardFilter<T>
          data={data ?? []}
          filterKeys={filterKeys}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        />
      </Skeleton>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(auto-fit, minmax(490px, 1fr))",
        }}
        justifyItems="stretch"
        gap={6}
      >
        {isLoading ? (
          <EventsCardSkeleton />
        ) : paginatedData.length === 0 ? (
          <EmptyStateComponent message={emptyStateMessage} />
        ) : (
          paginatedData.map((item) => renderItem(item))
        )}
      </Grid>
      <Separator my={2} />
      <CardPagination
        pageParams={pageParams}
        setPageParams={setPageParams}
        count={currentData.length}
      />
    </PageLayout>
  );
}
