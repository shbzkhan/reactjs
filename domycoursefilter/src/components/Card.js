import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

export const Card = ({course, courselike, setCourselike}) => {

  function likeHandler() {
    if(courselike.includes(course.id)){
      //agar course pahle se liked hai to
      setCourselike((prev)=> prev.filter((cid)=>(cid !==course.id)));
      toast.warning("Like removed")
    }else{
      //agar course phle se liked nhi hai to 
      if(courselike.length === 0){
        //agar course empty ho to
        setCourselike([course.id])
      }else{
        // agar course non-empty ho to
        setCourselike((prev)=>[...prev, course.id])
      }
      toast.success("Like successfully")
    }
  }
  return (
    <div className='w-[300px] bg-gray-900 overflow-hidden rounded-md flex-wrap'>
        <div className=' relative'>
          <div className='w-full'>
        <img
        src={course.image.url}
        />
        </div>
        <div className='absolute bottom-[-12px] right-2 bg-white rounded-full h-8 w-8 flex items-center justify-center '>
        <button onClick={likeHandler}
        className='text-2xl'
         >
          {/* <FcLike /> */}
          {
            courselike.includes(course.id) ? <FcLike/> : <FcLikePlaceholder/> 
          }
          </button>
        </div>
        </div>
        <div className='py-3 px-4 '>
        <p className='text-xl font-bold mb-2'>{course.title}</p>
        <p className='font-medium text-gray-200'>{course.description.length>100 ? (course.description.substring(0, 100)+ "..."):(course.description)}</p>
        </div>
      
    </div>
  )
}
