import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
export default function Contact() {
  return (
    <>
    <Navbar2/>
    
      <div id='contact' >

        <div className='contact1'>
          <h1>Say <span>Hello</span></h1>
          <div className='emailbox'>
           
            <div className='nameinput'>
              
              <div className='privatename'>
                <h4>Name</h4>
            <input type="text" placeholder='Yash'/>
            </div>
            
            <div className='privatename'>
              <h4>Email</h4>
            <input type="email" placeholder='yash042002@gmail.com'/>
            </div>

            </div>
            
            <div className='privatename'>
              <h4>Type your message!</h4>
            <textarea name="textbox" id="textbox" rows={2} cols={50} placeholder='Enter your message'></textarea>
            </div>
            <a className='submitbutton btn btn-primary' href="mailto:yash042002@gmail.com" target="_blank" rel="noreferrer">Submit</a>
          </div>

        </div>
        <div className='contact2'>
          <div>
            <img className='congif' src="https://i.ibb.co/Y8J9CYQ/giphy.gif" alt="" />
          </div>

        <div className='con2info'>
        <h1><span>Connect</span> with Me!</h1>
          <p>Feel free to reach out with any questions, collaborations, or opportunities — I am here to connect!</p>
          

        <div className='conact2links'>
        <ul>
                <li><a className='concontainer' href="https://www.instagram.com/yash_s5098/" target="_blank" rel="noreferrer"><RiInstagramFill /></a></li>
                <li><a className='concontainer' href="https://www.linkedin.com/in/yash-40875a262/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                <li><a className='concontainer' href="https://github.com/Yash9891" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a className='concontainer' href="https://discord.com/channels/@yash_04557" target="_blank" rel="noreferrer"><FaDiscord /></a></li>
               
              </ul>

              </div>
              <div className='phoneinfo'>
                <h4><FaPhoneAlt />  <span> +91 9891558226</span></h4>
                <h4><IoMailSharp /> <span>  yash042002@gmail.com</span></h4>
                <h4><IoLocation />   <span>Ghaziabad, Uttar Pradesh, India</span></h4>

              </div>

        </div>

        </div>
      
      </div>
      <Footer/>
    </>
  )
}
