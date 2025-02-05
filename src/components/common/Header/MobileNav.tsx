import { ColorModeButton } from "@/components/ui/color-mode";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { headerNavigation } from "@/config/headerNavigation";
import { Center, DrawerFooter, Link, VStack } from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";

export default function MobileNav() {
  return (
    <DrawerRoot>
      <DrawerTrigger fontSize={"1.6rem"} display={["flex", "flex", "none"]}>
        <CgMenu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <VStack direction="column" gap={4}>
            {headerNavigation?.map((navItem, index) => (
              <Link
                key={navItem.label + index}
                href={navItem.href}
                color="fg"
                py={4}
                w="full"
                justifyContent={"center"}
              >
                <Center fontSize={"lg"}>{navItem.label}</Center>
              </Link>
            ))}
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <ColorModeButton />
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
}
