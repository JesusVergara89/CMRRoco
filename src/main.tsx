import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cmr from './Cmr.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <StrictMode>
      <Navbar />
      <Cmr />
    </StrictMode>,
  </HashRouter>
)
