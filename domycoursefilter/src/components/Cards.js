import React, { useState } from 'react'
import { Card } from './Card';

const Cards = ({courses,category}) => {
    const [courselike, setCourselike] = useState([])
    let allCourses = [];
 function getCourses (){
    if(category === "All"){
        Object.values(courses).forEach(array =>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
    return allCourses;
    }else{
        return courses[category]
    }


    }
  return (
    <div
    className=' flex flex-wrap  gap-4 mt-5 justify-center'
    >
        {
            getCourses().map((course) =>(
                <Card key={course.id} 
                course={course}
                courselike={courselike}
                setCourselike={setCourselike}
                />
                // <Card></Card>
            ))
        }
    </div>
  )
}

export default Cards