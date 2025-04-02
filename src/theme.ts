import { createTheme } from '@mui/material/styles';

// Создаем базовую тему
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Синий цвет
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // Фиолетовый цвет
    },
    background: {
      default: '#f5f5f5', // Светло-серый фон
      paper: '#ffffff', // Белый цвет для карточек
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none', // Отключаем автоматические заглавные буквы в кнопках
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Закругленные углы кнопок
          padding: '8px 16px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // Используем outlined стиль для текстовых полей
        size: 'small',
      },
    },
  },
});

export default baseTheme;