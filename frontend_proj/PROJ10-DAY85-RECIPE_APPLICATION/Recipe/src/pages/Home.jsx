import React, { useEffect } from 'react'
import axios from '../utils/axios'

const Home = () => {

  const getproduct = async ()=>{
    try {
      const {data}=await axios.get('/products')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getproduct()

    return ()=>{
      console.log("home unmounted")
    }
  })

  return (
    <div>
      <h1>
        Home
      </h1>
    </div>
  )
}

export default Home


/* there are 3 states through which our component goes through-
    - Mount
    - Update
    - Unmount
these are called component life cycle

and for implementing them we use useEffect hook. that is it helps to maintain the component life cycle.

if we want to remove the action through which we were making changes in the component with not needing to give any action and automatically calling, then we use useEffect hook

for updating w ecan only see them when a state is changed or a view is changed. an dthi sis also called re-rendering.

*/