import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted:", formData);
    // Add your signup logic here
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt:10
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center",
            background: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#540fc8" }}
          >
            Create an Account
          </Typography>

          <Typography variant="body2" sx={{ mb: 4, color: "text.secondary" }}>
            Join us and start your journey today
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              required
              value={formData.fullName}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                py: 1.4,
                backgroundColor: "#540fc8",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#2d1f55" },
              }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Typography
              component="span"
              onClick={handleLoginClick}
              sx={{
                color: "#2d1f55",
                cursor: "pointer",
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Log in
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}