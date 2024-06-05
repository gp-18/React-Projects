import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment , decrement , reset} from "./Redux/Actions/actions"

const App = () => {
  const dispatch = useDispatch() ;
  const counter = useSelector(state => state.count);
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <button onClick={()=>dispatch(reset())}>reset</button>

    </>
  )
}

export default App