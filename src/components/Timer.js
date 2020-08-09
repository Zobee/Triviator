import React, {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Timer({index, setqTimeUp, time}) {
    const [seconds, setSeconds] = useState(time)
    const [timeUp, setTimeUp] = useState(false)
    const [circleVal, setCircleVal] = useState(100)

    useEffect(() => {
        let interval;
        if (!timeUp) {
          interval = setInterval(() => {
            setCircleVal(((seconds-1)/time)*100)
            setSeconds(seconds => seconds - 1);
          }, 1000);
        if(seconds === 0){
            setTimeUp(true)
            setqTimeUp(true)
            setCircleVal(0)
        }
    }
    return () => clearInterval(interval);
      }, [seconds, timeUp]);

    //Resets Timer on question change
    useEffect(() => {
        setSeconds(time)
        setTimeUp(false)
        setqTimeUp(false)
        setCircleVal(100)
    }, [index])
    return (
        <div className='timer'>
            <CircularProgressbar 
            text = {seconds.toString()}
            value = {circleVal}
            styles={buildStyles({
              pathColor: `rgba(36, 124, 55)`,
              textColor: '#444',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
            />
        </div>
    )
}

export default Timer
