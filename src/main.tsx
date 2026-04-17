import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const notes = [
  "Pipeline de calidad activo",
  "Promoción controlada de develop a staging",
  "Despliegue de staging en GitHub Pages",
  "Cambio visible desde develop"
];