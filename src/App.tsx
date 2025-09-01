import QuizStart from "./Components/QuizStart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizPage from "./Components/QuizPage"
import GetReady from "./Components/GetReady"

function App(){
  return(
 
      <BrowserRouter>




      <Routes>
      <Route path='/' element={<QuizStart/>}></Route>
      <Route path='/quiz' element={<QuizPage/>}></Route>
      <Route path='/getReady' element={<GetReady/>}></Route>
    </Routes>
     
    </BrowserRouter>

  



  )
}

export default App