import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-6 bg-black text-gray-300" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 inline-block">About Me</h2>
        <p className="text-lg mt-4 leading-relaxed">
          I'm a Full Stack .NET Developer with 6+ years of experience building scalable, cloud-based enterprise apps.
          I specialize in ASP.NET Core, Web API, and SQL Server on the backend, and React/Angular on the frontend.
          I’ve delivered mission-critical systems in healthcare, claims tracking, and automation using Azure and DevOps practices.
        </p>
      </div>
    </section>
  );
};

export default About;
