import React from 'react';

const Resume = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6 text-center" id="resume">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 inline-block">Resume</h2>
      <p className="mb-6 text-lg">View or download my latest resume.</p>
      <div className="flex justify-center gap-6">
        <a href="/Meeharika_Kamagari_Resume.pdf" target="_blank" rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition">
          View Resume
        </a>
        <a href="/Meeharika_Kamagari_Resume.pdf" download
          className="border-2 border-yellow-400 text-gray-300 px-6 py-2 rounded font-semibold hover:bg-yellow-400 hover:text-black transition">
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
