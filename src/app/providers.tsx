"use client";
import { system } from "@/themes/theme";
import { IWithChildrenProps } from "@/types/commonTypes";
import { ChakraProvider, Theme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: IWithChildrenProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Theme colorPalette="brand">{children}</Theme>
      </ThemeProvider>
    </ChakraProvider>
  );
}
