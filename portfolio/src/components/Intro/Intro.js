import React from 'react';
import './Intro.css';
import bg from '../../assets/image.jpg'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello</span>
                <span className='introText'>I'm<span className='introName'>Annette</span> <br />Frontend Developer </span>
                <p className='introPara'>I'm a skilled frontend website developer with <br/>experience in creating modern and responsive websites</p>
                <Link><button className='btn'>
                    <img src={btnImg} alt="hire me" className='btnImg'/>Hire Me
                    </button>
                </Link>

            </div>
            <img src={bg} alt="profile" className='bg'/>

        </section>
    )
}

export default Intro;