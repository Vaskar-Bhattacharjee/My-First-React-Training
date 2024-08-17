import { forwardRef, useId } from "react"



function Select({
    options,
    className,
    label,    
    ...props
}, ref) {
    const id = useId()
    return (
        <div className = "w-full">
            {label && <label
            htmlFor={id} >{label}</label>}
            <select
            id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                 focus:bg-gray-50 duration-200 
                border border-gray-200 w-full ${className}`}
            >
                { options?.map((optionElement) =>(
                    <option key={optionElement} value={optionElement}>
                        {optionElement}
                    </option>
                )) }

            </select>
        </div>
    )
}

export default forwardRef(Select)
