import { useRef, forwardRef } from "react"


const CustomInput = forwardRef(({label, placeholder, className}, ref)=>{
    return(
      <div>
        <label htmlFor="" className="block text-gray-700 font-medium mt-2">{label}</label>
        <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        ref={ref}
         type="text" />
      </div>
    )
})

CustomInput.displayName = "CustomInput"

function RefProps() {
  const inputRef = useRef(null)
  const secondInputRef = useRef(null)


  const focusInput = () =>{
    inputRef.current?.focus()
  }

  return (
    <div className=" text-white">
        <h1>Ref Props</h1>
    </div>
  )
}

export default RefProps
