import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fonts.css'
import './i18n'
import App from './App.tsx'

// React hoists its own <title>/<meta> into <head> but does not remove the ones
// written in index.html, and the first of two <title> elements is the one that
// wins. Drop the static fallback before mounting.
document.head.querySelectorAll('[data-static]').forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
