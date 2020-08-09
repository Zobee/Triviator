import React, {useState, useEffect} from 'react'

function Results({correct, gameType}) {
    const [score, setScore] = (useState(0))
    useEffect(() => {
        setScore(correct)
    })
    return (
        <div>
            {gameType ?
            <div>
                <h3>Game Over</h3>
                <h5>{score === 0 ? "You didn't answer a single question :(" : 
                    `You answered ${score} ${score === 1 ? "question" : "questions"}.`}</h5>
            </div> 
            :
            <div>
                <h3>Nice Job!</h3>
                <h5>Score: {score}/20</h5>
            </div>}
            <div>
                <button onClick={() => {
                    window.location='/'
                }}>Back To Categories</button>
                <h1>Challenge Mode Top 10</h1>
                <p>Got what it takes to reach the top?</p>
                <button>Play Challenge Mode</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <th>Score:</th>
                            <th>Date:</th>
                        </tr>
                        <tr>
                            <td>ass</td>
                            <td>1313</td>
                            <td>2020-02-25</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                        <tr>
                            <td>vargas</td>
                            <td>1221</td>
                            <td>2020-04-23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Results
