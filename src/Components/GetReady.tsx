import styles from './AllStyles.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


type player = {
      playerName : string
    }

function GetReady({playerName}:player){

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
      <div className={styles.container}>
        <div className={styles.quizStartContainer}>
            <p>{playerName} your questions are ready</p>
            <p> Quiz starts in {time}</p>
        </div>
      </div>
        
    )

}

export default GetReady