import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice';

const App = () => {

  const num= useSelector((state)=>state.counter.value);

  const dispatch= useDispatch();

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
    </div>
  )
}

export default App


/*

useSelector are used to get the values of the initial state from the store and use it in the component.

useDispatch() is used to dispatch the actions to the store to update the state.

*/