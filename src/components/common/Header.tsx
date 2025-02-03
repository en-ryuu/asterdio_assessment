import NavigationBar from "@/features/header/components/NavigationBar";
import { IWithChildrenProps } from "@/types/commonTypes";
import { Box, VStack } from "@chakra-ui/react";

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
      <Box flex={1} w="full">
        {children}
      </Box>
    </VStack>
  );
}
