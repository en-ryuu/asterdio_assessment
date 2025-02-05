"use state";
import { ColorModeButton } from "@/components/ui/color-mode";
import { headerNavigation } from "@/config/headerNavigation";
import { Highlight, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

export default function NavigationBar() {
  const pathname = usePathname();
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

      <HStack gap={6} display={["none", "none", "flex"]}>
        {headerNavigation?.map((navItem, index) => {
          return (
            <Link key={navItem.label + index} href={navItem.href}>
              <Text
                color={pathname === navItem.href ? "brand.emphasized" : "fg"}
              >
                {navItem?.label}
              </Text>
            </Link>
          );
        })}
        <ColorModeButton />
      </HStack>
      <MobileNav pathname={pathname} />
    </HStack>
  );
}
