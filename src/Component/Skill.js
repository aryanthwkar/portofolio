import React from 'react';


const skills = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'CSS', level: 'Expert' },
  { name: 'HTML', level: 'Expert' },
];

const Skill = () => {
  return (
    <section className="skills-section" id="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
