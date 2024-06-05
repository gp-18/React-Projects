import React from 'react'
import {useDispatch , useSelector} from "react-redux"
import { decrement, increment } from './redux/actions/action'

const App = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state =>state.count)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  )
}

export default App