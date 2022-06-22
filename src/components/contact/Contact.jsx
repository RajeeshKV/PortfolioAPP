import React from 'react';
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail />
            <h4>Email</h4>
            <h5>Rajeeshkva2z@gmail.com</h5>
            <a href="mailto:rajeeshkva2z@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Rajeesh KV</h5>
            <a href="https://m.me/rajeeshkvkmr.kv">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappLine />
            <h4>WhatsaApp</h4>
            <h5>Rajeesh KV</h5>
            <a href="https://wa.me/+919656010927">Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact