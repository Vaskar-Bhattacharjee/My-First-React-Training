import { forwardRef, useId } from "react"



const Input = forwardRef( function Input({
    name,
    type = 'text',
    className,
    ...props
    
}, ref) {
    const Id = useId()
    return (
        <div className="w-full ">
        {name &&  <label
                    className={`inline-block mb-1 pl-1 ${className}`}
                    htmlFor={Id}>
                        {name}
                    </label>
        }
    <input 
    type="text"
    className={` ${className} px-3 py-2 rounded-lg bg-white
    text-black outline-none 
   focus:bg-gray-50 duration-200 border
    border-gray-200 w-ful`}
    ref={ref}
    id={Id}
    {...props}
    />  
    </div>
    )
    
})
export default Input

// const Input = forwardRef( function Input({
//     label,
//     type = 'text',
//     className = "",
//     ...props
// }, ref)
// {
//     const Id = useId()
//     return (

//     )
// } )





{/* <div className= 'w-full' >
{label && <label className= {`inline-block mb-1 pl-1 ${className}`}
 htmlFor={Id}>
    {label}
</label>}
<input type= {type}
className={` ${className} px-3 py-2 rounded-lg bg-white
 text-black outline-none 
focus:bg-gray-50 duration-200 border
 border-gray-200 w-ful`}
 ref={ref}
 {...props}
 id={Id} />
</div> */}