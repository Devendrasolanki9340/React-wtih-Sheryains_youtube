
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title,seTitle]=useState('')

  const submithandler =(e)=>{
    e.preventDefault()
    console.log('form submitted by',title)

    seTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type='text' placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{
          seTitle(e.target.value)
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
