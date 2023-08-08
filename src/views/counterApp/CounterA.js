import React, {useState} from 'react'

const CounterA = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default CounterA
