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

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

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
                    sqrfeet: parseInt(e.target.sqrfeet.value),
                    city: e.target.city.value,
                    price: parseInt(e.target.price.value),
                    description: e.target.description.value,
                    image: e.target.image.value
                })
        })
        .then(r=>r.json())
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
            <input type="text"  name="title" onChange={handleChange} placeholder="New Title" value={formData.title}/> 

            <label htmlFor="fname">Bedrooms</label>
            <input type="number"  name="bedrooms" placeholder="No. of Bedrooms" value={formData.number} onChange={handleChange}/> 

            <label htmlFor="fname">Square Feet</label>
            <input type="number"  name="sqrfeet" placeholder="Square ft." value={formData.sqrfeet} onChange={handleChange}/> 

            <label htmlFor="fname">City</label>
            <input type="text"  name="city" placeholder="City" value={formData.city} onChange={handleChange}/> 

            <label htmlFor="fname">Price</label>
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>    

            <label htmlFor="fname">Description</label>
            <input type="text"  name="description" placeholder="Description" value={formData.description} onChange={handleChange}/> 

            <label htmlFor="fname">Image URL</label>
            <input type="text"  name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/> 

            <input type="submit"  value="Add New Property"/>
            </form>
        </div>
    )
}

export default Favorites