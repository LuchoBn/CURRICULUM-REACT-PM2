


import React from 'react';

const Skills = () => {
  const skills = [
    "Trabalho em equipe",
    "Comunicação",
    "Resolução de problemas",
    "Elaboração de relatórios",
    "Pro-ativo",
    "Colaborativo",
    "Atendimento ao cliente",
    "Mixologia básica",
    "Gestão de estoque",
    "Organização"
  ];

  return (
    <section className="section">
      <h2>HABILIDADES</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;