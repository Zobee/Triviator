import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import he from 'he'
import shuffle from './shuffle'

function ChallengeMode({startQuestions}) {
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [qtimeUp, setqTimeUp] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [gameStart, setGameStart] = useState(false)
    const [currAnswer, setCurrAnswer] = useState("")

    useEffect(() => {
        if (qtimeUp){
            setGameOver(true)
        }
    },[qtimeUp])

    //Pull new questions right before reaching the end of the prev list
    // useEffect(() => {
    //     if(index === startQuestions.length-2){
    //         getQuestions()
    //     }
    // },[])

    //Determines if ans is correct. If not, game over
    const isCorrect = (ans) => {
        if (ans === correct_answer){
            setCorrect(prev => prev+1)
        }// else {
        //     setGameOver(true)
        // }
        if (index < startQuestions.length-1){
            setIndex(prev => prev+1)

        } else {
            getQuestions()
        }
        setCurrAnswer("")
    }

    const getQuestions = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
        console.log(data.results);
        startQuestions = data.results
        setIndex(0)
    }
    let {category, question, correct_answer} = startQuestions[index]
    let answers = []
    return (
        <div>
            {!gameStart ? 
            <div>
                Challenge Mode
                <h5>Instructions:</h5>
                <button onClick={setGameStart(true)}>Start</button>
            </div>
            : !gameOver ? 
            <div>
            <Timer time={30} index={index} setqTimeUp={setqTimeUp} />
            <div> Category: {category} 
            <br/>
            {he.decode(question)}
            <br/>
            <input 
            type='text'
            value={currAnswer}
            onChange={(e) => setCurrAnswer(e.target.value)}
            />
            <button onClick={(e) => isCorrect(e.target.value)}>Submit</button>
            </div>
            </div>
            : 
            <div>Game Over</div>
        }
        </div>
    )
}

export default ChallengeMode
