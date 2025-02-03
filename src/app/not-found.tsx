"use client";
import { navigationRoutes } from "@/config/navigationroutes";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiHome } from "react-icons/bi";
export default function Custom404() {
  const router = useRouter();

  return (
    <Container
      centerContent
      minH="100vh"
      display="flex"
      justifyContent="center"
      py={8}
    >
      <VStack gap={6} textAlign="center">
        <Image
          alt="page-not-found"
          src={"/undraw_back_home_nl-5-c.svg"}
          width={300}
          height={300}
        />

        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
          Page Not Found
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
          Sorry, the page you’re looking for doesn’t exist.
        </Text>
        <Box mt={4} display="flex" gap={4}>
          <Button
            onClick={() => router.push(navigationRoutes.home)}
            size={"sm"}
          >
            <BiHome />
            Home
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
