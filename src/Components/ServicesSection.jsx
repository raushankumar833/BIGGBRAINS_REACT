import React from 'react';
import {
  Grid,
  Typography,
  Card,
  Button,
  Box,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '32px',
  margin: '50px 0px',
  [theme.breakpoints.up('md')]: {
    margin: '48px 0px',
  },
}));

const ServiceCard = styled(Card)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || '#FFFFFF',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #E5E5E5',
  transition: 'all 0.3s ease',
  maxWidth: 340,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const FeatureBadge = styled(Button)(({ theme, type }) => ({
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '12px',
  padding: '4px 12px',
  borderRadius: '20px',
  minWidth: 'auto',
  backgroundColor: type === 'featured' ? '#E9F9F2' : '#EFF5FA',
  color: type === 'featured' ? '#10B981' : '#3B82F6',
  border: type === 'featured' ? '1px solid #10B981' : '1px solid #3B82F6',
  '&:hover': {
    backgroundColor: type === 'featured' ? '#D1FAE5' : '#DBEAFE',
  },
}));

const TryNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#140a53',
  color: 'white',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#0f0842',
    transform: 'translateY(-1px)',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  backgroundColor: 'rgba(20, 10, 83, 0.1)',
  fontSize: '28px',
}));

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Banking Services Data
  const bankingServices = [
    {
      title: "Money Transfer",
      description: "Send money instantly with secure, fast, and reliable transfers, ensuring convenience and trust for individuals and businesses anytime, anywhere.",
      icon: "💸",
      badge: "featured",
      bgColor: "#FFFFFF"
    },
    {
      title: "Express Transfer",
      description: "Experience fast, dependable financial transfers with security and ease, offering instant accessibility and convenience for personal or business needs.",
      icon: "⚡",
      badge: "most used",
      bgColor: "#FFFFFF"
    },
    {
      title: "Super Transfer",
      description: "Handle high-value transactions securely and efficiently, with trusted accuracy and safeguards for individuals and businesses needing confidence anytime.",
      icon: "🚀",
      bgColor: "#FFFFFF"
    },
    {
      title: "AePS",
      description: "Aadhaar Enabled Payment System allows withdrawals, balance checks, and transfers using biometrics, ensuring safe, inclusive banking access in rural areas.",
      icon: "👆",
      bgColor: "#FFFFFF"
    },
    {
      title: "CMS",
      description: "Cash Management Services streamline payments, and liquidity with secure, efficient solutions, reducing risks and empowering enterprise financial operations.",
      icon: "💼",
      bgColor: "#FFFFFF"
    },
    {
      title: "UPI",
      description: "Unified Payments Interface enables instant, secure transfers directly from bank accounts, offers convenience & accessibility across India for everyone.",
      icon: "📱",
      bgColor: "#FFFFFF"
    }
  ];

  // Bill Payments Data
  const billPayments = [
    {
      title: "Mobile Recharge",
      description: "Instant prepaid and postpaid mobile recharges with secure processing, fast confirmation, and convenient payments anytime, anywhere across India for all users.",
      icon: "📞",
      badge: "featured",
      bgColor: "#FFFFFF"
    },
    {
      title: "DTH Recharge",
      description: "Recharge your DTH connection instantly & securely with reliable digital transactions, ensuring uninterrupted entertainment, & peace of mind for every household.",
      icon: "📺",
      badge: "most used",
      bgColor: "#FFFFFF"
    },
    {
      title: "Electricity",
      description: "Pay electricity bills online quickly and securely, enjoy instant confirmation, avoid delays, & maintain trusted,hassle-free service for homes & businesses.",
      icon: "💡",
      bgColor: "#FFFFFF"
    },
    {
      title: "Credit Card",
      description: "Settle credit card bills instantly with secure online payments, timely confirmations, and convenient access anytime, ensuring reliable, trusted, and hassle-free transactions.",
      icon: "💳",
      bgColor: "#FFFFFF"
    },
    {
      title: "Gas Bill",
      description: "Pay gas bills instantly and securely with trusted digital processing, convenient payments, and reliable service, ensuring uninterrupted utilities for households and businesses.",
      icon: "🔥",
      bgColor: "#FFFFFF"
    },
    {
      title: "Water Bill",
      description: "Pay water bills online with secure and instant transactions, ensuring timely, convenient, and hassle-free access to uninterrupted water supply for homes and businesses safely.",
      icon: "💧",
      badge: "featured",
      bgColor: "#FFFFFF"
    },
    {
      title: "Broadband",
      description: "Settle broadband and internet bills instantly and securely, guaranteeing uninterrupted connectivity, convenience, and trusted payment processing anytime, anywhere for users.",
      icon: "🌐",
      badge: "most used",
      bgColor: "#FFFFFF"
    },
    {
      title: "Insurance",
      description: "Pay insurance premiums quickly, securely, and reliably online, ensuring protection and continuous coverage for life, health, vehicle, and other policies without delays.",
      icon: "🛡️",
      bgColor: "#FFFFFF"
    },
    {
      title: "Loan Repayment",
      description: "Make loan repayments conveniently and securely online, with instant confirmation and trusted processing, ensuring timely settlements and hassle-free management of obligations.",
      icon: "🏦",
      bgColor: "#FFFFFF"
    }
  ];

  // BBPS Services Data
  const bbpsServices = [
    {
      title: "Electricity",
      description: "Pay your electricity bills instantly with BBPS. Enjoy quick, secure, and hassle-free transactions supporting all major power boards across India.",
      icon: "💡",
      badge: "featured",
      bgColor: "#FFFFFF"
    },
    {
      title: "FASTag",
      description: "Recharge your FASTag effortlessly through BBPS. Ensure smooth highway travel with instant toll payments and avoid queues with convenient top-up options.",
      icon: "🚗",
      badge: "most used",
      bgColor: "#FFFFFF"
    },
    {
      title: "Gas Cylinder",
      description: "Book and pay for LPG cylinder refills conveniently via BBPS. Secure payments accepted across all major gas providers nationwide.",
      icon: "🔥",
      bgColor: "#FFFFFF"
    },
    {
      title: "Mobile Postpaid",
      description: "Pay your postpaid mobile bills instantly. BBPS ensures secure and fast payments for all leading telecom operators across India.",
      icon: "📞",
      bgColor: "#FFFFFF"
    },
    {
      title: "Mobile Prepaid",
      description: "Recharge prepaid mobiles instantly with BBPS. Get flexible top-up options with assured security and instant confirmations.",
      icon: "📱",
      bgColor: "#FFFFFF"
    },
    {
      title: "DTH Recharge",
      description: "Recharge your DTH connection anytime with BBPS. Enjoy uninterrupted entertainment with quick and secure recharges for all leading service providers.",
      icon: "📺",
      bgColor: "#FFFFFF"
    },
    {
      title: "Water Bill",
      description: "Pay water supply bills conveniently. BBPS supports payments for various water boards, ensuring timely and secure transactions.",
      icon: "💧",
      bgColor: "#FFFFFF"
    },
    {
      title: "Insurance Premium",
      description: "Easily pay insurance premiums using BBPS. Support for life, health, motor, and general insurance with instant payment confirmations.",
      icon: "🛡️",
      bgColor: "#FFFFFF"
    },
    {
      title: "Education Fees",
      description: "Pay school, college, and university fees seamlessly through BBPS. Ensure secure, fast, and transparent transactions for educational institutions.",
      icon: "🎓",
      bgColor: "#FFFFFF"
    },
    {
      title: "Loan Repayment",
      description: "Repay personal, housing, and vehicle loans easily using BBPS. Enjoy secure, real-time updates with trusted banking partners.",
      icon: "🏠",
      bgColor: "#FFFFFF"
    },
    {
      title: "Subscriptions",
      description: "Manage and pay for digital and print subscriptions like OTT platforms, newspapers, and magazines with BBPS.",
      icon: "📰",
      bgColor: "#FFFFFF"
    },
    {
      title: "All Services",
      description: "Access all BBPS services on a single platform – electricity, gas, telecom, DTH, water, insurance, fees, loans, and more.",
      icon: "🔧",
      bgColor: "#FFFFFF"
    }
  ];

  const renderServiceCard = (service, index) => (
    <Grid item xs={12} sm={12} md={6} lg={4} key={index} spacing={5} sx={{maxWidth:1200, ml:2}}>
      <ServiceCard bgcolor={service.bgColor} sx={{mr:1.5}}>
        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            {service.badge && (
              <FeatureBadge type={service.badge === 'featured' ? 'featured' : 'most used'}>
                {service.badge}
              </FeatureBadge>
            )}
            <IconContainer>
              {service.icon}
            </IconContainer>
          </Box>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#140a53', 
              fontWeight: 700, 
              mb: 2,
              fontSize: '1.25rem',
              lineHeight: 1.3
            }}
          >
            {service.title}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666666', 
              mb: 3, 
              lineHeight: 1.6,
              fontSize: '0.875rem',
              fontWeight: 400
            }}
          >
            {service.description}
          </Typography>
          
          <Box sx={{ mt: 'auto' }}>
            <TryNowButton 
              variant="contained" 
              endIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35z"/>
                </svg>
              }
            >
              Try Now
            </TryNowButton>
          </Box>
        </Box>
      </ServiceCard>
    </Grid>
  );

  const renderSection = (title, description, services) => (
    <SectionContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#140a53', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#140a53', 
                fontWeight: 500,
                fontSize: '1.125rem',
                lineHeight: 1.6
              }}
            >
              {description}
            </Typography>
          </Stack>
        </Grid>
        {services.map((service, index) => renderServiceCard(service, index))}
      </Grid>
    </SectionContainer>
  );

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {renderSection(
        "Banking",
        "Simplifying banking with secure, fast, and reliable financial solutions for money transfers, AePS, UPI, CMS, and more, ensuring convenience, accessibility, and trust for everyone.",
        bankingServices
      )}
      
      {renderSection(
        "Bill Payments",
        "Easily pay mobile, DTH, electricity, credit card, gas, water, broadband, insurance, and loan bills securely anytime, anywhere with trusted digital solutions.",
        billPayments
      )}
      
      {renderSection(
        "BBPS",
        "Pay bills seamlessly with Bharat Bill Payment System – a unified platform offering secure, fast, and reliable transactions for utilities, telecom, insurance, subscriptions, and more anytime, anywhere.",
        bbpsServices
      )}
    </Box>
  );
};

export default ServicesSection;