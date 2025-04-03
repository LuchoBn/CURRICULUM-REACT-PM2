import React from 'react';

const Languages = () => {
  return (
    <section className="section">
      <h2>IDIOMAS</h2>
      <div className="languages-container">
        <div className="language-card">
          <h3>Español</h3>
          <p>Nativo</p>
        </div>
        <div className="language-card">
          <h3>Libras</h3>
          <p>Nivel medio</p>
        </div>
        <div className="language-card">
          <h3>Inglés</h3>
          <p>Nivel medio</p>
        </div>
        <div className="language-card">
          <h3>Portugués</h3>
          <p>Avançado</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;