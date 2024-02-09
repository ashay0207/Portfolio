import React from 'react'
import './intro.css';
import intro from '../../Assets/intro.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <>
        <section id="intro">
            <div className="content">
                <span className='hello'>Hello!</span>
                <span className="introtext">I'm <span className="introname">Ashay Shah</span><br /> Front-End Developer</span>
                <p className="intropara"> I'm a front-end React.js developer with a passion for creating engaging user interfaces!</p>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="hire"><i class="fa-solid fa-briefcase"></i>Hire Me!</button></Link>
            </div>
            <img src={intro} alt="" className='bg'/>
            
        </section>
   
        </>
    )
}

export default Intro