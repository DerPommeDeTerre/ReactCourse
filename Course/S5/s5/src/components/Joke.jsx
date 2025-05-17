import React from 'react'

export const Joke = (props) => {
    console.log(props.comments)
  return (    
    <>
    <article>
        {/* -----Conditional----- */}
       {props.setup && <h2 className='setup'>{props.setup}</h2>}
       {/* -----Ternary----- */}
       {/* <h2 style={{display: props.setup ? "block" : "none"}}>{props.setup}</h2> */}
        <p className='punchLine'>{props.punchline}</p>
        <p>{props.upvote}  {props.downvote}  {props.isjoke}</p>
    </article>
    
    </>
  )
}
