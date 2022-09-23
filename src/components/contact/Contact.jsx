import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8v4lans', 'template_c2bo8np', form.current, '0GpPsNa-hfUgVtJCy')
    
    e.target.reset()
  };

  return (
    <section id= 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Info</h2>

      <div className="container contact__container">
        {/* <div className="contact__option">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>garrettLhays@gmail.com</h5>
            <a href="mailto:garrettLhays@gmail.com">Send Message</a>
          </article>
        </div> */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact