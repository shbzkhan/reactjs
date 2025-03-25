import React,{useState} from 'react'

export const Card = ({id, name, image, price, description , removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    const info = readMore? description : `${description.substring(0, 100)}....`
    const readMoreHandler = ()=>{
        setReadMore(!readMore)
    }
  return (
    <div>
       <p>{name}</p>
       <p>{info} <span onClick={readMoreHandler} >{readMore ? "show less": "read More"}</span></p>
       <button onClick={()=> removeTour(id)}>not intrect</button>
    </div>
  )
}
