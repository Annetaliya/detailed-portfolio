import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/web screen.PNG';



function Works() {
    const mySite = 'https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/'
    return (
        <section id="works">
            <h2 className='worksTitle'> My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals</span>
            <div className='worksImgs'>
                <h2 className='worksTitle'>Click the image below to follow the link</h2>
                <a href={mySite} target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} alt="" className='worksImg'/> 

                </a>

            </div>
            <button className='worksBtn'>See more</button>
            
        </section>
    )
}

export default Works;