

function Button({ 
    children,
    type = 'button',
    ...props

 }) {
    return (
        <button className= {`inline-flex w-full items-center justify-center 
    rounded-lg bg-gradient-to-r from-black to-gray-800 px-5 py-3 
    font-semibold text-white shadow-lg 
    hover:from-gray-900 hover:to-black hover:shadow-xl 
    transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-offset-2 
    active:scale-95 active:shadow-sm`} { ...props} >
        {children}
        </button>
        
    )
}

export default Button
