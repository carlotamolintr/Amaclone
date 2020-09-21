import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">My first product</p>
                <span>$</span><span className="product__price">24.97</span>
                <p>star</p>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" alt="" />
            <button >Add to basket</button>
        </div>
    )
}

export default Product
