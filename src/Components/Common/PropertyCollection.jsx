import React from "react";
import Card from "./Card";

function PropertyCollection({property}){

    return (
        <div className="cards-container">
            <div class="box-container">
                <div class="box"></div>
                <div class="box overlay">
                    <h2>Featured</h2> <hr></hr>
                    <h5 align="right">Listings</h5>
                    <button class="button-92" role="button">View All</button>
                </div>
            </div>
            {property.map((property)=> <Card key={property.id} property={property}/>)}
        </div>
    )
}

export default PropertyCollection