import { Box, Container, Divider, Typography } from "@mui/material";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-end" },
            gap: 3,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 700,
            }}
          >
            {personalInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {personalInfo.title}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} {personalInfo.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with Next.js & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
