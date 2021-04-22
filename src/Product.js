import React from "react";
import LeanStartup from "./img/leanstartup.png";
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__text"> The Lean Startup </p>
                <p className="product__price">
                    <small> $ </small> <small> $ </small> <strong> 11.96 </strong>
                </p>
            </div>
            <div className="product__rating">
                <p> ⭐ </p>
            </div>
            <img className="The_Lean_Startup" src={LeanStartup} alt="The Lean Startup" />
            <button className="button"> Add Basket </button>
        </div>
    );
}

export default Product;
