import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  const user1={
    name: 'Krishna',
    age: 23,
    gender: 'male'
  }
  const user2={
    name: 'Priya',
    age: 23,
    gender: 'female'
  }

  function btnClicked(){
    console.log('Button is clicked!!')
  }

  return (
    <div>
      <Navbar title="RJsROOM" color="#10B981" links={["Home", "About", "Contact", "Profile"]} />
      {user1.gender=='male'? <Men /> : <Women />}
      {user2.gender=='male'? <Men /> : <Women />}
      <button 
        onClick={()=>{
          btnClicked();
        }}
        className='active:scale-110 text-white font-bold bg-blue-400 m-2 px-2 py-3 rounded-lg'
      >
          Click to see
      </button>
    </div>
  )
}

export default App