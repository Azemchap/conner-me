import React from "react";
import "./Product.css";

function Product({ title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product__stuff">
                <div className="product__info">
                    <p className="product__text">{title}</p>
                    <p className="product__price">
                        <small> $ </small> <small> $ </small> <strong>{price}</strong>
                    </p>
                </div>
                <div className="product__rating">{
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                }
                </div>
            </div>
            <img className="The_Lean_Startup" src={image} />

            <button className="button"> Add To Basket </button>
        </div>
    );
}

export default Product;
