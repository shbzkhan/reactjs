import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
    <div class="spinner"></div>
    <p className='font-medium mt-3'>Loading...</p>
    </div>

  )
}

export default Loader