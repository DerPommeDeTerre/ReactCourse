
import './App.css'
import React from 'react';

/**
 * Challenge: add another label and input for the password field
 */
export const App = () => {
  function signUp(formData){//It's receiving the FORM DATA
    //console.log(Object.fromEntries(formData));//----------Utility to grab all the data
    //We are passing all the entire form data object
    const data = Object.fromEntries(formData);
    console.log(data);
    
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    console.log(dietaryRestrictions);

    const allData = {
      ...data, //Takes all the properties from data
      dietaryRestrictions
    }

    console.log(allData);
    
    
    
    //---------Obtaining Data one by one
    // const email = formData.get("email")
    // const password = formData.get("password")
    // console.log(password);
    // console.log(email);

    // const status = formData.get("employment-status")
    // console.log(status);

    // const dietaryRestrictions = formData.getAll("dietary-restrictions")//getAll to gather all checked elements
    // console.log(dietaryRestrictions);
    
    // const favoriteColor = formData.get("favColor")
    // console.log(favoriteColor);
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
        {/* ---------Input Radio---------- */}
        {/* To select only one RADIO, all name property has to be the same */}
        <fieldset>
          <legend>Employment Status:</legend>
            <label htmlFor=""><input value="unemployed" type="radio" name="employment-status"/>Unemployed</label>
            <label htmlFor=""><input value="part-time" type="radio" name="employment-status"/>Part-time</label>
            <label htmlFor=""><input value="full-time" defaultChecked={true} type="radio" name="employment-status"/>Full-time</label>
            {/* Default Checked is for selecting a value on radio options */}
        </fieldset>
        <br />
        {/* ----------Checkbox Input---------- */}
        <fieldset>
          <legend>Dietary Restrictions: </legend>
          <label htmlFor=""><input type="checkbox" name="dietaryRestrictions" value="Kosher"/>Kosher</label>
          <label htmlFor=""><input type="checkbox" name="dietaryRestrictions" value="Vegan"/>Vegan</label>
          <label htmlFor=""><input type="checkbox" name="dietaryRestrictions" value="Gluten-Free" defaultChecked={true}/>Gluten-free</label>
          </fieldset><br />

          <label htmlFor="favColor">Select your favorite color: </label>
          <select name="favColor" id="favColor" defaultValue="Blue" required>
            {/* DISABLED is not an option */}
            <option value="" disabled>Choose a color</option> 
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>



        <br /><button>Submit</button>
        
      </form>
    </section>
  )
}