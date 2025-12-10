import React from 'react'
import "./App.css"
function App() {
  return (
    <div style={{}}>
        <h1>Counter App</h1>
        <div className='card'>
            count is 10
        </div>

        <div style={{gap:"20px", display:"flex"}}>
          <button
          onClick={()=>{}}
          >Increase</button>
          <button
          onClick={()=>{}}
          >Decrease</button>
          <button
          onClick={()=>{}}
          >Reset</button>
        </div>

        <div 
        style={{gap:"20px", display:"flex", margin:"20px"}}>
          <input 
          type="text" 
          style={{border:"1px solid white", padding:"0.6em 1.2em"}} 
          value="8" 
          onChange={()=>{}}/>
          <button
          onClick={()=>{}}
          >Set to 8</button>
        </div>
    </div>
  )
}

export default App
