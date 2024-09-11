import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyleProvider layer>
      <App />
    </StyleProvider>
  </StrictMode>,
)
