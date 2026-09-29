
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users)
  return (
    <div id='right' className='h-full overflow-x-auto rounded-3xl flex flex-nowrap gap-10 p-4 w-2/3 '>
        {props.users.map(function(elem,idx){

            return <RightCard key={idx} id={idx}  color={elem.color}img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
