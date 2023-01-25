import { useEffect, useState } from 'react';
import { Route, Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './Components/Common/NavBar';
import DisplayProperties from './Components/Pages/DisplayImages';
import Home from './Components/Pages/Home';

function App() {
  const [data, setData] = useState([])
  const [sdata, setSeData] = useState([])
  
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
   
  return (
    <div>
      <NavBar/>
      <Router> 
      <Route  path="/home" element={<Home searchData={sdata} handleInput={handleInput} />} />
      <Route path="/properties" element={<DisplayProperties propertyData={data}/>} />
      </Router>
    </div>
  )
}

export default App;
