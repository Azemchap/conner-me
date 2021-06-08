import React from 'react';
import "./Home.css";
import BleedingHero from "./img/BleedingHero.jpg";
import Product from "./Product";
import LeanStartup from "./img/leanstartup.png";
import machine from "./img/machine.jpg";
import watch from "./img/watch.jpg";
import alexa from "./img/alexa.jfif";
import tablet from "./img/tablet.jpg";
import flatscreen from "./img/flatscreen.jpg";

function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className="home__image" src = {BleedingHero} alt="BleedingHero"/>
            </div>

            <div className="home__row">
                <Product id={896526} title="The Lean Startup v1" price={29.99} image={LeanStartup} rating={3} />
                <Product id={127890} title="The Lean Startup v2" price={39.99} image={machine} rating={4} />
            </div>

            <div className="home__row">
                <Product id={456890} title="The Lean Startup v3" price={29.99} image={watch} rating={3} />
                <Product id={456892} title="The Lean Startup v3" price={19.99} image={alexa} rating={2} />
                <Product id={451906} title="The Lean Startup v3" price={14.99} image={tablet} rating={1} />
            </div>

            <div className="home__row">
                <Product id={123487} title="The Lean Startup v4" price={54.99} image={flatscreen} rating={5} />
            </div>

        </div>
    )
}

export default Home

