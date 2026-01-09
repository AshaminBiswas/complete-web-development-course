import { useState } from 'react'

function MultipleForm() {
  
    const [formData, setFormData] = useState({name:"", email:"", age:""})
    
    const handelSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }

    const handelChange = (e)=>{
        const{name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">Name</label>
      <input name='name' type="text" value={formData.name} onChange={handelChange} />
      <br />
      <label htmlFor="">Email:</label>
      <input name='email' type="email" value={formData.email} onChange={handelChange} />
      <br />
      <label htmlFor="">Age</label>
      <input name='age' type="text" value={formData.age} onChange={handelChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MultipleForm