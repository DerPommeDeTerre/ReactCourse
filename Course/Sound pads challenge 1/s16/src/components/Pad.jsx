import React from 'react'

export const Pad = (props) => {
    console.log(props.id);
    
    const [on, setOn] = React.useState(props.state)
    // function toggle(){
    //     setOn(function(prevValue){
    //         return !prevValue
    //     })
    // }

  return (
    <button
    style = {{backgroundColor: props.color
    }}

    className = {on ? "on" : null}

    // onClick={toggle}
    // onClick={props.toggle}
    onClick = {() => props.toggle(props.id)}

    ></button>
  )
}
