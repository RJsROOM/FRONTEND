import React from 'react'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'

const Sections = () => {
  return (
    <div className='bg-blue-400 flex justify-between p-20 font-bold text-2xl rounded-xl m-2 h-[67%]'>
        <Section1 />
        <Section2 />
    </div>
  )
}

export default Sections