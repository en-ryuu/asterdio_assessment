"use client";
import ApiErrorState from "@/components/common/ApiErrorState";
import CardListPageLayout from "@/components/layouts/CardListPageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import { IEventData } from "@/features/events/types";
import { useFetchEvents } from "@/services/service-events";

export default function EventsPage() {
  const { data: eventsList, isPending, isError, refetch } = useFetchEvents();

  if (isError) {
    return <ApiErrorState refetch={refetch} />;
  }

  return (
    <CardListPageLayout<IEventData>
      title="Events"
      data={eventsList ?? []}
      isLoading={isPending}
      filterKeys={["location", "organizer", "guests"]}
      renderItem={(event) => <EventCard event={event} key={event.id} />}
      emptyStateMessage="Please remove some filters to improve results."
    />
  );
}
