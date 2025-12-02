import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  Container,
  Grid,
  Avatar,
  Button,
} from "@mui/material";

const AboutSection = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valuesData = [
    {
      id: 1,
      title: "Integrity",
      desc: "We act with honesty, fairness, and transparency in everything we do.",
    },
    {
      id: 2,
      title: "Innovation",
      desc: "We embrace creativity and seek to improve our services constantly.",
    },
    {
      id: 3,
      title: "Customer First",
      desc: "We prioritize our customers' needs and strive to exceed expectations.",
    },
    {
      id: 4,
      title: "Teamwork",
      desc: "Collaboration and respect are at the heart of our team culture.",
    },
    {
      id: 5,
      title: "Sustainability",
      desc: "We are committed to responsible business practices and a greener future.",
    },
    {
      id: 6,
      title: "Excellence",
      desc: "We pursue the highest standards in everything we do.",
    },
    {
      id: 7,
      title: "Accountability",
      desc: "We take responsibility for our actions and outcomes.",
    },
    {
      id: 8,
      title: "Empathy",
      desc: "We listen, understand, and support our colleagues and customers.",
    },
    {
      id: 9,
      title: "Adaptability",
      desc: "We embrace change and adapt to challenges with agility.",
    },
    {
      id: 10,
      title: "Passion",
      desc: "We are passionate about what we do and inspire others through our energy.",
    },
    {
      id: 11,
      title: "Diversity",
      desc: "We celebrate differences and foster an inclusive environment.",
    },
    {
      id: 12,
      title: "Trust",
      desc: "We build trust through consistency, transparency, and reliability.",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {" "}
      {/* Added overflowX: "hidden" to root container */}
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", sm: "80vh", md: "100vh" },
          position: "relative",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src="src/assets/hero1.jpeg"
          alt="Hero Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            mt: 6,
          }}
        />

        {/* Overlay Image */}
        <Box
          component="img"
          src="src/assets/overlay_1.svg"
          alt="Overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            ml: { xs: 4, md: 6 }, // Responsive margin
            flexDirection: "column",
            display: "flex",
            justifyContent: "bottom",
            alignItems: "flex-start",
            pt: { xs: 10, sm: 15, md: 40 },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>

          <Divider
            sx={{
              bgcolor: "goldenrod",
              height: 3,
              width: 60,
              mb: 3,
              borderRadius: 2,
            }}
          />

          <Typography variant="h6" sx={{ maxWidth: "600px", lineHeight: 1.6 }}>
            Simplify your finances and <br />
            grow your business effortlessly
          </Typography>
        </Box>
      </Box>
      {/* Mission Statement Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          px: { xs: 2, sm: 4 },
          width: "100%",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Typography
              variant="h4"
              sx={{
                mb: 6,
                margin: 0,
                lineHeight: 1.5,
                fontSize: "1.25rem",
                fontFamily: '"Public Sans", sans-serif',
                textAlign: "center",
                fontWeight: "normal",
                color: "rgb(20, 10, 83)",
              }}
            >
              We create software that doesn't just function, it inspires. Our
              dedicated teams spend years honing their skills to craft solutions
              that delight users and elevate businesses. For us, software is
              more than a job—it's a passion.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "rgb(20, 10, 83)",
                fontSize: "46px",
                fontWeight: "700",
              }}
            >
              Excellence is our standard
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Vision and Description Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 10,
          px: { xs: 2, sm: 3, md: 4 }, // Adjusted padding
          width: "100%",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            marginTop: "-100px",
          }}
        >
          {/* Left Column: Image + Heading */}
          <Grid item xs={12} lg={12}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box
                component="img"
                src="src/assets/vision.jpeg"
                alt="about-vision"
                sx={{
                  width: "100%",
                  height: "auto",
                  mb: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  mb: 1,
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  textAlign: "center",
                  fontSize: { xs: "1.75rem", md: "2rem", lg: "1.7rem" }, // Responsive font size
                }}
              >
                Simplifying Payments, Empowering People
              </Typography>
              <Divider sx={{ width: "100%", mb: 2 }} />
            </Box>
          </Grid>

          {/* Middle Column: Text */}
          <Grid item xs={12} lg={12}>
            <Typography
              variant="body1"
              sx={{
                margin: 0,
                paddingTop: 0,
                lineHeight: 1.55556,
                fontSize: "1.0625rem",
                fontFamily: '"Public Sans", sans-serif',
                textAlign: "justify",
                color: "rgb(20, 10, 83)",
                fontWeight: 300,
              }}
            >
              We provide seamless solutions for bill payments, money transfers,
              and digital transactions. Our platform is designed to save you
              time, reduce complexity, and ensure every payment is fast, secure,
              and reliable.
              <br />
              <br />
              With years of experience in financial technology, we continue to
              innovate and bring convenient services to businesses and
              individuals alike.
            </Typography>
          </Grid>

          {/* Right Column: Text */}
          <Grid item xs={12} lg={12}>
            <Typography
              variant="body1"
              sx={{
                margin: 0,
                paddingTop: 0,
                lineHeight: 1.55556,
                fontSize: "1.0625rem",
                fontFamily: '"Public Sans", sans-serif',
                textAlign: "justify",
                color: "rgb(20, 10, 83)",
                fontWeight: 300,
              }}
            >
              Our approach focuses on creating intuitive platforms instead of
              relying solely on marketing or acquisitions. We prioritize secure
              transactions, customer support, and innovative features that make
              digital payments effortless.
              <br />
              <br />
              By investing in technology and customer experience, we empower
              users to handle their financial needs anytime, anywhere.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Values Section */}
      <Box
        sx={{
          bgcolor: "#fff",
          py: 8,
          width: "100%",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%", overflow: "hidden" }}>
          {/* Title */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 600,
                color: "#140A53",
                mb: 2,
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.0625rem",
                fontFamily: "Public Sans, sans-serif",
                lineHeight: 1.6,
                color: "#140A53",
                fontWeight: 300,
              }}
            >
              Our values guide everything we do: how we create our
              <br /> product, and how we operate as a team.
            </Typography>
          </Box>

          {/* Values Grid */}
          <Grid container spacing={6}>
            {valuesData.map((value) => (
              <Grid
                item
                xs={12}
                md={6}
                key={value.id}
            sx={{ maxWidth: 400, ml:{xs:0, md:10} }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  {/* Number Circle */}
                  <Avatar
                    sx={{
                      bgcolor: "#1500ff1a",
                      color: "#140A53",
                      mb: 2,
                      width: 56,
                      height: 56,
                      fontWeight: "bold",
                    }}
                  >
                    <Typography variant="h6">{value.id}</Typography>
                  </Avatar>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#140A53",
                      mb: 1,
                    }}
                  >
                    {value.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      margin: 0,
                      lineHeight: 1.6,
                      fontSize: "1.0625rem",
                      fontFamily: "Public Sans, sans-serif",
                      textAlign: "justify",
                      color: "#140A53",
                      fontWeight: 300,
                    }}
                  >
                    {value.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Get Started Section - Fixed width issues */}
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            overflow: "hidden",
            mt: 8,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexFlow: "wrap",
              width: "100%",
              justifyContent: "space-between",
              paddingTop: { xs: "2rem", md: "4rem" },
              paddingBottom: { xs: "2rem", md: "4rem" },
            }}
          >
            {/* Left Content */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 2 },
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#140a53",
                  fontWeight: 600,
                }}
              >
                Get Started
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#140a53",
                  fontWeight: 500,
                  mb: { xs: 2, md: 0 },
                }}
              >
                Download OurApp for free on the Google Play <br />
                store – or sign up online today.
              </Typography>

              {/* Button - Visible only on mobile */}
              <Box
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  sx={{
                    backgroundColor: "#140a53",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#0f0842",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>

            {/* Right Side Button - Visible only on desktop */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                size="large"
                disableElevation
                sx={{
                  backgroundColor: "#140a53",
                  fontWeight: 600,
                  textTransform: "none",
                  minWidth: "140px",
                  "&:hover": {
                    backgroundColor: "#0f0842",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutSection;
