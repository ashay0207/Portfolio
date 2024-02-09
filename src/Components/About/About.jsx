import React, { useState } from 'react'
import './about.css'
import SkillsApi from '../SkillsApi/SkillsApi'



const About = () => {
    const [data, setdata] = useState(SkillsApi)
    return (
        <>
            <section className="skills">
                <span className='aboutTitle'>About <span className='color'> me</span></span>
                <span className="description">I am a dynamic front-end developer with a strong focus on <span className='color'>React JS</span>, deeply enthusiastic about crafting captivating user interfaces. My dedication to user-centric design and efficient web development drives me to explore emerging web design trends. My goal is to leverage React JS to create engaging and seamless web experiences that consistently exceed user expectations.</span>
                <span className='aboutTitle color'>Skills</span>
                <div className="skillcard ">

                    {data.map((res) => {
                        return (
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="card-content">
                                            <img src={res.image} alt="" />
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="card-content">
                                            <h2 className='color'>{res.title}</h2>
                                            <p>{res.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </>

    )
}

export default About