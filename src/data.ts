import { Property, LandListing, TeamMember, ServiceItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "consulting",
    title: "Strategy Consulting",
    tagline: "Empowering Your Success Through Capital Projections & EB-5 Advisory",
    description: "As a premier international advisory firm, PESA Consulting Group possesses bespoke financial models tailored to customize, cultivate, and structure companies aiming to raise institutional capital.",
    iconName: "Briefcase",
    details: [
      "Custom Corporate Financial Modeling & Fund Allocation",
      "EB-5 Investor Program Sponsoring & Advisory",
      "300+ Active Investors Across 6 Sponsored Funds",
      "100% Approval Record on Adjudicated I-526 Petitions",
      "Capital Markets Alternatives (Senior Debt, Equity, Mezzanine)",
      "Strategic Market Entry & Scale Structuring"
    ]
  },
  {
    id: "realestate",
    title: "Luxury Real Estate",
    tagline: "Your Elite Partner in Luxury Homes & Commercial Assets",
    description: "Whether you are a first-time homebuyer, an experienced institutional investor, or looking to liquidate high-value portfolios, we guide you through every step of the premium real estate market.",
    iconName: "Home",
    details: [
      "Exclusive Access to Off-Market Listings in Texas",
      "High-Profile Residential & Commercial Transactions",
      "Direct Guidance from Certified Elite Broker Camy Likobe",
      "Comprehensive Property Valuation & Marketing",
      "Sellers & Buyers Portfolio Management"
    ]
  },
  {
    id: "land",
    title: "Construction & Land",
    tagline: "Discover Your Land Development Potential",
    description: "We connect visionary individual and institutional investors with prime commercial acreage and high-yield construction zones, delivering end-to-end development oversight.",
    iconName: "Trees",
    details: [
      "Sustainability-Focused Development Practices",
      "Rigorous Zoning, Permitting & Regulatory Approvals",
      "Thorough Environmental & Commercial Due Diligence",
      "Land Acquisition & Site Selection Assessment",
      "Comprehensive Infrastructure & Construction Project Management"
    ]
  },
  {
    id: "visa",
    title: "Visa Services (PESA Education)",
    tagline: "Securing Seamless International Study Abroad Pathways",
    description: "PESA Education simplifies the complex and overwhelming journey of immigrating for academic pursuits, specializing in study visas for the United States.",
    iconName: "GraduationCap",
    details: [
      "Specialized Student Visa (F-1) Sourcing for the USA",
      "Personalized Academic Course & University Selection",
      "Expert Document Compilation & Portfolio Review",
      "Rigorous Mock Visa Interview Preparation Sessions",
      "Post-Arrival Support (Housing, Local Banking, Cultural Alignment)"
    ]
  },
  {
    id: "aviation",
    title: "Private Jet Acquisition",
    tagline: "Elevating Your Travel with Elite Global Aircraft Procurement",
    description: "PESA GROUP acts as your trusted acquisition advisor, tapping into a discrete off-market network to source elite private aviation assets tailored to your executive itinerary.",
    iconName: "Plane",
    details: [
      "Global Sourcing Network of Off-Market & Pre-Listed Aircraft",
      "Custom Passenger Capacity & Long-Range Performance Analysis",
      "Dispatch of Engineers for Rigorous Pre-Purchase Inspections",
      "Detailed On-Site Maintenance & Logbook Auditing",
      "Seamless Legal Closing, Registration, and Flight Delivery"
    ]
  },
  {
    id: "mining",
    title: "Mining & Critical Minerals",
    tagline: "Your Trusted Partner in Ethical Mineral Sourcing",
    description: "We specialize in the supply-chain security of premium mining products and strategic critical minerals essential for clean technology, sustainable energy, and modern infrastructure.",
    iconName: "Compass",
    details: [
      "Sourcing of High-Quality Strategic Critical Minerals",
      "Absolute Commitment to Ethical Sourcing & Labor Standards",
      "Environmental Responsibility & Ecological Reclamation Support",
      "Strong Stakeholder Relationships across DRC and Global Markets",
      "Custom Mineral Supply Agreements for Global Technology Manufacturers"
    ]
  }
];

export const propertiesData: Property[] = [
  {
    id: "p1",
    title: "Grand Estate Fairview",
    price: "$1,950,000",
    address: "1703 Big Bend Boulevard, Fairview, TX 75069",
    beds: 6,
    baths: 7,
    sqft: "6,588",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p2",
    title: "The Sundance Chateau",
    price: "$7,750,000",
    address: "680 Sundance Court, Prosper, TX 75078",
    beds: 5,
    baths: 7,
    sqft: "10,494",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p3",
    title: "Oak Bend Manor",
    price: "$3,000,000",
    address: "5520 Oak Bend Trail, Celina, TX 75078",
    beds: 5,
    baths: 6,
    sqft: "7,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    id: "p4",
    title: "The Aristides Modern",
    price: "$1,680,000",
    address: "11166 Aristides Drive, Frisco, TX 75035",
    beds: 4,
    baths: 5,
    sqft: "5,004",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    featured: false
  },
  {
    id: "p5",
    title: "Hidden Creek Villa",
    price: "$2,499,900",
    address: "6525 Hidden Creek Court, Plano, TX 75024",
    beds: 5,
    baths: 6,
    sqft: "5,703",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    featured: false
  },
  {
    id: "p6",
    title: "Creek View Residence",
    price: "$2,840,900",
    address: "2840 Creek View Court, Prosper, TX 75078",
    beds: 7,
    baths: 9,
    sqft: "8,753",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=1200",
    featured: false
  }
];

