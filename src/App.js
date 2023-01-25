import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/Common/NavBar';
import Home from './Components/Pages/Home';

function App() {
  const [propertyData, setPropertyData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8001/hotels/?_limit")
    .then(r=>r.json())
    .then(data => setPropertyData(data))
  })  
  return (
    <div>
      <NavBar/>
      <Home property={propertyData}/>
    </div>
  )
}

export default App;
