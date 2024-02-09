import React, { useRef, useState } from 'react';
import './contact.css';
// import github from '../../Assets/github.png';
// import linkdin from '../../Assets/linkdin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const nameInput = form.current.elements['your_name'];
    const emailInput = form.current.elements['your_email'];
    const messageInput = form.current.elements['message'];

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Prevent multiple submissions
    if (submitting) return;
    setSubmitting(true);

    // Send email using EmailJS
    emailjs
      .sendForm('service_wq05m4o', 'template_ima5oai', form.current, 'Ulnd_qsxPWdQEsggp')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        alert('Email Sent');
      })
      .catch((error) => {
        console.error('Email Error:', error);
        alert('An error occurred while sending the email. Please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="contact">
      <div className="contact-container" id="contact">
        <div className="contact">
          <h1 className="pagetitle color">Contact Me</h1>
          <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="your_name" />
            <input type="email" className="email" placeholder="Your Email" name="your_email" />
            <textarea name="message" className="textarea" rows="5" placeholder="Your message"></textarea>
            <button type="submit" className="submitbtn" disabled={submitting}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
