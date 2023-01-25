import React from "react";
import Card from "./Card";

function PropertyCollection({property}){

    return (
        <div className="cards-container">
            {property.map((property)=> <Card property={property}/>)}
        </div>
    )
}

export default PropertyCollection