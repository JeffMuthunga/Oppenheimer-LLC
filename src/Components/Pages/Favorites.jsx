import React from "react";


function Favorites({card}) {

    return (    
    <div className="card-details-container">
        <div class="bg-text">
            <div className="cards">
                <img src={card.image} alt={card.title}/>
                <h3>{card.title}</h3>
                <h2>Kshs  {card.price}</h2>
            </div>
        </div>

    </div>
    )
}

export default Favorites