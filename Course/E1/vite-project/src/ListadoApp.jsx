import { useState } from "react"

const Items = ({nombre, visto}) => {
    return(
        // <li>{nombre} {visto ? "🟢" : "🔴"}</li> -----Operador ternario
        <li className="rojo">{nombre} {visto && "🟢"}</li>
        //Se utiliza className para nombrar una clase
    )
}


export const ListadoApp = () => {

const addTask = () => {
    setArreglo([...arreglo, {nombre: "nuevo", visto: false}])
    }//Así se agrega un elemento, usando un spread operator


    let listadoSecciones = [
        {nombre: "Instalaciones necesarias" , visto: true},
        {nombre: "Uso de Vite" , visto: true},
        {nombre: "Variables en JSX" , visto: true},
        {nombre: "Props" , visto: true},
        {nombre: "Eventos" , visto: true},
        {nombre: "useState" , visto: true},
        {nombre: "Redux" , visto: false},
        {nombre: "Custom Hooks" , visto: false}
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)
    console.log(arreglo);

  return (
<>
      <h1>Listado de temas del curso</h1>
      <ol>
        {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto} />
        )}
      </ol>

      <button onClick={() => addTask()}>Agregar tarea</button>
    </>
  )
}