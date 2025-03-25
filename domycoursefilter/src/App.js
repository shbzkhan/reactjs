
import './App.css';
import Filter from "./components/Filter"
import { useEffect, useState } from 'react'
import { apiUrl,Filters } from './data';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading]= useState(true)
   const [courses, setCourses] = useState([])
   const [category, setCategory] = useState(Filters[0].title)
      const fetchData = async()=>{
        setLoading(true)
          try {
              const res = await fetch(apiUrl);
              const output = await res.json();
              //save data 
              setCourses(output.data)
            

          } catch (error) {
              toast.error("Data not fetched")
          }
          setLoading(false)
      }

      useEffect(() => {

       fetchData()

      }, [])
      
console.log(courses)
  return (
    <div className='bg-gray-600 flex flex-col text-white items-center min-h-screen'>
      <h1 className='flex justify-center bg-gray-800 py-4 font-extrabold w-full'>Top courses</h1>
      <Filter
      category={category}
      setCategory={setCategory}
      />
      {
        loading ? (<Loader/>) : (
      <Cards
      courses={courses}
      category={category}
      />
    )
  }
    </div>
  );
}

export default App;
