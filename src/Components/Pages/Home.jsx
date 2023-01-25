import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import PropertyCollection from "../Common/PropertyCollection"
import Card from "../Common/Card";
import SearchBar from "../Common/SearchBar";



function Home ({searchData, handleInput, handleClick}) {
    const [text] = useTypewriter({
        words: ['Nairobi', 'Nakuru', 'Mombasa'],
        loop: {},
    })

    return (
        <div>
        <div className="container">
            <div className="hero-div">
            <h1>For the most exciting properties in<span style={{fontWeight: 'bold', color:'purple'}}> {text}</span> <Cursor/></h1>
                <div className="intro-btn">
                    <button className="button-53">Get Started</button>
                </div>
            </div>
            
            
        </div>
        <div className="bottom-container">
            <SearchBar searchData={searchData} handleInput={handleInput}/>
            <PropertyCollection handleClick={handleClick}/>
        </div>
        </div>
    )
}

export default Home