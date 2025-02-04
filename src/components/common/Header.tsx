import { IWithChildrenProps } from "@/types/commonTypes";
import { Box, VStack } from "@chakra-ui/react";
import NavigationBar from "./Header/NavigationBar";

export default function Header({ children }: IWithChildrenProps) {
  return (
    <VStack
      minH={"100vh"}
      flexDir="column"
      bg="bg.subtle"
      position={"relative"}
    >
      {/* Header with glass effect */}
      <NavigationBar />
      {/* Main Content */}
      <Box flex={1} w="full" mt={32}>
        {children}
      </Box>
    </VStack>
  );
}
