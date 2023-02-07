import '../styles/Contact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'react-simple-snackbar';

function Contact() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
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
          openSnackbar('Message sent successfully');
        },
        (error) => {
          closeSnackbar('Error send message');
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MailOutlineIcon />
            <h4>Email</h4>
            <h5>iprasanthpraba@gmail.com</h5>
            <a
              href='mailto:iprasanthpraba@gmail.com'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <WhatsAppIcon />
            <h4>WhatsApp</h4>
            <h5>7010970748</h5>
            <a
              href='https://api.whatsapp.com/send?phone=7010970748'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>
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
