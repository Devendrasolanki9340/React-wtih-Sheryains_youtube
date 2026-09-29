
// import React, { useState } from 'react'

// const App = () => {

//   const [num,setNum]=useState(10)
  
//   const btnclick =()=>{
//     console.log(num);
//     setNum(num+5)
//     console.log(num);
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclick}> CLick</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [num,setNum]=useState({user:'sarthak',age:20})
  
//   const btnclick =()=>{
//     const newNum ={...num};
//     newNum.user ='aman'
//     newNum.age =30

//     setNum(newNum)
//   }

//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnclick}> CLick</button>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {

//   const [num,setNum]=useState([10,20,30])
  
//   const btnclick =()=>{
//     const newNum=[...num]
//     newNum.push(99)

//     setNum(newNum)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclick}> CLick</button>
//     </div>
//   )
// }

// export default App






// import React, { useState } from 'react'

// const App = () => {

//   const [num,setNum]=useState({user:'rishi' ,age:15})
  
//   const btnclick =()=>{
//     setNum(prev=>({...prev,age:50}))
   
//   }

//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnclick}> CLick</button>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {

  const [num,setNum]=useState(10)
  
  const btnclick =()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclick}> CLick</button>
    </div>
  )
}

export default App