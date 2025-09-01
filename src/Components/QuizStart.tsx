import styles from './AllStyles.module.css'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'





function QuizStart (){

    const [inputValue, setInputValue]= useState({
        Name:'',
        Duration: 0
    })

    const navigate = useNavigate()



    function handleChange(e:any){
        const {name, value} = e.target  
        setInputValue((prev)=>({
            ...prev, [name]: name === "Duration" ? Number(value) : value

        }))

    }

    async function fetchQuestions(e:any){
    e.preventDefault()
    try{
        let data = await fetch(`https://opentdb.com/api.php?amount=10`)
        let parsedData = await data.json()
        console.log(parsedData)
        console.log('Hello', inputValue.Name )
        console.log('You have '+ inputValue.Duration + 'seconds' )
        navigate('/getReady')
        
    }
    catch{

    }

}
    return(
        <div className={styles.quizStartContainer}>
            <h1 >Hermoine</h1>
            <p> Test you speed and acuuracy in answering random questions</p>
            <form onSubmit={fetchQuestions}>
            <div className={styles.optionsContainer}>
                          <label>Name</label>
                <input name='Name' type="text" placeholder="Enter your name"  onChange={handleChange}/><br/>

                <label> Select a duration</label>
                <select name="Duration" onChange={handleChange}>
                    <option value="30">30 seconds</option>
                    <option value="60">1 minute</option>
                    <option value="120">2 minutes</option>
                </select> <br/>
            </div>
      
               <input  type="submit" value="Start Quiz" className={styles.btn_1}/>
               
            </form>
        </div>

    )
}

export default QuizStart