import { EmptyState, VStack } from "@chakra-ui/react";
import { ImFilesEmpty } from "react-icons/im";
export default function EmptyStateComponent({ message }: { message: string }) {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <ImFilesEmpty />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No items found</EmptyState.Title>
          <EmptyState.Description>{message}</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}
