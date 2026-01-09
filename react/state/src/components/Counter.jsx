import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    function increase(){
        setCount(count + 1)
    }

    function decrease(){
        setCount(count - 1)
    }

  return (
    <div>
      <h1> Count is: {count}</h1>
      <button onClick={increase}>Click to Increase</button>
      <button onClick={decrease}>Click to Decrease</button>
    </div>
  )
}

export default Counter
