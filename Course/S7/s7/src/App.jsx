
import './App.css'
import React from 'react'//Imports all the Library
//import { useState } from 'react'//Imports only this functionality

export const App = () => {

  let [isGoingOut, setIsGoingOut] = React.useState(true)
  console.log(isGoingOut)

  function handleClick(){
    setIsGoingOut(function(state){
      return !state;
    })
  }

  

    //let answer =  isGoingOut ? "Yes" : "No"//Ternary

    // if(isGoingOut === true){
    //   answer = "Yes"
    // } else {
    //   answer = "No"
    // }
   

  return (
    <main>
      <h1 className='title'> Do I feel like going out tonight?</h1>
      <button onClick={handleClick} className='value' aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it`}>{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}


//----------Handle Click, Yes----------
// export const App = () => {
    
//   let [result, setResult] = React.useState("Yeah")
//   function handleClick(){
//     setResult("Oui")
//   }


//   // setResult("Yipi")
//   // console.log(result)

//     // const result = React.useState("Hello")
//     // console.log(result)
    
//     return (
//         <main>
//             <h1 className="title">Is state important to know?</h1>
//             {/* <button className="value">{result[0]}</button> */}
//             <button onClick={handleClick} className="value">{result}</button>
//         </main>
//     )
// }

//---------Handle Click, Hover---------
// export const App = () => {
//   function handleClick(){
//     console.log("I was clicked")
//   }

//   function handleHover(){
//     console.log("Mouse over image")
//   }

//   return (
//     <main>
//       <article className='img-container'>
//        <img src="https://picsum.photos/640/360" alt="Placeholder image from Picsum" onMouseOver={handleHover}/>
//        {/* <button onClick={function(){console.log("Clicked")}}>Click me</button> */}
//        {/* Functions can be placed inside the elements */}
//        <button onClick={handleClick}>Click me</button>
//       </article>
//     </main>
//   )
// }
