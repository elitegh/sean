"use client";

import { createTheme } from "@mui/material/styles";

const sharedTypography = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  h1: {
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  h2: {
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  h3: {
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 600,
  },
  h6: {
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    fontSize: "0.75rem",
  },
  subtitle1: {
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    fontSize: "0.75rem",
    fontWeight: 600,
  },
  body1: {
    lineHeight: 1.75,
    fontSize: "1rem",
  },
  body2: {
    lineHeight: 1.7,
  },
};

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#7EB6F6",
          light: "#A8D0FA",
          dark: "#5B9AE8",
          contrastText: "#1A1F2B",
        },
        secondary: {
          main: "#A8B4C8",
          light: "#C5CEDC",
          dark: "#8490A6",
          contrastText: "#1A1F2B",
        },
        background: {
          default: "#1A1F2B",
          paper: "#242B3A",
        },
        text: {
          primary: "#E8EEF6",
          secondary: "rgba(168, 180, 200, 0.92)",
        },
        divider: "rgba(168, 180, 200, 0.14)",
      },
    },
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#3B6FA8",
          light: "#5A8BC0",
          dark: "#2C5685",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#5A6578",
          light: "#7A8599",
          dark: "#3D4656",
          contrastText: "#FFFFFF",
        },
        background: {
          default: "#F0F3F8",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#1A1F2B",
          secondary: "rgba(90, 101, 120, 0.9)",
        },
        divider: "rgba(90, 101, 120, 0.18)",
      },
    },
  },
  typography: sharedTypography,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          overflowX: "hidden",
        },
        "::selection": {
          backgroundColor: "rgba(126, 182, 246, 0.35)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          letterSpacing: "0.02em",
          textTransform: "none",
          fontSize: "0.9rem",
          fontWeight: 600,
          padding: "10px 24px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: "0.8rem",
          fontWeight: 500,
        },
      },
    },
  },
});
