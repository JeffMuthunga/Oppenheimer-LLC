import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "../Common/PropertyCollection"
import Card from "../Common/Card";



function Home ({property}) {

    return (
        <div>
        <div className="container">
            <div className="hero-div">
            <h1>For the most exicting properties in <strong>NAIROBI</strong></h1>
                <div className="intro-btn">
                    <button className="button-53">Get Started</button>
                </div>
            </div>
            
            
        </div>
        <div className="bottom-container">
            <div className="search-bar-container">
            <form>
            <FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat />
                <input type="text" placeholder=" What are you Looking for?" />
                <button type="submit" >Search</button>
            </form>
            </div>
            <PropertyCollection property={property}/>
        </div>
        </div>
    )
}

export default Home