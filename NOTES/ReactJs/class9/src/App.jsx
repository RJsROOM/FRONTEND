import axios from 'axios'
import { useState } from 'react'


const App = () => {

  const [allData, setAllData] = useState([])

  async function getData(){
    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

    console.log(response.data)
    setAllData(response.data)
  }
  //axios is just a tool which helps in performing actions on the API and is much helpful in efficiency as well as scalability and SEO. since, getting results from the APIs can not get results in a fixed amt of time thus it gives responses in form of promises which can be handle through async-await.
  return (
    <div>
      <button 
      className='m-2 active:scale-95 bg-blue-400 rounded px-4 py-3 font-bold text-white cursor-pointer'
      onClick={getData}>
        Get data..
      </button>
      {allData.map((elem,idx)=>{
          return <h1 key={idx}>{elem.name} {idx+1}</h1>
        })}
    </div>
  )
}

export default App