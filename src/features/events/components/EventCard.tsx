import LazyImage from "@/components/common/LazyImage";
import { Tooltip } from "@/components/ui/tooltip";
import { navigationRoutes } from "@/config/navigationroutes";
import { generateSlug } from "@/utils/slugGenerator";
import {
  Box,
  Card,
  DataList,
  IconButton,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { BiBuildings, BiHeartCircle, BiMap, BiTime } from "react-icons/bi";
import { IEventData } from "../types";

export const EventCard = ({ event }: { event: IEventData }) => {
  const eventDetails = [
    { label: "Location", value: event.location, icon: <BiMap /> },
    {
      label: "Time",
      value: dayjs(event.time).format("YYYY-MM-DD hh:mm A"),
      icon: <BiTime />,
    },
    { label: "Organizer", value: event.organizer, icon: <BiBuildings /> },
  ];
  return (
    <LinkBox>
      <Card.Root
        flexDirection={["column", "row"]}
        overflow="hidden"
        w="full"
        colorPalette={"brand"}
        _hover={{
          borderColor: "brand.subtle",
          "& .eventImage": {
            transform: "scale(1.005)",
            filter: "brightness(1.1)",
          },
        }}
        height={"100%"}
      >
        <LinkOverlay
          href={navigationRoutes.eventDetails?.replace(
            ":eventName",
            generateSlug(event.eventName, event.id)
          )}
        />
        <LazyImage
          flex={1}
          h="200px"
          w={["100%", "200px"]}
          objectFit="cover"
          src={event.image}
          alt={event.eventName}
          className="eventImage"
          transition="transform 0.3s ease-out, filter 0.3s ease-out"
        />
        <Box flex={1}>
          <Card.Body h="full">
            <Card.Title mb="2" fontSize={"md"}>
              <Text lineClamp={2}>{event.eventName}</Text>
            </Card.Title>
            <Card.Description fontSize={"xs"} mb={2} lineClamp={3}>
              {event.description}
            </Card.Description>
            <DataList.Root
              orientation="horizontal"
              gap={2}
              size={"sm"}
              flex={1}
              justifyContent={"end"}
            >
              {eventDetails.map((item) => (
                <DataList.Item key={item.label}>
                  <DataList.ItemLabel>
                    {item.icon} {item.label}
                  </DataList.ItemLabel>
                  <DataList.ItemValue flex={1}>{item.value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Card.Body>
          {/* Icons */}
          <Tooltip content="Add this to your favourites">
            <IconButton
              aria-label="Add to favourites"
              variant="outline"
              pos={"absolute"}
              top={3}
              right={3}
              size={"sm"}
            >
              <BiHeartCircle
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
