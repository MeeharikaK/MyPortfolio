import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-gray-300 z-50 px-6 py-4 flex justify-center space-x-6 text-md font-semibold">
      <a href="#hero" className="hover:text-white">Home</a>
      <a href="#about" className="hover:text-white">About</a>
      <a href="#skills" className="hover:text-white">Skills</a>
      <a href="#projects" className="hover:text-white">Projects</a>
      <a href="#experience" className="hover:text-white">Experience</a>
      <a href="#resume" className="hover:text-white">Resume</a>
      <a href="#education" className="hover:text-white">Education</a>
      <a href="#certifications" className="hover:text-white">Certifications</a>
      <a href="#contact" className="hover:text-white">Contact</a>
    </nav>
  );
};

export default Navbar;
