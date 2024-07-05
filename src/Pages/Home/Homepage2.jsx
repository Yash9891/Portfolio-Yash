import React, {useState} from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import CountUp from 'react-countup';
import Scrolltrigger from 'react-scroll-trigger';
export default function Homepage2() {
   
      const [showFrontend, setShowFrontend] = useState(true);
      const scrollToHomepageSection1 = () => {
        const homepageSection1 = document.querySelector('.homepageSection1');
        if (homepageSection1) {
          homepageSection1.scrollIntoView({ behavior: 'smooth',block: 'start' });
        }
      };
      const [counterOn,setCounterOn]=useState(false);
  return (
    <>
    
      <div className='countContainer'>
        <Scrolltrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className='maxBox'>
          <div className='procount'>
            <h1>
              {counterOn && <CountUp start={0} end={200} duration={2} delay={0}/>}
              +
            </h1>
            <h2 className='ranks'>
              Code Commits
            </h2>
          </div>
          <div className='procount'>
            <h1>
              {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
              +
            </h1>
            <h2 className='ranks'>
              Projects Completed
            </h2>
          </div>
          <div className='procount'>
            <h1>
              {counterOn && <CountUp start={0} end={981035} duration={2} delay={0}/>}
              +
            </h1>
            <h3 className='ranks'>
              LeetCode Rank
            </h3>
          </div>
          </div>
          </Scrolltrigger>

      </div>
      


    <div className='homepage'>
        <div className='homepageSection1'>
        {showFrontend ? (
          <div className='frontendSection'>
            <div className='frontImage'></div>
            <h2>Frontend Expertise</h2>
            <div className='front--content'>
              <div className='fofo1'>
              <div className='technology1'>
              <span><RiJavascriptFill /></span>
                <h2>Java Script</h2>
              </div>
              <div className='technology1'>
              <span><FaReact /></span>
                <h2>React</h2>
              </div>
              </div>
              <div className='fofo1'>
              <div className='technology1'>
                <span><FaHtml5 /></span>
                <h2>Html</h2>
              </div>
              <div className='technology1'>
              <span> <FaCss3 /></span>
                <h2>Css</h2>
              </div>
              

              </div>

            </div>
            
           
          </div>
        ) : (
          <div className='frontendSection'>
            <div className='backImage'></div>
            <h2>Backend Expertise</h2>
            <div className='front--content'>
              <div className='fofo1'>
              <div className='technology1'>
              <span><TbBrandMysql /></span>
                <h2>My SQL</h2>
              </div>
              <div className='technology1'>
              <span><FaNodeJs /></span>
                <h2>NodeJs</h2>
              </div>
              </div>
              <div className='fofo1'>
              <div className='technology1'>
                <span><SiExpress /></span>
                <h2>ExpressJs</h2>
              </div>
              <div className='technology1'>
              <span> <SiMongodb /></span>
                <h2>MongoDb</h2>
              </div>
              

              </div>

            </div>
           
            
          </div>
        )}


        </div>
        <div className='homepageSection2'>
            <h1 className='homepageHeading'>
            Transforming <span>Ideas</span> into Interactive <span>Digital</span> Realities.
            </h1>
           <div>
           <button onClick={() => { setShowFrontend(true); scrollToHomepageSection1(); }} className='homepagebutton'>Frontend</button>
            <button onClick={() => { setShowFrontend(false); scrollToHomepageSection1(); }} className='homepagebutton'>Backend</button>
            </div>

        </div>

    </div>

    </>
  )
}
