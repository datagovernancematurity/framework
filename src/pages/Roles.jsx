import React from 'react';
import './Main.css';

const Roles = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Key Roles in DG2M</h1>
        <p>Understanding Responsibilities Across the Maturity Framework</p>
      </header>

      <section className="main-section">
        <h2>Overview</h2>
        <p>
          Effective data governance requires clear roles and responsibilities.
          Each role contributes uniquely to the success of governance initiatives,
          ensuring data is managed as a valuable asset.
        </p>
      </section>

      <section className="main-section">
        <h2>Strategic Level</h2>
        <p>
          Effective data governance requires the definition and coordination of key roles across an organization.
          At the strategic level, the <strong>Chief Data Officer (CDO)</strong> is responsible for aligning data initiatives with business objectives and overseeing governance implementation.
        </p>
        <p>
          This role collaborates with executive sponsors and data quality boards to ensure data assets support organizational goals. 
          <strong>Data Committees</strong>—such as Steering Committees and Quality Boards—oversee data quality, policy enforcement, and strategic decisions.
        </p>
        <p>
          <strong>Privacy and Compliance Specialists</strong> (e.g., Data Protection Officers) ensure adherence to data protection laws and internal security protocols, 
          guaranteeing legal and ethical data use.
        </p>
      </section>

      <section className="main-section">
        <h2>Operational Level</h2>
        <p>
          <strong>Data Stewards</strong> manage data quality, definitions, and lifecycle within business domains—ensuring consistency and reliability.
        </p>
        <p>
          <strong>Data Team Managers</strong> coordinate data project teams, managing resources, timelines, and deliverables.
        </p>
        <p>
          <strong>Data Consumers</strong> use data products for analysis, decision-making, and operations. Their feedback often informs governance priorities and system improvements.
        </p>
      </section>

      <section className="main-section">
        <h2>Technical Level</h2>
        <p>
          <strong>Data Analysts and Data Scientists</strong> analyze, interpret, and model data to generate valuable findings that directly inform and enhance business strategies. These professionals typically operate within analytics teams under the guidance of data science leads or strategic management.
        </p>
        <p>
          <strong>IT and Database Specialists</strong> ensure the performance, availability, and security of data infrastructure. 
          They also provide critical support for Data Stewards and other governance functions.
        </p>
      </section>

      <section className="main-section">
        <h2>Role Integration Across Maturity Levels</h2>
        <p>
          As the organization matures, these roles become increasingly defined, integrated, and empowered—contributing to a more agile, ethical, and value-driven data culture.
        </p>
      </section>

      <footer className="main-footer">
        &copy; 2025 DG2M Framework. All rights reserved.
      </footer>
    </div>
  );
};

export default Roles;