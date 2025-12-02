import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #5A0FC8, #480dc6ff)",
        py: 1,
      }}
      elevation={0}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/src/assets/logop2p.png"
            alt="logo"
            sx={{ height: 40, mr: 1 }}
          />
        </Box>

        {/* Navigation */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", mr: 3 ,display: { xs: "none", md: "flex" },}}
        >
          {["Home", "About Us", "Our Services", "Our Partners", "Contact Us"].map(
            (item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{ color: "white", cursor: "pointer", "&:hover": { opacity: 0.8 } }}
              >
                {item}
              </Typography>
            )
          )}
        </Stack>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7C2EE5",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#6925c7" },
          }}
        >
          Login Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
