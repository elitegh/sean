"use client";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { expertise } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Box
      component="section"
      id="expertise"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: 1,
          borderColor: "divider",
          opacity: 0.4,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <SectionHeading label="Expertise" title="Where I Focus" align="center" />

        <Grid container spacing={3}>
          {expertise.map((area) => (
            <Grid key={area.label} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  bgcolor: "background.default",
                  border: 1,
                  borderColor: "divider",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary.main"
                  sx={{ mb: 2, display: "block" }}
                >
                  {area.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {area.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
