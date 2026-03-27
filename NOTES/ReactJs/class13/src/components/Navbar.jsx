import React, { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')

  return (
    <div>
        <form 
        className='flex flex-col w-fit'
        onSubmit={(e)=>{
            e.preventDefault();
            props.changeTheme(newTheme)
            setNewTheme('')
        }}>
            <input
            className='bg-emerald-200 ml-10 mb-5 items-center rounded border-none text-xl'
            value={newTheme}
            placeholder='Enter your theme here..'
            onChange={(e)=>{
                setNewTheme(e.target.value)
            }}
            type="text" />
            <button className='cursor-pointer bg-emerald-500 rounded ml-10 p-2'>Submit</button>
        </form>
    </div>
  )
}

export default Navbar