import { ColorModeButton } from "@/components/ui/color-mode";
import { headerNavigation } from "@/config/headerNavigation";
import { Highlight, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <HStack
      position={"fixed"}
      w="100%"
      maxWidth={"min(1200px,94vw)"}
      top={4}
      py={4}
      px={10}
      justifyContent={"space-between"}
      borderRadius={"full"}
      border={"2px solid"}
      borderColor={"gray.muted"}
      backdropFilter={"blur(10px)"}
      boxShadow={"inset 1px 0 20px 20px var(--chakra-colors-bg)"}
      zIndex={10}
    >
      <HStack gap={1}>
        <Image
          alt="logo"
          src="/event_planner_logo.png"
          height={"30px"}
          mr={3}
        />
        <Highlight query={["Event"]} styles={{ color: "brand.fg" }}>
          Event Planner
        </Highlight>
      </HStack>

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
