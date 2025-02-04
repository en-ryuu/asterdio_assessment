import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Box, HStack, VStack } from "@chakra-ui/react";

export default function EventsCardSkeleton() {
  return Array.from({ length: 4 }).map((_, index) => (
    <HStack w="full" key={index}>
      <Skeleton width={"200px"} height={"200px"} />
      <VStack flex={1}>
        <SkeletonText noOfLines={1} />
        <SkeletonText noOfLines={2} />
        <Box flex={1}>
          <Skeleton width={"100px"} />
        </Box>
      </VStack>
    </HStack>
  ));
}
