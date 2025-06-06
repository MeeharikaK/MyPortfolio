import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-gray-300 font-sans scroll-smooth">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="resume"><Resume /></section>
      <section id="education"><Education /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
