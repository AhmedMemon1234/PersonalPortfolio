'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulate form submission (replace with actual backend logic)
    setTimeout(() => {
      setStatus('Thank you! Redirecting...');
      setIsSubmitting(false);

      // Redirect to Discord (replace with your Discord profile URL)
      window.location.href = 'https://discord.com/users/braveboy0675_78344'; // Replace with your actual Discord profile
    }, 2000);
  };

  return (
    <section className="bg-white text-gray-800 py-16 lg:py-32" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-6xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Get in Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg space-y-6 mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Send Me a Message</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg transition duration-300 hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </motion.form>

        {/* Status Message */}
        {status && <p className="text-center text-xl text-green-500 mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
