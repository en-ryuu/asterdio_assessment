import FavouriteButton from "@/components/common/FavouriteButton";
import LazyImage from "@/components/common/LazyImage";
import { navigationRoutes } from "@/config/navigationroutes";
import { generateSlug } from "@/utils/slugGenerator";
import {
  Box,
  Card,
  DataList,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { BiBuildings, BiMap, BiTime } from "react-icons/bi";
import { useFavouritesStore } from "../store/useFavouritesStore";
import { IEventData } from "../types";

export const EventCard = ({ event }: { event: IEventData }) => {
  const { toggleFavourite, isFavourite } = useFavouritesStore();
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
        flexDirection={["column", "column", "row"]}
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
          w={["100%", "100%", "200px"]}
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
                  <DataList.ItemLabel minW={"max(80px, 3rem)"}>
                    {item.icon} {item.label}
                  </DataList.ItemLabel>
                  <DataList.ItemValue flex={1}>{item.value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Card.Body>

          {/* Favourites button */}
          <FavouriteButton
            onClickAction={() => toggleFavourite(event.id)}
            isFavourite={isFavourite(event.id)}
          />
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
