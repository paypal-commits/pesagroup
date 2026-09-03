export interface CaseStudy {
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  overview: string;
  challenges: string[];
  approach: string;
  solutions: string[];
  benefits: string[];
  industries: string[];
  caseStudy: CaseStudy;
}

export const servicesDetailList: ServiceDetail[] = [
  {
    id: "strategy-consulting",
    title: "Strategy Consulting",
    tagline: "Navigating complexity, unlocking value, and mapping high-impact corporate trajectories.",
    iconName: "Compass",
    overview: "At PESA Consulting Group, our Strategy Consulting practice collaborates with executive leaders to define their ultimate vision, navigate disruptive market forces, and align investments with long-term, sustainable performance. We bring deep analytical rigor, bespoke financial models, and actionable roadmaps to unlock enterprise value.",
    challenges: [
      "Stagnating growth or declining margins due to commoditisation",
      "Ineffective capital allocation and weak financial projection frameworks",
      "Inability to enter high-barrier international markets or structure joint ventures",
      "Disconnection between high-level executive vision and operational execution"
    ],
    approach: "We utilize our signature PESA System methodology—anchoring on Purpose first to align goals, structuring strategic models, mapping out programmatic Expansion, and managing resource Assembly to execute safely and successfully.",
    solutions: [
      "Bespoke Corporate Financial Modeling & Capital Structuring",
      "Global Market Entry Strategies & Joint Venture Advisory",
      "EB-5 Program Capital Advisory & Immigrant Investment Structuring",
      "Waste-to-Energy & Industrial Upcycling: Strategic advisory on the commercial transformation of waste into electricity, high-performance fabric pavement, building bricks, oil & gas resources, and eco-friendly roofing systems",
      "Mergers & Acquisitions (M&A) Integration & Due Diligence",
      "Corporate Governance Frameworks & Succession Planning"
    ],
    benefits: [
      "Unified executive alignment behind a clear, actionable strategic plan",
      "Optimised capital allocation yielding higher returns on investment",
      "Successful navigation of complex international regulatory pathways",
      "Enhanced enterprise resilience against macroeconomic volatility"
    ],
    industries: ["Energy & Mining", "Luxury Real Estate", "Aviation", "Private Equity", "Government Agencies"],
    caseStudy: {
      title: "Structuring $150M in Cross-Border Infrastructure Capital",
      clientType: "Multi-National Industrial Consortium",
      challenge: "The client needed to raise capital and structure operations for a major clean energy project, but struggled with cross-border regulatory approvals and investor compliance.",
      solution: "PESA designed a custom capital allocation framework and secured strategic institutional alignments under strict governance standards.",
      result: "Successfully unlocked capital flow within 9 months, ensuring complete compliance and standardizing operational processes."
    }
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    tagline: "Architecting resilient, scalable technology ecosystems aligned with business growth.",
    iconName: "Cpu",
    overview: "We help organizations transform technology from a cost center into a powerful engine of growth. Our Technology Consulting practice provides objective, expert guidance on IT architecture, systems modernization, software selection, and tech-stack optimization to ensure your digital infrastructure supports your business objectives.",
    challenges: [
      "Legacy software systems slowing down operational efficiency",
      "Disparate, siloed data platforms unable to communicate",
      "High maintenance costs for outdated hardware and custom applications",
      "Technology initiatives failing to align with strategic corporate objectives"
    ],
    approach: "We perform a thorough audit of your current tech stack, map system gaps, design a future-state scalable architecture, and oversee the implementation process using Agile and DevSecOps best practices.",
    solutions: [
      "Enterprise IT Strategy & Enterprise Architecture Design",
      "Legacy Systems Modernization & Cloud Migration",
      "ERP & CRM Selection, Implementation, and Optimization",
      "IT Infrastructure Assessment & Total Cost of Ownership (TCO) Reduction",
      "Emerging Tech Advisory (AI, Automation, IoT)"
    ],
    benefits: [
      "Reduced IT operational costs by up to 30% through systems consolidation",
      "Increased organizational agility with secure, cloud-enabled infrastructure",
      "Elimination of technical debt to support rapid business scaling",
      "Empowered workforces utilizing modern, frictionless digital tools"
    ],
    industries: ["Financial Services", "Healthcare", "Logistics", "Retail", "Manufacturing"],
    caseStudy: {
      title: "Modernizing Core Operations for a Logistics Giant",
      clientType: "Global Supply Chain Provider",
      challenge: "Outdated, fragmented transport management systems led to delivery delays, high maintenance fees, and poor customer transparency.",
      solution: "PESA overhauled the enterprise architecture, consolidating five legacy systems into a unified cloud-native platform.",
      result: "Reduced platform upkeep costs by 35% and improved route-dispatch efficiency by 22%."
    }
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    tagline: "Reimagining customer experiences, business models, and operations for the digital age.",
    iconName: "RefreshCw",
    overview: "Digital Transformation is not simply about adopting new technology; it is about reshaping how your organization delivers value. PESA works with companies to redesign their business models, automate key workflows, and establish digital-first cultures that put customer experience at the core of operations.",
    challenges: [
      "Disruption from agile, digital-native competitors",
      "Friction-filled customer journeys and manual, paper-heavy internal processes",
      "Slow time-to-market for new services and products",
      "Employees resisting change and sticking to legacy habits"
    ],
    approach: "We start with the end-customer experience in mind. We map the value stream, identify friction points, prototype fast-turnaround digital workflows, and drive adoption through structured organizational enablement.",
    solutions: [
      "Digital Maturity Assessments & Transformation Roadmaps",
      "Customer Journey Mapping & UI/UX Strategy",
      "Core Process Automation & Paperless Workflow Engineering",
      "Omnichannel Strategy & E-commerce Platform Integration",
      "Digital-First Culture & Workforce Upskilling"
    ],
    benefits: [
      "Unparalleled customer satisfaction scores and higher retention rates",
      "Drastic reduction in processing times for core services",
      "Faster product launches through modern continuous-delivery frameworks",
      "Data-driven insights to constantly refine and personalize offerings"
    ],
    industries: ["Banking & Insurance", "Luxury Hospitality", "Consumer Products", "Professional Services"],
    caseStudy: {
      title: "Reimagining the Advisory Client Experience",
      clientType: "Bespoke Wealth Management Firm",
      challenge: "Client onboarding and document submittal was manual, confusing, and took an average of 14 business days.",
      solution: "PESA built a secure, fully automated client portal with integrated e-signature, verification, and interactive progress tracking.",
      result: "Onboarding time plummeted to less than 24 hours, boosting client satisfaction scores by 48%."
    }
  },
  {
    id: "human-resources",
    title: "Human Resources",
    tagline: "Unlocking human capital, cultivating talent, and designing modern work cultures.",
    iconName: "Users",
    overview: "An organization's ultimate strategic advantage is its people. PESA's Human Resources practice helps you acquire, develop, retain, and inspire elite talent. We design modern organizational structures, competitive compensation systems, and vibrant work cultures that attract top-tier professionals worldwide.",
    challenges: [
      "High employee turnover and low workforce engagement",
      "Inability to attract specialized, highly qualified international candidates",
      "Lack of structured training and leadership development pipelines",
      "Outdated HR policies that do not comply with modern labor standards"
    ],
    approach: "We build tailored human capital programs that connect talent strategies directly with your business goals. We implement clean, meritocratic structures that encourage high performance and lifelong learning.",
    solutions: [
      "Personnel Management: End-to-end management spanning Recruitment, Onboarding Training, Project Placement, and Performance Evaluation (Évaluation)",
      "Strategic Human Resources Consulting: Organizational Design, Labor Law Audits, Workforce Planning & Compensation Structuring",
      "Interactive Candidate CV Portal: Direct Candidate Registration, CV Submissions, Portfolio Uploads & Candidate Matching",
      "Training and Development: Executive Leadership Academies, Technical Upskilling Workshops, Capacity Building & Mentoring Tracks"
    ],
    benefits: [
      "Increased top-talent retention and reduced recruitment expenses",
      "Highly motivated workforces aligned with company values and missions",
      "Robust internal pipelines for leadership and critical roles",
      "Mitigation of legal risks through compliant, modern HR practices"
    ],
    industries: ["Technology", "Healthcare", "Aviation", "Energy & Natural Resources", "Education"],
    caseStudy: {
      title: "Optimizing Global Talent Pipelines for Advisory Success",
      clientType: "International Construction & Real Estate Group",
      challenge: "The firm struggled to fill senior project management roles across divergent office hubs in North America and Africa.",
      solution: "PESA constructed a unified talent acquisition matrix and launched a modern, cross-regional career development portal.",
      result: "Reduced average time-to-hire by 40% and improved 1-year talent retention from 65% to 88%."
    }
  },
  {
    id: "project-management",
    title: "Project Management",
    tagline: "Executing complex initiatives on time, within budget, and with flawless precision.",
    iconName: "Briefcase",
    overview: "Great ideas require flawless execution. PESA's Project Management practice brings certified, battle-tested project managers, PMO directors, and modern agile coaches to execute your highest-priority initiatives. We specialize in bringing order, predictability, and momentum to complex cross-functional programs.",
    challenges: [
      "Projects repeatedly running over budget and missing critical deadlines",
      "Lack of visibility into project portfolios, resource bottlenecks, and risks",
      "Poor communication between technical teams and business stakeholders",
      "Inconsistent methodologies leading to unpredictable project outcomes"
    ],
    approach: "We deploy standardized PMO frameworks tailored to your organization's agility level. We establish absolute visibility via custom dashboards, enforce accountability, and proactively mitigate risks before they impact the schedule.",
    solutions: [
      "Enterprise PMO (Project Management Office) Setup & Optimization",
      "Complex Program Recovery & Turnaround Services",
      "Agile & Scrum Coaching, Training, and Scaling",
      "Resource Allocation & Capacity Planning Strategy",
      "Project Management Tool Selection & System Implementation"
    ],
    benefits: [
      "Predictable, successful project delivery within scope and budget",
      "Total transparency for executive leadership regarding program status",
      "Optimized resource utilization, reducing burnout and over-allocations",
      "Standardized, repeatable organizational methodologies for future growth"
    ],
    industries: ["Real Estate & Land Development", "Information Technology", "Mining", "Government", "Finance"],
    caseStudy: {
      title: "Rescuing a Stalled Multi-Year System Integration",
      clientType: "Metropolitan Transport Authority",
      challenge: "A complex payment ticketing modernization project was 12 months behind schedule and $4M over budget.",
      solution: "PESA deployed a senior turnaround team, established a rigorous governance framework, and re-baselined vendor milestones.",
      result: "Successfully delivered the project in 8 months of intervention, preventing further budget overruns."
    }
  },
  {
    id: "change-management",
    title: "Change Management",
    tagline: "Preparing your people, driving adoption, and making transformations stick.",
    iconName: "Layers",
    overview: "Even the most brilliant strategy or state-of-the-art technology fails if your people do not adopt it. PESA's Change Management practice focuses on the human side of change. We prepare, support, and equip your employees to adopt new processes, behaviors, and systems, ensuring maximum ROI on your strategic investments.",
    challenges: [
      "Employees resisting new systems, leading to poor post-launch adoption",
      "Confusion and rumors during corporate mergers or reorganizations",
      "Executive sponsors failing to actively and visibly lead changes",
      "Training programs failing to change long-term workplace habits"
    ],
    approach: "We apply proven, structured change methodologies (including Prosci ADKAR) to map change impact, build comprehensive stakeholder communication plans, secure executive sponsorship, and reinforce new behaviors.",
    solutions: [
      "Change Readiness Assessments & Impact Mapping",
      "Sponsor Coalition Coaching & Leadership Alignment Plans",
      "Targeted Stakeholder Communications & Messaging Campaigns",
      "Custom Training Programs & Enablement Frameworks",
      "Adoption Tracking, Auditing, and Reinforcement Systems"
    ],
    benefits: [
      "Rapid employee adoption and high proficiency with new tools and processes",
      "Minimized disruption to ongoing operations during major corporate shifts",
      "Increased project ROI by ensuring full utilization of new investments",
      "A culture that is highly adaptable and resilient to future changes"
    ],
    industries: ["All Sectors undergoing organizational transformation"],
    caseStudy: {
      title: "Facilitating Change in a Major Corporate Reorganization",
      clientType: "Regional Financial Institution",
      challenge: "Merging two operating divisions required 400+ employees to adopt entirely new workflows, sparking widespread resistance.",
      solution: "PESA created a comprehensive, human-centric change strategy, deploying peer 'Change Champions' and customized learning journeys.",
      result: "Achieved a 94% adoption rate of the new workflow systems within 30 days of launch, with zero operational downtime."
    }
  },
  {
    id: "business-process-improvement",
    title: "Business Process Improvement",
    tagline: "Eliminating waste, optimizing workflows, and maximizing operational output.",
    iconName: "Zap",
    overview: "In a highly competitive landscape, operational efficiency is critical. PESA's Business Process Improvement practice applies Lean, Six Sigma, and modern process mining to analyze your existing workflows, eliminate bottlenecks, remove redundant manual steps, and automate core operations.",
    challenges: [
      "Slow, bureaucratic processes delaying service delivery to clients",
      "High rates of errors, rework, and waste in daily transactions",
      "Inability to scale operations without a linear increase in headcount",
      "Lack of standardized procedures across international offices"
    ],
    approach: "We map your current processes ('as-is'), identify root causes of waste and delay, design optimized processes ('to-be'), and embed continuous improvement mechanisms to sustain performance gains.",
    solutions: [
      "Lean Six Sigma Process Audits & Bottleneck Analysis",
      "Standard Operating Procedures (SOPs) Design & Standardization",
      "Robotic Process Automation (RPA) Opportunity Assessment",
      "Cycle Time & Error Rate Reduction Initiatives",
      "Operational Dashboards & Key Performance Indicator (KPI) Tracking"
    ],
    benefits: [
      "Drastic reduction in process cycle times (typically 20% to 50%)",
      "Substantial cost savings and higher operational margins",
      "Improved compliance and consistent output quality",
      "Empowered employees with clearer, more streamlined daily tasks"
    ],
    industries: ["Manufacturing", "Logistics", "Professional Services", "Financial Services", "Healthcare"],
    caseStudy: {
      title: "Optimizing Mineral Supply Logistics Workflows",
      clientType: "Ethical Mining Logistics Firm",
      challenge: "Manual supply-chain logging and dispatch delays caused bottlenecks in critical mineral transport routes.",
      solution: "PESA mapped the logistical value stream and implemented a customized real-time tracking SOP with automated digital dispatch.",
      result: "Slashed delivery turnaround times by 28% and increased overall shipping capacity by 15% without adding transport staff."
    }
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tagline: "Transforming raw data into clear, predictive, actionable business insights.",
    iconName: "BarChart3",
    overview: "Data is your most valuable untapped asset. PESA's Data & Analytics practice helps you capture, clean, organize, and analyze information to make faster, highly confident decisions. From custom executive dashboards to advanced machine learning and predictive modeling, we turn complexity into clarity.",
    challenges: [
      "Organizations drowning in data but starving for real, actionable insights",
      "Siloed, inconsistent, and untrusted data across different software tools",
      "Inability to track key performance indicators (KPIs) in real-time",
      "Struggling to anticipate market trends, client churn, or inventory demands"
    ],
    approach: "We establish strong data governance, architect modern data storage solutions, build predictive analytical engines, and deliver intuitive, gorgeous interactive dashboards for decision-makers.",
    solutions: [
      "Enterprise Data Strategy & Data Governance Frameworks",
      "Modern Data Warehousing, Data Lake & Cloud Pipeline Setup",
      "Interactive Business Intelligence (BI) Dashboard Creation (PowerBI, Tableau)",
      "Predictive Analytics & Customer Segmentation Models",
      "Financial Forecasting & Cost Allocation Dashboards"
    ],
    benefits: [
      "Real-time visibility into operational and financial performance",
      "Higher decision-making speed backed by solid statistical facts",
      "Improved forecasting accuracy, optimizing resource and inventory management",
      "Identification of new revenue opportunities and cost leakage zones"
    ],
    industries: ["Retail & E-commerce", "Financial Services", "Energy & Mining", "Private Equity", "Healthcare"],
    caseStudy: {
      title: "Unifying Executive Analytics for Real Estate Portfolio",
      clientType: "Luxury Real Estate Investment Trust",
      challenge: "Executive leadership spent 5 days every month manually compiling regional sales spreadsheets to calculate yields.",
      solution: "PESA engineered automated data pipelines consolidating property metrics into a real-time interactive financial dashboard.",
      result: "Completely eliminated manual monthly reporting work, unlocking immediate, actionable pricing opportunities."
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Securing your digital perimeter, protecting IP, and maintaining compliance.",
    iconName: "Shield",
    overview: "As digital footprints expand, so do cyber threats. PESA's Cybersecurity practice provides comprehensive risk management, compliance auditing, threat monitoring, and rapid response systems to protect your critical business assets, client data, and proprietary intellectual property from global bad actors.",
    challenges: [
      "Vulnerability to ransomware, phishing, and advanced persistent threats",
      "Non-compliance with strict international regulations (GDPR, SOC 2, HIPAA)",
      "Lack of employee awareness regarding modern digital safety protocols",
      "Uncertainty about the strength of third-party vendor security practices"
    ],
    approach: "We perform rigorous vulnerability assessments, design a 'Zero Trust' security architecture, establish 24/7 detection controls, and cultivate a robust security-first culture through continuous training.",
    solutions: [
      "Cybersecurity Risk Assessments & Penetration Testing",
      "Zero Trust Security Architecture Design & Implementation",
      "Regulatory Compliance Gap Assessments (SOC2, ISO 27001, GDPR)",
      "Incident Response Planning, Simulation, and Crisis Management",
      "Continuous Employee Security Awareness & Phishing Simulations"
    ],
    benefits: [
      "Total protection against disruptive cyber-attacks and costly data breaches",
      "Flawless compliance with relevant global security and privacy laws",
      "Deep trust with clients, partners, and investors regarding data privacy",
      "Rapid recovery capabilities in the rare event of a security incident"
    ],
    industries: ["Finance & Banking", "Healthcare", "Government Agencies", "Aviation", "Critical Infrastructure"],
    caseStudy: {
      title: "Hardening Digital Security for Aviation Brokerage Hub",
      clientType: "Elite Private Jet Procurement Agency",
      challenge: "Handling multi-million dollar transactions made the firm a prime target for sophisticated business-email-compromise schemes.",
      solution: "PESA designed and deployed a strict multi-factor Zero Trust protocol, securing email gateways and establishing transaction-verification standards.",
      result: "Achieved 100% security rating with zero security incidents over 24 months of operation."
    }
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    tagline: "Structuring capital, managing risk, and driving cross-border transactional success.",
    iconName: "TrendingUp",
    overview: "PESA's Financial Advisory practice supports organizations through critical transactions, capital expansions, and complex regulatory landscapes. We specialize in cross-border finance, structured investments, and corporate treasury optimization to secure your financial future.",
    challenges: [
      "Struggling to navigate complex, multi-jurisdictional tax laws and regulations",
      "Ineffective cash flow management and corporate treasury architectures",
      "High costs of capital due to poorly optimized capital structures",
      "Difficulty preparing financial portfolios for institutional due diligence"
    ],
    approach: "We deploy seasoned CPAs, corporate treasurers, and international finance experts to audit current holdings, optimize cash reserves, design tax-efficient frameworks, and prepare premium transactional dossiers.",
    solutions: [
      "Cross-Border Capital Structuring & Debt Syndication",
      "Corporate Treasury & Cash Flow Optimization",
      "Tax Efficiency & Regulatory Compliance Advisory",
      "M&A Financial Valuation & Deal Advisory",
      "Project Finance & International JV Structuring"
    ],
    benefits: [
      "Maximized tax efficiency across international operations",
      "Vastly improved cash flow liquidity and treasury returns",
      "Lowered cost of capital through optimized capital structures",
      "Highly professional deal readiness that inspires investor confidence"
    ],
    industries: ["Private Equity", "Mining & Natural Resources", "Construction", "Wealth Management", "Aviation"],
    caseStudy: {
      title: "Structuring Project Finance for Eco-Luxe Real Estate",
      clientType: "Sustainable Construction & Hospitality Group",
      challenge: "The client needed a complex mix of senior debt, eco-equity, and global capital to finance a $45M master-planned community.",
      solution: "PESA structured a tax-efficient project finance package, leading negotiations with international banking syndicates.",
      result: "Successfully closed the round with an overall interest rate 1.5% lower than target expectations."
    }
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    tagline: "Upskilling your workforce, cultivating leaders, and fostering operational excellence.",
    iconName: "GraduationCap",
    overview: "Sustainable enterprise growth requires a continuous learning culture. PESA's Training and Capacity Building practice designs, develops, and delivers world-class executive education, technical upskilling, and compliance training customized to your organization's unique challenges and values.",
    challenges: [
      "Skills gaps slowing down the adoption of modern technologies and methodologies",
      "A lack of consistent onboarding leading to slow employee time-to-productivity",
      "Struggling to prepare mid-level managers for senior leadership roles",
      "Ineffective, generic training programs that fail to engage employees"
    ],
    approach: "We perform a thorough skills-gap analysis, design immersive and interactive learning paths, utilize digital and hybrid learning spaces, and measure the direct business impact of training programs.",
    solutions: [
      "Custom Leadership Development & Executive Coaching Programs",
      "Technical & Agile Upskilling Workshops",
      "New Employee Onboarding Program Design",
      "Safety, Ethics & Compliance Training Campaigns",
      "Enterprise Learning Management System (LMS) Strategy"
    ],
    benefits: [
      "Highly skilled, innovative workforce prepared for market disruptions",
      "Reduced employee ramp-up times through structured onboarding",
      "Stronger pipeline of qualified, vision-aligned internal leaders",
      "Increased employee satisfaction and retention through career-growth support"
    ],
    industries: ["All Industries seeking continuous improvement and talent optimization"],
    caseStudy: {
      title: "Developing Leadership Capabilities for 120 Managers",
      clientType: "Regional Infrastructure Provider",
      challenge: "A transition toward high-tech operations left mid-level supervisors lacking the strategic leadership and digital skills required to manage teams.",
      solution: "PESA created a 6-month 'Strategic Leadership Accelerator' combining virtual modules, 1-on-1 coaching, and real-world capstone projects.",
      result: "100% completion rate, with 88% of participants receiving high internal leadership marks and launching key process innovations."
    }
  },
  {
    id: "government-consulting",
    title: "Government Consulting",
    tagline: "Building institutional capacity, optimizing public services, and structuring policy.",
    iconName: "Landmark",
    overview: "PESA supports municipal, state, and national government entities in delivering efficient public services, managing complex social programs, modernizing legacy systems, and planning strategic infrastructure. We bring private-sector operational excellence into the public service context with absolute integrity.",
    challenges: [
      "Bureaucratic red tape slowing down public service delivery to citizens",
      "Struggling to implement complex, multi-agency infrastructure projects",
      "Legacy IT systems exposing public data to cybersecurity risks",
      "Inefficient allocation of public budgets and weak program accountability"
    ],
    approach: "We utilize rigorous public-sector program frameworks, prioritize stakeholder alignment, ensure absolute compliance with public statutes, and focus on human-centric service delivery.",
    solutions: [
      "Public Service Modernization & Digitization Strategies",
      "Public-Private Partnership (PPP) Structuring & Advisory",
      "Government Program Evaluation & Operational Audits",
      "Regulatory Impact Analysis & Policy Support",
      "Public Infrastructure & Capital Project Management"
    ],
    benefits: [
      "Streamlined public processes, increasing citizen trust and access",
      "On-time, under-budget execution of major public infrastructure programs",
      "Enhanced security of citizen records and public databases",
      "Maximized impact of public budgets through transparent accountability"
    ],
    industries: ["National Ministries", "State Agencies", "Municipal Authorities", "Public Utilities"],
    caseStudy: {
      title: "Digitizing Municipal Licensing Services",
      clientType: "Major Metropolitan City Government",
      challenge: "Business permitting took an average of 65 days and required 4 on-site visits, stifling local economic development.",
      solution: "PESA designed an end-to-end cloud business licensing portal and retrained agency staff under optimized process flows.",
      result: "Permit turnaround times collapsed to 5 days, resulting in a 30% increase in new business registrations in the first year."
    }
  },
  {
    id: "private-sector",
    title: "Private Sector Consulting",
    tagline: "Accelerating commercial growth, optimizing operations, and boosting enterprise value.",
    iconName: "Building",
    overview: "Our Private Sector practice works with startup founders, family-owned enterprises, and mid-market corporations to scale operations, expand geographic footprints, optimize supply chains, and prepare for capital rounds. We focus on lean operations, rapid growth, and sustainable profitability.",
    challenges: [
      "Scaling pains leading to operational chaos and quality decline",
      "Stiffening competition squeezing product or service margins",
      "Ineffective sales frameworks and slow geographical expansion",
      "Difficulty securing private equity, venture, or commercial financing"
    ],
    approach: "We inject senior, practical business expertise to analyze operational efficiency, redesign sales and marketing engines, optimize procurement, and structure professional corporate governance.",
    solutions: [
      "Commercial Growth & Market Expansion Strategies",
      "Supply Chain & Procurement Cost Reduction",
      "Sales Engine Redesign & Customer Acquisition Optimization",
      "Corporate Restructuring & Performance Improvement",
      "Pre-Funding Professionalization & Capital Dossier Preparation"
    ],
    benefits: [
      "Accelerated, sustainable revenue growth and market share gains",
      "Substantially higher profitability margins through streamlined operations",
      "Highly scalable organizational structures capable of rapid headcount growth",
      "Exceptional deal readiness resulting in top-valuation capital rounds"
    ],
    industries: ["Tech Startups", "Family-Owned Enterprises", "Mid-Market Manufacturing", "Professional Services"],
    caseStudy: {
      title: "Scaling a Mid-Market Manufacturer's Operations by 2.5x",
      clientType: "Precision Component Manufacturer",
      challenge: "Rapid order growth led to bottlenecked factory floors, late deliveries, and a decline in quality scores.",
      solution: "PESA implemented standard visual factory workflows, optimized warehouse layout, and structured a real-time CRM scheduling tool.",
      result: "Increased manufacturing output by 150% in 12 months, restored on-time deliveries to 99%, and secured a $12M Series B funding round."
    }
  },
  {
    id: "international-development",
    title: "International Development",
    tagline: "Structuring sustainable development, bridging capital, and transforming communities.",
    iconName: "Globe",
    overview: "PESA's International Development practice works with global development banks, NGOs, and sovereign nations to structure sustainable economic developments, clean energy infrastructures, agricultural advancements, and educational initiatives across emerging markets, with an absolute commitment to local enrichment.",
    challenges: [
      "Development projects failing to achieve self-sustaining operational models",
      "Weak alignment and trust between international donors and local stakeholders",
      "Inability to measure, track, and prove positive community impacts",
      "Difficulties structuring projects in high-risk or complex jurisdictions"
    ],
    approach: "We combine private sector investment strategies with deep community focus. We establish local project teams, ensure strict environmental and social governance (ESG), and deploy robust tracking technologies.",
    solutions: [
      "Emerging Market Investment Feasibility & Risk Assessments",
      "Sustainable Infrastructure & Renewable Energy Project Structuring",
      "Waste-to-Resource Infrastructure: Structuring multi-million dollar projects converting raw municipal waste into electricity, high-durability fabric pavements, masonry bricks, secondary oil & gas resources, and premium weather-proof roofing materials",
      "Community Economic Empowerment & Micro-Finance Programs",
      "Monitoring, Evaluation & Learning (MEL) Framework Design",
      "ESG Compliance & Multi-Stakeholder Alignment Management"
    ],
    benefits: [
      "Highly successful, self-sustaining development programs that enrich local economies",
      "Unparalleled trust and cooperation from local leaders and community groups",
      "Rigorous, transparent impact metrics for global donors and development banks",
      "Complete mitigation of environmental, social, and political project risks"
    ],
    industries: ["Development Banks", "Global Philanthropies", "NGOs", "National Development Agencies"],
    caseStudy: {
      title: "Structuring Sustainable Agricultural Hubs in Central Africa",
      clientType: "Sub-Saharan Agricultural Cooperatives & Global Development Fund",
      challenge: "Smallholder farmers lacked cold-chain storage and direct access to regional markets, leading to 45% post-harvest spoilage.",
      solution: "PESA structured a commercial public-private development model, setting up solar-powered storage hubs and establishing direct distribution contracts.",
      result: "Spoilage rates dropped to below 5%, local farmer household incomes increased by an average of 65%, and the hubs achieved self-funding status in 18 months."
    }
  }
];
