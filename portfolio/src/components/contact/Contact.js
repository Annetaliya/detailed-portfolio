import React, {useRef} from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9nzarkq', 'template_sf7srco', form.current, 'il4SILaCnHiEQ2JNk')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work opprtunities
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your email' name='your_email'/>
                    <textarea className='msg' name='message' rows='5'placeholder='Your message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link' />
                        <img src={Twitter} alt="Twitter" className='link' />
                        <img src={Instagram} alt="Instagram" className='link' />
                        <img src={Youtube} alt="Youtube" className='link' />
                    </div>

                </form>

            </div>

        </section>
    )
}

export default Contact;