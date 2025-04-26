import React from 'react';
import './Main.css';

const aspects = [
  {
    title: 'Aspect 1: People',
    description:
      'This aspect refers to the individuals and teams involved in data governance and management. It includes their awareness, roles, responsibilities, collaboration, and technical competencies. A mature organization fosters a culture of accountability, training, and strategic engagement in data-related activities.',
  },
  {
    title: 'Aspect 2: Policies',
    description:
      'Policies encompass the rules, standards, and institutional guidelines that ensure consistent, secure, and ethical data use. These include governance frameworks, privacy rules, compliance mechanisms, data quality standards, and processes that promote trust and regulatory alignment.',
  },
  {
    title: 'Aspect 3: Capabilities',
    description:
      'Capabilities represent the technical infrastructure and tools available to support data management. This includes analytics platforms, data integration systems, monitoring tools, metadata repositories, and automation solutions that enable efficient and strategic data operations.',
  },
];

const Aspects = () => {
  return (
    <div className="main-content">
      <header className="main-header">
        <h1>Data Governance Evaluation Aspects</h1>
        <p>
          The maturity framework evaluates each dimension across three core aspects: People, Policies, and Capabilities. These aspects provide a holistic view of how data is governed, managed, and leveraged within an organization.
        </p>
      </header>

      <section className="level-container">
        {aspects.map((aspect, index) => (
          <section className="main-section">
            <article key={index} className="level-box">
              <h2>{aspect.title}</h2>
              <p>{aspect.description}</p>
            </article>
          </section>
        ))}
      </section>
      <section className="main-section" id="dimensions">
        <h2>Scoring Method</h2>
        <p>
          Each response within the evaluation instrument is mapped to a maturity level based on the selected criteria. The overall maturity of a given dimension is determined by aggregating the scores of its three aspects. The model employs the Minimum Level Rule, which assigns the dimension the lowest score among its aspects—thus emphasizing bottlenecks or constraints that may hinder maturity.
        </p>
      </section>

      <footer className="main-footer">
        &copy; 2025 DG2M Framework. All rights reserved.
      </footer>
    </div>
  );
};

export default Aspects;
