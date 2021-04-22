import React from 'react';
import "./Home.css";
import BleedingHero from "./img/BleedingHero.jpg";
import Product from "./Product";


function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className="home__image" src = {BleedingHero} alt="BleedingHero"/>
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>

        </div>
    )
}

export default Home

