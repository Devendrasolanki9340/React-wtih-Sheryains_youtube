
import React from 'react'
import Card from './component/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} positon ='Front-end developer' img='https://images.unsplash.com/photo-1648415041078-d5b259c683be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'/>
      <Card user='Ram' age={20} img='https://images.unsplash.com/photo-1586822339087-80cc375ac083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'/>
      <Card user='Deven' age={22} img='https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww'/>
      <Card user='sarthak' age={35} img='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww'/>
    </div>

  )
}

export default App


