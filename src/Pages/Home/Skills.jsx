import React from 'react';
import data from '../../data/indexskill.json';
import { GoDotFill } from "react-icons/go";

export default function Skills() {
  return (
    <>
      <section className='skills--section' id='mySkills' >
        <div className='portfolio--container'>
          <h1 className='section--title'>My <span>Skills</span></h1>

        </div>

        <div className='skills--section--container'>
          {data?.skills?.map((item, index) => (
            <div key={index} className='skills--section--card'>

              <div className='skills--section--img'>
                <img src={item.src} alt="img" />
                
              </div>
              <div className='skills--contents'>
                <h3 className='skills-heading'>{item.title}</h3>

                <p >{item.description}  
                <h2 className='para'><GoDotFill/><span>{item.exp}</span></h2></p>

              </div>
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
}
