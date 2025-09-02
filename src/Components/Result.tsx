import styles from './AllStyles.module.css'
import { useNavigate } from 'react-router-dom'


function Result(){
    const navigate = useNavigate()

    function handleClick(){
        navigate('/')

    }
    return(
        <div className={styles.quizStartContainer}>
             <p> Time's up!</p>
             <p> Your accuracy was </p>
             <p> Your speed was </p>
             <button className={styles.btn_1} onClick={handleClick}>Play again</button>
        </div>
    )

}

export default Result