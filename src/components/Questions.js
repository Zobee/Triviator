import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import he from 'he'
import shuffle from './shuffle'
import Results from './Results'

function Questions({questions, challenge}) {
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [qtimeUp, setqTimeUp] = useState(false)
    const [complete, setComplete] = useState(false)
    const [clicked, setClicked] = useState("btn-off")

    useEffect(() => {
        if (qtimeUp){
            isCorrect(false)            
        }
    },[qtimeUp])

    useEffect(() => {
        clicked === "btn-on" && setTimeout(() => {
            setClicked("btn-off")
        },150)
    },[clicked])
    
    //function to get more questions if in challenge mode
    const getQuestions = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
        questions = data.results
        setIndex(0)
    }
    
    const {category, question, type, correct_answer} = questions[index]
    let answers = []
    if(type === 'multiple'){
        questions[index].incorrect_answers.forEach(ans => answers.push(he.decode(ans)))
        answers.push(he.decode(correct_answer))
        answers = shuffle(answers)
    } else {
        answers = ["True", "False"]
    }
    const isCorrect = (ans) => {
        setClicked("btn-on")
        if (ans === correct_answer){
            setCorrect(prev => prev+1)
        }else if (challenge){
             setComplete(true)
        }
        if (index < questions.length-1){
            setIndex(prev => prev+1)
        } else if(challenge){
            getQuestions()
        }
        else {
            setComplete(true)
        }
    }

    //Adds 'correct' class to the right answer
    const correctAns = (e) => {
        return e === correct_answer ? "correct" : ""
    }
    return (
        <div className='question-section'>
            {!complete ?
            <div className={`question ${clicked}`}>
            <Timer time={challenge? 30 : 60} index={index} setqTimeUp={setqTimeUp} />
            <div> Category: {category} 
            <br/>
            {he.decode(question)}
            <br/>
            <div className='question-container'>
            {answers.map(ans => {
                let correct = correctAns(ans)
                return <button className={`ans-btn ${correct}`} value={ans} onClick={(e) => isCorrect(e.target.value)}>{ans}</button>
            })}
            </div>
            </div>
            </div>
            :
            <div className='results-container'>
                <Results gameType={challenge} correct={correct}  />
            </div>}
            <div className='tringle'></div>
        </div>
    )
}

export default Questions

