import React from 'react';
import './Main.css'; 

const maturityLevels = [
  {
    title: 'Level 0: Not Initiated',
    description:
      'At the initial level, the first initiatives related to data management begin to emerge, but in a disorganized manner and without strategic alignment. The organization is in a learning stage, exploring tools and technologies without a structured long-term vision. Decisions are reactive and based on intuition, with occasional exploratory projects aimed at understanding the potential uses of data. However, the lack of documentation and standardized processes limits the evolution of these initiatives.',
  },
  {
    title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
    description: 'At the initial level, the first initiatives related to data management begin to emerge, but in a disorganized manner and without strategic alignment. The organization is in a learning stage, exploring tools and technologies without a structured long-term vision. Decisions are reactive and based on intuition, with occasional exploratory projects aimed at understanding the potential uses of data. However, the lack of documentation and standardized processes limits the evolution of these initiatives.',
  
  },
  {
    title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
    description:
      'In addition to the previous stage, at this stage, data begins to be recognized as a strategic asset, and the organization starts using tools like dashboards and basic processes to support decision-making. The development of prototypes and the first technological investments mark this level. Some areas begin to standardize processes, and decisions are based on information extracted from data. However, the adoption of these practices still occurs in an isolated manner within the organization, without consolidated formal governance.',
  },
  {
    title: 'Level 3: Defined – Structured and Standardized',
    description:
      'Building on the previous stages, at this stage, data governance becomes an integral part of the organizational strategy, with well-defined and documented processes. The organization establishes clear roles and responsibilities for data management, promoting a structured and integrated approach across different areas. The standardization of processes allows for greater efficiency and reliability in data usage. Additionally, advanced tools for analysis and monitoring begin to be implemented, enhancing the organization capacity for data-driven decision-making.',
  },
  {
    title: 'Level 4: Managed – Measured and Predictable',
    description:
      'In addition to the previous stages, at this level, the organization achieves significant control over its data governance processes, using quantitative metrics and statistical indicators to monitor, manage, and predict outcomes. Decisions become entirely data-driven, eliminating subjectivity and reducing operational risks. Governance is based on key performance indicators (KPIs), ensuring continuous compliance and efficiency. Systems and processes are monitored in real-time to ensure performance is adequate and aligned with business needs.',
  },
  {
    title: 'Level 5: Optimized – Innovation and Continuous Improvement',
    description:
      'Building on the previous stages, at the most advanced level, data governance and data science become strategic assets, driving innovation and promoting a continuous improvement cycle based on learning and predictive analysis. The organization uses highly refined processes, with metrics, indicators, and analyses being constantly enhanced to meet strategic goals. Innovative solutions are integrated across stakeholders and value chains, promoting collaboration and alignment throughout the organizational structure. Furthermore, advanced technologies and automation are widely used to optimize operations and generate a competitive advantage.',
  },
];

const Level = () => {
  return (
    <div className="main-content">
      <header className="main-header">
        <h1>Data Governance Maturity Levels</h1>
        <p>
          This model defines six levels of maturity that help organizations evaluate and improve their data governance practices. Each level represents a stage in the journey from unstructured data practices to fully optimized, innovation-driven data governance.
        </p>
      </header>

      
        <div className="level-container">
          {maturityLevels.map((level, index) => (
            <section className="main-section">
              <div key={index} className="level-box">
                <h2>{level.title}</h2>
                <p>{level.description}</p>
              </div>
            </section>
          ))}
        </div>

      <footer className="main-footer">
        &copy; 2025 DG2M Framework. All rights reserved.
      </footer>
    </div>
  );
};

export default Level;
