
import './App.css'

import React from 'react'


export const App = () => {

  const [count, setCount] = React.useState(0)
  function decrease(){
    setCount(function(prevValue){
      return prevValue - 1
    })
  }
  function increase(){
    setCount(function(prevValue){
      return prevValue + 1
    })
  }

  return (
    <main className='container'>
      <div className='counter'>
        <button onClick={decrease} className='minus' aria-label='Dicrease Count'>-</button>
        <h2 className='count'>{count}</h2>
        <button onClick={increase} className='plus' aria-label='Increase Count'>+</button>
      </div>

    </main>
  )
}


// export const App = () => {

//   // let[result, setResult] = React.useState("Mein")
//   // function handleClick(){
//   //   setResult("Oui");
//   // }

//   const [count, setCount] = React.useState(0)

//     // function increase(){
//     //   setCount(count + 1)
//     // }

//     //  function dicrease(){
//     //   setCount(count - 1)
//     // }
//     //------Callback function----------
//     function increase(){
//       setCount(function(prev){
//         return prev + 1;
//       })
//     }

//      function dicrease(){
//       setCount(function(prev){
//         return prev - 1;
//       })
//     }


//   return (
//     <main className='container'>
//       <h1 className='title'>How many times will Bob say "state" in this section?</h1>
//       <div className='counter'>
//         <button onClick={dicrease} className='minus' aria-label='Decrease count'>-</button>
//         <h2 className='count'>{count}</h2>
//         {/* <button onClick={handleClick} className='value'>{result}</button> */}
//         <button onClick={increase} className='plus' aria-label='Increase count'>+</button>
//       </div>
//     </main>
//   )
// }


