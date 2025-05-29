import React from 'react'


export const Joke = (props) => {

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
    setIsShown(function(prevShown){
      return !prevShown;
    });    
  }
   console.log(isShown);

    // console.log(props.comments)
  return (    
    <>
    <article>
        {/* -----Conditional----- */}
       {props.setup && <h2 className='setup'>{props.setup}</h2>}
       {/* -----Ternary----- */}
       {/* <h2 style={{display: props.setup ? "block" : "none"}}>{props.setup}</h2> */}
        {/* ----------CONDITION &&---------- 
        {isShown === true && <p className='punchLine'>{props.punchline}</p>} */}
        {isShown ? <p className='punchLine'>{props.punchline}</p> : null}
        {/* ----------TERNARY----------
            EXPRESSION ---- TRUTHY VALUE ---- NULL */}
        {/*<p>{props.upvote}  {props.downvote}  {props.isjoke}</p>} */}
        {/* {isShown == false &&
          <button onClick={toggleShown}>Show punchline</button>}
        {isShown == true &&
          <button onClick={toggleShown}>Hide punchline</button>} */}
          <button onClick={toggleShown}> {isShown ? "Hide punchline" : "Show punchline"} </button>
    </article>
    
    </>
  )
}
