import { Button } from "@/components/ui/button";
import { navigationRoutes } from "@/config/navigationroutes";
import {
  Badge,
  Box,
  Card,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { IEventData } from "../types";

export const EventCard = ({ event }: { event: IEventData }) => {
  return (
    <LinkBox all={"unset"}>
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        maxW="xl"
        w="full"
        colorPalette={"brand"}
        _hover={{
          "& .eventImage": {
            boxShadow: `1px 0px 0px 400px var(--chakra-colors-color-palette-panel)`,
          },
        }}
        height={"100%"}
      >
        <LinkOverlay
          href={navigationRoutes.eventDetails?.replace(
            ":id",
            event.id.toString()
          )}
        ></LinkOverlay>
        <Image
          objectFit="cover"
          h="100%"
          w="190px"
          src={event.image}
          alt={event.eventName}
          className="eventImage"
          transition="all 0.4s ease-in"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2" fontSize={"md"}>
              <Text lineClamp={1}>{event.eventName}</Text>
            </Card.Title>
            <Card.Description fontSize={"xs"} mb={2}>
              {event.description}
            </Card.Description>
            <Badge variant={"outline"} w="fit">
              Organizer: {event.organizer}
            </Badge>
          </Card.Body>
          <Card.Footer>
            <Button size={"xs"}>
              <BiHeart /> Add to Favourites
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
