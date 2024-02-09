import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <>
    <section className='resume'>
    <span className='aboutTitle'><span className='color'> Resume</span></span>
    <div className="grid-container-resume">
      <div className="left-div">
        <div class="container">
                    <div class="skill">
                        <h3>HTML</h3>
                        <h4>95%</h4>
                        <span class="skill-bar"></span>
                        <span class="fill-bar html"></span>
                    </div>
                    <div class="skill">
                        <h3>CSS</h3>
                        <h4>85%</h4>
                        <span class="skill-bar"></span>
                        <span class="fill-bar css"></span>
                    </div>
                    <div class="skill">
                        <h3>JavaScript</h3>
                        <h4>60%</h4>
                        <span class="skill-bar"></span>
                        <span class="fill-bar javascript"></span>
                    </div>
                    <div class="skill">
                        <h3>React</h3>
                        <h4>55%</h4>
                        <span class="skill-bar"></span>
                        <span class="fill-bar react"></span>
                    </div>
         </div></div>
      <div className="right-div">
        <div className="right-div-item"> <a href='https://tops-int.com/certificate/nsdc/ashay-0207 ' target="_blank"className='download-button'> Download Certificate </a></div>
        <div className="right-div-item"><a href='' className='download-button' target="_blank"> Download CV </a></div>
      </div>
    </div>
        
    </section>
           
    </>
  )
}

export default Resume