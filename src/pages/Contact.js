import '../styles/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from '../contexts/SnackbarContext';

function Contact() {
  const { openSnackbar } = useSnackbar();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          openSnackbar('Message sent successfully', 'success');
        },
        (error) => {
          openSnackbar('Error sending message', 'error');
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Get In Touch</h2>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            placeholder='Your Message'
            rows='7'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
