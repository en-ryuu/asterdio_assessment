"use client";
import EmptyStateComponent from "@/components/common/EmptyState";
import CardFilter from "@/components/common/Filter/CardFilter";
import PageLayout from "@/components/layouts/PageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import EventsCardSkeleton from "@/features/events/components/EventsCardSkeleton";
import { IEventData } from "@/features/events/types";
import { useFetchEvents } from "@/services/service-events";
import { Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function EventsPage() {
  const { data: eventsList, isPending: isEventsListPending } = useFetchEvents();
  const [filteredData, setFilteredData] = useState<IEventData[]>();

  return (
    <PageLayout pageTitle="Events">
      <CardFilter<IEventData>
        data={eventsList ?? []}
        filterKeys={["location", "organizer", "guests"]}
        setFilteredData={setFilteredData}
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
        ) : filteredData ? (
          filteredData?.length == 0 ? (
            <EmptyStateComponent />
          ) : (
            filteredData?.map((event) => (
              <EventCard event={event} key={event.id} />
            ))
          )
        ) : (
          eventsList?.map((event) => <EventCard event={event} key={event.id} />)
        )}
      </Grid>
    </PageLayout>
  );
}
