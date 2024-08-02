import Currencycart  from './components/currencycart'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import { useState } from "react";
import './App.css'

function App() {   
   const [amount, setAmount] = useState(0);
   const [from, setFrom] = useState("usd");
   const [to, setTo] = useState("bdt");
   const [convert, setConvert] = useState('0')    
   const currencyInfo = useCurrencyInfo(from);
   const options = Object.keys(currencyInfo);
   const [btncolor, setBtncolor] = useState('black')
    const swap = () =>{
     setFrom(to)
     setTo(from)
    }
   const convertedAmount = () => {
    setConvert(amount*currencyInfo[to])
   };

  return (
    // http://localhost:5173/
    <div className=' w-full h-screen bg-black flex
      justify-center items-center'>

      <form className='bg-slate-400 rounded-lg px-10 py-8 flex flex-col
       justify-center items-center w-[30rem] '
       onSubmit={(e)=>{

        e.preventDefault();
        convertedAmount()

       }}
       >
        
        <h1 className='text-center text-3xl 
        text-black-400 mt-[-2rem] p-2'>
        Currency Converter
        </h1>
     
        <Currencycart 
          label = "From"
          amount={amount}
          currencyOptions={options} 
          onCurrencyChange={(currency) => setFrom(currency)}
          selecetCurrency={from}
          onAmountChange={(amount)=> setAmount(amount)}
         /> 

   {/* swap button start        */}
      <button 
      onClick={swap}
      className=' absolute top-[45%] text-md 
    text-center w-25 z-10 h-10
    bg-slate-500 p-2 text-white '
    style={{ backgroundColor: btncolor }}
    onMouseEnter={()=>{
        setBtncolor('green')
    }}
    onMouseLeave={()=>{
        setBtncolor('black')
    
    }}>Swap </button>

{/* swap button end    */}
        <Currencycart
         label="To"
         amount={convert}
         onAmountChange={(amount)=> setConvert(amount)}
         currencyOptions={options}
         selecetCurrency={to}
         onCurrencyChange={(currency)=> setTo(currency) }
         amountDisable


        /> 
      <button className=' w-full h-12 text-lg text-black rounded-lg duration-100 bg-fuchsia-300 '
    
          type="submit"
          // onMouseEnter={()=>{
         
          // }}
          // onMouseLeave={()=>{
       
          // }}
        > Convert {from.toUpperCase()} to {to.toUpperCase()} </button>

      </form>

    </div>

  )
}

export default App
