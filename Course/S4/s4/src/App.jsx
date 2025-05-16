import './App.css'
import { Contact } from './components/Contact'


export const App = () => {
  return (
    <>
    <article className='cards-main-container'>
      <Contact 

      img=  "src/assets/mr-whiskerson.png"
      name = "Mr. Whiskerson" 
      phone = "(212) 555-1234"
      mail = "mr.whiskaz@catnap.meow"

      ></Contact>

      <Contact
      
      img = "src/assets/fluffykins.png"
      name = "Fluffykins"
      phone = "(212) 555-2345"
      mail = "fluff@me.com"
      
      ></Contact>

      <Contact

      img = "src/assets/felix.png"
      name = "Felix"
      phone = "(212) 555-4567"
      mail = "thecat@hotmail.com"
      
      ></Contact>

       <Contact

      img = "src/assets/pumpkin.png"
      name = "Pumpkin"
      phone = "(0800) CAT KING"
      mail = "pumpkin@scrimba.com"
      
      ></Contact>
    </article>
    </>
  )
}



// export const App = () => {

//   const firstName = "Joe"
//   const lastName = "Schmoe"

//   const hours = new Date().getHours()
//   let timeOfDay

//   if(hours < 12){
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17){
//     timeOfDay = "afternoon"
//   } else if (hours < 21){
//     timeOfDay = "evening"
//   } else {
//     timeOfDay = "night"
//   }

//   return (
//    <>
//     <h1>Hello {firstName} {lastName}</h1>
//     <h1>It is currently about {hours}</h1>
//     <h1>Good {timeOfDay}</h1>
//    </>
//   )
// }
