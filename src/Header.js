import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" alt="amaclone" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            <div className="header__searcher">
                <input className="header__search" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="header__options">
                    <span className="header__optionOne">Hello Guest,</span>
                    <span className="header__optionOneLineTwo">Sign in</span>
                </div>
                <div className="header__options">
                    <span className="header__optionTwo">Returns</span>
                    <span className="header__optionTwoLineTwo">& Orders</span>
                </div>
                <div className="header__options">
                    <span className="header__optionThree">Your</span>
                    <span className="header__optionThreeLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__basketCounter">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
