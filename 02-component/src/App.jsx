
// import React from 'react'
// import card from './components/card'

// const App = () => {
//   return (
//     <div>
//       <div className='card'>
//         <h1>serthak sharma</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt illo molestias modi nisi voluptatum provident, minus quisquam itaque quia, quidem iusto officia suscipit excepturi repellendus ipsum corrupti nostrum in?</p>
//       </div>
//       {card()}


//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const user ='ram'
//   const age =20
//   return (
//     <div>
//       <h1>hello  ,guuys i an {user}</h1>
//       <h2>and i am {age} year old</h2>
//     </div>
//   )
// }

// export default App


import React from 'react'
import card from './components/card'
import navabar from './components/navabar'

const App = () => {
  return (
    <div>
      {navabar()}
      {card()}
    </div>
  )
}

export default App
