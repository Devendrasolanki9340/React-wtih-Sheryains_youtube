
import React from 'react'
import Section1 from './componenets/section1/section1'
import Section2 from './componenets/section2/section2'

const App = () => {
  
  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'royalblue',
      tag:'Satiesfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'green',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'UnderBacked'
    },

    {
      img:'https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'pink',
      tag:'Satiesfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
      intro:'',
      color:'red',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww',
      intro:'',
      color:'royalgray',
      tag:'UnderBacked'
    }
  ]

  return (
    <div> 
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
