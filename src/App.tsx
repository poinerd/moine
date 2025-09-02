import { useState } from "react"
import QuizStart from "./Components/QuizStart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizPage from "./Components/QuizPage"
import GetReady from "./Components/GetReady"
import GenerateFailed from "./Components/GenerateFailed"
import Result from "./Components/Result"





function App(){

  const [playerName, setPlayerName] = useState('')
  const [playerDuration, setPlayerDuration] = useState(0)
  // const [quizQuestions, getQuizQuestions] = useState([])

   let dummy =[
    {
    question: 'who invented coal',
    options: ['foss', 'fs', 'rafel'],
    id: 1
    },

     {
    question: 'who invented coal stark',
    options: ['foss', 'fs', 'rafel'],
    id: 2
    }
   ]

  return(
 
      <BrowserRouter>




      <Routes>
      <Route path='/' element={<QuizStart setPlayerName={setPlayerName} setPlayerDuration={setPlayerDuration}/>}></Route>
      <Route path='/quiz' element={<QuizPage questions={dummy} time={playerDuration}/>}></Route>
      <Route path='/getReady' element={<GetReady playerName={playerName}  />}></Route>
      <Route path='/generateFailed' element={<GenerateFailed />}></Route>
      <Route path='/result' element={<Result />}></Route>
    </Routes>
     
    </BrowserRouter>

  



  )
}

export default App