import styles from './AllStyles.module.css'



function Result(){
    return(
        <div className={styles.quizStartContainer}>
             <p> Time's up!</p>
             <p> Your accuracy was </p>
             <p> Your speed was </p>
        </div>
    )

}

export default Result