import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: "Técnico em Administração",
      institution: "Elec Itanhasém",
      date: "2022-atualmente",
      description: "Este curso técnico visa formar profissionais capacitados para atuar nas áreas administrativas e de gestão de empresas."
    },
    {
      title: "Atendimento ao Cliente",
      institution: "Sabras",
      date: "Jun 2022",
      description: "Curso de atendimento oferecido pelo Sabras onde aprendi a importância de um bom atendimento."
    },
    {
      title: "Mixologia Básica",
      institution: "Escola de Bares Lorem",
      date: "2021",
      description: "Curso de preparação de bebidas e coquetéis com duração de 60 horas."
    }
  ];

  return (
    <section className="section">
      <h2>CURSOS</h2>
      {courses.map((course, index) => (
        <div key={index} className="course-item">
          <h3>{course.title}</h3>
          <p className="institution">{course.institution} | <span className="date">{course.date}</span></p>
          <p>{course.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Courses;