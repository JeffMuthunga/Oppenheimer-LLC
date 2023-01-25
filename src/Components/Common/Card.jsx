import React from "react";

function Card({property, handleClick}) {

    return (
        
        <div className="cards" onClick={()=>handleClick((property.id))}>
            <img src={property.image} alt={property.title}/>
            <h3>{property.title}</h3>
            <h2>Kshs  {property.price}</h2>
        </div>
    )
}

export default Card