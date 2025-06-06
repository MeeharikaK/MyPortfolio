import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 inline-block">Contact</h2>
      <p className="text-lg mb-6">Feel free to connect with me!</p>
      <div className="flex justify-center gap-10 text-3xl text-gray-300">
        <a href="mailto:meeharika.k@mailjobtech.com" className="hover:text-white" aria-label="Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/k-meeharika/" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/MeeharikaK" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="GitHub"><FaGithub /></a>
      </div>
    </section>
  );
};

export default Contact;
