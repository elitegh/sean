"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { personalInfo, focusAreas } from "@/data/portfolio";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={[
          {
            position: "absolute",
            inset: 0,
            bgcolor: "background.default",
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 10% 20%, rgba(59, 111, 168, 0.08), transparent),
              radial-gradient(ellipse 60% 50% at 90% 80%, rgba(90, 101, 120, 0.05), transparent)
            `,
          },
          (theme) =>
            theme.applyStyles("dark", {
              backgroundImage: `
                radial-gradient(ellipse 80% 60% at 10% 20%, rgba(126, 182, 246, 0.14), transparent),
                radial-gradient(ellipse 60% 50% at 90% 80%, rgba(168, 180, 200, 0.08), transparent)
              `,
            }),
        ]}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          backgroundImage: `
            linear-gradient(rgba(168, 180, 200, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 180, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 12 }}>
        <Stack spacing={4} sx={{ maxWidth: 760 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.main", animation: "fadeUp 0.8s ease forwards" }}
          >
            Senior Software Engineer
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.5rem" },
              lineHeight: 1.1,
              animation: "fadeUp 0.8s ease 0.15s forwards",
              opacity: 0,
            }}
          >
            {personalInfo.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
              color: "text.secondary",
              maxWidth: 600,
              animation: "fadeUp 0.8s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            {personalInfo.tagline}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              animation: "fadeUp 0.8s ease 0.45s forwards",
              opacity: 0,
            }}
          >
            {focusAreas.map((area) => (
              <Chip
                key={area}
                label={area}
                size="small"
                sx={{
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1, animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
          >
            <Button variant="contained" color="primary" href="#experience" size="large">
              View Experience
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#contact"
              size="large"
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Box
        component="a"
        href="#about"
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          color: "text.secondary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          textDecoration: "none",
          animation: "bounce 2s ease infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(8px)" },
          },
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}
