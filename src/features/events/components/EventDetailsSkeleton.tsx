import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { HStack, VStack } from "@chakra-ui/react";

function EventDetailsSkeleton() {
  return (
    <VStack w="full" gap={6} flexWrap={"wrap"}>
      <Skeleton height="200px" w="full" />
      <HStack w="full">
        {Array.from({ length: 3 })?.map((_, index) => (
          <Skeleton w="100px" height={"20px"} key={index} />
        ))}
      </HStack>

      <SkeletonText noOfLines={5} />
    </VStack>
  );
}

export default EventDetailsSkeleton;
