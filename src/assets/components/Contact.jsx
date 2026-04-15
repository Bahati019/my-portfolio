import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Get environment variables (you'll need to set these up)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing. Please check your .env.local file.');
        setStatus('ERROR');
        setIsSubmitting(false);
        return;
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      setStatus('SUCCESS');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container text-center">
      <h2 className="section-title">Contact</h2>
      <p className="text-lg text-slate-400 mb-10 max-w-[600px] mx-auto">
        I'm currently open to freelance projects, collaborations, or full-time roles. Feel free to reach out!
      </p>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-[600px] mx-auto flex flex-col gap-6 bg-slate-800/50 p-10 rounded-2xl border border-slate-700/50 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Honeypot for spam protection */}
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/50 min-h-[150px] resize-y disabled:opacity-50 disabled:cursor-not-allowed"
        ></textarea>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className="bg-blue-500 text-white p-3.5 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {status === 'SUCCESS' && (
          <motion.p
            className='text-emerald-500 bg-emerald-500/10 p-2.5 rounded-md mt-4 font-medium'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            ✅ Thanks! Your message has been sent successfully.
          </motion.p>
        )}
        {status === 'ERROR' && (
          <motion.p
            className="text-red-500 bg-red-500/10 p-2.5 rounded-md mt-4 font-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            ❌ Oops! Something went wrong. Please check the console and ensure EmailJS is configured.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
