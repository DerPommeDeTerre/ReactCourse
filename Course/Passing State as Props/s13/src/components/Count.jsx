import React from 'react'

export const Count = (props) => {
    console.log("Count rendered");
    
  return (
    <h2 className = "count"> 
        {props.number}
    </h2>
  )
}
