"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    icon: <EmailOutlinedIcon />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <PhoneOutlinedIcon />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
  },
  {
    icon: <LocationOnOutlinedIcon />,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "seanpatrickscott",
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeading label="Contact" title="Get in Touch" />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 440 }}>
              Open to senior frontend engineering roles, consulting opportunities,
              and technical leadership discussions. Reach out via email or LinkedIn.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={`mailto:${personalInfo.email}`}
              startIcon={<EmailOutlinedIcon />}
            >
              Send Email
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={0}>
              {contactItems.map((item, index) => (
                <Box
                  key={item.label}
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    py: 3,
                    px: 2,
                    borderTop: 1,
                    borderBottom: index === contactItems.length - 1 ? 1 : 0,
                    borderColor: "divider",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: 1,
                    transition: "background 0.2s ease",
                    "&:hover": item.href
                      ? { bgcolor: "action.hover" }
                      : undefined,
                  }}
                >
                  <Box sx={{ color: "primary.main" }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" color="primary.main">
                      {item.label}
                    </Typography>
                    <Typography variant="body1">{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
