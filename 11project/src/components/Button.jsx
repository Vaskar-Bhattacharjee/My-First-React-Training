

function Button({ 
    children,
    type = 'button',
    ...props

 }) {
    return (
        <button className= {`className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"`} { ...props} >
        {children}
        </button>
        
    )
}

export default Button
