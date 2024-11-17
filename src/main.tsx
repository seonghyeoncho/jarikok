import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoute from './routes/AppRoute'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoute />
    </ThemeProvider>
  </StrictMode>,
)
