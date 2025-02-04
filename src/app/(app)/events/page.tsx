"use client";
import PageLayout from "@/components/common/PageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import EventsCardSkeleton from "@/features/events/components/EventsCardSkeleton";
import { useFetchEvents } from "@/services/service-events";
import { Grid } from "@chakra-ui/react";

export default function EventsPage() {
  const { data: eventsList, isPending: isEventsListPending } = useFetchEvents();
  return (
    <PageLayout pageTitle="Events">
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
        {isEventsListPending ? (
          <EventsCardSkeleton />
        ) : (
          eventsList?.map((event) => <EventCard event={event} key={event.id} />)
        )}
      </Grid>
    </PageLayout>
  );
}
