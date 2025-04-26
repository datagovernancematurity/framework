import React, { useState, useEffect } from 'react';
import './Main.css';

const dimensions = [
  {
    id: 'teams',
    title: 'Teams, People and Organizational Structure',
    description: 'This dimension assesses the role of individuals and teams in data management, curation, and analysis, emphasizing collaboration, accountability, and competency development. This evaluation spans from initial awareness of the strategic importance of data to the consolidation of an organizational culture oriented towards data-driven innovation. Include interdisciplinary assessment, workforce competencies, role clarity, collaboration culture, trust, sponsorship, training, and open data awareness. Reflect accountability structures and communication practices.',
    people: "Assesses individuals' knowledge, engagement, and accountability in data management and analysis.",
    policies: 'Refers to guidelines that define roles, promote curation, and ensure consistent data analysis.',
    capabilities: 'Involves tools, technologies, and techniques available to support data curation and analysis.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content: `At this level, the organization does not recognize the strategic importance of data. 
There are no formal practices, roles, or tools in place to support data curation or analysis.`,
        people: 'No teams or individuals are formally responsible for data quality and usage. There is a lack of awareness regarding the strategic value of data. Interdisciplinary perspectives and workforce competencies are not considered.',
        policies: 'Complete absence of guidelines for data curation or analysis. No structures to ensure accountability or define roles.',
        capabilities: 'No infrastructure or tools to support basic curation and analysis processes. No communication or collaboration practices are in place.',
        improvement: 'Promote awareness campaigns on the importance of data curation and analysis for the organization; conduct basic training on data governance and quality for employees; identify potential roles and responsibilities for data management.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content: `In this stage, the organization begins to show interest in data governance through isolated and unstructured efforts, often driven by individual initiatives rather than organizational strategy.`,
        people: 'Informal roles begin to emerge, but without organizational clarity. Interest in data grows, but teams lack technical skills and formal training. Workforce competencies and interdisciplinary collaboration are not systematically encouraged.',
        policies: 'Rudimentary guidelines emerge, with unclear accountability structures and role definitions.',
        capabilities: 'Basic tools are used in isolation. Communication remains informal and unsystematic.',
        improvement: 'Create an initial group responsible for implementing data curation practices; develop basic policies with attention to role clarity and sponsorship; begin cultivating a culture of collaboration and trust through training; encourage open communication about data efforts.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content: `In addition to the improvements from previous levels, the following aspects are considered: data practices begin to be more consistent and structured, with defined roles, initial training, and the adoption of foundational tools.`,
        people: 'Technical teams receive initial training. Roles are more defined. Workforce competencies and interdisciplinary engagement begin to be acknowledged.',
        policies: 'Guidelines include early definitions of roles and responsibilities. Some accountability mechanisms are established.',
        capabilities: 'Structured tools are introduced. Initial communication channels begin forming to support collaboration.',
        improvement: 'Develop a structured training program; include interdisciplinary assessment in team formation and evaluation; build trust and sponsorship from leadership; promote data awareness, data curation and cross-team communication.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: `In addition to the improvements from previous levels, the following aspects are considered: data governance and collaboration practices become standardized across the organization, supported by clear roles, trust, and formal training.`,
        people: 'Multidisciplinary teams actively collaborate. Formal accountability structures and role clarity are institutionalized. Ongoing training enhances workforce competencies.',
        policies: 'Policies standardize collaborative practices and data governance. Sponsorship and trust are visibly supported by leadership.',
        capabilities: 'Communication tools and structured practices support a collaborative environment and foster a culture of data-driven decision-making across teams.',
        improvement: 'Expand sponsorship networks to sustain collaboration culture; encourage deeper interdisciplinary initiatives; formalize communication protocols around data quality and metadata management; integrate data management awareness into onboarding and training.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content: `In addition to the improvements from previous levels, the following aspects are considered: data practices are evaluated using defined performance indicators, ensuring consistency, predictability, and alignment with organizational goals.`,
        people: 'Teams monitor their own progress using performance metrics. Role clarity, trust, and collaboration are continuously evaluated and refined.',
        policies: 'Accountability structures are reviewed and improved based on data. Policies support interdisciplinary collaboration and workforce development.',
        capabilities: 'Communication practices are fully integrated and aligned with governance metrics. Sponsorship fosters long-term engagement.',
        improvement: 'Measure trust and collaboration effectiveness through feedback loops; align training with evolving workforce competency needs; regularly review data management practices; enhance cross-functional communication dashboards.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: `In addition to the improvements from previous levels, the following aspects are considered: the organization treats data as a strategic asset, fostering innovation, continuous learning, and cultural transformation through advanced governance and communication practices.`,
        people: 'Teams proactively drive innovation through diverse, interdisciplinary approaches. Workforce competencies evolve through continuous learning. A culture of trust, open communication, and data-driven decision-making is deeply embedded.',
        policies: 'Dynamic, adaptive policies sustain accountability, sponsorship, and rapid response to change.',
        capabilities: 'Advanced communication systems and training platforms foster data management innovation and team synergy.',
        improvement: 'Launch innovation labs to explore and enhance data practices; partner with external organizations to further data practices implementations; continuously update competency frameworks and accountability protocols.',
      },
    ],
  },
  {
    id: 'dataStrategy',
    title: 'Data Strategy and Governance',
    description:
      'This dimension assesses how organizations align their strategic objectives with structured data governance practices. This alignment is essential to ensure data security, privacy, quality, and ethical use, as well as to establish frameworks and guidelines that enable efficient and sustainable governance. Additionally, this dimension considers the development of methodologies for project implementation, the integration between IT and business teams, and the adoption of metrics that support data-driven decision-making. To reflect comprehensive governance maturity, it also incorporates indicators such as budget allocation, executive sponsorship, strategic vision, data plan- ning, policy alignment, and integration into decision-making. Furthermore, it includes the definition of stewardship roles, active governance participation, risk and compliance management, and privacy considerations.',
    people:
      'Assesses team engagement, competencies, and roles in defining and applying data governance strategies and practices, including data stewardship and executive sponsorship.',
    policies:
      'Refers to guidelines and frameworks that ensure data security, compliance, privacy, and ethical use, while promoting strategic alignment and risk management.',
    capabilities:
      'Encompasses tools and technologies that support data governance, data planning, policy enforcement, and their integration into organizational decision-making processes.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content:
          'The organization has no policies, ethical reflections, or structured practices for data governance. Data strategy is not considered within the organization’s objectives. There is no budget, planning, or strategic alignment for data.',
        people:
          'No teams are responsible for or engaged in data governance. There is a lack of awareness about the ethical risks associated with improper data use and no stewardship roles are defined.',
        policies:
          'No guidelines exist for governance, ethics, privacy, risk management, or data quality. No policy alignment or strategic vision is present.',
        capabilities:
          'There is no infrastructure or tools to support basic data governance processes. No participation in governance structures or decision-making integration.',
        improvement:
          'Raise awareness among teams about the importance of data governance through basic training; conduct an initial assessment of existing data sources and formats to identify gaps; initiate discussions on executive sponsorship and budget needs for data governance.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content:
          'The organization begins its first efforts to create data governance policies and processes, but in a reactive and unstructured manner. Executive support is still limited, and budget planning is not aligned with data initiatives.',
        people:
          'Roles are defined in some areas but lack clarity, strategic alignment, or dedicated stewardship functions.',
        policies:
          'Some rudimentary guidelines emerge, but they do not address privacy, risk compliance, or governance participation comprehensively.',
        capabilities:
          'Basic tools are used in isolation, and there is minimal integration into organizational processes or decision-making structures.',
        improvement:
          'Establish an initial team to manage data governance guidelines and stewardship roles; develop an initial governance plan based on recognized frameworks; begin aligning governance efforts with organizational strategy, policy, and planning.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content:
          'In addition to actions from previous levels, data governance begins to consolidate. Strategic planning and data management initiatives start to be recognized in organizational routines.',
        people:
          'Teams receive initial training to apply governance processes. Roles such as data stewards start to emerge with defined responsibilities.',
        policies:
          'Basic policies related to data quality, privacy, risk compliance, and ethical use become standardized.',
        capabilities:
          'Tools for access control, data monitoring, and policy enforcement are introduced. Early participation in governance decisions takes shape.',
        improvement:
          'Formalize data security, privacy, and risk management policies; integrate data governance into broader organizational planning; allocate initial budget and define clear sponsorship roles.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content:
          'In addition to actions from previous levels, governance practices are standardized and aligned with organizational objectives. Strategic vision and policy alignment guide data initiatives. Budget and executive sponsorship are established.',
        people:
          'Multidisciplinary teams collaborate to implement and monitor data governance. Stewardship roles are integrated into governance structures.',
        policies:
          'Policies ensure compliance with internal and external standards, covering privacy, ethics, risk, and strategic alignment.',
        capabilities:
          'Tools support continuous monitoring and governance enforcement. Data governance is integrated into decision-making processes.',
        improvement:
          'Expand use of performance and compliance metrics to evaluate governance efficiency; improve governance participation from different business areas; establish governance councils to promote cross-functional alignment.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content:
          'In addition to actions from previous levels, governance maturity is managed through clear KPIs, resource allocation, and risk compliance. Strategic data planning is deeply embedded into operations.',
        people:
          'Governance teams actively monitor metrics through dashboards. Stewardship functions are reviewed and adapted to business needs.',
        policies:
          'Policies are regularly updated based on performance data and privacy and ethics regulations.',
        capabilities:
          'Governance tools enable predictive analysis and continuous improvement in compliance and data planning.',
        improvement:
          'Refine KPIs related to data governance, privacy, and compliance; automate governance processes where possible; strengthen budget planning aligned with data strategy objectives.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content:
          'In addition to actions from previous levels, governance and data strategy evolve continuously, adapting to new regulations, technologies, and business goals. There is strong executive backing and resource commitment.',
        people:
          'Teams lead innovative data governance projects. Governance participation is embedded across the organization.',
        policies:
          'Policies are dynamic, promoting agile compliance with privacy laws and strategic goals.',
        capabilities:
          'Advanced analytics support automation, predictive governance, and strategic decision-making.',
        improvement:
          'Create innovation labs focused on governance models and technologies; benchmark with global leaders in privacy and data strategy; ensure executive sponsorship and budget are maintained for continuous governance innovation.',
      },
    ],
  },
  {
    id: 'dataManagement',
    title: 'Formalization and Data Management Processes',
    description:
      'This dimension evaluates practices related to metadata management, master data, data architecture, data models, and data protection. Its objective is to assess the level of organizational maturity in data usage and governance, pro- moting operational efficiency, strategic alignment, and regulatory compliance. Additionally, this dimension includes iterative development approaches, meta- data practices, lifecycle control, DevOps integration, documentation standards, licensing, and risk identification. It also emphasizes the alignment of internal processes with external and internal policies, as well as the implementation of process monitoring and performance tracking mechanisms.',
    people:
      'Assesses team knowledge and accountability in applying data management practices, including documentation and lifecycle control responsibilities.',
    policies:
      'Refers to the existence of clear guidelines and standards for data governance, protection, integration, DevOps practices, and licensing.',
    capabilities:
      'Involves tools, technologies, and processes that support data management, integration, iterative development, risk identification, and performance monitoring.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content:
          'At this level, there are no formal data management practices or defined policies. The organization lacks awareness and infrastructure to support metadata, master data, or lifecycle control.',
        people:
          'The team lacks knowledge of basic concepts such as metadata, master data, and data protection.',
        policies:
          'No specific policies exist for categorizing, protecting, or integrating data.',
        capabilities:
          'There are no tools or infrastructure to manage master data or metadata.',
        improvement:
          'Provide basic training to raise team awareness about the importance of data management; conduct an initial survey of existing data sources and formats, identifying inconsistencies and gaps.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content:
          'In this stage, initial efforts related to data management emerge in a fragmented and reactive manner, without alignment to internal or external policies.',
        people:
          'Roles start to be defined in isolated areas, but without clarity or strategic alignment.',
        policies:
          'Basic policies are developed, but lack standardization, risk considerations, or lifecycle focus.',
        capabilities:
          'Basic tools are used to address specific metadata and master data demands.',
        improvement:
          'Create an initial data management team with support from executive management; document existing processes and identify gaps for policy formalization; engage in benchmarking with data governance leaders of other companies to discover effective practices.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content:
          'In addition to the improvements from previous levels, emerging practices are introduced for metadata and master data, along with early steps toward lifecycle control and documentation standards.',
        people:
          'Teams recognize the importance of standardized practices for organizational efficiency.',
        policies:
          'Basic policies for master data management and data protection begin to be formalized.',
        capabilities:
          'A central repository for metadata and master data is created. Documentation practices begin to emerge.',
        improvement:
          'Implement a centralized metadata repository accessible to all areas of the organization; develop organizational policies for data governance and protection aligned with best practices; introduce initial documentation standards and define data lifecycle stages.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content:
          'In addition to the improvements from previous levels, data management practices become structured and standardized, with policies for metadata, lifecycle control, DevOps integration, and risk identification.',
        people:
          'Stakeholders understand the importance of clear standards for metadata, master data, and integrated architecture.',
        policies:
          'Data quality, privacy, and security policies are formalized and widely adopted. Risk and licensing considerations are included.',
        capabilities:
          'Centralized systems support integration and monitoring of metadata, master data, and DevOps pipelines.',
        improvement:
          'Expand the use of tools for metadata and lifecycle management; create a central inventory of data sources and related systems; ensure documentation standards are consistently applied across teams.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content:
          'In addition to the improvements from previous levels, data management processes are governed by well-defined performance metrics and monitored continuously for compliance with internal and external policies.',
        people:
          'Teams actively monitor KPIs and metrics related to data quality, usage, and compliance.',
        policies:
          'Homogeneous policies are reviewed and updated regularly. Alignment with internal and external regulations is ensured.',
        capabilities:
          'Advanced tools enable predictive analysis, monitoring, and integration of risk assessment processes.',
        improvement:
          'Periodically review KPIs to optimize data management and integration; automate documentation and auditing processes; strengthen lifecycle control and performance monitoring mechanisms.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content:
          'In addition to the improvements from previous levels, data management is treated as a strategic function, continuously improved through innovative technologies and full DevOps integration.',
        people:
          'Teams lead innovation initiatives in data modeling and integration with emerging technologies.',
        policies:
          'Policies are dynamic and continuously adapted to support agile development, new regulations, and iterative processes.',
        capabilities:
          'Scalable systems support real-time integration, performance tracking, and risk mitigation through state-of-the-art automation-driven technologies.',
        improvement:
          'Benchmark with industry leaders to refine lifecycle and risk practices; invest in technologies to enhance governance automation and analytics; optimize DevOps workflows by integrating metadata management and performance monitoring throughout the development lifecycle.',
      },
    ],
  },
  {
    id: 'dataQuality',
    title: 'Data Quality',
    description:
      'This dimension assesses the organizational capability to ensure high data quality through well-defined criteria and standardized practices. Its scope encompasses the evaluation, continuous improvement, awareness, and monitoring of data quality, considering the following aspects: availability, accessibility, data reliability, data profiling, privacy and security policies, feed- back mechanisms, and integration with data platform tools. It also considers alignment with governance structures, quality expectations, and improvement practices.',
    people:
      'Awareness and training regarding data quality criteria, expectations, and the impact of data quality on decision-making.',
    policies:
      'Guidelines and standards to maintain data quality, including privacy, security, and governance alignment.',
    capabilities:
      'Tools and processes to monitor, profile, evaluate, and improve data quality, including data platform tools and feedback mechanisms.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content:
          'At this level, there are no formal initiatives to evaluate or manage data quality. The organization lacks awareness, practices, and tools for handling basic quality dimensions such as availability and reliability.',
        people: 'There is no awareness of the importance of data quality.',
        policies: 'No quality guidelines or standards exist.',
        capabilities: 'No tools or systems are in place to monitor or ensure data quality.',
        improvement:
          'Promote awareness of the impact of poor data quality; identify critical areas where data quality issues affect business performance.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content:
          'At this stage, the organization acknowledges data quality issues but addresses them reactively and without structured processes. Early efforts are disconnected from governance or privacy/security standards.',
        people: 'Technical teams identify problems but do not understand their root causes.',
        policies: 'Rudimentary guidelines may exist but are not applied consistently.',
        capabilities: 'Quality is evaluated only reactively, without consistent metrics or processes.',
        improvement:
          'Map data sources and identify possible causes of quality issues; introduce basic quality guidelines and criteria for evaluating data, such as consistency and completeness; introduce training programs to raise technical awareness of data quality; engage in benchmarking with data governance leaders of other companies to discover effective practices.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content:
          'In addition to the improvements from previous levels, the organization begins to measure and monitor specific aspects of data quality such as profiling, availability, and accessibility. Data platform tools and initial feedback mechanisms may be introduced.',
        people:
          'Technical and business teams recognize the importance of data quality for organizational efficiency and effectiveness.',
        policies:
          'Initial criteria such as completeness and accuracy are established for evaluation.',
        capabilities:
          'Basic tools for data profiling and validation are implemented, and the impact of poor-quality data on specific business areas begins to be assessed.',
        improvement:
          'Develop clear and measurable metrics for assessing data quality; implement data profiling tools to identify issues; expand quality criteria to include business impact, reliability, and accessibility; establish formal processes for regular data cleansing and validation.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content:
          'In addition to the improvements from previous levels, data quality becomes a managed and systematic process with organizational guidelines aligned with governance, privacy, and security policies.',
        people:
          'Stakeholders understand the financial and reputational impacts of poor data quality.',
        policies:
          'Clear organizational guidelines and standards are defined and aligned with privacy/security policies and governance frameworks.',
        capabilities:
          'Benchmarking systems and continuous monitoring are introduced. Feedback mechanisms are integrated to support quality improvement.',
        improvement:
          'Formalize data quality assessment and continuous improvement processes; expand the use of tools to monitor data quality in real time; ensure that standards are widely communicated and enforced; use feedback mechanisms to inform quality adjustments.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content:
          'In addition to the improvements from previous levels, the organization monitors data quality with established metrics and tools, ensuring predictable processes and alignment with internal and external governance.',
        people:
          'Teams understand the root causes of quality issues and how to resolve them using performance data.',
        policies:
          'Organizational policies are based on quantitative indicators and periodically reviewed for alignment.',
        capabilities:
          'Predictive tools, performance dashboards, and automated profiling systems support proactive quality management.',
        improvement:
          'Conduct regular audits to evaluate and adjust quality metrics; implement predictive systems to anticipate and address quality issues; monitor quality expectations and feedback trends systematically.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content:
          'In addition to the improvements from previous levels, the organization promotes continuous innovation in data quality using advanced technologies and aligns quality practices with strategic goals.',
        people:
          'Trained teams promote continuous improvement and innovation in data quality across domains.',
        policies:
          'Dynamic and adaptive guidelines evolve with organizational and technological changes.',
        capabilities:
          'State-of-the-art data technologies enhance data profiling, reliability, and real-time quality monitoring. Data platform tools and feedback mechanisms are fully integrated to support continuous improvement.',
        improvement:
          'Invest in emerging technologies to support data quality initiatives; develop partnerships for benchmarking best practices in data quality; create advanced training programs for teams on quality practices; continuously evaluate governance alignment and strategic relevance of quality metrics.',
      },
    ],
  },
  {
    id: 'dataInfrastructure',
    title: 'Data Infrastructure',
    description:
      'This dimension evaluates the organization’s technological capability to efficiently store, process, and integrate data. This assessment covers aspects related to the scalability, security, and compliance of the IT infrastructure used for data management. Additionally, it includes the evaluation of infrastructure readiness, agility, scalability, architectural consistency, use of cloud platforms (when necessary), adoption of metadata standards, and logging/reporting mechanisms. Considera- tions for privacy, security, risk management, and integration capabilities are also essential to ensure robustness and regulatory alignment.',
    people:
      'Technical capacity of teams to manage and evolve infrastructure in line with modern data architecture requirements.',
    policies:
      'Existence of guidelines that ensure infrastructure scalability, privacy, security, integration, and compliance with internal and external standards.',
    capabilities:
      'Availability, readiness, and suitability of IT technologies and platforms—including logging, and metadata management—to support secure, scalable, and integrated data operations.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content:
          'At this level, the infrastructure is fragmented, outdated, and unable to handle large data volumes. There is no readiness, integration, or architectural consistency to support scalable data operations.',
        people:
          'Lack of knowledge about data tools, platforms, and architectural best practices.',
        policies:
          'No formal policies for IT governance, integration, or infrastructure readiness.',
        capabilities:
          'Fragmented infrastructure with multiple isolated data sources, no logging/reporting mechanisms, and outdated technologies.',
        improvement:
          'Promote workshops to raise technical awareness of data governance and infrastructure readiness; map existing technological resources and identify critical gaps in scalability and integration.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content:
          'In this stage, the organization begins experimenting with basic infrastructure components in a reactive and exploratory manner, with no architectural consistency.',
        people:
          'Some technical teams experiment with storage, analytics, and cloud services.',
        policies:
          'Rudimentary guidelines exist for tool usage, but without standardization or risk/security coverage.',
        capabilities:
          'Isolated and localized solutions are implemented with limited integration or scalability.',
        improvement:
          'Establish an initial committee to define tool usage guidelines; document practices related to infrastructure and log monitoring; explore initial metadata management and security controls.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content:
          'In addition to the improvements from previous levels, the infrastructure begins to mature. Data platforms, metadata standards, and risk controls are introduced to support broader integration.',
        people:
          'Teams receive training on data platforms.',
        policies:
          'Basic policies for data integration, privacy, and risk management are adopted.',
        capabilities:
          'Centrally managed analytics tools and metadata solutions are introduced; logging/reporting is initiated.',
        improvement:
          'Invest in data platforms and integrated infrastructure for analytics; define standards for architectural consistency and logging/reporting; strengthen risk and security practices.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content:
          'In addition to the improvements from previous levels, infrastructure becomes standardized and aligned with enterprise architecture, privacy requirements, and performance standards.',
        people:
          'Teams proactively collaborate on performance monitoring and architectural alignment.',
        policies:
          'Well-defined guidelines ensure data privacy, infrastructure scalability, disaster recovery, and security.',
        capabilities:
          'Use of data platforms, centralized logging/reporting, and metadata management support enterprise-wide consistency.',
        improvement:
          'Implement KPIs for monitoring infrastructure agility, availability, and performance; conduct regular audits on compliance, privacy, and risk controls; align infrastructure with business continuity strategies.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content:
          'In addition to the improvements from previous levels, infrastructure is monitored using predictive metrics. Agility, risk management, and integration capabilities are continuously evaluated.',
        people:
          'Teams use dashboards to track performance, logging, and risk indicators in real or near-real time.',
        policies:
          'Governance policies are updated based on performance metrics and compliance reviews.',
        capabilities:
          'A data infrastructure supports scalable and secure data operations; automated monitoring is in place.',
        improvement:
          'Optimize predictive monitoring and alerting systems; refine integration strategies for third-party platforms and services, when needed; automate security, compliance, and risk mitigation workflows.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content:
          'In addition to the improvements from previous levels, infrastructure is treated as a dynamic, strategic enabler of innovation. It integrates seamlessly with supports autonomous scaling and compliance.',
        people:
          'Teams continuously research, adopt, and refine emerging infrastructure technologies and practices.',
        policies:
          'Adaptive policies govern infrastructure updates, privacy, security, and real-time integration.',
        capabilities:
          'Advanced edge computing solutions optimize agility, scalability, and performance; metadata and logging systems are fully automated, when needed.',
        improvement:
          'Benchmark against leading practices in infrastructure agility, security, and integration; invest in infrastructure orchestration tools powered by edge technologies to enhance scalability and responsiveness; foster continuous learning for infrastructure and DevOps teams.',
      },
    ],
  },
  {
    id: 'openData',
    title: 'Open Data',
    description:
      'This dimension is not mandatory and is particularly relevant for public sector organizations or companies committed to transparency. It assesses the organiza- tion’s maturity in managing, publishing, and strategically using open data. The evaluation considers essential aspects to ensure data transparency, reusabil- ity, accessibility, and interoperability—fostering innovation and generating pos- itive social impact. It expands to include all three key focus areas: policy, or- ganizational, and technical standards. Additionally, it considers planning, prior- itization, licensing, versioning, and transparency mechanisms in the open data lifecycle.',
    people:
      'Organizational training and engagement in open data practices and initiatives.',
    policies:
      'Rules and guidelines to standardize, manage, license, and make data available transparently and responsibly.',
    capabilities:
      'Infrastructure and tools that support governance, planning, version control, and effective publication of open data.',
    levels: [
      {
        title: 'Level 0: Not Initiated',
        content:
          'At this level, there are no formal practices or policies related to open data. The organization lacks planning, prioritization, and understanding of the value of transparency or data reuse.',
        people:
          'No defined roles, responsibilities, or training related to open data.',
        policies:
          'No documented policies, standards, or licensing mechanisms for open data governance.',
        capabilities:
          'Infrastructure is either nonexistent or insufficient for data publication, monitoring, or transparency.',
        improvement:
          'Conduct initial training sessions on the value and purpose of open data; begin identifying and organizing data suitable for publication and transparency.',
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or In Learning',
        content:
          'Initial open data initiatives emerge in an unstructured and limited manner, often disconnected from broader organizational or policy frameworks.',
        people:
          'Some roles begin to be defined in isolated areas. Initial awareness activities are carried out, but not institutionalized.',
        policies:
          'Basic licenses and guidelines are informally adopted but lack consistency and transparency.',
        capabilities:
          'Data is published sporadically, with limited tools for versioning, feedback, or access monitoring.',
        improvement:
          'Structure and document existing initiatives and processes; prioritize datasets for publication based on impact and reuse potential; establish minimal versioning and licensing guidelines.',
      },
      {
        title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
        content:
          'In addition to the improvements from previous levels, open data practices begin to consolidate with better-defined organizational responsibilities and emerging standards for planning and publishing.',
        people:
          'Roles and responsibilities for open data are established in relevant departments. Initial training programs are implemented.',
        policies:
          'Standardized metadata, licensing, and publishing policies are introduced.',
        capabilities:
          'Tools are adopted to support data publication, feedback collection, and transparency monitoring.',
        improvement:
          'Expand training programs to include planning and prioritization methodologies; adopt tools that support publishing workflows, versioning, and licensing automation; begin aligning practices with recognized open data standards.',
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content:
          'In addition to the improvements from previous levels, open data publication is supported by standardized, organization-wide processes and clear alignment with strategic objectives.',
        people:
          'Teams are trained and consistently engaged in open data initiatives across departments.',
        policies:
          'Policies are comprehensive and incorporate national or international open data standards. Planning and versioning are part of the lifecycle.',
        capabilities:
          'Infrastructure enables continuous publishing, tracking, versioning, and integration with external systems. Transparency is a core objective.',
        improvement:
          'Define KPIs to measure impact, transparency, and data reuse; conduct regular policy reviews to ensure licensing and standards compliance; promote internal collaboration and planning for future datasets.',
      },
      {
        title: 'Level 4: Managed – Measured and Predictable',
        content:
          'In addition to the improvements from previous levels, open data processes are continuously monitored and refined through metrics. Strategic planning and cross-departmental coordination are embedded.',
        people:
          'Staff actively contribute to feedback loops and use dashboards to monitor open data performance.',
        policies:
          'Policies are regularly updated based on performance, feedback, and evolving standards.',
        capabilities:
          'Automated infrastructure supports real-time publishing, version control, and transparency reporting.',
        improvement:
          'Expand predictive analysis to anticipate data demand; improve collaboration mechanisms to prioritize datasets strategically; strengthen governance alignment through feedback-driven policy updates.',
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content:
          'In addition to the improvements from previous levels, open data is used as a strategic asset to drive innovation, public engagement, and systemic transparency.',
        people:
          'Teams promote a culture of openness and data-driven innovation across internal and external networks.',
        policies:
          'Policies are dynamic, open-by-default, and regularly benchmarked against global standards.',
        capabilities:
          'Infrastructure supports adaptive publishing strategies, real-time data integration, and open APIs with clear licensing and transparency guarantees.',
        improvement:
          'Foster partnerships to innovate with open data; invest in advanced tooling for automation, impact analysis, and open engagement; continuously evolve governance based on societal and organizational feedback.',
      },
    ],
  },        
];

const DimensionsAndLevels = () => {
  const [activeDimension, setActiveDimension] = useState('teams');
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    setActiveLevel(0);
  }, [activeDimension]);

  return (
    <div>
      <header className="main-header">
        <h1>Framework Dimensions</h1>
        <p>To assess maturity levels, six dimensions were developed: Data Strategy and Governance, Teams, People and Organizational Structure, Formalization and Data Management Processes, Data Quality, Data Infrastructure, and Open Data. The last dimension is specifically applicable to organizations that manage and publish open data.</p>
      </header>

      <div className="dimensions-wrapper">
        <nav className="sidebar">
          <h3>Choose a Dimension</h3>
          <ul>
            {dimensions.map((dim) => (
              <li
                key={dim.id}
                className={dim.id === activeDimension ? 'active' : ''}
                onClick={() => setActiveDimension(dim.id)}
              >
                {dim.title}
              </li>
            ))}
          </ul>
        </nav>

        <main className="dimension-content">
          {dimensions
            .filter((dim) => dim.id === activeDimension)
            .map((dim) => (
              <section key={dim.id}>
                <h3>{dim.title}</h3>
                <p>{dim.description}</p>
                <br></br>
                <p>The main aspects evaluated include:</p>
                <ul>
                  <li><strong>People:</strong> {dim.people}</li>
                  <li><strong>Policies:</strong> {dim.policies}</li>
                  <li><strong>Capabilities:</strong> {dim.capabilities}</li>
                </ul>
                <br></br>
                <div className="level-selector">
                  {dim.levels.map((level, index) => (
                    <button
                      key={index}
                      className={index === activeLevel ? 'selected' : ''}
                      onClick={() => setActiveLevel(index)}
                    >
                      {`Level ${index}`}
                    </button>
                  ))}
                </div>

                <div className="level-detail">
                  <h4>{dim.levels[activeLevel].title}</h4>
                  <p>{dim.levels[activeLevel].content}</p>

                  <p><strong>Aspects evaluated:</strong></p>
                  <ul>
                    <li><strong>People:</strong> {dim.levels[activeLevel].people}</li>
                    <li><strong>Policies:</strong> {dim.levels[activeLevel].policies}</li>
                    <li><strong>Capabilities:</strong> {dim.levels[activeLevel].capabilities}</li>
                  </ul>
                </div>

                <div className="level-detail">
                  <p><strong>Possible improvements:</strong></p>
                  <p>{dim.levels[activeLevel].improvement}</p>
                </div>

              </section>
            ))}
        </main>
      </div>

      <footer className="main-footer">
        &copy; 2025 DG2M Framework. All rights reserved.
      </footer>
    </div>
  );
};

export default DimensionsAndLevels;
