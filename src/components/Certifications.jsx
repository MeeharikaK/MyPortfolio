import React from 'react';

const certs = [
  { src: '/assets/certificates/Microsoft_Azure.jpg', title: 'Microsoft Azure Fundamentals' },
  { src: '/assets/certificates/FullStackcertificate.jpg', title: '.NET FSE Journey' },
  { src: '/assets/certificates/LeetCode_SQL_50ChallengeQuestions.jpg', title: 'LeetCode SQL 50 Challenge' },
  { src: '/assets/certificates/AHM.jpg', title: 'AHIP - Academy for Healthcare Management' }
];

const Certifications = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-400 pb-2">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[500px] h-[300px] border border-yellow-400 rounded overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-2 text-white">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
