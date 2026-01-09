import { useState } from "react"

function ToggleText() {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible? "hide":"show"} Text
      </button>
      {isVisible && <p>Show The Text</p>}
    </div>
  )
}

export default ToggleText
