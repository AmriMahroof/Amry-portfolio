const experiences = [
  {
    role: 'Fullstack Developer Intern',
    company: 'Dot-Tech Software (PVT) Ltd.',
    duration: 'August 2025 – February 2026 (Full Time)',
    techStack: ['React', 'Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    achievements: [
      'Developed scalable full-stack web applications using React.js, Node.js, Express.js, and GraphQL, improving system performance and enhancing user experience.',
      'Designed and implemented RESTful and GraphQL APIs, integrating PostgreSQL databases for efficient data storage, retrieval, and management.',
      'Implemented secure authentication systems using Firebase and deployed applications on AWS, ensuring reliable and scalable deployment.',
      'Utilized Git and GitHub for version control and collaborative development, following best practices for clean and maintainable code.',
      'Contributed to Agile development processes, including sprint planning, debugging, performance optimization, and peer code reviews to enhance software quality.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Cliick Wave (PVT) Ltd.',
    duration: 'April 2025 – August 2025 (Full Time)',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    achievements: [
      'Developed scalable MERN stack web applications using MongoDB, Express.js, React.js, and Node.js, supporting secure authentication and real-time data operations.',
      'Implemented JWT-based authentication to ensure secure user access and protect sensitive application data.',
      'Designed and integrated RESTful APIs and responsive React-based user interfaces, delivering production-ready web applications.',
      'Deployed and maintained applications on AWS, ensuring high availability, reliability, and smooth application performance.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            My professional journey building production-grade applications.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${exp.role}`} className="experience-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <div className="experience-tech">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="experience-achievement">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
