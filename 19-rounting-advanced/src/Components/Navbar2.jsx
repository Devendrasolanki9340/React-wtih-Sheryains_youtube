import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate= useNavigate()

  return (
    <div className='py-2 px-5 bg-cyan-600'>
      <button 
       onClick={()=>{
        navigate('/')
       }} 
       className=' font-medium cursor-pointer active:scale-90 bg-amber-500 px-5 py-3 rounded m-3'>Return to Home page </button>


       <button 
       onClick={()=>{
        navigate(-1)
       }} 
       className=' font-medium cursor-pointer active:scale-90 bg-amber-500 px-5 py-3 rounded m-3'>Back </button>


       
       <button 
       onClick={()=>{
        navigate(+1)
       }} 
       className=' font-medium cursor-pointer active:scale-90 bg-amber-500 px-5 py-3 rounded m-3'>Next </button>

    </div>
  )
}

export default Navbar2
