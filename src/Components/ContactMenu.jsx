import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactMenu = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#F3E8FF',
                borderRadius: '16px',
                p: { xs: 3, sm: 4, md: 5 },
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#1E1B4B',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  lineHeight: 1.3,
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                Reach out to our team.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#1E1B4B',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.3,
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Your feedback matters to us.
              </Typography>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: '#7C3AED',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7C3AED',
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
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: '#7C3AED',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7C3AED',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Subject"
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: '#7C3AED',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7C3AED',
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
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: '#7C3AED',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7C3AED',
                      },
                    },
                  }}
                />

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7C3AED',
                    color: 'white',
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                    alignSelf: 'flex-start',
                    px: 4,
                    '&:hover': {
                      backgroundColor: '#6D28D9',
                      boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                    },
                  }}
                >
                  Submit Now
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: { xs: '300px', sm: '400px', md: '500px' },
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Contact Us"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMenu;
