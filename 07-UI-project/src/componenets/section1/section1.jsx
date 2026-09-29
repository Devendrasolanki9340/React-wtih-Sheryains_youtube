
import React from 'react'
import Navbar from './Navbar'
import Page1Container from './Page1Container'

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Page1Container users={props.users} tag={props.tag}/>
    </div>
  )
}

export default section1
