import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box 
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => 
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          <MuiLink 
            component={Link} 
            to="/privacy" 
            color="inherit" 
            sx={{ mx: 1 }}
          >
            Privacy Policy
          </MuiLink>
          <MuiLink 
            component={Link} 
            to="/terms" 
            color="inherit" 
            sx={{ mx: 1 }}
          >
            Terms of Service
          </MuiLink>
          <MuiLink 
            component={Link} 
            to="/contact" 
            color="inherit" 
            sx={{ mx: 1 }}
          >
            Contact Us
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}