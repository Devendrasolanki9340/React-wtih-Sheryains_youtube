
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Container = (props) => {
  return (
    <div className=' pb-3 pt-2 flex gap-10 items-center h-[85vh] px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Container
