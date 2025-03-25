import React from 'react'
import { Filters } from '../data'

const Filter = ({category, setCategory}) => {

  function filterHandler(title){
    setCategory(title)
    console.log(category)
  }
  
  return (
    <div className=' flex justify-center flex-wrap gap-4 my-1 '>
        {
            Filters.map((data)=>(
                <button
                onClick={()=>filterHandler(data.title)}
                className={`bg-gray-900 px-2 py-1 rounded-md border-2 font-medium  text-lg hover:bg-opacity-50 transition-all duration-200 ${category === data.title ? "border-white bg-opacity-60":"border-transparent bg-opacity-40"}`}
                 key={data.id}>{data.title}</button>
            ))
        }
    </div>
  )
}

export default Filter