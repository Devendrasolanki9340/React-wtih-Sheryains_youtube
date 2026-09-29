
import React from 'react'
import HeroTexr from './HeroTexr'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
           <HeroTexr/>
           <Arrow/>
    </div>
  )
}

export default LeftContent
