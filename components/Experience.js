import React from 'react';

const Experience = () => {
  return (
    <section className="section">
      <h2>EXPERIÊNCIA LABORAL</h2>
      
      <div className="experience-item">
        <h3>Garçom Senior</h3>
        <p className="date">Restaurante Lorem Ipsum | Jan 2020 - Presente</p>
        <ul>
          <li>Atendimento ao cliente com excelência, garantindo satisfação e fidelização</li>
          <li>Preparação de coquetéis artesanais e bebidas especiais</li>
          <li>Controle de estoque e reposição de bebidas</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <h3>Garçom</h3>
        <p className="date">Bar Dolor Sit | Mar 2018 - Dez 2019</p>
        <ul>
          <li>Atendimento em ambiente de alto fluxo de clientes</li>
          <li>Organização e limpeza do ambiente de trabalho</li>
          <li>Treinamento de novos funcionários</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

