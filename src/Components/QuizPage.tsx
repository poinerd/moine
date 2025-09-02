import styles from './AllStyles.module.css'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



type Question = {
    question: string;
    options: string[];
    id: number;
}
type QuestionPageProps = {
    questions: Question[];
    time: number
}

function QuizPage({questions, time}:QuestionPageProps){

  const [duration, setDuration] = useState(time)

  const [questionNumber, changeQuestionNumber] = useState(0)

  const navigate = useNavigate()

      useEffect(() => {
  const timeKeeper = setInterval(() => {
    setDuration((prev) => {
      if (prev === 1) {
        clearInterval(timeKeeper);
        navigate('/result');
        return 0; 
      }
      return prev - 1;
    });
  }, 1000);

  // cleanup on unmount
  return () => clearInterval(timeKeeper);
}, [navigate]);


 

  function handleChange (){
    changeQuestionNumber((prev)=>prev +1)

  }

  
    return(

   
    //         <div className={styles.quizStartContainer}>
    //   {questions.map((q, index) => (
    //     <div key={q.id} className={styles.questionBlock}>
    //       <p>{index + 1}. {q.question}</p>
    //       <form>
    //         {q.options.map((option, i) => (
    //           <label key={i}>
    //             <input type="radio" name={`option-${q.id}`} value={option} />
    //             {option}
    //           </label>
    //         ))}
    //       </form>
    //     </div>
    //   ))}
    //   <input className={styles.btn_1} type="submit" value="Next" />
    // </div>

     <div className={styles.container}>
      
        <div className={styles.quizStartContainer}>
          <div className={styles.timeCard}>   

 <p>{duration}</p></div>
        <div key={questions[questionNumber].id} className={styles.questionBlock}>
          <p className={styles.questionCard}>{questions[questionNumber].id}. {questions[questionNumber].question}</p>
          {/* <form>
            {q.options.map((option, i) => (
              <label key={i}>
                <input type="radio" name={`option-${q.id}`} value={option} />
                {option}
              </label>
            ))}
          </form> */}
        </div>
  
      <input className={styles.btn_1} type="submit" value="Next" onClick={handleChange}/>
    </div>
     </div>

    )
}

export default QuizPage