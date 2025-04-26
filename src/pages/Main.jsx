import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Data Governance Maturity Framework (DG2M)</h1>
        <p>Guiding Organizations Toward Strategic Data Use</p>
      </header>

      <section className="main-section" id="overview">
        <h2>Overview</h2>
        <p>
          This framework provides a structured, multidimensional approach for evaluating and improving an organization’s data governance capabilities.
          It integrates principles from major models such as MD3M, BDMM, and Stanford’s Maturity Model.
        </p>
      </section>

      <section className="main-section" id="dimensions">
        <h2>Evaluation Methodology</h2>
        <p>
          To operationalize the proposed Data Governance Maturity Framework, a structured and systematic evaluation methodology is necessary for assessing an organization’s current maturity level across the defined dimensions and aspects.
          The methodology proposed herein is both <strong>diagnostic</strong>—aimed at identifying current gaps—and <strong>developmental</strong>—intended to guide strategic improvements over time.
        </p>
        <p>
          The framework comprises six maturity levels, ranging from <strong>Level 0 (Not Initiated)</strong> to <strong>Level 5 (Optimized)</strong>. It evaluates organizational maturity across six core dimensions:
          <em>Data Strategy and Governance</em>, <em>Teams, People and Organizational Structure</em>, <em>Formalization and Data Management Processes</em>, 
          <em>Data Quality</em>, <em>Data Infrastructure</em>, and <em>Open Data</em> (optional).
        </p>
        <p>
          Each dimension is further examined through three analytical aspects—
          <em>People</em>, <em>Policies</em>, and <em>Capabilities</em>—
          which together provide a comprehensive view of data governance maturity. 
          The detailed descriptions of the maturity levels, dimensions, and evaluative aspects will be presented in subsequent sections.
        </p>
      </section>

      <section className="main-section" id="dimensions">
        <h2>Evaluation Approach, Instrument, and Process</h2>
        <p>
          To effectively implement the proposed maturity framework, a structured evaluation methodology was developed.
          The assessment is conducted using a structured evaluation instrument, administered as a survey. This instrument is composed of diagnostic statements,
          each aligned with one of the six maturity levels and distributed across the six core dimensions.
          Each dimension is evaluated through the three aforementioned aspects.
        </p>
        <p>
          Respondents are asked to assess their organization’s current practices by selecting the maturity level that best represents their context.
          Each level is accompanied by a detailed descriptor to support accurate interpretation and reduce subjectivity,
          thereby ensuring a consistent and evidence-based assessment process.
        </p>
        <p>
          The evaluation process involves participation from a cross-functional team including stakeholders from data governance, IT, compliance,
          operations, and relevant business areas. The steps include:
        </p>
        <ol>
          <li><strong>Preparation:</strong> Define the evaluation scope, objectives, and stakeholders.</li>
          <li><strong>Data Collection:</strong> Administer the evaluation instrument and collect responses through surveys, interviews, and/or facilitated workshops.</li>
          <li><strong>Analysis:</strong> Aggregate the collected data and determine the maturity level for each aspect within the corresponding dimensions.</li>
          <li><strong>Validation:</strong> Review preliminary findings with stakeholders for accuracy and alignment.</li>
          <li><strong>Reporting and Action Planning:</strong> Present the results in the form of a comprehensive maturity profile and identify strategic areas for improvement,
            based on the recommended advancement pathways for each maturity level and relevant best practice references.</li>
        </ol>
      </section>


      <section className="main-section" id="contact">
        <h2>Resources</h2>
        <p>Access to the full framework documents, visit our Zenodo repository.</p>
        <a href="https://doi.org/10.5281/zenodo.14625265" target="_blank" rel="noopener noreferrer">
          Access Repository
        </a>  
      </section>

      <footer className="main-footer">
        &copy; 2025 DG2M Framework. All rights reserved.
      </footer>
    </div>
  );
};

export default Main;
