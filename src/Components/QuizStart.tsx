import styles from './AllStyles.module.css'
import { useNavigate} from 'react-router-dom'
import { useState,  } from 'react'
import Logo from '../assets/moine1.svg'

type quizStartProps={
    setPlayerName : React.Dispatch<React.SetStateAction<string>>
    setPlayerDuration : React.Dispatch<React.SetStateAction<number>>
    getQuizQuestions : React.Dispatch<React.SetStateAction<any>>
}




function QuizStart ({setPlayerName, setPlayerDuration, getQuizQuestions}: quizStartProps){
    
    const [inputValue, setInputValue]= useState({
        Name:'',
        Duration: 1000
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    function handleChange(e:any){
   

        const {name, value} = e.target  
        setInputValue((prev)=>({
            ...prev, [name]: name === "Duration" ? Number(value) : value

        })
        ) 


    }

    async function fetchQuestions(e:any){
    e.preventDefault()
    setLoading(true);
    setPlayerName(inputValue.Name)
    setPlayerDuration(inputValue.Duration)

    try{
 
        let data = await fetch(`https://opentdb.com/api.php?amount=10`)
        let parsedData = await data.json()
        let quizQuestions = parsedData.results
        let cleanedQuestions = manipulateQuestions(quizQuestions)
        console.log(cleanedQuestions)
        getQuizQuestions(cleanedQuestions)
        console.log('Hello', inputValue.Name )
        console.log('You have '+ inputValue.Duration + 'seconds' )
        navigate('/getReady')
        
    }
    catch{
        navigate('/generateFailed')

    }

    }


    function manipulateQuestions (arr:any){
        return arr.map((ar : any)=>{

            delete ar['category']
            delete ar['difficulty']
            let allAnswers = ar['incorrect_answers']
            const randomNumber = Math.floor(Math.random() * (allAnswers.length + 1));
            allAnswers.splice(randomNumber,0,ar['correct_answer'])

            return{
                    question: ar['question'],
                    answers : allAnswers,
                    type: ar['type'],
                    correct_answer : ar['correct_answer']
                
            }

        })

        

    }
    return(
        <div className={styles.container}>
            <div className={styles.quizStartContainer2}>
            <img src={Logo} style={{width:'17rem', height:''}} alt='logo'/>
            <p> Test you speed and accuracy by answering random questions</p>
      

            <form onSubmit={fetchQuestions} className={styles.quizStartContainer1}>
            <div className={styles.optionsContainer}>
                          <label>Name</label>
                <input name='Name' type="text" placeholder="Enter your name"  onChange={handleChange} required/><br/>

                <label> Select a duration</label>
                <select name="Duration" onChange={handleChange} required>
                    <option value="1000">1000s</option>
                    <option value="15">15s</option>
                    <option value="10">10s</option>
                </select> <br/>
            </div>
      
       
               <button type='submit' disabled={loading}  className={styles.btn_1}> {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        "Submit"
      )} </button>
               
            </form>
            </div>
        </div>
       

    )
}

export default QuizStart