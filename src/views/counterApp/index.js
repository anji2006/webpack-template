import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, randomIncrement} from '../../redux/counterSlice'

const Counter = () => {
  const count = useSelector(store => store.counter)

  const dispatch = useDispatch()

  useEffect(() => {
    if (count >= 5) {
      throw new Error('this is new Error')
    }
  })

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <button onClick={() => dispatch(randomIncrement())}>
        Randomly Increment
      </button>
    </div>
  )
}

export default Counter
