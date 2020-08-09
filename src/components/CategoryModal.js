import React, {useState, useEffect} from 'react'

function CategoryModal({modalToggle}) {
    const [modalClass, setModalClass] = useState("")
    useEffect(() => {
        if(modalToggle){
            setModalClass("modal-on")
        } else {
            setModalClass("")
        }
    })
    return (
        <div className={`cat-modal ${modalClass}`}>
            <div className='modal-normal'>
                <span className='modal-title'>Play:</span> Answer 20 multiple-choice questions as fast as you can!
            </div>
            <div className='modal-challenge'>
                <span className='modal-title'>Challenge:</span> Test your trivia prowess! Correctly answer as many questions as you can. Earn your spot at the top of the leaderboards!
            </div>
        </div> 
    )
}

export default CategoryModal
