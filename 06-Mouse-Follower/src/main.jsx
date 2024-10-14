import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App3 from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>,
)
