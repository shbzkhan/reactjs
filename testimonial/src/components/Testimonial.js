import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft , FaChevronRight  } from "react-icons/fa";


const Testimonial = ({reviews}) => {
    const [index, setIndex] = useState(0)
    function leftShifHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length -1)
        }else{
            setIndex(index - 1)
        }

    }

    function rightShifHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    function surpriseShifHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length)
        setIndex(randomIndex)
    }
  return (
    <div className='bg-white max-w-[580px] rounded-sm drop-shadow-xl flex flex-col justify-center items-center mt-11'>

        <Card review={reviews[index]} ></Card>
        <div className='mb-5 flex flex-col items-center'>
                <div className='text-violet-400 flex flex-row gap-5 my-3'>
                    <button onClick={leftShifHandler} className='hover:text-violet-600'><FaChevronLeft /></button>
                    <button onClick={rightShifHandler} className='hover:text-violet-600'><FaChevronRight /></button>
                </div>
        
                <div className='px-6 py-1 bg-violet-500 rounded-sm text-white mt-2 font-semibold hover:bg-violet-700'>
                    <button onClick={surpriseShifHandler} >Surprise Me</button>
                </div>
                </div>
    </div>
  )
}

export default Testimonial