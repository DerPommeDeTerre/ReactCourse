import React from 'react'
import { useState } from 'react'


// const Button = () => {
//     return(
//        <button>Soy un botón</button>
//     )
// }
//Se puede colocar código JSX antes del Componente para llamarlo
//----------Función fuera----------
  // function handleClick (event, arg){
  //   console.log(event)
  //   console.log(arg)
  // } La función se movió hacia afuera

// const Button = () => {
//   return <button onClick={handleClick}>Soy un botón</button>
// }


export const ContadorApp = ({value}) => {

  const [ contador, setContador ] = useState(value)
  // Estructura de useState typo [variable, método modifica variable] Igualación a useState, pasar valor por defecto

  const handleClick = () => {
   setContador(contador + 1)
 }

  return (
   <>
   <h1>Contador</h1>
   <p>{contador}</p>
   <button onClick={handleClick}>Soy un botón</button>
   {/* <Button></Button> Se llamó al componente*/}
   {/* <button onClick={(event)=> handleClick(event, "Otro argumento")}>Soy un botón</button> //Con 2 argumentos */}
   {/* onClick={function(){console.log("Soy un botón")}} //Como función anónima*/}
   {/*<button onClick={(event)=> handleClick(event)}>Soy un botón</button>
   onClick={handleClick}
   Se puede colocar así siempre y cuando sea un solo argumento*/}
   </>
  )
}
 
