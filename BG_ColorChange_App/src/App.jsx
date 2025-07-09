import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('gray-900');

  const changeColor = (e)=> {
    setColor(e.target.innerText.toLowerCase());

  }
  console.log(color)
  
  return (

    <>
      <div className='flex items-baseline-last w-full h-screen justify-center bg-gray-900 ' style={{backgroundColor:color}} >
      <div className='h-[55pxpx] p-3 w-[50%]  bg-white rounded-2xl mb-5 flex-wrap gap-3  flex justify-evenly items-center  ' >
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Red</button>
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Green</button>
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Yellow</button>
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Blue</button>
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Lavender</button>
        <button onClick={changeColor} className='w-[10%] h-[35px] rounded-2xl bg-amber-300 ' >Olive</button>
      </div>
      </div>
    
    </>
  )
}

export default App
