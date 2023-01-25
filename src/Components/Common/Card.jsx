import React from "react";

function Card({property}) {

    return (
        
        <div className="cards">
            <img src={property.image} alt={property.title}/>
            <h3>{property.title}</h3>
            <h5>{property.price}</h5>
        </div>
    )
}

export default Card