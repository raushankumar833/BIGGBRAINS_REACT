import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Avatar,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Import the image - adjust path based on your file structure
import heroBackground from "../assets/hero.jpeg";

// Styled components
const ContactContainer = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: "100%",
  padding: "32px ", // Remove side padding, keep only vertical
  margin: "50px 0 32px 0", // Remove side margins
  mt: { xs: 13, sm: 13, md: 9, lg: 9 },
  position: "relative",
  backgroundImage: `url(${heroBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  [theme.breakpoints.down("md")]: {
    padding: "64px 0", // Remove side padding on mobile too
    margin: "25px 0 32px 0",
    minHeight: "600px",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 16px", // Keep only internal padding
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "8px",
  width: "100%",
}));

const ContactCard = styled(Card)(({ theme }) => ({
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  padding: "32px 24px",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  transition: "all 0.3s ease",
  minHeight: "320px",
  "&:hover": {
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-4px)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
}));

// Custom avatar styles for each type
const PhoneAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#ff6f61",
  color: "white",
  width: 80,
  height: 80,
  marginBottom: "20px",
  border: "2px solid #ff6f61",
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
  },
}));

const EmailAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#42a5f5",
  color: "white",
  width: 80,
  height: 80,
  marginBottom: "20px",
  border: "2px solid #42a5f5",
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
  },
}));

const LocationAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#7e57c2",
  color: "white",
  width: 80,
  height: 80,
  marginBottom: "20px",
  border: "2px solid #7e57c2",
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
  },
}));

const ContactLink = styled(Link)(({ theme }) => ({
  color: "#7e57c2",
  textDecoration: "none",
  fontWeight: 600,
  marginTop: "auto",
  fontSize: "1rem",
  padding: "8px 16px",
  borderRadius: "8px",
  backgroundColor: "rgba(126, 87, 194, 0.1)",
  transition: "all 0.3s ease",
  width: "100%",
  textAlign: "center",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#7e57c2",
    textDecoration: "none",
    transform: "translateY(-1px)",
  },
}));

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const contactData = [
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Reach out to our support team for any questions or assistance.",
      link: "tel:011-47537321/+917428985999",
      linkText: "011-47537321 / +917428985999",
      avatarComponent: PhoneAvatar,
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Contact us for demos, pricing details, or product inquiries.",
      link: "mailto:Support@p2pae.com",
      linkText: "Support@p2pae.com",
      avatarComponent: EmailAvatar,
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      title:
        "Visit our office to meet our team and explore solutions in person.",
      link: "https://www.google.com/maps/search/?api=1&query=%20PVT%20No.-2%2C%20B-1%2C%20KH%20No.900%2F289Ground%20Floor%2C%20Shalimar%20Village%2C%20Delhi%2C%20North%20West%20Delhi-%20110088%2C%20Delhi",
      linkText:
        "PVT No.-2, B-1, KH No.900/289Ground Floor, Shalimar Village, Delhi, North West Delhi- 110088, Delhi",
      avatarComponent: LocationAvatar,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Contact Cards Section */}
      <ContactContainer>
        <ContentWrapper>
          <HeaderSection>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                mb: 2,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Searching for solutions made simple?
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.75rem" },
                mb: 3,
                opacity: 0.9,
              }}
            >
              We're here to make it easy for you
            </Typography>
            <Divider
              sx={{
                width: "100px",
                height: "4px",
                backgroundColor: "#d2b28c",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </HeaderSection>

          <Paper
            elevation={0}
            sx={{
              boxShadow: "none",
              backgroundColor: "transparent",
              width: "100%",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {contactData.map((contact, index) => {
                const AvatarComponent = contact.avatarComponent;
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ContactCard
                      sx={{
                        width: "100%",
                        maxWidth: "300px",
                      }}
                    >
                      <AvatarComponent>{contact.icon}</AvatarComponent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#140a53",
                          fontWeight: 500,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          lineHeight: 1.6,
                          mb: 3,
                          flexGrow: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {contact.title}
                      </Typography>
                      <ContactLink
                        href={contact.link}
                        target="_blank"
                        underline="none"
                      >
                        {contact.linkText}
                      </ContactLink>
                    </ContactCard>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </ContentWrapper>
      </ContactContainer>

      {/* Contact Form Section */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
          display: "flex",
          alignItems: "center",
          py: { xs: 4, md: 8 },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {/* Contact Form */}
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F3E8FF",
                  borderRadius: "16px",
                  p: { xs: 3, sm: 4, md: 4 },
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#1E1B4B",
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  Reach out to our team.
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#1E1B4B",
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 4,
                    textAlign: "center",
                  }}
                >
                  Your feedback matters to us.
                </Typography>

                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                >
                  <TextField
                    fullWidth
                    placeholder="Name"
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "#7C3AED",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7C3AED",
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    type="email"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "#7C3AED",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7C3AED",
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Subject"
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "#7C3AED",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7C3AED",
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Enter your message here."
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "#7C3AED",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7C3AED",
                        },
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#7C3AED",
                      color: "white",
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                      width: "100%",
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      px: 4,
                      "&:hover": {
                        backgroundColor: "#6D28D9",
                        boxShadow: "0 6px 20px rgba(124, 58, 237, 0.5)",
                      },
                    }}
                  >
                    Submit Now
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Image */}
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Contact Us"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactSection;
