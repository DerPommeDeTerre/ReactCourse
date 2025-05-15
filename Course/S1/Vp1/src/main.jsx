import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Fragment} from 'react'
import { Header } from './Header.jsx'
import { MainC } from './MainC.jsx'
import { Footer } from './Footer.jsx'
import './Main.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Page></Page>
    {/* <TemporaryName></TemporaryName> */}
    {/* <App /> */}

  </StrictMode>,
)

function Page(){
  return (
    <> 
      <Header></Header>
      <MainC></MainC>
      <Footer></Footer>
    </>

  )
}

// function TemporaryName(){
//   return (
//     <main>
//       <img src="src/assets/react.svg" width="40px"alt="React Logo"/>
//       <h1>Fun facts about React</h1>    
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 200K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Poers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//         </main>
//   )
// }