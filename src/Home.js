import React from 'react'
import './Home.css';
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="bannerHome" />
                <div className="home__row home__firstRow">
                    <Product title="My first product" price={14.66} image={"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"} rating={5} />
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

            <div className="home__containerMobile">
                <img className="home__image" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="bannerHome" />
                <div className="home__row home__firstRow">
                    <Product title="My first product" price={14.66} image={"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"} rating={5} />
                </div>
                <div className="home__row">
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}
