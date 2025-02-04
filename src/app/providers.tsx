"use client";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import QueryProviderWrapper from "@/components/core/providers/queryProviderWrapper";
import { system } from "@/themes/theme";
import { IWithChildrenProps } from "@/types/commonTypes";
import { ChakraProvider, Theme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: IWithChildrenProps) {
  return (
    <QueryProviderWrapper>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ErrorBoundary>
            <Theme colorPalette="brand">{children}</Theme>
          </ErrorBoundary>
        </ThemeProvider>
      </ChakraProvider>
    </QueryProviderWrapper>
  );
}
