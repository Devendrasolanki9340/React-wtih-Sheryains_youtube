
import React, { useState } from 'react'




const App = () => {

  const [title,setTitle]=useState('')
  const [detail,setDetail]=useState('')


  const [task,setTask]=useState([])



  const submitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask=[...task];
    copyTask.push({title,detail})
    setTask(copyTask)

    

    setTitle('')
    setDetail('')
  }

  const deletenote=(idx)=>{
    const copyTask =[...task];
    

    copyTask.splice(idx,1)

    setTask(copyTask)
  }


  return (
    <div className=' h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 p-10 gap-3 flex-col items-start' >
        <h1 className='text-3xl  font-bold'>Add Notes</h1>
         


         {/* pehla input for heading */}
        <input
         type='text' 
         placeholder='Enter Notes Heading'
         className='px-5  w-full py-2 font-medium border-2  outline-none rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
         />



        {/*  detailed value input */}
        <textarea
         type='text'
         className='px-5  w-full h-32  font-medium py-2 flex items-start flex-row border-3 outline-none rounded' 
         placeholder='Write Details'
         value={detail}
         onChange={(e)=>{
          setDetail(e.target.value)
         }}
         
         />

         <button className='bg-white w-full active:scale-95 font-medium text-black outline-none px-5 py-2 border-2 rounded'>Add Notes</button>

      </form>

      <div className=' lg:border-l-2 lg:w-1/2 p-10 '>
        <h1 className='text-3xl  font-bold'>Recent Notes</h1>

      <div className='flex flex-wrap gap-5 items-start justify-start mt-5 h-[90%] overflow-auto'> 
        {task.map(function(elem,idx){
        
          return   <div  key={idx}className='flex justify-between items-start flex-col relative bg-cover h-65 w-50 rounded-2xl text-black py-10 px-4  pb-6 bg-[url("https://i.pinimg.com/736x/47/8d/dd/478dddd62b2e80f424608d00778a4fb6.jpg")]'>
          <div> 
            <h3 className='leading-tight text-xl font-bold  '>{elem.title}</h3>
            <p className=' leading-tight mt-2 text-gray-600 font-medium '>{elem.detail}</p>
            <button onClick={()=>{
              deletenote(idx)
            }} className='w-full cursor-pointer active:scale-90 bg-red-500 text-white text-xs rounded font '>Delete</button>
             </div>
          </div> 
        })} 
        
      </div>

      </div>


    </div>
  )
}

export default App
