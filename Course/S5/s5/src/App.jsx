
import './App.css'
import { Joke } from './components/Joke'
import jokesData from '/src/jokesData.js'


export const App = () => {
    // console.log(jokesData)
    const jokeElements = jokesData.map(function(elements){
      return <Joke setup = {elements.setup} punchline = {elements.punchline}/>
    })
  return (
    <main>
      {jokeElements}
    </main>
  )
}


//---------Ninja Turtles----------
// export const App = () => {
//     const ninjaTurtles = [<h2>Donatello</h2>, <h2>Michaelangelo</h2>, <h2>Rafael</h2>, <h2>Leonardo</h2>]

//     return (
//     <>
//     <main>
//          {ninjaTurtles}
//     </main>
//     </>
//   )
// }


//----------Joke----------
// export const App = () => {
//   return (
//     <>
//     <Joke 
//     setup = "Why don’t skeletons fight each other?"
//     punchLine = "Because they don’t have the guts."
//     upvote = {4}
//     downvote = {4}
//     isjoke = {true}
//     comments = {[
//       {author:"fdsf", text:"sdfsd", title:"sdfsd"},
//       {author:"sdfsd", text:"sdfsd", title:"sdfds"}
//     ]}
//     >
//     </Joke>

//     <Joke 
//     setup = "Why did the scarecrow win an award?"
//     punchLine = "Because he was outstanding in his field.">
//     </Joke>

//     <Joke 
//     setup = "Why can’t your nose be 12 inches long?"
//     punchLine = "Because then it would be a foot.">
//     </Joke>

//     <Joke 
//     setup = "Why did the math book look sad?"
//     punchLine = "Because it had too many problems.">
//     </Joke>

//     <Joke 
//     setup = "What do you call fake spaghetti?"
//     punchLine = "An impasta.">
//     </Joke>

//        <Joke 
//     setup = ""
//     punchLine = "I told my wife she was drawing her eyebrows too high. She looked surprised.">
//     </Joke>
//     </>
//   )
// }



