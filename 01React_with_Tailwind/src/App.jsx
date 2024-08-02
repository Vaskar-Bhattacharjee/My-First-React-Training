import './App.css'
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
   
  return(
        <div className=' overflow-hidden w-full h-screen duration-200 flex flex-wrap justify-center items-center '
        style={{backgroundColor: color}}
        >
          <div>
            <div> <h1 className='text-6xl mb-2 '>Pick a Color:</h1></div>
            <button onClick={ () => setColor('red ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-red-600 text-white font-serif font-extrabold  ' > Red </button>
            <button onClick={ () => setColor(' yellow ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-yellow-600 text-white font-serif font-extrabold ' > Yellow</button>
            <button onClick={ () => setColor(' #C0C6D6 ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 text-white font-serif font-extrabold ' 
            style={{backgroundColor: "#C0C6D6"}} > Lavender </button>
            <button onClick={ () => setColor(' green ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-green-600 text-white font-serif font-extrabold ' > Green </button>
            <button onClick={ () => setColor(' teal ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-teal-600 text-white font-serif font-extrabold  ' > Teal </button>
            <button onClick={ () => setColor(' blue ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-blue-600 text-white font-serif font-extrabold  ' > Blue </button>
            <button onClick={ () => setColor(' pink ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-pink-600 text-white font-serif font-extrabold  ' > Pink </button>
            <button onClick={ () => setColor(' purple ') } className=' px-3 py-2 rounded-md outline-none cursor-pointer border border-black m-2 bg-purple-600 text-white font-serif font-extrabold  ' > Purple </button>
          </div>
        </div>
    )
}

// function App() {
//   let [color, setColor] = useState("olive")

//  return (
//       <div className='w-full h-screen duration-200' 
//      style={{backgroundColor: color}}
//      >
//      <div className=' flex flex-wrap bg-white fixed justify-center bottom-12 inset-x-0 '>
//          <button onClick={()=>setColor("red")} className=" px-4 py-2 m-3 bg-red-500 text-black  " > Red </button>
//          <button onClick={()=>setColor('green')} className=" px-4 py-2 m-3 bg-green-500 text-black " > Green </button>
//          <button onClick={()=>setColor('yellow')} className=" px-4 py-2 m-3 bg-yellow-500 text-black " > Yellow </button>
//          <button onClick={()=>setColor('blue')} className=" px-4 py-2 m-3 bg-blue-500 text-black " > Blue </button>
//      </div>
//      </div>       
//  )
// }

export default App
