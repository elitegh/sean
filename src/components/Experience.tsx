"use client";

import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container maxWidth="lg">
        <SectionHeading label="Experience" title="Professional Experience" />

        <Stack spacing={0}>
          {experience.map((job, index) => (
            <Box
              key={job.company}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
                gap: { xs: 2, md: 6 },
                py: { xs: 5, md: 6 },
                borderTop: index === 0 ? 1 : 0,
                borderBottom: 1,
                borderColor: "divider",
                transition: "background 0.3s ease",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  color="primary.main"
                >
                  {job.period}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 0.5,
                    fontSize: { xs: "1.25rem", md: "1.4rem" },
                  }}
                >
                  {job.role}
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    fontWeight: 500,
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  {job.url ? (
                    <Link
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="inherit"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {job.company}
                      <OpenInNewOutlinedIcon sx={{ fontSize: 14 }} />
                    </Link>
                  ) : (
                    job.company
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, maxWidth: 560, lineHeight: 1.6 }}
                >
                  {job.industryFocus}
                </Typography>

                <Stack spacing={1.5} component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {job.highlights.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
