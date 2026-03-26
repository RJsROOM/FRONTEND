import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [user, setUser] = useState('')
  const [num, setNum] = useState(0)

  const getData=async ()=>{
    const response= await axios.get('https://randomuser.me/api/')
    setUser(response.data.results[0].name.first+ " " + response.data.results[0].name.last)
  }

  useEffect(()=>{
    getData();
  },[num])


  return (
    <div>
      {user}
      <br />
      <button onClick={()=>{
        setNum(num+1)
      }}>click here..</button>
    </div>
  )
}

export default App