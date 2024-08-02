import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
   const [length, setlength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [textcolor, setTextcolor] = useState('white');
  const [bgcolor, setBgColor] = useState('olive');
  const passwordGenerator = useCallback( () => {
    let pass = " "
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) str+= "0123456789"
    if(character) str+= ": ! @ # $ % ^ & * ( ) - _ = +  | [ ] { } ; : / ? . > "
    for (let i = 1; i < 
      length; i++){
      let char = Math.floor(Math.random()*str.length +1);
      // pass = str.charAt(char)
      pass += str.charAt(char);
      setPassword(pass);
     
    }
    } , [length, number, character, setPassword]) 

  const copyClipBoard = useCallback(() => {
    passwordRef.current?.select()
    setBgColor('green')
    setTextcolor('black')
    window.navigator.clipboard.writeText(password)},
    [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator]);



  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg 
    px-5 my-8 text-orange-500 bg-gray-800 '
    
    >
        <input 
        className='outline-none w-full py-1 px-3 my-4 '
        placeholder='password'
  
        />

      <h1 className=' text-4xl text-white p-4'>Password Generator:</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        value ={password}
        className='outline-none w-full py-1 px-3 my-4 '
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyClipBoard}
        onMouseOver={()=>{
          setBgColor('green')
        }}
        onmo
        
        className=' outline-none  py-1 px-3 my-4
         shrink-0 text-sm'
         style={ 
          {backgroundColor: bgcolor,
           color: textcolor
          }}
         > Copy </button>
      </div> 
      {/* input value div ended */}
      <div className=' flex flex-wrap p-3 items-center '>
   
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer w-13 ' 
        onChange={(e)=> {setlength(e.target.value)}}
        />
        <label>Length:{length}</label>
        <div className='ml-2'>
        <input type="checkbox"  
        id='number'
        defaultChecked={number}
        onChange={()=>{
          setNumber((prev)=> !prev);
        }}
        className=' cursor-pointer '
        />
        <label htmlFor='number'
        className=' cursor-pointer select-none '>Numbers</label>
          </div>

        <div className='ml-2'>
        <input type="checkbox" 
        id='character'
        onChange={()=>{
          setCharacter((prev)=> !prev)
        }}
        className=' cursor-pointer '
        />
        <label htmlFor="character"
        className=' cursor-pointer select-none '>Character</label>
          </div>

      </div>
    </div>
    
    </>
  )
}

export default App
