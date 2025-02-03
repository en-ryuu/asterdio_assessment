"use client";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { navigationRoutes } from "@/config/navigationroutes";
import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BiCalendar, BiStar } from "react-icons/bi";

export default function Home() {
  const router = useRouter();
  return (
    <Header>
      <Center mx={"auto"} minH={"100%"}>
        <Stack
          textAlign={"center"}
          gap={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Stack>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Manage your events using our
              <Text color={"brand.400"}>Event Planner</Text>
            </Heading>
            <Text color={"gray.500"}>View, manage and filter your events</Text>
          </Stack>

          <Center gap={4}>
            <Button
              colorScheme={"brand"}
              size={"sm"}
              onClick={() => router.push(navigationRoutes.events)}
            >
              <BiCalendar />
              Events
            </Button>
            <Button
              colorScheme={"brand"}
              variant={"subtle"}
              size={"sm"}
              onClick={() => router.push(navigationRoutes.favourites)}
            >
              <BiStar />
              Favourites
            </Button>
          </Center>
        </Stack>
      </Center>
    </Header>
  );
}
