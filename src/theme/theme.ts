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
          main: "#60A5FA",
          light: "#93C5FD",
          dark: "#3B82F6",
          contrastText: "#0B0F14",
        },
        secondary: {
          main: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
          contrastText: "#0B0F14",
        },
        background: {
          default: "#0B0F14",
          paper: "#111827",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "rgba(148, 163, 184, 0.9)",
        },
        divider: "rgba(148, 163, 184, 0.12)",
      },
    },
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#475569",
          light: "#64748B",
          dark: "#334155",
          contrastText: "#FFFFFF",
        },
        background: {
          default: "#F8FAFC",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#0F172A",
          secondary: "rgba(71, 85, 105, 0.9)",
        },
        divider: "rgba(148, 163, 184, 0.25)",
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
          backgroundColor: "rgba(96, 165, 250, 0.35)",
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
