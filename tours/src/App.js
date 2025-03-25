
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './Tours';

function App() {
  const [tours, setTours] = useState(data);
  const removeTour = (id)=>{
    const newTour = tours.filter(tour => tour.id != id)
    setTours(newTour)
  }
 
  const searchTour = (name)=>{
    //search box empty
    if(name == ""){
  
      setSearchError(true)
      return setTours(data)
   }
    const newTour = tours.filter(tour => tour.name == name)
    setTours(newTour)
    setSearchError(false)
    
  }

   // search handler
   const [searchError, setSearchError] = useState(false)
  
  
  if(tours.length == 0){
    return(
      <div>
        <p>no tours</p>
        <button
        onClick={()=>setTours(data)}
        >refresh</button>
      </div>
    )
  }
  return (
  
  <Tours tours = {tours} removeTour = {removeTour} searchTour={searchTour} searchError={searchError}/>

  );
}

export default App;
