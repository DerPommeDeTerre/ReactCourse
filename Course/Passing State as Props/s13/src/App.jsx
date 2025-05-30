import './App.css'
import React from 'react'
import { Count } from './components/Count'

export const App = () => {
      const [count, setCount] = React.useState(0)
  
      function add() {
          setCount(prevCount => prevCount + 1)
      }
  
      function subtract() {
          setCount(prevCount => prevCount - 1)
      }

      console.log("App rendered");
      
  return (
    <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>


                <Count
                number = {count}
                ></Count>
                {/* <h2 className="count">{count}</h2> */}

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
  )
}
