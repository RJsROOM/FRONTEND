import Card from './components/Card.jsx'

const App = () => {
  const users= ['Rohan', 'Rajjo', 'Rakshit']
  return (
    <div className='p-3 h-screen bg-black'>
      {/* {Card("Rakshit")} */}
      {/* <Card user='Rakshit' /> */}
      {users.map((idx)=>{
        return <Card user={idx}/>
      })}
    </div>
  )
}

export default App