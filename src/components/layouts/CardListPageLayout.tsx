"use client";
import EmptyStateComponent from "@/components/common/EmptyState";
import CardFilter from "@/components/common/filter/CardFilter";
import CardPagination from "@/components/common/pagination/CardPagination";
import PageLayout from "@/components/layouts/PageLayout";
import EventsCardSkeleton from "@/features/events/components/EventsCardSkeleton";
import { IPaginationState } from "@/types/commonTypes";
import { paginateData } from "@/utils/formatters";
import { Grid, HStack, Input, Separator } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ReactNode, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { Button } from "../ui/button";
import { InputGroup } from "../ui/input-group";
import { Skeleton } from "../ui/skeleton";

interface CardListPageLayoutProps<T> {
  title: string;
  data: T[];
  isLoading: boolean;
  emptyStateMessage: string;
  filterKeys: (keyof T)[];
  searchKey: keyof T;
  dateKey: keyof T;
  renderItem: (item: T) => ReactNode;
}

export default function CardListPageLayout<T extends object>({
  title,
  data,
  isLoading,
  filterKeys,
  emptyStateMessage,
  searchKey,
  dateKey,
  renderItem,
}: CardListPageLayoutProps<T>) {
  const [filteredData, setFilteredData] = useState<T[]>();
  const [sortByAsc, setSortByAsc] = useState(false);
  const [pageParams, setPageParams] = useState<IPaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setPageParams((prev) => ({ ...prev, pageIndex: 0 }));
  }, [filteredData]);

  useEffect(() => {
    let newData = [...data];

    if (searchQuery.trim()) {
      newData = newData.filter((item) =>
        String(item[searchKey] ?? "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    newData.sort((a, b) => {
      const dateA = dayjs(a[dateKey] as string).valueOf();
      const dateB = dayjs(b[dateKey] as string).valueOf();
      return sortByAsc ? dateB - dateA : dateA - dateB;
    });

    setFilteredData(newData);
  }, [searchQuery, sortByAsc, data]);

  const currentData = filteredData ?? [];
  const paginatedData = paginateData(currentData, pageParams);

  return (
    <PageLayout pageTitle={title}>
      <Skeleton loading={isLoading}>
        <HStack justifyContent={"space-between"} gap={4}>
          <InputGroup endElement={<BiSearch />} marginEnd={"auto"}>
            <Input
              placeholder="Search..."
              value={searchQuery}
              maxW={"300px"}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Button onClick={() => setSortByAsc(!sortByAsc)} size={"sm"}>
            Date{" "}
            {sortByAsc ? (
              <>
                Dec <HiSortDescending />
              </>
            ) : (
              <>
                Asc <HiSortAscending />
              </>
            )}
          </Button>
          <CardFilter<T>
            data={data ?? []}
            filterKeys={filterKeys}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          />
        </HStack>
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
