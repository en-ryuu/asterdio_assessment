import { Center, EmptyState, VStack } from "@chakra-ui/react";
import { BiErrorCircle } from "react-icons/bi";
import { Button } from "../ui/button";
export default function ApiErrorState({ refetch }: { refetch: () => void }) {
  return (
    <Center height={"400px"}>
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <BiErrorCircle />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>Cannot reach server.</EmptyState.Title>
            <EmptyState.Description>
              <Button onClick={refetch}> Refetch</Button>
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    </Center>
  );
}
