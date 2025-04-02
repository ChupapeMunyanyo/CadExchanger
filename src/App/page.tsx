import { Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function Home() {
  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Link>
      <YoutubeEmbed />
    </Box>
  )
}