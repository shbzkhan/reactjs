
import './App.css';
import Testimonial from './components/Testimonial';
import { reviews } from './data';

function App() {
  return (
   <div className='flex flex-col w-full min-h-screen items-center justify-center bg-gray-200 p-2 '>
    <div className='text-center '>
      <div className='flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold'>Our Testimonial</h1>
      <div className='h-1 w-36 bg-violet-400 rounded-md'></div>
      </div>
    <Testimonial reviews={reviews}/>
    </div>
   </div>
  );
}

export default App;
