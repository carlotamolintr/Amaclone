import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" alt="amaclone" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            <div className="header__searcher">
                <input className="header__search" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header-options">
                <span className="header__optionOne">Hello Guest</span>
                <span className="header__optionTwo">Sign in</span>
                <span className="header__optionThree">Returns</span>
            </div>
        </div>
    )
}

export default Header