export const landListingsData: LandListing[] = [
  {
    id: "l1",
    title: "Frisco Commercial Megasite",
    acres: "172.00 Acres",
    price: "$14,853,600",
    location: "TBD Main St 5, Frisco, TX 75035",
    description: "A colossal unimproved parcel of prime development land featuring complete water rights, high accessibility corridors, and exceptional suitability for master-planned commercial or high-end residential community development.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "l2",
    title: "Frisco Premium Infill Parcel",
    acres: "6.379 Acres",
    price: "$7,654,800",
    location: "TBD Main St 3, Frisco, TX 75035",
    description: "Highly coveted infill parcel in the heart of Frisco, TX. Ideal for immediate commercial office, retail park, or custom residential enclave. Fully surveyed and ready for municipal submission.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200"
  }
];

export const teamData: TeamMember[] = [
  {
    name: "Camy Likobe",
    role: "President & Chief Executive Officer (CEO)",
    experience: "Over a decade in global enterprise leadership, financial asset management, and luxury real estate brokerage.",
    bio: "Mr. Likobe is an accomplished corporate leader who has built a successful career across premier global organizations. Having served in high-impact positions at Branch Banking & Trust (BB&T), TD Ameritrade, and Competitive Edge Realty, he founded PESA Consulting Group to build a global legacy of purpose-driven solutions for discerning individual and institutional clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Charles Adekola",
    role: "Vice President",
    experience: "10+ years specializing in consulting, credit structuring, loan syndication, and high-growth business advisory.",
    bio: "Mr. Adekola launched his professional journey in the financial consulting loan industry, making notable impacts as a premier director at Lender Express. Over more than 10 years, he has led key client transactions, strategic investments, and structural development programs, collaborating closely with local managers in Dallas and Central Africa.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Carole Boboy",
    role: "Chief Operations Officer (COO)",
    experience: "8+ years in global business logistics, international trade networks, and client success workflows.",
    bio: "Ms. Boboy manages the day-to-day operational execution of PESA's diversified industries. Bridging executive efforts across the Dallas and Kinshasa administrative branches, she ensures the delivery of top-quality service across our visa services, mining, and luxury jet sales networks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Laetitia Kalala",
    role: "Chief Financial Officer (CFO)",
    experience: "9+ years in international tax compliance, corporate treasury, and private equity capital management.",
    bio: "Ms. Kalala leads PESA's financial structures, managing client capital projections, EB-5 investment structures, and resource allocation. Her extensive treasury experience ensures absolute transparency, strict compliance, and optimal investor yield across international jurisdictions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Yannick Matadi",
    role: "Chief Audit Officer (CAO)",
    experience: "10+ years in financial auditing, forensic accounting, and compliance risk assessment.",
    bio: "Mr. Matadi is a highly analytical professional responsible for PESA Consulting Group's international compliance, risk audits, and strict bank-to-bank financial governance. His rigorous oversight ensures all corporate collaborations maintain zero cash presence and maximum legal alignment.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Sourya Nyabolondo",
    role: "Chief of Staff Officer",
    experience: "7+ years in executive coordination, strategic planning, and operational alignment.",
    bio: "Ms. Nyabolondo oversees executive strategy execution and coordinates operations across our bilateral Dallas and Kinshasa administrative branches. She acts as a key liaison to guarantee our high-level corporate goals and project milestones are delivered with absolute timeliness and structural rigor.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Arsene Mulolo Mulapia",
    role: "Global Account Consultant",
    experience: "Senior-level advisor. Expert in international key accounts, strategic partnership growth, and contract negotiation. Contact: arsene.mulolo@pesagroup.org | +905338384684 | +243832298734",
    bio: "Mr. Mulapia is a senior international advisor specializing in managing key global accounts and strategic customers. He manages and grows high-value client relationships, develops account strategies and growth plans, coordinates international projects and stakeholders, serves as the primary point of contact for major clients, negotiates high-value contracts, and recommends solutions for multinational corporations.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Deborah Akinkuolie",
    role: "Project Coordinator",
    experience: "Professional coordination in global program management, timeline design, and stakeholder communication.",
    bio: "Ms. Akinkuolie serves as the core coordinator for key commercial and academic programs at PESA Consulting Group. She manages project timelines, maintains clear communication across cross-functional hubs, and ensures that resources are assembled smoothly to support on-time project execution.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Deborah Kayiba",
    role: "Administrative Assistant",
    experience: "Executive administration, client scheduling, records management, and operational security assistance.",
    bio: "Ms. Kayiba provides critical administrative and executive support across PESA Group's operating sectors. Managing records, scheduling, and portal data entry under tight security compliance, she ensures frictionless daily workflows and reliable client communication.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const teamDataFR = [
  {
    name: "Camy Likobe",
    role: "Président & Directeur Général (CEO)",
    experience: "Plus d'une décennie dans la direction d'entreprises mondiales, la gestion d'actifs financiers et le courtage immobilier de luxe.",
    bio: "M. Likobe est un dirigeant d'entreprise accompli qui a mené une brillante carrière au sein d'organisations mondiales de premier plan. Après avoir occupé des postes stratégiques à la Branch Banking & Trust (BB&T), TD Ameritrade et Competitive Edge Realty, il a fondé PESA Consulting Group pour bâtir un héritage mondial de solutions axées sur le succès de nos clients individuels et institutionnels.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Charles Adekola",
    role: "Vice-Président",
    experience: "Plus de 10 ans de spécialisation en conseil, structuration de crédit, syndication de prêts et conseil aux entreprises à forte croissance.",
    bio: "M. Adekola a commencé son parcours professionnel dans le secteur du conseil financier et du crédit, se distinguant comme directeur principal chez Lender Express. Depuis plus de 10 ans, il dirige des transactions clients d'envergure, des investissements stratégiques et des programmes de développement structurel, en étroite collaboration avec les responsables locaux à Dallas et en Afrique centrale.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Carole Boboy",
    role: "Directrice des Opérations (COO)",
    experience: "Plus de 8 ans dans la logistique commerciale mondiale, les réseaux commerciaux internationaux et les flux de réussite client.",
    bio: "Mme Boboy gère l'exécution opérationnelle quotidienne des diverses activités de PESA. Faisant le lien entre les directions administratives de Dallas et de Kinshasa, elle veille à la livraison de services de qualité supérieure à travers nos réseaux de visas d'études, d'exploitation minière et de vente de jets privés.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Laetitia Kalala",
    role: "Directrice Financière (CFO)",
    experience: "Plus de 9 ans dans la conformité fiscale internationale, la trésorerie d'entreprise et la gestion des capitaux propres.",
    bio: "Mme Kalala dirige les structures financières de PESA, supervisant les projections de capital des clients, les structures d'investissement EB-5 et l'allocation des ressources. Sa solide expérience en trésorerie garantit une transparence absolue, une conformité rigoureuse et des rendements optimaux pour les investisseurs dans les juridictions internationales.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Yannick Matadi",
    role: "Auditeur en Chef (CAO)",
    experience: "Plus de 10 ans en audit financier, comptabilité judiciaire et évaluation des risques de conformité.",
    bio: "M. Matadi est un professionnel hautement analytique responsable de la conformité internationale, des audits de risques et de la stricte gouvernance financière de banque à banque de PESA Consulting Group. Sa supervision rigoureuse garantit que toutes les collaborations d'entreprise maintiennent une absence totale d'espèces et un alignement juridique maximal.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Sourya Nyabolondo",
    role: "Chef de Cabinet",
    experience: "Plus de 7 ans en coordination de direction, planification stratégique et alignement opérationnel.",
    bio: "Mme Nyabolondo supervise l'exécution de la stratégie de la direction et coordonne les opérations entre nos divisions de Dallas et de Kinshasa. Elle assure une liaison clé pour garantir que nos objectifs d'entreprise de haut niveau et nos jalons de projet soient livrés avec une ponctualité absolue et une rigueur structurelle.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Arsene Mulolo Mulapia",
    role: "Consultant de Comptes Globaux",
    experience: "Conseiller client de niveau senior. Expert en comptes clés internationaux, croissance de partenariats stratégiques et négociation de contrats.",
    bio: "M. Mulapia est un conseiller international senior spécialisé dans la gestion de comptes mondiaux clés et de clients stratégiques. Il gère et développe des relations clients à haute valeur ajoutée, développe des stratégies de comptes et des plans de croissance, coordonne des projets internationaux et des parties prenantes, sert de point de contact principal pour les clients majeurs, négocie des contrats de grande valeur et recommande des solutions pour les multinationales.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Deborah Akinkuolie",
    role: "Coordinatrice de Projet",
    experience: "Coordination professionnelle dans la gestion de programmes mondiaux, la conception de calendriers et la communication avec les parties prenantes.",
    bio: "Mme Akinkuolie intervient en tant que coordinatrice principale des programmes commerciaux et académiques de PESA Consulting Group. Elle gère les calendriers des projets, maintient une communication claire entre les pôles interfonctionnels et veille à ce que les ressources soient assemblées de manière fluide pour soutenir l'exécution des projets dans les délais.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Deborah Kayiba",
    role: "Assistante Administrative",
    experience: "Administration de direction, planification clients, gestion des dossiers et assistance à la sécurité opérationnelle.",
    bio: "Mme Kayiba apporte un soutien administratif et de direction crucial dans les secteurs d'activité du Groupe PESA. Gérant les dossiers, la planification et la saisie de données sur le portail dans le respect des règles de sécurité, elle garantit des flux de travail quotidiens sans friction et une communication fiable avec les clients.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400&h=400"
  }
];
