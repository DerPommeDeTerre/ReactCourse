import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PrimerComponente from './PrimerComponente'
//IMPORT nombre del componente FROM ruta del componente './ruta'
import { PrimerComponentee } from './PrimerComponentee';
import './styles.css'

//Con RAFC se emplean llaves para el nombre del componente
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponentee></PrimerComponentee>
    {/* Incluir componente en el ROOT */}
  </StrictMode>,
)
