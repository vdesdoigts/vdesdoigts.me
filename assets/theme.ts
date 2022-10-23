import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#111111",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gray: {
    200: "#666665",
    900: "#1A1D20",
  },
};

const fonts = {
  body: "Roboto, system-ui, sans-serif",
  heading: "Roboto Slab, serif",
};

const components = {
  Badge: {
    defaultProps: {
      borderRadius: 4,
      textTransform: "initial",
    },
  },
};

export const theme = extendTheme({ colors, components, fonts });
