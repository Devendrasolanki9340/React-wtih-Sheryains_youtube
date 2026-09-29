import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import{Route ,Routes} from 'react-router-dom'
import Men from './Pages/Men'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Notfount from './Pages/Notfount'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import detail from './Pages/Detailcourse'
import Detailcourse from './Pages/Detailcourse'
import Navbar2 from './Components/Navbar2'



const App = () => {
  return (
    <div >
      <Navbar/>
      <Navbar2/>
      <Footer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:courseId' element={<Detailcourse/>}/>
        <Route path='/product' element={<Product/>}>

        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
        </Route>

        <Route path='*' element={<Notfount/>}/>
      </Routes>
    </div>
  )
}

export default App
