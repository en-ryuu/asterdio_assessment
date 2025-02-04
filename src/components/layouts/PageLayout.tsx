import { IWithChildrenProps } from "@/types/commonTypes";
import { Stack, Text } from "@chakra-ui/react";
interface IPageLayout {
  pageTitle: string;
}

export default function PageLayout({
  children,
  pageTitle,
}: IWithChildrenProps & IPageLayout) {
  return (
    <Stack gap={4}>
      <Text fontSize={"2xl"}>{pageTitle}</Text>
      {children}
    </Stack>
  );
}
