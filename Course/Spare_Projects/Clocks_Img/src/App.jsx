import './App.css'
import React from 'react'
import { Card } from './components/Card.jsx'
import img_data from './img_data.js'


export const App = () => {



  // const catalogElements = img_data.map(function(elements){
  //   return <Card key = {elements.id}
  //                cardImg = {elements} />
  // })

  return (
    <>
    <main>
      <Card cardImg={img_data[0]} />
    </main>
      


    
    </>
  )
}
