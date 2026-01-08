import { useState } from "react"

function Button({text, color, size, onClick, disabled}){
  return(
    <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-1.5 rounded-lg font-medium transition-all duration-300 ${size==='small'? 'text-small px-4 py-1': " "} ${size==='large'? 'text-lg px-8 py-1': " "} ${color==='primary'? 'bg-blue-500 hover:bg-blue-600 text-white': " "} ${color==='secondary'? 'bg-gray-500 hover:bg-gray-600 text-white': " "} ${color==='danger'? 'bg-red-500 hover:bg-red-600 text-white': " "} ${color==='success'? 'bg-green-500 hover:bg-green-600 text-white': " "} ${disabled ? "opacity-50 cursor-not-allowed": "cursor-pointer"}`}
    >
    {text}
    </button>
  )
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0)
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl mb-10">
      <h2>Basic Props</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quisquam provident reprehenderit suscipit nihil magnam iure perferendis accusantium adipisci exercitationem!</p>

      <div className="space-y-8">
        <h3>Different Color {clickCount}</h3>
        <div className="flex flex-wrap gap-4">
          <Button
          text="Primary Button"
          color="primary"
          onClick={()=>setClickCount(clickCount + 1)}
          />
          <Button
          text="Secondary Button"
          color="secondary"
          onClick={()=>setClickCount(clickCount + 1)}
          />
          <Button
          text="Danger Button"
          color="danger"
          onClick={()=>setClickCount(clickCount + 1)}
          />
          <Button
          text="Success Button"
          color="success"
          onClick={()=>setClickCount(clickCount + 1)}
          />
          <Button
          text="Disabled Button"
          color="disabled"
          onClick={()=>setClickCount(clickCount + 1)}
          
          />
        </div>

        <h3>Different Size {clickCount}</h3>
        <div className="flex flex-wrap gap-4">
          <Button
          text = "Small"
          size="small"
          color="primary"/>
          <Button
          text = "Large"
          size="large"
          color="primary"/>
        </div>

      </div>
    </section>
  )
}

export default BasicProps
