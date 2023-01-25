import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

function CardDetails(){
    const id = useParams().id
    const [card, setCard] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8001/hotels/${id}`)
        .then(r=>r.json())
        .then((data) => setCard(data))
    },[])
    return (
    <div className="card-details-container">
        <div className="card-detail">
                <img src={card.image} alt={card.title}/>
                <h3><FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat /><span>{card.city}</span></h3>
                <h2 style={{textAlign: "center"}}>{card.title}</h2>
                <hr></hr>
                <h3>Current Bid:<br></br> Kshs{card.price}</h3>
                <hr></hr>
                <div>
                    <h4>Description</h4>
                    <p>{card.description}</p>
                    <input type="text" placeholder=" What are you Looking for?"/>
                    <button type="submit" >Search</button>
                </div>
        </div>
    </div>
    )
}

export default CardDetails