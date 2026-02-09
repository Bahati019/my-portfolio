import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section id="contact" className="section-container text-center">
      <h2 className="section-title">Contact</h2>
      <p className="text-lg text-slate-400 mb-10 max-w-[600px] mx-auto">
        I'm currently open to freelance projects, collaborations, or full-time roles. Feel free to reach out!
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-[600px] mx-auto flex flex-col gap-6 bg-slate-800/50 p-10 rounded-2xl border border-slate-700/50 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50 min-h-[150px] resize-y"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-500 text-white p-3.5 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Send Message
        </motion.button>

        {status === 'SUCCESS' && (
          <motion.p
            className='text-emerald-500 bg-emerald-500/10 p-2.5 rounded-md mt-4 font-medium'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            ✅ Thanks! Your message has been sent.
          </motion.p>
        )}
        {status === 'ERROR' && (
          <motion.p
            className="text-red-500 bg-red-500/10 p-2.5 rounded-md mt-4 font-medium"
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
