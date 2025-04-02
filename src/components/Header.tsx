import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Contact Us</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}