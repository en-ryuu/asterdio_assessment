import { createSystem, defaultConfig } from "@chakra-ui/react";
import { colors } from "./colors";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: colors.brand.tokens,
      },
    },
    semanticTokens: {
      colors: {
        brand: colors.brand.semanticTokens,
      },
    },
  },
  globalCss: {
    ":root": {
      scrollbarGutter: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: "muted",
      fontSize: "85%",
    },
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
      {
        transition: "background-color 5000s ease-in-out 0s",
        WebkitTextFillColor: "white !important",
        "&input": {
          background: "transparent !important",
        },
      },
  },
});
