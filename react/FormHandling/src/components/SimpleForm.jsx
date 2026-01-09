import React, { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log("Name is :", name)
    }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default SimpleForm
