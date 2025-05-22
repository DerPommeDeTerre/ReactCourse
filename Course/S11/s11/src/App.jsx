
import './App.css'
import React from 'react';

/**
 * Challenge: add another label and input for the password field
 */
export const App = () => {
function handleSubmit(event){
  event.preventDefault()//Avoid refreshing

  const formElement = event.currentTarget
  const formData = new FormData(formElement)
  const email = formData.get("email")//Retrieve the specified data from the Form Element
  console.log(email);
  formElement.reset()
  
}

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method = "POST"> 
        {/* GET Request is the default method */}
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email' name="email" placeholder="joe@schmoe.com"/>
        <br />

        <label htmlFor="password">Password: </label>
        <input type="password" id='password' name='password' placeholder='Enter your password'/>
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}