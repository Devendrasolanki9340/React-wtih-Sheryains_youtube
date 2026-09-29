// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const[num,setNum]=useState(0)

//   useEffect(function(){
//     console.log('useeffct is runningk...')
//   })
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setNum(num+1)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App




// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const[num,setNum]=useState(0)
//   const[num2,setNum2]=useState(100)


//   useEffect(function(){
//     console.log('useeffct is runningk...')
//   },[])
//   return (
//     <div>
//       <h1> num {num}</h1>
//       <h1> num2{num2}</h1>
//       <button onClick={()=>{
//         setNum(num+1)
//       }}
//       onDoubleClick={()=>{
//         setNum2(num2+10)
//       }}
//       >
//         Click</button>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'

const App = () => {
  const[a,setA]=useState(0)
  const[b,setB]=useState(0)

  function achanging(){
    console.log('a ki value change ho gyo')
  }
  function bchanging(){
    console.log('b ki value change ho gyo')
  }
   
  useEffect (function(){
    console.log('useeffect is running')
    achanging()
  },[a])
  
  return (
    <div>
      <h1>A is{a}</h1>
      <h1>B is{b}</h1>
      <button 
      onClick={()=>{
        setA(a+1)
      }}
      >change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >change b</button>
    </div>
  )
}

export default App
