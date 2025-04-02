import { useState } from 'react'
import { TextField, Button, Container, Box, Typography } from '@mui/material'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Обработка формы
  }

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} my={4}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        {/* Поля формы */}
      </Box>
    </Container>
  )
}