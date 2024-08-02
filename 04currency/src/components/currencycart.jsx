import  {useCallback, useId, useRef} from "react";

function Currencycart({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selecetCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) { 
  const amountInputId = useId();
  const inputRef = useRef(null);
  const copyClipBoard = useCallback(() => {
    inputRef.current?.select()
    window.navigator.clipboard.writeText(amount)},
    [amount]);
    return(    

      <div className={`bg-white w-full mb-3 mr-[-10px] flex 
      flex-1 rounded-lg ${className}` }>

        <div className=' w-1/2 bg-transparent flex flex-col p-3'>
            <label 
            htmlFor={amountInputId}
            className='text-black mb-2 select-none'>
              {label}
            </label>
            <input 
                id={amountInputId}
                className=' outline-none bg-transparent min-w-[80px] '
                type="number" 
                placeholder='Amount'
                disabled ={amountDisable}
                value={amount}
                ref={inputRef}
                onClick={copyClipBoard}
                onChange= {(e) => {onAmountChange && onAmountChange(e.target.value)}}
                />
        </div>

         <div className=' w-1/2 bg-transparent flex justify-center items-center mr-[-10px]'>

            <select className='p-3 bg-green-300 cursor-pointer'
            value={selecetCurrency}
            disabled = {currencyDisable}
            onChange={(e)=> {onCurrencyChange && onCurrencyChange(e.target.value)}}
            >
              {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}> 
                            {currency}
                            </option>
              ))}

           
            </select>
        
        </div>

        
      </div>



      // <div className='bg-white h-9 mb-3 w-full mr-[-10px] flex flex-1 rounded-lg '>
      //   <div className='w-1/2 flex flex-col p-4 '> 
      //    <label> To </label>
      //    <input type="Number" 
      //    className=' outline-none bg-transparent cursor-text w-[80px]'
      //    placeholder='Amount'
      //    />
      //    </div>
      //   <div className='w-1/2 flex justify-center items-center'>
      //     <select className='p-3 bg-blue-400 cursor-pointer'>
      //       <option >taka </option>
      //       <option >USD </option>
      //     </select> 
      //   </div> 

   









    )
}

export default Currencycart