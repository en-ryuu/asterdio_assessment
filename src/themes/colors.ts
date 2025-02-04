export const colors = {
  brand: {
    tokens: {
      50: { value: "#F3FFFF" },
      100: { value: "#E3E9FE" },
      200: { value: "#C6D2FE" },
      300: { value: "#A8BAFD" },
      400: { value: "#8DA9FC" },
      500: { value: "#89A6FB" },
      600: { value: "#6D87D8" },
      700: { value: "#5369B5" },
      800: { value: "#3A4D91" },
      900: { value: "#26356E" },
      950: { value: "#18214E" },
    },
    semanticTokens: {
      solid: {
        value: {
          _light: "{colors.brand.500}",
          _dark: "{colors.brand.400}",
        },
      },
      contrast: {
        value: {
          _light: "{colors.brand.50}",
          _dark: "{colors.brand.900}",
        },
      },
      fg: {
        value: {
          _light: "{colors.brand.800}",
          _dark: "{colors.brand.200}",
        },
      },
      muted: {
        value: {
          _light: "{colors.brand.200}",
          _dark: "{colors.brand.700}",
        },
      },
      subtle: {
        value: {
          _light: "{colors.brand.300}",
          _dark: "{colors.brand.600}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.brand.400}",
          _dark: "{colors.brand.500}",
        },
      },
      focusRing: {
        value: {
          _light: "{colors.brand.500}",
          _dark: "{colors.brand.400}",
        },
      },
      bg: {
        value: {
          _light: "{colors.brand.50}",
          _dark: "{colors.brand.900}",
        },
      },
      inverted: {
        value: {
          _light: "{colors.brand.900}",
          _dark: "{colors.brand.50}",
        },
      },
      panel: {
        value: {
          _light: "{colors.brand.100}",
          _dark: "{colors.brand.800}",
        },
      },
    },
  },
};
