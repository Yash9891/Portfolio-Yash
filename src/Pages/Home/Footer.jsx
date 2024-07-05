import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export default function Footer() {

  return (
    <>
    
    <div className='footer'>
      
       
        <div className='footerlogolinks'>
            <h1>Get in <span>Touch</span> </h1>
            <p>Connect with Me to Create Innovation </p>
            <div className='footerlinks'>
              <ul>
                <li><a className='gitcontainer' href="https://www.instagram.com/yash_s5098/" target="_blank" rel="noreferrer"><RiInstagramFill /></a></li>
                <li><a className='gitcontainer' href="https://www.linkedin.com/in/yash-40875a262/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                <li><a className='gitcontainer' href="https://github.com/Yash9891" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a className='gitcontainer' href="https://discord.com/channels/@yash_04557" target="_blank" rel="noreferrer"><FaDiscord /></a></li>
               
              </ul>


            </div>
        </div>
        <div className='nextblock'>
          <img src="https://i.ibb.co/bJZYjKh/gipi.jpg" alt="" />
            <div className='nextblocklink'>
            <a className='btn btn-primary'  href="/about">About Me</a>
            <a className='btn btn-primary' href="/contact">Contact Me</a>
            </div>
           
        </div>
        

     

    </div>
    <div className='divline'>

</div>
<div className='copy'>
<p>&copy; 2024 Yash. All rights reserved.</p>
</div>
   
    </>
  )
}
