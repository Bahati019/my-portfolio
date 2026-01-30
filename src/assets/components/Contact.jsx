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

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>

        {status === 'SUCCESS' && (
          <motion.p
            className='success-message'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            ✅ Thanks! Your message has been sent.
          </motion.p>
        )}
        {status === 'ERROR' && (
          <motion.p
            className="error-message"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            ❌ Oops! Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
