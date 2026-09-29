
// import React from 'react'

// const App = () => {
   
//     localStorage.setItem('user','sarthak')

//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
   
//     localStorage.clear()
      //  sessionStorage.clear
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
   
  
//   const user= localStorage.getItem('user')
//   console.log(user)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
   
  
//   const age= localStorage.getItem('age')
//   console.log(age)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
   
  
//   const age= localStorage.getItem('age')
//   const user= localStorage.getItem('user')

//   console.log(user,age)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
   
  
//   localStorage.removeItem('user')

//   console.log(user,age)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
   
  
//    const user={
//     username:'ram',
//     age:13 ,
//     city:'bhopal'
//    }

//    localStorage.setItem('user',user)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
   
  
//    const user={
//     username:'ram',
//     age:13 ,
//     city:'bhopal'
//    }

//    localStorage.setItem('user',JSON.stringify(user))
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
   
//   const user =JSON.parse(localStorage.getItem('user'))
//   console.log(user)
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {
   
  
   const user={
    username:'ram',
    age:13 ,
    city:'bhopal'
   }

   localStorage.setItem('user',JSON.stringify(user))
   const usera =JSON.parse(localStorage.getItem('user'))

   console.log(usera);
  return (
    <div>
      app
    </div>
  )
}

export default App