import { useEffect, useState } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Common/NavBar';
import DisplayProperties from './Components/Pages/DisplayImages';
import Admin from './Components/Pages/Admin';
import Home from './Components/Pages/Home';
import CardDetails from './Components/Pages/CardDetails';
import Card from './Components/Common/Card';
import Footer from './Components/Common/Footer';

function App() {
  const [data, setData] = useState([])
  const [sdata, setSeData] = useState([])
  const [cardData, setCardData] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:8001/hotels/`)
    .then(r=>r.json())
    .then(data => setData(data))
  }, []) 

  // const handleInput=(search)=>{
  //   data.forEach((property)=>{
  //     const displaySearch = property.city.toLowerCase().includes(search) || property.title.toLowerCase().includes(search)
  //     setSeData([...sdata, displaySearch])
  //     console.log(sdata)
  //   })  
  // }
  function handleInput(search){
  const filteredSearch = data.filter((property)=>{
    if(property.city.toLowerCase()==search){
      return property
    }else if(search= ""){
      return false
    } 
  })
  setSeData(filteredSearch)
  console.log(filteredSearch)
}
  
// }
//   function handleInput(search){
//   const haha= data.forEach((property)=>{
//    property.city.toLowerCase().includes(search) ? setSeData([...sdata, property]): null
//   })
//    console.log(sdata)

// }
//   function handleInput(search){
    
//     const displaySearch = data.forEach((property)=>property.title.toLowerCase() !== search.toLowerCase())
//       // property.title.toLowerCase().includes(search.toLowerCase()) || property.city.toLowerCase().includes(search.toLowerCase())
      
//     console.log(displaySearch)
//     setSeData(displaySearch)
    
// }
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
      <Route path="/add" element={<Admin/>}/>
      <Route path="/properties/:id" element={<CardDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
