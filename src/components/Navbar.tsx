"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useColorScheme,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { navLinks } from "@/data/portfolio";

function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <IconButton
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        width: 40,
        height: 40,
      }}
    >
      {mode === "dark" ? (
        <LightModeOutlinedIcon fontSize="small" />
      ) : (
        <DarkModeOutlinedIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
        <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={() => setMobileOpen(false)}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={link.label}
                slotProps={{
                  primary: {
                    sx: {
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 3, pt: 2 }}>
        <ThemeToggle />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "background.paper" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? 1 : 0,
          borderColor: "divider",
          transition: "all 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 72, md: 88 },
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography
            component="a"
            href="#"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontSize: { xs: "1rem", md: "1.05rem" },
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Sean Scott
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 5,
            }}
          >
            {navLinks.map((link) => (
              <Typography
                key={link.href}
                component="a"
                href={link.href}
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.3s",
                  "&:hover": { color: "primary.main" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: 1,
                    bgcolor: "primary.main",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                {link.label}
              </Typography>
            ))}
            <ThemeToggle />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <ThemeToggle />
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { bgcolor: "background.paper" } } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
