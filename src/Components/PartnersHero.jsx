import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";

const WhyBecomeRetailer = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9fb", py: 8 }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why become P2PAE Retailer ?
        </Typography>

        {/* ✅ FIRST SECTION — Image LEFT, Text RIGHT */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: { xs: 6, md: 10 } }}
        >
          {/* ✅ Image on LEFT */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 1 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start", // pushes image to the left
            }}
          >
            <Box
              component="img"
              src="/src/assets/partner_why.jpg"
              alt="Retail Growth"
              sx={{
                width: "100%",
                maxWidth: 450,
                display: "block",
              }}
            />
          </Grid>

          {/* ✅ Text on RIGHT */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end", // pushes text to the right
            }}
          >
            <Stack spacing={2} sx={{ maxWidth: 500 }}>
              <Typography variant="h6" fontWeight="bold">
                P2PAE for Retails
              </Typography>
              <Typography variant="body1" color="text.secondary">
                P2PAE has always been Vocal for the Local shopkeepers. Through
                P2PAE, more than 4,00,000 retailers have served around 3 crore
                unique customers in 2,300+ cities. With our trusted platform,
                retailers not only increased their monthly earnings but also
                attracted more customer footfall, gaining better visibility,
                trust, and long-term customer loyalty in their local market.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* ✅ SECOND SECTION — Don’t change */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: { xs: 6, md: 10 } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }}
            sx={{ maxWidth: 500 }}
          >
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                Become a true solution provider
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Become an Aatma Nirbhar Dukaandar and earn an additional
                Rs.16,000 every month. With P2PAE, you are not just selling
                services — you are providing complete solutions to your
                customers. Our platform is Easy, Fast & Secure to use,
                empowering you to deliver financial services, bill payments, and
                money transfers right from your shop, creating stronger customer
                relationships and ensuring repeat business.
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/src/assets/partner_why.jpg"
              alt="Solution Provider"
              sx={{
                width: "100%",
                maxWidth: 450,
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>

        {/* ✅ THIRD SECTION — same as before */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: { xs: 6, md: 10 } }}
        >
          {/* ✅ Image on LEFT */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 1 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start", // pushes image to the left
            }}
          >
            <Box
              component="img"
              src="/src/assets/partner_why.jpg"
              alt="Retail Growth"
              sx={{
                width: "100%",
                maxWidth: 450,
                display: "block",
              }}
            />
          </Grid>

          {/* ✅ Text on RIGHT */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end", // pushes text to the right
            }}
          >
            <Stack spacing={2} sx={{ maxWidth: 500 }}>
              <Typography variant="h6" fontWeight="bold">
                P2PAE for Retails
              </Typography>
              <Typography variant="body1" color="text.secondary">
                P2PAE has always been Vocal for the Local shopkeepers. Through
                P2PAE, more than 4,00,000 retailers have served around 3 crore
                unique customers in 2,300+ cities. With our trusted platform,
                retailers not only increased their monthly earnings but also
                attracted more customer footfall, gaining better visibility,
                trust, and long-term customer loyalty in their local market.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyBecomeRetailer;
