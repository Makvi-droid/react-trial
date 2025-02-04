import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Greeting />
     <Greeting />
  </StrictMode>,
)
