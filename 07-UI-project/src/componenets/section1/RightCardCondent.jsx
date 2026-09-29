import React from 'react'
import { MoveRight } from 'lucide-react'


const RightCardCondent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dignissimos?</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text-sm' >{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full text-sm'><MoveRight /></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardCondent
