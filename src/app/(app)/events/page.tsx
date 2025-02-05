"use client";
import EmptyStateComponent from "@/components/common/EmptyState";
import CardFilter from "@/components/common/filter/CardFilter";
import CardPagination from "@/components/common/pagination/CardPagination";
import PageLayout from "@/components/layouts/PageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import EventsCardSkeleton from "@/features/events/components/EventsCardSkeleton";
import { IEventData } from "@/features/events/types";
import { useFetchEvents } from "@/services/service-events";
import { IPaginationState } from "@/types/commonTypes";
import { Grid, Separator } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const paginateData = <T,>(
  data: T[],
  { pageIndex, pageSize }: IPaginationState
) => data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

export default function EventsPage() {
  const { data: eventsList, isPending: isEventsListPending } = useFetchEvents();
  const [filteredData, setFilteredData] = useState<IEventData[] | undefined>();
  const [pageParams, setPageParams] = useState<IPaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });

  useEffect(() => {
    setPageParams((prev) => ({ ...prev, pageIndex: 0 }));
  }, [filteredData]);

  const currentData = filteredData ?? eventsList ?? [];
  const paginatedData = paginateData(currentData, pageParams);

  return (
    <PageLayout pageTitle="Events">
      <CardFilter<IEventData>
        data={eventsList ?? []}
        filterKeys={["location", "organizer", "guests"]}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(auto-fit, minmax(490px, 1fr))",
        }}
        justifyItems="stretch"
        gap={6}
      >
        {isEventsListPending ? (
          <EventsCardSkeleton />
        ) : paginatedData.length === 0 ? (
          <EmptyStateComponent />
        ) : (
          paginatedData.map((event) => (
            <EventCard event={event} key={event.id} />
          ))
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
