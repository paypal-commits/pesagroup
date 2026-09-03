import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, string> = {
  // Navigation & General
  "Home": "Accueil",
  "About": "À Propos",
  "PESA System": "Système PESA",
  "Executive Team": "Équipe Dirigeante",
  "Somptueux Realty": "Immobilier Somptueux",
  "Offices": "Bureaux",
  "Careers": "Carrières",
  "Resources": "Ressources",
  "Contact": "Contact",
  "Connect Desk": "Contacter",
  "Inquire Securely": "S'informer",
  "Home Base": "Accueil",
  "About History": "À Propos de Nous",
  "PESA System Core": "Cœur du Système PESA",
  "Executive Biographies": "Biographies Exécutives",
  "Global Hubs": "Bureaux Globaux",
  "Careers & Internships": "Carrières & Stages",
  "Insights & FAQs": "Perspectives & FAQ",
  "Corporate Index": "Index de l'Entreprise",
  "Advisory Desk": "Pôle Conseil",
  "Strategy Consulting": "Conseil en Stratégie",
  "Technology Consulting": "Conseil en Technologie",
  "Digital Transformation": "Transformation Digitale",
  "Human Resources Consulting": "Conseil en Ressources Humaines",
  "Project Management Office": "Gestion de Projet",
  "Government & Public Sector": "Secteur Public & Gouvernance",
  "Dallas Desk: +1 (682) 424-5857": "Bureau Dallas: +1 (682) 424-5857",
  "Kinshasa Desk: +243 821 368 004": "Bureau Kinshasa: +243 821 368 004",

  // Footer & Compliance
  "Developed by": "Développé par",
  "PESA Consulting Group": "Groupe de Conseil PESA",
  "PESA Consulting Group LLC": "PESA Consulting Group LLC",
  "An elite multinational advisory firm delivering absolute execution rigor across North America and Central Africa.": "Un cabinet de conseil multinational d'élite offrant une rigueur d'exécution absolue en Amérique du Nord et en Afrique Centrale.",
  "PESA Consulting Group LLC is an independent global consulting firm. Operational support, technical auditing, and strategic outsourcing solutions adhere to local legal, tax, and licensing frameworks in the Democratic Republic of Congo and the State of Texas. PESA maintains a strict zero-cash payment policy.": "PESA Consulting Group LLC est un cabinet de conseil mondial indépendant. Le soutien opérationnel, l'audit technique et les solutions d'externalisation stratégique respectent les cadres juridiques, fiscaux et réglementaires locaux en République Démocratique du Congo et dans l'État du Texas. PESA maintient une politique stricte de paiement sans numéraire.",

  // Chatbot Widget
  "PESA Corporate Assistant": "Assistant d'Entreprise PESA",
  "Ask about PESA strategy, real estate, visa or minerals advisory.": "Posez des questions sur la stratégie, l'immobilier, les visas ou les minerais.",
  "Executive Advisory AI Desk": "Bureau d'Advisory IA",
  "Type a secure corporate inquiry...": "Saisissez votre demande sécurisée...",
  "Securely compiled.": "Compilé de manière sécurisée.",
  "Hello, I am the PESA Executive Assistant. How can I assist with your corporate inquiry today?": "Bonjour, je suis l'assistant exécutif de PESA. Comment puis-je vous aider dans votre demande aujourd'hui ?",
  "Connecting to secure intelligence network...": "Connexion au réseau d'intelligence sécurisé...",
  "Offline Mode (Demo)": "Mode Hors-ligne (Démo)",
  "Press Enter to Send": "Appuyez sur Entrée pour envoyer",
  "PESA Ambassador": "Ambassadeur PESA",
  "Secure AI Portal": "Portail IA Sécurisé",
  "End-to-End Encrypted Secure Server Link": "Lien de serveur sécurisé chiffré de bout en bout",
  "Suggested Inquiries:": "Inquiries suggérées:",
  "Who is CEO Camy Likobe?": "Qui est le PDG Camy Likobe ?",
  "Tell me about EB-5 Consulting": "Parlez-moi du conseil EB-5",
  "What real estate listings are for sale?": "Quelles propriétés sont à vendre ?",
  "Ask about PESA services, team...": "Posez des questions sur les services, l'équipe...",
  "Welcome to PESA Consulting Group's digital headquarters. I am your Executive Ambassador, trained on PESA's verified services and global operations under CEO Camy Likobe. \n\nHow may I assist you with Strategy Consulting, Luxury Real Estate listings, Land development, Private Jet sales, US Visa services, or Mining inquiries today?": "Bienvenue au siège numérique de PESA Consulting Group. Je suis votre Ambassadeur Exécutif, formé sur les services vérifiés et les opérations mondiales de PESA sous la direction du PDG Camy Likobe. \n\nComment puis-je vous aider aujourd'hui en matière de conseil en stratégie, d'immobilier de luxe, d'aménagement foncier, de vente de jets privés, de services de visa américain ou d'exploitation minière ?",

  "PESA Network Portfolio, Events & Alliances": "Portfolio, Événements & Alliances du réseau PESA",
  "Transforming Organizations Through Strategy, Technology & People": "Transformer les Organisations par la Stratégie, la Technologie & l'Humain",
  "We solve complex challenges and elevate global performance. Fully customized consulting divisions delivering operational rigor, technical modernization, global recruitment strategies, and executive transformation models.": "Nous résolvons les défis complexes et élevons la performance globale. Des divisions de conseil entièrement personnalisées offrant une rigueur opérationnelle, une modernisation technique, des stratégies de recrutement mondial et des modèles de transformation exécutive.",
  "Our Services": "Nos Services",
  "Contact Us": "Contactez-nous",

  // Hero / Home Page
  "Absolute Rigor in Global Advisory": "Rigueur Absolue en Conseil Mondial",
  "Bridging North American Capital & Central African Opportunity with bespoke strategy, luxury real estate, international education, private aviation, and critical minerals sourcing.": "Faire le pont entre le capital nord-américain et les opportunités en Afrique centrale grâce à des stratégies sur mesure, l'immobilier de luxe, l'éducation internationale, l'aviation privée et l'approvisionnement en minerais critiques.",
  "Explore Our Services": "Explorer Nos Services",
  "Contact Our Desks": "Contacter Nos Bureaux",
  "Dallas Desk": "Bureau de Dallas",
  "Kinshasa Desk": "Bureau de Kinshasa",
  "Active Sponsoring": "Parrainage Actif",
  "Real Estate Assets": "Actifs Immobiliers",
  "Approved Visas": "Visas Approuvés",
  "Mining Production": "Production Minière",
  "Client Partner": "Partenaire Client",
  "Key Event": "Événement Clé",
  "Global Conference": "Conférence Globale",
  "Community Project": "Projet Communautaire",
  "International Alliance": "Alliance Internationale",

  // Home Page Headers
  "Corporate Pillars": "Piliers de l'Entreprise",
  "Our Core Services": "Nos Services Principaux",
  "An elite portfolio of Advisory Desks delivering unparalleled results.": "Un portefeuille d'élite de bureaux de conseil offrant des résultats inégalés.",
  "Exclusive Portfolios": "Portefeuilles Exclusifs",
  "Featured Real Estate & Acreage": "Immobilier de Prestige & Terrains",
  "View high-value properties and strategic development lands managed by our certified elite brokers.": "Découvrez des propriétés de prestige et des terrains de développement stratégiques gérés par nos courtiers d'élite certifiés.",
  "Featured Luxury Properties": "Propriétés de Luxe Sélectionnées",
  "Strategic Development Lands": "Terrains de Développement Stratégiques",
  "Bedrooms": "Chambres",
  "Bathrooms": "Salles de bain",
  "Area": "Superficie",
  "Acres": "Acres",
  "Global Executive Leadership": "Direction Exécutive Globale",
  "Meet the executive minds guiding PESA's multidisciplinary global growth.": "Rencontrez les dirigeants qui guident la croissance mondiale pluridisciplinaire de PESA.",
  "Governance & Operational Rigor": "Gouvernance & Rigueur Opérationnelle",
  "How we maintain absolute compliance, security, and strict procedural protocols across all global branches.": "Comment nous maintenons une conformité absolue, la sécurité et des protocoles de procédure stricts dans toutes nos succursales.",

  // Contact / newsletter
  "Stay Connected": "Restez Connecté",
  "Subscribe to the PESA Intelligence Briefing for quarterly insights.": "Abonnez-vous au bulletin d'information de PESA pour nos analyses trimestrielles.",
  "Sourcing...": "Envoi...",
  "Your Email Address": "Votre Adresse E-mail",
  "Subscribe": "S'abonner",
  "Thank you for subscribing to PESA Intelligence.": "Merci de vous être abonné aux bulletins de PESA.",
  
  // Interactive 3D Showcase Section
  "Interactive Real-time Core": "Cœur Interactif en Temps Réel",
  "The PESA System Metaphor": "La Métaphore du Système PESA",
  "Interact with our custom simulated 3D geometry core. Just like PESA structures capital investments and compiles global assets, our interactive 3D module lets you visualize, rotate, and interact with mathematical representations of Structure, Expansion, and Assembly.": "Interagissez avec notre cœur de géométrie 3D simulé. Tout comme PESA structure les investissements en capital et compile les actifs mondiaux, notre module 3D interactif vous permet de visualiser, faire pivoter et interagir avec des représentations mathématiques de la Structure, de l'Expansion et de l'Optimisation.",
  "Mouse Interaction: Shifts viewport gravity": "Interaction de la Souris : Déplace la gravité du viewport",
  "GPU Optimized WebGL & Particle Buffering": "WebGL Optimisé pour GPU & Mémoire tampon des particules",
  "Note: Hover, click, and slide parameters are processed locally to maximize performance. Toggle between core modes using the shape controllers.": "Remarque: Les paramètres de survol, de clic et de glissement sont traités localement pour maximiser les performances. Basculez entre les modes à l'aide des contrôleurs.",
  "Select Metaphor State": "Sélectionner l'état de la métaphore",
  "Structure Mode": "Mode Structure",
  "Expansion Mode": "Mode Expansion",
  "Assembly Mode": "Mode Assemblage",
  
  // About Us Page
  "About PESA Consulting Group": "À Propos de PESA Consulting Group",
  "Our History, Mission, and Global Vision for Execution Excellence": "Notre Histoire, notre Mission et notre Vision Globale d'Excellence",
  "The PESA Foundation": "La Fondation PESA",
  "Founded with a singular vision to unify strategic capital with high-yield development opportunities...": "Fondé avec la vision singulière d'unifier le capital stratégique avec des opportunités de développement à haut rendement...",
  "Our Purpose": "Notre Objectif",
  "Executive Mission": "Mission Exécutive",
  "To deliver elite multi-sector advisory solutions with unparalleled structural rigor, bridging North American capital with Central African growth hubs.": "Offrir des solutions de conseil multisectorielles d'élite avec une rigueur structurelle inégalée, reliant le capital nord-américain aux pôles de croissance de l'Afrique centrale.",
  "Core Values": "Valeurs Fondamentales",
  "Absolute Rigor": "Rigueur Absolue",
  "Ethical Sourcing": "Approvisionnement Éthique",
  "Bilateral Trust": "Confiance Bilatérale",
  "Executive Competence": "Compétence Exécutive",

  // Human Resources
  "Human Capital Optimization": "Optimisation du Capital Humain",
  "Unlocking institutional growth through executive placement, capacity building, and performance management.": "Libérer la croissance institutionnelle par le placement de cadres, le renforcement des capacités et la gestion des performances.",
  
  // Executive Team
  "Corporate Leadership & Biographies": "Direction de l'Entreprise & Biographies",
  "Elite specialists steering PESA's diversified services across America and Central Africa.": "Spécialistes d'élite dirigeant les services diversifiés de PESA en Amérique et en Afrique centrale.",
  
  // Contact Us Page
  "Contact Our Advisory Desks": "Contacter nos Bureaux de Conseil",
  "Connect with our certified brokers, academic counselors, critical minerals desks, or executive strategic advisory.": "Connectez-vous avec nos courtiers certifiés, nos conseillers universitaires, nos bureaux de minerais critiques ou notre conseil stratégique exécutif.",
  "Send Message": "Envoyer le Message",
  "Subject Desk": "Sujet du Bureau",
  "Your Name": "Votre Nom",
  "Secure Email": "E-mail Sécurisé",
  "Direct Phone": "Téléphone Direct",
  "Your Inquiry Details...": "Détails de votre demande...",
  "Message Sourced Successfully": "Message Envoyé avec Succès",
  "We will review your inquiry within 4 hours.": "Nous examinerons votre demande dans les 4 heures.",
  
  // Offices / Global Hubs
  "Global Administrative Hubs": "Bureaux Administratifs Globaux",
  "Explore PESA's primary operating coordinates bridging Texas and the Democratic Republic of Congo.": "Explorez les coordonnées opérationnelles de PESA reliant le Texas et la République Démocratique du Congo.",
  
  // Careers
  "Careers & Internships at PESA": "Carrières & Stages chez PESA",
  "Join an elite, fast-growing multidisciplinary advisory team. We seek rigorous, multi-lingual professionals.": "Rejoignez une équipe de conseil pluridisciplinaire d'élite et à croissance rapide. Nous recherchons des professionnels rigoureux et multilingues.",
  "Current Openings": "Postes Ouverts",
  "Apply for this Position": "Postuler à ce poste",
  "Submit Application": "Soumettre la candidature",

  // Resources / FAQ
  "Corporate Resources & Intelligence": "Ressources d'Entreprise & Analyses",
  "Access strategic whitepapers, standard operating procedures, and comprehensive FAQs.": "Accédez à nos livres blancs stratégiques, à nos procédures opérationnelles standard et à notre FAQ complète.",
  "Frequently Asked Questions": "Foire Aux Questions",
  "Strategic Insights & Publications": "Perspectives Stratégiques & Publications",
  
  // PESA System
  "The PESA Assembly System": "Le Système d'Assemblage PESA",
  "A multi-layered architectural metaphor showing how capital, legal compliance, and operations combine.": "Une métaphore architecturale multicouche montrant comment le capital, la conformité légale et les opérations se combinent."
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Attempt local storage recall
    try {
      const saved = localStorage.getItem("pesa_preferred_lang");
      if (saved === "en" || saved === "fr") {
        return saved;
      }
    } catch (e) {
      // Ignore
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("pesa_preferred_lang", lang);
    } catch (e) {
      // Ignore
    }
  };

  const t = (key: string): string => {
    if (language === "en") return key;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
