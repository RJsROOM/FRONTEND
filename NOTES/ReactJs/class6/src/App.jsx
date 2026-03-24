import React, { useState } from 'react'


const App = () => {

    function submitHandler(e){
        e.preventDefault();
        setName('')
        const allUsers= [...users]
        allUsers.push(name)
        setUsers(allUsers)
        console.log('Form submitted!'+" "+ allUsers);
    }

    const [name, setName] = useState('')
    const [users, setUsers] = useState([])

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}
        action="#" 
        className="font-bold bg-blue-200 rounded h-18 m-2 px-3 py-6 flex gap-5 text-white"
        >
            <input 
            type="text" 
            placeholder="Enter your Name" 
            className=" bg-blue-400 h-8 rounded w-fit px-2"
            value={name}
            required
            onChange={(e)=>{
                setName(e.target.value)
            }} 
            />
            <button 
            className="active:scale-110 bg-blue-500 h-8 rounded w-fit px-2 cursor-pointer"
            >
                Click me!
            </button>
        </form>
        {users.map((u,idx)=>{
            return <h2 key={idx}>{u}</h2>
        })}
    </div>
  )
}

export default App