import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
// import Index from './Pages/Home/Homescreen/Index'
import Navbar from './Pages/Home/Navbar';
import Index from './Pages/Home/Homescreen/Index';
import About from './Pages/Home/About'
import Contact from './Pages/Home/Contact';
function App() {
  

  return (
    <>
    <div className='App'>
    {/* <Index/> */}
    <Router>
      <div>
       
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </div>
    </Router>
    </div>

    </>
  )
}

export default App
