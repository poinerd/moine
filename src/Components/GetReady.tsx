import styles from './AllStyles.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function GetReady(){

    const[time, setTime]= useState(3)
    const navigate = useNavigate()

    useEffect(() => {
  const timeInterval = setInterval(() => {
    setTime((prev) => {
      if (prev === 1) {
        clearInterval(timeInterval);
        navigate('/quiz');
        return 0; 
      }
      return prev - 1;
    });
  }, 1000);

  // cleanup on unmount
  return () => clearInterval(timeInterval);
}, [navigate]);



    return(
        <div className={styles.quizStartContainer}>
            <h1>All your questions are ready</h1>
            <p> Quiz starts in {time}</p>
             
        </div>
    )

}

export default GetReady