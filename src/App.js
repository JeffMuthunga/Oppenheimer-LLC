import { useEffect, useState } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Common/NavBar';
import DisplayProperties from './Components/Pages/DisplayImages';
import Favorites from './Components/Pages/Favorites';
import Home from './Components/Pages/Home';
import CardDetails from './Components/Pages/CardDetails';
import Card from './Components/Common/Card';

function App() {
  const [data, setData] = useState([])
  const [sdata, setSeData] = useState([])
  const [cardData, setCardData] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:8001/hotels/`)
    .then(r=>r.json())
    .then(data => setData(data))
  }, []) 

  // function handleSearch(value) {
  //   data.forEach((property)=>{
  //     const displaySearch = property.city.includes(value) || property.title.includes(value)
  //     setSeData(displaySearch)
  //   })
  // }
  // const filteredSearch = data.filter((property)=>{
  //   if(search= ""){
  //     return true
  //   } else {
  //     return property.city.toLowerCase().includes(search.toLowerCase())
  //   }
  // })
  function handleInput(e){
    let search = e.target.value
    const displaySearch = data.filter((property)=>{
      property.city.toLowerCase().includes(search) || property.title.toLowerCase().includes(search)
      
    })
    setSeData(displaySearch)
    
}
function handleClick(id){
  console.log(id)
  fetch(`http://localhost:8001/hotels/${id}`)
        .then(r=>r.json())
        .then(data => setCardData(data))

}
   
  return (
    <div>
      <NavBar/>
      <Routes> 
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route  path="/home" element={<Home handleClick={handleClick} searchData={sdata} handleInput={handleInput} />} />
      <Route path="/properties" element={<DisplayProperties handleClick={handleClick} propertyData={data}/>} />
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/properties/:id" element={<CardDetails/>}/>
      </Routes>
    </div>
  )
}

export default App;
