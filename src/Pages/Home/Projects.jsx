import React from 'react'

import data from '../../data/indexskill.json';
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
export default function Projects() {

  return (
  
    <>
    <div className='projects'>
      <h1>My <span>Projects</span></h1>



    <div className='projects-items example' >
   
          {data?.portfolio?.map((item, index) => (
            <div key={index} className='mahaproject'>
              <div  className='project-card'>

             <div className='project-img'>
                <img   src={item.src} alt="img" />
                </div>
           
                <div className='project-content'>
                <h2 >{item.title}</h2>
               
                <p >{item.description}</p>
                <div className='portlink'>
                <a className='gitlogo' href={item.gitlink} target="_blank" rel="noreferrer"> <FaGithub />  <span>Git Hub</span> </a>
                <a className='gitlogo' href={item.projectlink} target="_blank" rel="noreferrer"> <BsGlobe2 />  <span>Project</span> </a>
                </div>

                </div>
                
                </div>
            
              </div>
       
               
          ))}
        
        </div>
        
        
    </div>
    
    </>
    
  )
}

