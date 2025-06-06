import React from 'react';

const projects = [
  {
    title: 'Enrollment Reconsideration System',
    tech: 'ASP.NET Core, Angular, SQL Server, Azure DevOps',
    description: 'Automated Medicaid/Medicare dispute resolution via APIs and stored procedure optimization.'
  },
  {
    title: 'Claims Tracking System',
    tech: 'ASP.NET MVC, Angular, SQL, Web API, WCF',
    description: 'Built real-time dashboards and alerts for claim status and appeals handling.'
  },
  {
    title: 'Medicaid Eligibility Automation',
    tech: '.NET Core, SQL Server, Azure Functions',
    description: 'Automated DSNP Medicaid checks and flagged exceptions for analyst review.'
  }
];

const Projects = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-black border border-yellow-400 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="italic text-sm mb-2">{project.tech}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
