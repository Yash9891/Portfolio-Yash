import React from 'react'

export default function Resume() {
  return (
   <>
   <h1 className='resumehead'>Designing the <span>Web</span>, One Pixel at a <span>Time</span></h1>
   <div className='linkSection'>


    <div className='resume'>

   <div className='blckcolor'>
    <h2>Crafting Success One <span>Achievement</span> at a <span>Time</span></h2>
   <a href="../src/assets/resume2.pdf" target="_blank" rel="noreferrer">
      View My Resume
    </a>
   </div>
    </div>

    <div className='sociallinks'>

      <div className='github'>
        
        <a className='gitcontainer' href="https://github.com/Yash9891" target="_blank" rel="noreferrer">
        <img src="../src/assets/git.png" alt="" />
   <div className='gitInside'>
   <h1>Gihub</h1>
        <h2>Building the future, one commit at a time.</h2>
   </div>
        </a>

      </div>
      <div className='linkedin'>
      <a className='gitcontainer' href="https://www.linkedin.com/in/yash-40875a262/" target="_blank" rel="noreferrer">
        <img src="../src/assets/linkedin.png" alt="" />
   <div className='gitInside'>
   <h1>LinkedIn</h1>
        <h2>Forge connections, shape your future.</h2>
   </div>
        </a>
      </div>

    </div>
    
  
   </div>
   
   </>
  )
}
