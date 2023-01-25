import React from "react";
import Card from "./Card";

function PropertyDetails({property}){

    return (
        <div className="cards-container">
            <Card property={property}/>
        </div>
    )
}

export default PropertyDetails