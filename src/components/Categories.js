import React, {useState} from 'react'
import Questions from './Questions'
import CategoryModal from './CategoryModal'
import Header from './Header'
import cats from './cats'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain} from '@fortawesome/free-solid-svg-icons'

function Categories() {
    const [questions, setquestions] = useState([])
    const [picked, setPicked] = useState(false)
    const [challenge, setChallenge] = useState(false)
    const [modalToggle, setModalToggle] = useState(false)

    const getQuestions = async (category) => {
        let fetchStr = "https://opentdb.com/api.php?amount=5" //&category=10
        if(category != "Anything Goes"){
            let cat = cats.filter(cat => {
                return cat.name === category
            });
            fetchStr+= `&category=${cat[0].id}`
        }
        const res = await fetch(fetchStr)
        const data = await res.json()
        setquestions(data.results)
        setPicked(true)
      }
    return (
        <div>
            {picked ? 
            <Questions questions={questions} challenge={challenge}/>
            :
            <div>
            <Header/>
            <div className='category-header'>
            <h1 className='category-title'>Pick A Category 
                <button 
                className='cat-more-info'
                onMouseEnter={() => setModalToggle(prev => !prev)}
                onMouseLeave={() => setModalToggle(prev => !prev)}>?
                </button>
            </h1>
                <CategoryModal modalToggle={modalToggle} setModalToggle={setModalToggle}/>
            </div>
            <div className='category-container'>
            {cats.map(cat => {
                return <div className='category' key={cat.id}>
                    <div className='category-title'>
                    <FontAwesomeIcon className='category-icon' icon={faBrain}/>
                    <h2>{cat.name}</h2>
                    </div>
                    <button 
                    className='category-btn play-btn' 
                    value={cat.name}
                    onClick={(e) => getQuestions(e.target.value)}>
                    Play
                    </button>
                    <button
                    className='category-btn challenge-btn'
                    value={cat.name}
                    onClick={(e) => {
                    getQuestions(e.target.value)
                    setChallenge(true)}}>
                    Challenge Mode
                    </button>
                </div>
            })
            }
            </div>
            </div>}
        </div>
    )
}

export default Categories
