import styles from './AllStyles.module.css'


function QuizPage(){
    return(
        <div className={styles.quizStartContainer}>
            <p>0 secs</p>
            <p>1</p>
            <div></div>
            <form>
                <input type='radio' name='option' value='A' />
            </form>
            <input  className={styles.btn_1} type='submit' value='Next'/>
        </div>
    )
}

export default QuizPage