import { IWithChildrenProps } from "@/types/commonTypes";
import { Container, ContainerProps } from "@chakra-ui/react";

export default function ContainerComponent({
  children,
  ...props
}: IWithChildrenProps & ContainerProps) {
  return (
    <Container
      w="clamp(340px, 80%, 80vw)"
      maxW={"1200px"}
      mx={"auto"}
      {...props}
    >
      {children}
    </Container>
  );
}
