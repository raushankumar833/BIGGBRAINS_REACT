import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";

const PartnerProgram = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #c6a4f4 0%, #fba4c8 100%)",
        color: "#1a1a1a",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{mt: 15,}}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, mb: 1, color: "#2b0064" }}
        >
          DOING GREAT THINGS TOGETHER!
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            color: "#1a0052",
            lineHeight: 1.2,
          }}
        >
          P2PAE Network & Partner program
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#2d2d2d",
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Join the P2PAE Network & expand your distributor business & earn extra
          income. P2PAE has always been vocal for local shopkeepers. Through
          P2PAE, more than 4,00,000 retailers have served around 3 crore unique
          customers in 2,300+ cities. P2PAE has increased retailers’ monthly
          earnings as well as customer footfall.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "8px",
              px: 3,
              py: 1.2,
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            Become A Partner →
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#000",
              color: "#000",
              fontWeight: 600,
              borderRadius: "8px",
              px: 3,
              py: 1.2,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            Contact Us →
          </Button>
        </Stack>
      </Container>

      <Box
        component="img"
        src="/src/assets/partner_main-character.png"
        alt="Partner illustration"
        sx={{
          width: "60%",
          maxWidth: 900,
          mx: "auto",
        }}
      />

      {/* Bottom Illustration */}
      <Box
        component="img"
        src="/src/assets/partner_buildings.webp"
        alt="Partner illustration"
        sx={{
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          mt: 19,
        }}
      />
    </Box>
  );
};

export default PartnerProgram;
