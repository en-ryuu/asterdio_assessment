export const colors = {
  brand: {
    tokens: {
      50: { value: "#f4faff" },
      100: { value: "#e1f0ff" },
      200: { value: "#c2e0ff" },
      300: { value: "#96c8ff" },
      400: { value: "#6daeff" },
      500: { value: "#428eff" },
      600: { value: "#2f74d8" },
      700: { value: "#2258a6" },
      800: { value: "#153c73" },
      900: { value: "#0c264d" },
      950: { value: "#05162e" },
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
          _light: "{colors.brand.100}",
          _dark: "{colors.brand.800}",
        },
      },
      fg: {
        value: {
          _light: "{colors.brand.700}",
          _dark: "{colors.brand.200}",
        },
      },
      muted: {
        value: {
          _light: "{colors.brand.100}",
          _dark: "{colors.brand.700}",
        },
      },
      subtle: {
        value: {
          _light: "{colors.brand.200}",
          _dark: "{colors.brand.600}",
        },
      },
      emphasized: {
        value: {
          _light: "{colors.brand.300}",
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
