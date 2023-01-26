import React, {useState} from "react";


function Favorites() {

    const [formData, setFormData] = useState({
    title: "",
    bedrooms: 0,
    sqrfeet: 0,
    city: "",
    price: 0,
    description: "",
    image: ""
    })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:8001/hotels", {
            method: "POST",
            headers:
                {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: e.target.title.value,
                    bedrooms: parseInt(e.target.bedrooms.value),
                    sqrfeet: parseInt(e.target.sgrfeet.value),
                    city: e.target.city.value,
                    price: parseInt(e.target.price.value),
                    description: e.target.description.value,
                    image: e.target.image.value
                })
        })
        .then(r=>r.json)
        .then(((data)=> setFormData(data)))

        setFormData({
            title: "",
            bedrooms: 0,
            sqrfeet: 0,
            city: "",
            price: 0,
            description: "",
            image: ""
            })
    }

    return (    
        <div className="form-div">
            <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input type="text"  name="title" placeholder="New Title"/> 

            <label htmlFor="fname">Bedrooms</label>
            <input type="number"  name="bedrooms" placeholder="No. of Bedrooms"/> 

            <label htmlFor="fname">Square Feet</label>
            <input type="number"  name="sqrfeet" placeholder="Square ft."/> 

            <label htmlFor="fname">City</label>
            <input type="text"  name="city" placeholder="City"/> 

            <label htmlFor="fname">Price</label>
            <input type="number" name="price" placeholder="Price"/>    

            <label htmlFor="fname">Description</label>
            <input type="text"  name="description" placeholder="Description"/> 

            <label htmlFor="fname">Image URL</label>
            <input type="text"  name="image" placeholder="Image URL"/> 

            <input type="submit"  value="Add New Property"/>
            </form>
        </div>
    )
}

export default Favorites