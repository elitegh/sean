"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { education, personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading label="About" title="Who I Am" />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
          {personalInfo.summary}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 720 }}>
          I work across fullstack delivery, AI/ML product work, and data
          engineering — leading with passion, growing on purpose, and carrying a
          professional presence people trust. Spirit keeps me optimistic in hard
          seasons; grit keeps me finishing what I start.
        </Typography>

        <Grid container spacing={3} sx={{ maxWidth: 720 }}>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Typography variant="h3" color="primary.main" sx={{ fontSize: "2.25rem", fontWeight: 700 }}>
              13+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Years of experience
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Typography variant="h3" color="primary.main" sx={{ fontSize: "2.25rem", fontWeight: 700 }}>
              4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enterprise companies
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h3" color="primary.main" sx={{ fontSize: "2.25rem", fontWeight: 700 }}>
              3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Focus areas
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 4,
            borderTop: 1,
            borderColor: "divider",
            maxWidth: 720,
          }}
        >
          <Typography variant="subtitle1" color="primary.main" sx={{ mb: 1 }}>
            Education
          </Typography>
          <Typography variant="h6" sx={{ mb: 0.5, textTransform: "none", letterSpacing: 0 }}>
            {education.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {education.school} · {education.period}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
