import { useState } from "react" //Importar USESTATE

export const AgregarTarea = () => {

    const [inputValue, setInputValue] = useState("") //inicializar useState
    const onInputChange = (event) =>{
        setInputValue(event.target.value)
        console.log(inputValue)
    }

  return (
 <input type="text"
        placeholder="Ingresar nueva tarea"
        value={inputValue}
        onChange={onInputChange}
 
 />//No son INPUTS son PROPERTIES
  )
}

