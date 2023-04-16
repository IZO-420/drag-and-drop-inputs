import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import theme from './Theme'
import { ThemeProvider } from '@emotion/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)

reportWebVitals()
