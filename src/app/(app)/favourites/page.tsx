"use client";
import CardListPageLayout from "@/components/layouts/CardListPageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import { useFavouritesStore } from "@/features/events/store/useFavouritesStore";
import { IEventData } from "@/features/events/types";
import { useFetchEvents } from "@/services/service-events";

export default function FavouritesPage() {
  const { favouriteIds } = useFavouritesStore();
  const { data: eventsList, isPending } = useFetchEvents();

  const favouriteEvents =
    eventsList?.filter((event) => favouriteIds.includes(event.id)) ?? [];

  return (
    <CardListPageLayout<IEventData>
      title="Favourites"
      data={favouriteEvents}
      isLoading={isPending}
      filterKeys={["location", "organizer", "guests"]}
      renderItem={(event) => <EventCard event={event} key={event.id} />}
      emptyStateMessage="Please add favourites from the events page."
    />
  );
}
