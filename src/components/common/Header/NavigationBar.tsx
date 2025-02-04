import { ColorModeButton } from "@/components/ui/color-mode";
import { headerNavigation } from "@/config/headerNavigation";
import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <HStack
      position={"fixed"}
      w="100%"
      top={4}
      p={6}
      px={10}
      justifyContent={"space-between"}
      maxW={"1200px"}
      borderRadius={"full"}
      border={"2px solid"}
      borderColor={"gray.muted"}
      backdropFilter={"blur(10px)"}
      boxShadow={"inset 1px 0 20px 30px var(--chakra-colors-bg)"}
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
