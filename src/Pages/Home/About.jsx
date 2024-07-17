import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { FaStar } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import About2 from "./About2"
export default function About() {
  return (
   <>
   <Navbar2/>
     
     <div className='aboutme'>
        
       <div className='about1'>
        <h1>Hello!<span> My name is</span > Yash</h1>
        <div className='aboutcontainer'>

          <div className='aboutimg'>
            <div className='aboutimgname'>
              <h3>Full Stack Developer</h3>
              <h2>Yash</h2>
            </div>
          </div>

          <div className='aboutpara'>
            <h2>Hi I'm Yash, a B-Tech student at SRM University specializing in Artificial Intellegence and Machine Learning.</h2>
            <p>I'm passionate about turning creative ideas into visually stunning websites, with expertise in front-end development and a growing interest in back-end development. Coding is my jam, and I love using , C++, JavaScript and Python to build digital solutions that bridge the gap between the digital and real worlds. </p>
            <div className='topskills'>
              
              <h4><IoDiamondOutline /><span>Top Skills</span></h4>
              <h5>Fullstack Development, JavaScript, C++, Database, Python</h5>
            </div>
          </div>

        </div>
       </div>





     </div>
     <h1 className='topprojects'>Top <span>Projects</span></h1>
     <div className='about2Section'>

      <div className='about2heading'>
    <h1>"Innovating Through <span>Code</span>, One <span> Line</span> at a Time"</h1>
      </div>

      <div className='about2division'>
        <div className='box'>
        <a className='imageconatiner' target="_blank" rel="noreferrer" href="https://megacampy-yash.onrender.com/">
          <div className='images'>
          </div>
    
        </a>
       <div>
       <h3>MegaCampy</h3>
         <p>This is a Fullstack project where user can create, delete and review the campgrounds.</p>
         <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
       </div>
        </div>
        <div className='box'>
        <a className='imageconatiner' target="_blank" rel="noreferrer" href="https://yash9891.github.io/Nfilms-WatchTvShows/">
          <div className='images images2'>
          </div>
    
        </a>
       <div>
       <h3>Nfilms</h3>
         <p>Nfilms is a frontend project in which user can search about any movie and tv show.</p>
         <span><FaStar /><FaStar /><FaStar /><FaStar /></span>
       </div>
        </div>
        <div className='box'>
        <a className='imageconatiner' target="_blank" rel="noreferrer" href="https://cartrack2.netlify.app/">
          <div className='images images3'>
          </div>
    
        </a>
       <div>
       <h3>CarTrack</h3>
         <p>This is a frontend car show project which has great UI and user can search about cars. </p>
         <span><FaStar /><FaStar /><FaStar /></span>
       </div>
        </div>
        <div className='box'>
        <a className='imageconatiner' target="_blank" rel="noreferrer" href="https://yash9891.github.io/Amazon-Clone/">
          <div className='images images4'>
          </div>
    
        </a>
       <div>
       <h3>Amazon Clone</h3>
         <p>This is an Amazon Clone website which has almost similar UI like Amazon.</p>
         <span><FaStar /><FaStar /><FaStar /></span>
       </div>
        </div>
      </div>


</div>
<About2/>

   <Footer/>
   </>
  )
}
