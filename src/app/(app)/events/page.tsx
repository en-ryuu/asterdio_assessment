import PageLayout from "@/components/common/PageLayout";
import { EventCard } from "@/features/events/components/EventCard";
import { IEventData } from "@/features/events/types";
import { Grid } from "@chakra-ui/react";

export default async function EventsPage() {
  const data = await fetch("http://localhost:3000/api/events", {
    next: { revalidate: 0 }, // Always fetch fresh data
  });
  const events = (await data.json()) as IEventData[];
  console.log(events);
  return (
    <PageLayout pageTitle="Events">
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </Grid>
    </PageLayout>
  );
}
