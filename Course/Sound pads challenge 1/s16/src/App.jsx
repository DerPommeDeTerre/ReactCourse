import './App.css'
import padsData from "/src/pads.js"
import React from 'react'
import {Pad} from "/src/components/Pad.jsx"

export const App = () => {
const [pads, setPads] = React.useState(padsData);
// const styles = {
//   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
// }

function toggle(id){
  console.log(id);
  
  // console.log("Clicked");
  
}

const buttonElements = pads.map(function(pad){
  // return <button style={styles} key={pad.id}></button>
  // return <button key = {pad.id}></button>
  return <Pad key = {pad.id} color = {pad.color} state = {pad.on} toggle = {toggle} id = {pad.id}></Pad>
})
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}


