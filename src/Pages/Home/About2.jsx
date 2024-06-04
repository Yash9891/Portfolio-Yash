import React from 'react';
import data from '../../data/indexskill.json';
import { useState } from 'react';
import { GoDotFill } from "react-icons/go";

export default function About2() {
  const [hireme, setHireme] = useState("Education");
  const scrollToAbout3Section1 = () => {
    const about3Section1 = document.querySelector('.about3Section1');
    if (about3Section1) {
      about3Section1.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='about3Section'>
        <div className='about3Section1'>
          <div className='hiremeHeading'>      
              <h1>{hireme}</h1>
        <p>The Power of Education, guided by my passion for continuous learning and growth.</p></div>

          <div className='hiremeSection'>

            {data[hireme]?.map((item, index) => (
              <div key={index} className='hiremeContainer'>
                
                <div className='hireme--contents'>
                  <h3 >{item.date}</h3>

                  <h1>{item.skillname}</h1>
                  <h2>{item.institute}</h2>
   


                  <p>{item.address}</p>
                  <div className='percentage'>
                    <GoDotFill />
       
                    <p>{item.percentage}</p>
                    <p>{item.course}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='about3Section2'>
          <h1>Why hire me?</h1>
          <p>Experienced in both frontend and backend technologies, with proficiency in creating responsive user interfaces and robust server-side applications.</p>
          <button onClick={() => { setHireme("Education"); scrollToAbout3Section1(); }}>Education</button>
          <button onClick={() => { setHireme("Skills"); scrollToAbout3Section1(); }}>Skills</button>
          <button onClick={() => { setHireme("Hackathons"); scrollToAbout3Section1(); }}>Hackathons</button>
        </div>
      </div>
    </>
  )
}
