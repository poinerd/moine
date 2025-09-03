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
            <p style={{fontSize:'1.5rem',}}>{playerName} , your questions are ready!</p>
            <p style={{backgroundColor:'#ccfae3ff', padding:'0.9rem', borderRadius:'0.5rem', fontWeight:'medium'}}> Quiz starts in {time}</p>
        </div>
      </div>
        
    )

}

export default GetReady