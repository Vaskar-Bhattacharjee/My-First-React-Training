import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({
    placeholder,
    type = 'text',
    ...props
}, ref) {
    const Id = useId();
    return (
        <div >
           
            <input
                type={type}
                className="block w-full px-4 py-2 text-base text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-400 transition-all duration-300 ease-in-out"
                ref={ref}
                placeholder={placeholder}
                id={Id}
                {...props}
            />
        </div>
    );
});

export default Input;





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