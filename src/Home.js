import React from 'react'
import './Home.css';
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="bannerHome" />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}
