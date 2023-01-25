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

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.bid.value)

        fetch(`http://localhost:8001/hotels/${id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({price : e.target.bid.value})
        })
        .then(r=>r.json())
        .then((data) => setCard(data))
    }
    return (
        <div className="row">
            <div className="column">
                <div className="card-details-container">
                    <div className="card-detail">
                        <img src={card.image} alt={card.title}/>
                        <h3><FontAwesomeIcon className="fa-map" icon={faMapMarkerAlt} beat /><span>{card.city}</span></h3>
                        <h2 style={{textAlign: "center"}}>{card.title}</h2>
                        <hr></hr>
                        <h3>Current Bid:<br></br> Kshs{card.price}</h3>
                        <hr></hr>
                        <h4>Description</h4>
                        <p>{card.description}</p>
                    
                    </div>
                </div>
            </div>
            <div className="form-div">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Change Bid</label>
                <input type="number" id="fname" name="bid" placeholder="Change Bid"/>          
                <input type="submit"  value="Submit"/>
            </form>
            <button className="button">Button</button>
            </div>
        </div>
    )
}

export default CardDetails