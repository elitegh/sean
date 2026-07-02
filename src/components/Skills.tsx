"use client";

import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
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
        <SectionHeading label="Expertise" title="Core Technologies" align="center" />

        <Grid container spacing={3}>
          {skillCategories.map((category) => (
            <Grid key={category.label} size={{ xs: 12, sm: 6, md: 4 }}>
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
                  sx={{ mb: 2.5, display: "block" }}
                >
                  {category.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: "divider",
                        color: "text.secondary",
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
