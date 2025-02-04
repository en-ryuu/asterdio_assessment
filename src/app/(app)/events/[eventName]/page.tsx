"use client";
import LazyImage from "@/components/common/LazyImage";
import EventDetailsSkeleton from "@/features/events/components/EventDetailsSkeleton";
import { useFetchEventById } from "@/services/service-events";
import { decodeSlug } from "@/utils/slugGenerator";
import { Card, DataList, HStack, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { BiBuildings, BiMap, BiTime } from "react-icons/bi";

export default function EventDetails() {
  const { eventName } = useParams();
  const [urlEventName, eventId] = decodeSlug(eventName as string, true);

  const { data: eventDetails, isPending: isEventDetailsPending } =
    useFetchEventById(eventId);

  const eventLogisticsList = [
    {
      label: "Organizer",
      value: eventDetails?.organizer,
      icon: BiBuildings,
    },

    { label: "Location", value: eventDetails?.location, icon: BiMap },
    {
      label: "Time",
      value: dayjs(eventDetails?.time).format("ddd, MMM D, YYYY h:mm A"),
      icon: BiTime,
    },
  ];

  return (
    <Card.Root my={6}>
      <Card.Body>
        <VStack gap={6}>
          <VStack>
            <Text fontSize={"xs"} color={"brand.solid"}>
              Event Details
            </Text>
            <Text fontSize={"2xl"}>{urlEventName}</Text>
          </VStack>
          {isEventDetailsPending ? (
            <EventDetailsSkeleton />
          ) : (
            <>
              <LazyImage
                w="fit-content"
                h="200px"
                src={eventDetails?.image}
                alt="event details image"
              />
              <HStack w="full">
                <DataList.Root
                  orientation="horizontal"
                  gap={6}
                  size={"sm"}
                  flexDir={"row"}
                  divideX="1px"
                  flexWrap={"wrap"}
                >
                  {eventLogisticsList.map((item) => (
                    <DataList.Item pl={3} key={item.label}>
                      <DataList.ItemValue alignItems={"center"} gap={2}>
                        <item.icon color="var(--chakra-colors-brand-solid)" />
                        {item.value}
                      </DataList.ItemValue>
                    </DataList.Item>
                  ))}
                </DataList.Root>
              </HStack>
              <Text
                w="full"
                textAlign={"justify"}
                pl={3}
                fontSize={"sm"}
                color={"fg.muted"}
              >
                {eventDetails?.description}
              </Text>
            </>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
