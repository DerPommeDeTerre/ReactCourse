
import './App.css'
import React from 'react';

/**
 * Challenge: add another label and input for the password field
 */
export const App = () => {
  function signUp(formData){//It's receiving the FORM DATA

    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password);
    console.log(email);

    const status = formData.get("employment-status")
    console.log(status);
    
  }
// function handleSubmit(event){
//   event.preventDefault()//Avoid refreshing

//   const formElement = event.currentTarget
//   const formData = new FormData(formElement)
//   const email = formData.get("email")//Retrieve the specified data from the Form Element
//   console.log(email);
//   formElement.reset()
  
// }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
      {/* <form action={} onSubmit={handleSubmit} method = "POST">  */}
        {/* Specifying a function in action="", METHOD is not required */}
        {/* GET Request is the default method */}
        <label htmlFor='email'>Email: </label>
        <input defaultValue="mau@mau" type="email" id='email' name="email" placeholder="joe@schmoe.com"/>
        <br />

        <label htmlFor="password">Password: </label>
        <input defaultValue="password123" type="password" id='password' name='password' placeholder='Enter your password'/>
        {/* Default value property */}
        <br />

        <label htmlFor="description">Description: </label>
        <textarea defaultValue="This is a description" name="description" id="description"></textarea><br />
        {/* To select only one RADIO, all name property has to be the same */}
        <fieldset>
          <legend>Employment Status:</legend>
            <label htmlFor=""><input value="unemployed" type="radio" name="employment-status"/>Unemployed</label>
            <label htmlFor=""><input value="part-time" type="radio" name="employment-status"/>Part-time</label>
            <label htmlFor=""><input value="full-time" defaultChecked={true} type="radio" name="employment-status"/>Full-time</label>
            {/* Default Checked is for selecting a value on radio options */}
        </fieldset>
    
        <br />name="employment-status"
        <button>Submit</button>
        
      </form>
    </section>
  )
}