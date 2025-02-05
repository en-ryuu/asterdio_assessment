import { IWithChildrenProps } from "@/types/commonTypes";
import { Box, Center, VStack } from "@chakra-ui/react";
import NavigationBar from "../common/header/NavigationBar";

export default function AppLayoutWrapper({ children }: IWithChildrenProps) {
  return (
    <VStack
      minH={"100vh"}
      flexDir="column"
      bg="bg.subtle"
      position={"relative"}
    >
      {/* Navbar with glass effect */}
      <NavigationBar />
      {/* Main Content */}
      <Box flex={1} w="full" mt={32} mb={10}>
        {children}
      </Box>
      <Center
        w="full"
        bg={"brand.950"}
        color={"brand.50"}
        py={1}
        fontSize={"xs"}
      >
        All rights reserved.
      </Center>
    </VStack>
  );
}
