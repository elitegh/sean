"use client";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { education, personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const profileSnippet = `const engineer = {
  name: "Sean Scott",
  role: "Senior Frontend Engineer",
  location: "Houston, TX",
  stack: ["React", "TypeScript", "Angular"],
  focus: ["Architecture", "Performance", "DX"],
};`;

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
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                bgcolor: "background.default",
                border: 1,
                borderColor: "divider",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                lineHeight: 1.8,
                overflow: "auto",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EF4444" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22C55E" }} />
                <Typography
                  variant="caption"
                  sx={{ ml: 1, color: "text.secondary", fontFamily: "var(--font-inter)" }}
                >
                  profile.ts
                </Typography>
              </Box>
              <Box
                component="pre"
                sx={{
                  m: 0,
                  color: "text.secondary",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {profileSnippet.split("\n").map((line, i) => (
                  <Box key={i} component="span" sx={{ display: "block" }}>
                    {line.includes("const") || line.includes("};") ? (
                      <Box component="span" sx={{ color: "primary.main" }}>
                        {line}
                      </Box>
                    ) : (
                      line
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeading label="About" title="Engineering Profile" />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {personalInfo.summary}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              I specialize in React, Angular, and Vue.js ecosystems — owning frontend
              architecture from component design and state management through API
              integration, accessibility, test automation, and production support
              across consulting, SaaS, and enterprise environments.
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 6, sm: 4 }}>
                <Typography variant="h3" color="primary.main" sx={{ fontSize: "2.25rem", fontWeight: 700 }}>
                  10+
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
                  Major frameworks
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                mt: 5,
                pt: 4,
                borderTop: 1,
                borderColor: "divider",
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
