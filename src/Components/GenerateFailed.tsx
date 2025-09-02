import { useNavigate } from "react-router-dom"
import styles from './AllStyles.module.css'

function GenerateFailed(){
    let navigate = useNavigate()

    function goHome (){
        
        navigate('/')
    }
    return(
        <div className={styles.quizStartContainer}>
            <p> Sorry, we could'nt generate any questions. Ensure you have internet</p>
            <button onClick= {goHome} className={styles.btn_1}> Go back to home</button>
        </div>
    )
}

export default GenerateFailed