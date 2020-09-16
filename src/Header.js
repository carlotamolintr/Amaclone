import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <img className="header-logo" alt="amaclone" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            <div className="header-searcher">
                <input className="header-search-input" type="text"></input>
            </div>
            <div className="header-options">
                <span className="header-option-one">Hello Guest</span>
                <span className="header-option-two">Sign in</span>
                <span className="header-option-three">Returns</span>
            </div>
        </div>
    )
}

export default Header
