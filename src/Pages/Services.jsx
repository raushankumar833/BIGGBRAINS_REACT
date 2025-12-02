import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import ServicesSection from "../components/ServicesSection";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #e0c3fc 0%, #ffd8a8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              px: { xs: 2, sm: 4, md: 8 },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#5B21B6",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                fontWeight: 600,
                letterSpacing: "0.1em",
                mb: 2,
              }}
            >
              EXPAND YOUR BUSINESS WITH OUR SERVICES!
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: "#1E1B4B",
                fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
                fontWeight: 500,
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              All the services you need to run your business
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                fontSize: { xs: "1rem", sm: "1.125rem" },
                lineHeight: 1.8,
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
              }}
            >
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that values your privacy.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                mt: 6,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: "#7C3AED",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                  "&:hover": {
                    backgroundColor: "#6D28D9",
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.5)",
                  },
                }}
              >
                Login Now
              </Button>

              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                sx={{
                  borderColor: "#7C3AED",
                  color: "black",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  // borderWidth: '2px',
                  "&:hover": {
                    borderColor: "#6D28D9",
                    borderWidth: "2px",
                    backgroundColor: "rgba(124, 58, 237, 0.05)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <ServicesSection />
    </>
  );
};

export default HeroSection;
