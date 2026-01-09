import React, { useState } from 'react'

function UserProfile() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)

  return (
    <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
      <button onClick={()=>setName("Ashamin")}>Change Name</button>
      <button onClick={()=>setAge(age + 1)}>Change Name</button>
    </div>
  )
}

export default UserProfile
