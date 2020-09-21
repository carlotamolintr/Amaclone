import React from 'react'
import './Product.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title"> {title}</p>
                <span>$</span><span className="product__price">{price}</span>

                <div className="product__rating">
                    {Array(rating).fill().map((i => (<StarTwoToneIcon className="product__starIcon" />)))}
                </div>
            </div>
            <img src={image} alt="" />
            <button >Add to basket</button>
        </div>
    )
}

export default Product
