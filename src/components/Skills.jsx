import React from 'react';

const skills = {
  Backend: ['C#', 'ASP.NET Core', 'Entity Framework', 'Web API', 'WCF'],
  Frontend: ['React.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  Database: ['SQL Server', 'MySQL', 'Cosmos DB'],
  DevOps: ['Azure DevOps', 'Docker', 'CI/CD', 'Git'],
  Cloud: ['Microsoft Azure', 'AWS'],
};

const Skills = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-2">{category}</h3>
              <ul className="list-disc list-inside space-y-1">
                {items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
