import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft , FaChevronRight  } from "react-icons/fa";

const Card = ({review}) => {
  return (
    <div className='flex flex-col md:relative items-center gap-4 p-5'>
        <div className='absolute top-[-50px] left-[20px]'>
            <img
            className='aspect-square w-[100px] h-[100px] rounded-full z-[25]'
            src={review.image}
            />
            <div className=' w-[100px] h-[100px] rounded-full bg-violet-600 absolute top-[-3px] left-[6px] z-[-10]'></div>
        </div>
        <div className='mt-5'>
            <h3 className='font-bold text-3xl capitalize'>{review.name}</h3>
            <p className='text-violet-500 text-opacity-60 uppercase text-sm font-medium'>{review.job}</p>
        </div>
        <div className='text-violet-500'><FaQuoteLeft/></div>
        <div className='text-sm text-gray-500 font-medium'>
            <p>{review.text}</p>
        </div>
         <div className='text-violet-500'><FaQuoteRight/></div>
        {/*<div className='text-violet-500 flex flex-row gap-5 mt-3'>
            <button><FaChevronLeft /></button>
            <button><FaChevronRight /></button>
        </div>

        <div className='px-6 py-1 bg-violet-500 rounded-sm text-white mt-2 font-semibold'>
            <button>Surprise Me</button>
        </div> */}

    </div>
  )
}

export default Card