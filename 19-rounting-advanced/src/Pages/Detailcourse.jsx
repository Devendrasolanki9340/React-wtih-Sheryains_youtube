import React from 'react'
import { useParams } from 'react-router-dom'

const Detailcourse = () => {

  const params = useParams()
  
  return (
    <div>
      <h1>{params.courseId} cousese extra details</h1>
    </div>
  )
}

export default Detailcourse
