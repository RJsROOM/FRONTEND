import React, { useState } from 'react'


const App = () => {
//react only allows us to render the UI and when we create any variable we couldn't update the changes on it like 'innerHTML' does. so to handle the states of our UI elements we use the hooks and useState() is the one which can be used to handle the change in our UI elements.

  let [num, setNum] = useState(0) //this functions are asynchronous in nature so the console doesn't updates the setnum value because the JS compiler runs faster than it and prints the prev value

  function btnClicked(){
    console.log('button clicked'+ num)
    setNum(num+1)
    console.log('button clicked'+ num)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={()=>{
          btnClicked();
        }}
      >
        Increase
      </button>
    </div>
  )
}

export default App