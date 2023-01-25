import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

function SearchBar({searchData, handleInput}){
    

    return (
        <div>
            <div className="search-bar-container">
            <form >
            <FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat />
                <input type="text" placeholder=" What are you Looking for?" onInput={handleInput}/>
                <button type="submit" >Search</button>
            </form>
            </div>
        <div className="cards-container">
            {
            searchData.map((property)=><Card key={property.id}property={property}/>)
            }
        </div>
        </div>
    )

}

export default SearchBar