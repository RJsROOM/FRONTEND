import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor: props.color}} className=' flex items-center justify-between text-3xl px-5 py-3 mb-1 text-emerald-900'>
        <h2 className='font-bold'>{props.title}</h2>
        <div className='flex items-center justify-between gap-10'>
            {/* <h4 className='text-xl font-bold'>{props.links[0]}</h4>
            <h4 className='text-xl font-bold'>{props.links[1]}</h4>
            <h4 className='text-xl font-bold'>{props.links[2]}</h4>
            <h4 className='text-xl font-bold'>{props.links[3]}</h4> */}
            {props.links.map((elem)=>{
                return <h4 className='text-xl font-bold'>{elem}</h4>
            })}
        </div>
    </div>
  )
}

export default Navbar