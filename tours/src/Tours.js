import React,{useState} from 'react'
import { Card } from './Card'

function Tours({tours, removeTour, searchTour, searchError}) {
    const [name, setName]= useState("")
    const changeHandler = (event)=>{
        setName(event.target.value)
        
    }

  return (
    <div>
        <input type='text' onChange={changeHandler} ></input>
        <button onClick={()=>searchTour(name)}>search</button>
        <p style={{color:"red"}} >{searchError ? "please enter text in search box" : ""}</p>
        {
            tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removeTour={removeTour}/>
            })
        }
    </div>
  )
}

export default Tours