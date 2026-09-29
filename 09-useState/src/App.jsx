
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num,setNum]=useState(10)
//   const [username,setusername]=useState('sarthak')


//   function changeNum(){
//     setNum(30)
//     setusername('harsh')
//   }
//   return (
//     <div>
//       <h1> vlue of num is{num}<br/> value of user is{username}</h1>
//       <button onClick={changeNum}> CLick</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'


const App = () => {

  const [num,setNum]=useState(0)

  function increasenum(){
    setNum(num+1)
  }
  function decreasenum(){
    setNum(num-1)
  }
  function jump5num(){
    setNum(num+5)
  }
  function doublenum(){
    setNum(num*2)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jump5num}>junp by 5</button>
      <button onClick={doublenum}>jumb by double</button>
    </div>
  )
}

export default App
