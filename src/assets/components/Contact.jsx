import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mldbpebq', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">I'm currently open to freelance projects, collaborations, or full-time roles. Feel free to reach out!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>

        {status === 'SUCCESS' && (
            <motion.p
                className='success-message'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                ✅ Thanks! Your message has been sent.
            </motion.p>
        )}
        {status === 'ERROR' && (
            <motion.p
                className="error-message"
                initial={{ x: 0 }}
                animate={{ x: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
            >
                ❌ Oops! Something went wrong. Please try again.
            </motion.p>
        )}
      </form>
    </section>
  );
}

export default Contact;
