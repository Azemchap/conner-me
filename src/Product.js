import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';


function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the Basket", basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__text">{title}</p>
                <p className="product__price">
                    <strong>$$ {price}</strong>
                </p>
            </div>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))
                }
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} className="button"> Add To Basket</button>
        </div>
    );
}

export default Product;
