
// import React from 'react'

// const App = () => {
//   function btnClicked(){
//     console.log('button is clicked');
//   }
//   return (
//     <div>
//     <button onClick={btnClicked}> Click Here</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button onClick={function(){
//         console.log("hello guys log")
//       }}>Click here</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {

//   function inputechanging(val){
//     console.log(val);
//   }
//   return (
//     <div>
//       <input onChange={function(elem){
//         inputechanging(elem.target.value)

//       }}
//        type='text' placeholder='Enter Name'/>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(elem)=>{
//         console.log(elem.clientX)
//       }} className='box'>
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

 const pageScrolling=(elem)=>{
  if(elem>0){
    console.log('seeda scrolling')
  }else{
    console.log('ulta scrolling')
  }
  // console.log('page scrolling....at spped',elem);
 }
 
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}
export default App
