import './App.css'

import React from 'react'

export const App = () => {
  const [unreadMessages, setUnreadMessages] = React.useState([])

  function determineText(){

  if(unreadMessages.length === 0){
    return  "You're caught up!"
  } else if(unreadMessages.messages === 1) {
    return "You have 1 unread message"
  } else {
    return `You have ${unreadMessages.length}`
  }
  }


  return (
    <div>

    <h1>{determineText()}</h1>

      {/* {unreadMessages.length > 0 && 
      <h1>You have {unreadMessages.length} unread messages!</h1>} */}
      {/* {unreadMessages.length === 0 && 
      <p>You have no messages</p>} */}
    </div>
  )
}

