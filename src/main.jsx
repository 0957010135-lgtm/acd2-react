import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Inicio from './pages/Inicio.jsx'
import Mortandad from './pages/Mortandad.jsx'
import Noticias from './pages/Noticias.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio/>} />
          <Route path='mortandad' element={<Mortandad />} />
          <Route path='noticias' element={<Noticias />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)