import React from 'react';

const Experience = () => {
  const roles = [
    {
      company: 'Humana',
      role: 'Dot Net Developer',
      time: 'Feb 2025 – Present',
      tasks: [
        'Developed .NET 6 apps for patient eligibility.',
        'Created RESTful APIs and optimized SQL queries.',
        'CI/CD via Azure DevOps.'
      ]
    },
    {
      company: 'Informative Web Solutions',
      role: 'Dot Net Developer',
      time: 'Jan 2021 – Feb 2023',
      tasks: [
        'Architected microservices with .NET and React.',
        'Integrated secure payment systems and OAuth2.',
        'Managed Docker-based deployments.'
      ]
    }
  ];

  return (
    <section className="bg-black text-gray-300 py-16 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">Experience</h2>
        {roles.map((item, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold">{item.role} @ {item.company}</h3>
            <p className="italic">{item.time}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {item.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
