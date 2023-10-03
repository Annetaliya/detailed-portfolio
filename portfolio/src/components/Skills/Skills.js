import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';


function Skills() {
    return (
        <section id="skills">
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am a skilled and passionate web designert with experience creating visually appealing and responsive designs</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className='skillBrImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX design</h2>
                        <p>I have experience working with figma to create website mockups and wireframes</p>

                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBrImg' />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>I make user friendly websites that are responsive, i have experience working with HTML, CSS and React JS</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;