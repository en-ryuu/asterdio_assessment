import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { headerNavigation } from "../config";

export default function NavigationBar() {
  return (
    <HStack
      position={"fixed"}
      w="100%"
      top={8}
      p={4}
      px={10}
      justifyContent={"space-between"}
      maxW={"1000px"}
      borderRadius={"full"}
      border={"1px solid"}
      borderColor={"gray.muted"}
      backdropFilter={"blur(10px)"}
      zIndex={10}
    >
      <Text fontSize={"2xl"} color={"fg"}>
        Logo
      </Text>
      <HStack gap={6}>
        {headerNavigation?.map((navItem, index) => (
          <Link key={navItem.label + index} href={navItem.href} color={"fg"}>
            {navItem?.label}
          </Link>
        ))}
        <ColorModeButton />
      </HStack>
    </HStack>
  );
}
