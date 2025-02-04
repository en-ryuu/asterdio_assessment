import { EmptyState, VStack } from "@chakra-ui/react";
import { LuCross } from "react-icons/lu";
export default function EmptyStateComponent() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <LuCross />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No items found</EmptyState.Title>
          <EmptyState.Description>
            Please remove some filters to improve results.
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}
