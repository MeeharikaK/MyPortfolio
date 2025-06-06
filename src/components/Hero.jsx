import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-gray-300 px-4">
      <img src="/assets/profile.png" alt="Meeharika Kamagari" className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-400" />
      <h1 className="text-4xl font-bold">Meeharika Kamagari</h1>
      <p className="text-xl text-gray-300 mt-2">Full Stack .NET Developer | React | Azure | SQL</p>
    </section>
  );
};

export default Hero;
