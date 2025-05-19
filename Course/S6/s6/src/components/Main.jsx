import React from 'react'

export const Main = () => {

  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const ingredientsElements = ingredients.map(function(elements){
    return <li key = {elements}>{elements}</li>
  })

  function handleSubmit(event){
    event.preventDefault();//Avoid refreshing
    console.log("Ingredient submited")

    const formData = new FormData(event.currentTarget)// Reads all fields in the Form
    const newIngredient = formData.get("ingredient")//Retrieves value from the input "ingredient"
    console.log(newIngredient)

    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
   <main className='form-container'>
    <form className='form' onSubmit={handleSubmit}>
        <input name = "ingredient" className="form-input" type="text" placeholder='e.g. oregano'/>
        <button className='form-btn'>+ Add ingredient</button>
    </form>

     <ul>
      {ingredientsElements}
    </ul>
   </main>

  )
}
