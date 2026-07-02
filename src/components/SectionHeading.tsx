import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        mb: { xs: 5, md: 7 },
        textAlign: align,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "primary.main", mb: 1.5, display: "block" }}
      >
        {label}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.2rem", md: "3rem" },
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 48,
          height: 2,
          bgcolor: "primary.main",
          mt: +2,
          mx: align === "center" ? "auto" : 0,
        }}
      />
    </Box>
  );
}
