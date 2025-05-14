
/* eslint-disable no-unused-vars */
// import './PrimerComponente.css' 
import { Fragment } from "react"
import PropTypes from 'prop-types'
//---------IMPORTS siempre arriba----------






// ----------PROPS en REACT---------
// export const PrimerComponentee = ({titulo, subtitulo}) => {//PROPS no entra como parámetro
//                                              //se utiliza la desestructuración con {clave}
//                                              //tmb se puede incluir aquí el valor de PROPS
//                                              //pero se le da prioridad al valor proveniente del padre
//   console.log(titulo);
//   console.log(subtitulo);
//   return(
//     <>
//     <h1>{titulo}</h1>
//     <h2>{subtitulo}</h2>
//     </>
//   )
// }

// PrimerComponentee.PropTypes = {
//   titulo: PropTypes.string.isRequired,
//   subtitulo: PropTypes.string .isRequired
// }

// PrimerComponentee.defaultProps = {
//   titulo: "Curso de React",
//   subtitulo: "Sección de Props"
// }


// const string = "Esto es un texto"
// const number = 123456
// const array = ["Curso de React", "Youtube", 4, 1000000]
// const boolean = true
// const funcion = () => 1 + 1//Si se ejecuta dentro de las llaves, muestra el resultado
// const objeto = {
//     nombre: "Curso de JavaScript",
//     duracion: 4
// } //Objetos no ejecutables en hijos
// const fecha = new Date() //Objetos no ejecutables en hijos
//Para ejecutar un OBJETO se coloca ---------->JSON.STRINGIFY(OBJETO)<----------



// // Hecho con FFC
// function PrimerComponente() { //Nombres declarados en mayúsculas
//     return ( <h1>Hola Mundo</h1>); //Delimitar return con ( )
//     //Abrir y cerrar etiquetas HTML
// }

// export default PrimerComponente;
// //EXPORT DEFAULT Nombre de la función
//----------Ya no se usa----------

// import React, { Component } from 'react';//Cuando se utiliza CC, no olvidar esta línea
// class PrimerComponente extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <h1>Hola Mundo!</h1>
//         );
//     }
// }

// ----------Ya no se usa----------
// export default PrimerComponentee
// Hecho con RAFC
//Hace el Import y Toma el nombre del archivo
// PrimerComponentee.jsx

// -----Variables en Props----------
// export const PrimerComponentee = () => { //EXPORT va al principio
//   return (
//     // <div>
//     <>
//     {/* <h1>Variables en JSX</h1>
//     <h4>Variable String</h4> <p>{string}</p>
//     <h4>Variable number</h4> <p>{number}</p>
//     <h4>Variable array</h4> <p>{array}</p>
//     <h4>Variable boolean</h4> <p>{boolean}</p>
//     <h4>Variable funcion</h4> <p>{funcion}</p>
//     <h4>Variable String</h4> <p>{string}</p> */}
//     </>
//     // </div>

//     //Se puede poner todo dentro de un DIV o FRAGMENT
//   );
// };
