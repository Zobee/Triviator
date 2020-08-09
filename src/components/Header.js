import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='header-left' onClick={() => window.location = '/'}>
                <img src='logo.png'/>
                Triviator
            </div>
            <div className='header-right'>
                Socials
            </div>
        </div>
    )
}

export default Header
