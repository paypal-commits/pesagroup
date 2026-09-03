import React, { useState, useEffect } from "react";
import { 
  Compass, Cpu, RefreshCw, Users, Briefcase, Layers, Zap, BarChart3, 
  Shield, TrendingUp, GraduationCap, Landmark, Building, Globe,
  ArrowRight, CheckCircle, ShieldAlert, ChevronRight, MessageSquare, 
  Send, HelpCircle, Check
} from "lucide-react";
import { servicesDetailList, ServiceDetail } from "../servicesData";
import { useLanguage } from "../context/LanguageContext";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (path: string) => void;
}

export default function ServiceDetailComponent({ serviceId, onNavigate }: ServiceDetailProps) {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const baseService = servicesDetailList.find(s => s.id === serviceId) || servicesDetailList[0];

  // Professional French translations dictionary for PESA's 12 service divisions
  const frenchTranslations: { [id: string]: Partial<ServiceDetail> } = {
    "strategy-consulting": {
      title: "Conseil en Stratégie",
      tagline: "Naviguer dans la complexité, libérer de la valeur et tracer des trajectoires d'entreprise à fort impact.",
      overview: "Chez PESA Consulting Group, notre pôle de Conseil en Stratégie collabore avec les dirigeants pour définir leur vision, naviguer sur des marchés en mutation et aligner les investissements sur des performances durables. Nous apportons une rigueur analytique, des modèles financiers sur mesure et des feuilles de route exploitables.",
      challenges: [
        "Stagnation de la croissance ou baisse des marges dues à la commoditisation",
        "Inefficacité de l'allocation des ressources et faiblesses des projections financières",
        "Difficulté à pénétrer des marchés internationaux à barrières élevées ou à structurer des coentreprises",
        "Déconnexion entre la vision des dirigeants et l'exécution opérationnelle"
      ],
      approach: "Nous utilisons notre méthodologie exclusive PESA System—en nous ancrant d'abord sur la Raison d'être (Purpose) pour aligner les objectifs, puis en structurant des modèles stratégiques, en traçant l'expansion (Expansion) et en gérant l'assemblage (Assembly) des ressources pour exécuter en toute sécurité.",
      solutions: [
        "Modélisation financière d'entreprise et structuration du capital sur mesure",
        "Stratégies d'entrée sur le marché mondial et conseil en coentreprises",
        "Conseil en capital du programme EB-5 et structuration des investissements",
        "Intégration d'acquisitions et fusions (M&A) et audit de conformité",
        "Cadres de gouvernance d'entreprise et planification de la relève"
      ],
      benefits: [
        "Alignement unifié de la direction derrière un plan stratégique clair et exploitable",
        "Allocation de capital optimisée générant des rendements d'investissement supérieurs",
        "Navigation réussie à travers des réglementations internationales complexes",
        "Résilience renforcée de l'entreprise face à la volatilité macroéconomique"
      ],
      industries: ["Énergie & Mines", "Immobilier de Luxe", "Aviation Privée", "Private Equity", "Organismes Publics"],
      caseStudy: {
        title: "Structuration de 150M$ de capital d'infrastructure transfrontalier",
        clientType: "Consortium industriel multinational",
        challenge: "Le client devait lever des fonds et structurer ses opérations pour un grand projet d'énergie propre, mais se heurtait à des exigences réglementaires complexes.",
        solution: "PESA a conçu un cadre d'allocation de capital sur mesure et a obtenu des partenariats stratégiques avec des institutions sous des normes strictes.",
        result: "Flux de capitaux débloqués avec succès en 9 mois, garantissant une conformité totale et des processus standardisés."
      }
    },
    "technology-consulting": {
      title: "Conseil Technologique",
      tagline: "Architecturer des écosystèmes technologiques résilients et évolutifs alignés sur la croissance.",
      overview: "Nous aidons les organisations à transformer la technologie d'un centre de coûts en un puissant moteur de croissance. Notre pôle de Conseil Technologique fournit des conseils objectifs et experts sur l'architecture informatique, la modernisation des systèmes et l'optimisation des outils numériques.",
      challenges: [
        "Systèmes logiciels obsolètes ralentissant l'efficacité opérationnelle",
        "Plateformes de données cloisonnées incapables de communiquer entre elles",
        "Coûts de maintenance élevés pour le matériel obsolète et les applications personnalisées",
        "Projets technologiques mal alignés avec les objectifs stratégiques de l'entreprise"
      ],
      approach: "Nous réalisons un audit approfondi de votre parc applicatif actuel, cartographions les écarts, concevons une architecture évolutive et supervisons la mise en œuvre selon les meilleures pratiques DevSecOps.",
      solutions: [
        "Stratégie informatique d'entreprise et conception d'architecture d'entreprise",
        "Modernisation des systèmes existants et migration vers le cloud",
        "Sélection, mise en œuvre et optimisation de solutions ERP & CRM",
        "Évaluation des infrastructures informatiques et réduction du coût total de possession (TCO)",
        "Conseil en technologies émergentes (Intelligence Artificielle, Automatisation, IoT)"
      ],
      benefits: [
        "Réduction des coûts opérationnels informatiques de près de 30% grâce à la consolidation des systèmes",
        "Agilité organisationnelle accrue avec une infrastructure sécurisée basée sur le cloud",
        "Élimination de la dette technique pour soutenir une mise à l'échelle rapide de l'entreprise",
        "Équipes responsabilisées utilisant des outils numériques modernes et sans friction"
      ],
      industries: ["Services Financiers", "Santé & Pharma", "Logistique & Transport", "Distribution", "Secteur Industriel"],
      caseStudy: {
        title: "Modernisation des opérations pour un géant de la logistique",
        clientType: "Fournisseur mondial de chaîne d'approvisionnement",
        challenge: "Des systèmes de gestion des transports obsolètes et fragmentés entraînaient des retards de livraison et des frais de maintenance élevés.",
        solution: "PESA a repensé l'architecture d'entreprise, consolidant cinq systèmes existants en une plateforme cloud unifiée.",
        result: "Réduction des coûts d'entretien de la plateforme de 35% et amélioration de l'efficacité des tournées de 22%."
      }
    },
    "digital-transformation": {
      title: "Transformation Digitale",
      tagline: "Réimaginer l'expérience client, les modèles commerciaux et les opérations à l'ère du numérique.",
      overview: "La transformation digitale ne consiste pas seulement à adopter de nouvelles technologies, mais à repenser la façon dont votre organisation crée de la valeur. PESA travaille avec les entreprises pour automatiser les flux de travail clés et instaurer des cultures numériques centrées sur l'expérience client.",
      challenges: [
        "Disruption par des concurrents agiles natifs du numérique",
        "Parcours clients complexes et processus internes manuels sur papier",
        "Délais de commercialisation trop longs pour les nouveaux services ou produits",
        "Résistance des employés au changement et persistance des habitudes héritées"
      ],
      approach: "Nous commençons avec l'expérience du client final à l'esprit. Nous cartographions la chaîne de valeur, identifions les points de friction, concevons des flux de travail automatisés et accélérons l'adoption par un accompagnement structuré.",
      solutions: [
        "Évaluations de la maturité numérique et feuilles de route de transformation",
        "Cartographie du parcours client et stratégie UX/UI",
        "Automatisation des processus clés et ingénierie de flux sans papier",
        "Stratégie omnicanale et intégration de plateformes de commerce électronique",
        "Culture numérique et amélioration des compétences de la main-d'œuvre"
      ],
      benefits: [
        "Scores de satisfaction client inégalés et taux de fidélisation accrus",
        "Réduction drastique des délais de traitement des services de base",
        "Lancement plus rapide de produits grâce à des cadres de livraison continue",
        "Données exploitables pour affiner et personnaliser en permanence vos offres"
      ],
      industries: ["Banque & Assurance", "Hôtellerie de Luxe", "Produits de Grande Consommation", "Services Professionnels"],
      caseStudy: {
        title: "Réimaginer l'expérience client pour la gestion de patrimoine",
        clientType: "Cabinet de gestion de fortune sur mesure",
        challenge: "L'intégration des clients et la soumission des documents étaient manuelles, déroutantes et prenaient en moyenne 14 jours ouvrables.",
        solution: "PESA a développé un portail client sécurisé et automatisé avec signature électronique intégrée et suivi interactif.",
        result: "Le délai d'intégration est tombé à moins de 24 heures, augmentant la satisfaction client de 48%."
      }
    },
    "human-resources": {
      title: "Ressources Humaines",
      tagline: "Libérer le capital humain, cultiver les talents et concevoir des cultures de travail modernes.",
      overview: "Le principal avantage stratégique d'une organisation réside dans ses collaborateurs. Le pôle Ressources Humaines de PESA vous aide à acquérir, développer, retenir et inspirer des talents d'élite. Nous concevons des structures organisationnelles modernes et des systèmes de rémunération attractifs.",
      challenges: [
        "Rotation élevée du personnel et faible engagement des équipes",
        "Difficulté à attirer des profils internationaux spécialisés et hautement qualifiés",
        "Absence de plans de formation structurés et de parcours de leadership",
        "Politiques RH obsolètes non conformes aux normes du travail modernes"
      ],
      approach: "Nous construisons des programmes de capital humain sur mesure qui lient les stratégies de talent directement à vos objectifs commerciaux, en mettant en œuvre des structures méritocratiques.",
      solutions: [
        "Stratégie d'acquisition de talents et support au recrutement mondial",
        "Analyse comparative et structuration des salaires et avantages",
        "Programmes d'engagement des employés et audits culturels",
        "Systèmes de gestion des performances et référentiels de compétences",
        "Planification stratégique des effectifs et intégration de technologies RH"
      ],
      benefits: [
        "Rétention accrue des talents clés et réduction des frais de recrutement",
        "Collaborateurs hautement motivés et alignés sur la mission de l'entreprise",
        "Vivier interne solide pour les rôles de leadership et de direction",
        "Atténuation des risques juridiques grâce à des pratiques RH conformes et modernes"
      ],
      industries: ["Technologie", "Santé", "Aviation", "Ressources Naturelles", "Éducation"],
      caseStudy: {
        title: "Optimisation du recrutement international de cadres",
        clientType: "Groupe international de construction et d'immobilier",
        challenge: "L'entreprise peinait à pourvoir des postes de direction stratégique dans ses bureaux d'Amérique du Nord et d'Afrique.",
        solution: "PESA a mis en place une matrice d'acquisition unifiée et lancé un portail d'évolution de carrière transrégional.",
        result: "Réduction de 40% du délai d'embauche moyen et amélioration de la rétention des talents après 1 an, passant de 65% à 88%."
      }
    },
    "project-management": {
      title: "Gestion de Projet",
      tagline: "Exécuter des initiatives complexes dans les délais, le budget et avec une précision impeccable.",
      overview: "Les grandes idées exigent une exécution sans faille. Le pôle Gestion de Projet de PESA déploie des directeurs de projet certifiés et expérimentés pour piloter vos initiatives prioritaires. Nous apportons ordre, prévisibilité et dynamique aux programmes complexes.",
      challenges: [
        "Projets dépassant régulièrement le budget et manquant les échéances clés",
        "Manque de visibilité sur les portefeuilles de projets et goulets d'étranglement",
        "Mauvaise communication entre les équipes techniques et les décideurs",
        "Méthodologies incohérentes entraînant des résultats imprévisibles"
      ],
      approach: "Nous déployons des cadres PMO standardisés adaptés au niveau d'agilité de votre entreprise. Nous établissons une visibilité totale grâce à des tableaux de bord personnalisés et atténuons les risques.",
      solutions: [
        "Mise en place et optimisation de bureaux de gestion de projets (PMO) d'entreprise",
        "Services de redressement de programmes complexes en difficulté",
        "Coaching, formation et déploiement de méthodologies Agile & Scrum",
        "Stratégie d'allocation des ressources et planification des capacités",
        "Sélection et intégration d'outils logiciels de gestion de projet"
      ],
      benefits: [
        "Livraison prévisible des projets dans le respect du périmètre et du budget",
        "Transparence totale pour la direction générale quant à l'avancement des chantiers",
        "Utilisation optimisée des ressources, réduisant la surcharge de travail",
        "Méthodologies organisationnelles standardisées pour soutenir la croissance"
      ],
      industries: ["Immobilier & Aménagement", "Technologies de l'Information", "Mines", "Secteur Public", "Finance"],
      caseStudy: {
        title: "Sauvetage d'un projet d'intégration de système bloqué",
        clientType: "Autorité métropolitaine des transports",
        challenge: "Un projet d'intégration de billetterie moderne avait pris 12 mois de retard et accusait un dépassement de budget de 4 millions de dollars.",
        solution: "PESA a déployé une équipe de redressement, instauré une gouvernance rigoureuse et redéfini les livrables des fournisseurs.",
        result: "Projet livré avec succès en 8 mois d'intervention, évitant de nouveaux dépassements budgétaires."
      }
    },
    "change-management": {
      title: "Conduite du Changement",
      tagline: "Préparer vos équipes, stimuler l'adoption et pérenniser vos transformations.",
      overview: "Même la meilleure stratégie ou technologie échoue si vos équipes ne l'adoptent pas. Le pôle Conduite du Changement de PESA se concentre sur le facteur humain. Nous préparons et accompagnons vos employés à adopter de nouveaux processus et outils.",
      challenges: [
        "Résistance des employés aux nouveaux systèmes, entraînant une faible adoption",
        "Confusion et rumeurs lors des fusions d'entreprises ou réorganisations",
        "Manque d'implication visible des sponsors exécutifs dans la conduite du changement",
        "Programmes de formation qui ne parviennent pas à modifier les habitudes de travail"
      ],
      approach: "Nous appliquons des méthodologies structurées éprouvées (telles que Prosci ADKAR) pour évaluer l'impact des changements, bâtir des plans de communication et ancrer de nouveaux comportements.",
      solutions: [
        "Évaluations de la préparation au changement et cartographie des impacts",
        "Coaching de coalitions de sponsors et plans d'alignement du leadership",
        "Campagnes de communication ciblées pour les parties prenantes",
        "Programmes de formation sur mesure et cadres de responsabilisation",
        "Systèmes de suivi de l'adoption, d'audit et de renforcement"
      ],
      benefits: [
        "Adoption rapide et maîtrise élevée des nouveaux outils par les employés",
        "Perturbations opérationnelles minimales lors des transitions majeures",
        "Retour sur investissement des projets maximisé grâce à une utilisation optimale",
        "Culture d'entreprise hautement adaptable face aux évolutions futures"
      ],
      industries: ["Tous les secteurs en phase de transformation organisationnelle majeure"],
      caseStudy: {
        title: "Accompagnement du changement lors d'une fusion d'envergure",
        clientType: "Institution financière régionale",
        challenge: "La fusion de deux divisions exigeait de plus de 400 employés l'adoption de nouveaux flux de travail, générant de vives résistances.",
        solution: "PESA a mis en place une stratégie axée sur l'humain, en s'appuyant sur des 'champions du changement' et des parcours d'apprentissage personnalisés.",
        result: "Atteinte d'un taux d'adoption de 94% des nouveaux systèmes en 30 jours, sans aucune interruption de service."
      }
    },
    "business-process-improvement": {
      title: "Amélioration des Processus",
      tagline: "Éliminer le gaspillage, optimiser les flux de travail et maximiser l'efficacité opérationnelle.",
      overview: "Dans un paysage concurrentiel, l'efficacité opérationnelle est essentielle. Notre pôle d'Amélioration des Processus applique les principes du Lean et du Six Sigma pour analyser vos flux de travail existants, éliminer les goulets d'étranglement et automatiser les tâches.",
      challenges: [
        "Processus bureaucratiques lents retardant la livraison aux clients",
        "Taux élevés d'erreurs, de retouches et de pertes dans les transactions quotidiennes",
        "Incapacité à développer l'activité sans une augmentation linéaire des effectifs",
        "Absence de procédures standardisées entre les différents bureaux internationaux"
      ],
      approach: "Nous cartographions vos processus actuels ('as-is'), identifions les causes profondes des retards, concevons des processus cibles optimisés ('to-be') et ancrons une culture d'amélioration continue.",
      solutions: [
        "Audits de processus Lean Six Sigma et analyse des goulets d'étranglement",
        "Conception et standardisation des procédures opérationnelles (SOP)",
        "Évaluation des opportunités d'automatisation robotisée des processus (RPA)",
        "Initiatives de réduction des temps de cycle et des taux d'erreurs",
        "Tableaux de bord opérationnels et suivi des indicateurs clés de performance (KPI)"
      ],
      benefits: [
        "Réduction drastique des temps de cycle (généralement de 20% à 50%)",
        "Économies de coûts substantielles et marges opérationnelles accrues",
        "Amélioration de la conformité et qualité constante des livrables",
        "Équipes libérées des tâches administratives lourdes au profit d'activités à valeur"
      ],
      industries: ["Secteur Industriel", "Logistique", "Services Professionnels", "Finance", "Santé"],
      caseStudy: {
        title: "Optimisation de la logistique minière en Afrique centrale",
        clientType: "Entreprise de logistique minière éthique",
        challenge: "La saisie manuelle de la chaîne d'approvisionnement et des retards d'expédition provoquaient des goulets d'étranglement sur des routes minières stratégiques.",
        solution: "PESA a cartographié la chaîne logistique et mis en œuvre des procédures standardisées avec suivi numérique automatisé.",
        result: "Délais de livraison réduits de 28% et augmentation de 15% de la capacité globale d'expédition, sans ajout de véhicules."
      }
    },
    "data-analytics": {
      title: "Données & Analyses",
      tagline: "Transformer les données brutes en informations prédictives et exploitables.",
      overview: "La donnée est votre actif le plus précieux. Notre pôle Données & Analyses vous aide à capturer, nettoyer, organiser et analyser l'information pour prendre des décisions plus rapides et fiables. Des tableaux de bord interactifs à la modélisation prédictive, nous convertissons la complexité en clarté.",
      challenges: [
        "Surabondance de données mais manque d'informations concrètes et exploitables",
        "Données cloisonnées, incohérentes et peu fiables selon les logiciels utilisés",
        "Difficulté à suivre les indicateurs de performance (KPI) en temps réel",
        "Incapacité à anticiper les tendances de marché, l'attrition client ou la demande"
      ],
      approach: "Nous établissons une gouvernance des données solide, mettons en place des solutions de stockage modernes et concevons des tableaux de bord interactifs intuitifs et élégants.",
      solutions: [
        "Stratégie de données d'entreprise et cadres de gouvernance des données",
        "Mise en place d'entrepôts de données modernes (Data Warehouses/Lakes)",
        "Création de tableaux de bord de Business Intelligence interactifs (BI)",
        "Modèles d'analyse prédictive et de segmentation client",
        "Tableaux de bord de prévisions financières et d'allocation des coûts"
      ],
      benefits: [
        "Visibilité en temps réel sur les performances opérationnelles et financières",
        "Prise de décision accélérée appuyée sur des faits statistiques solides",
        "Précision accrue des prévisions, optimisant la gestion des ressources",
        "Identification des opportunités de revenus et des zones de fuite de coûts"
      ],
      industries: ["Distribution & E-commerce", "Services Financiers", "Énergie & Mines", "Private Equity", "Santé"],
      caseStudy: {
        title: "Unification des analyses pour un portefeuille immobilier",
        clientType: "Fiducie d'investissement en immobilier de luxe",
        challenge: "La direction passait 5 jours par mois à compiler manuellement des feuilles de calcul régionales pour calculer les rendements.",
        solution: "PESA a développé des flux de données automatisés regroupant les indicateurs des propriétés dans un tableau de bord en temps réel.",
        result: "Élimination complète du travail de reporting mensuel manuel, libérant des opportunités immédiates de tarification."
      }
    },
    "cybersecurity": {
      title: "Cybersécurité",
      tagline: "Sécuriser votre périmètre numérique, protéger la propriété intellectuelle et maintenir la conformité.",
      overview: "Avec l'expansion numérique, les cybermenaces se multiplient. Le pôle Cybersécurité de PESA propose une gestion complète des risques, des audits de conformité, une surveillance des menaces et des systèmes de réponse rapide pour protéger vos actifs stratégiques.",
      challenges: [
        "Vulnérabilité face aux ransomwares, au phishing et aux menaces persistantes",
        "Non-conformité avec les réglementations strictes (GDPR, SOC 2, HIPAA)",
        "Manque de sensibilisation des employés aux protocoles de sécurité numérique",
        "Incertitude quant à la sécurité des pratiques des fournisseurs tiers"
      ],
      approach: "Nous réalisons des évaluations de vulnérabilité, concevons des architectures 'Zero Trust', établissons des contrôles de détection 24h/24 et formons vos équipes.",
      solutions: [
        "Évaluations des risques de cybersécurité et tests d'intrusion",
        "Conception et mise en œuvre d'architectures de sécurité Zero Trust",
        "Audits d'écart de conformité réglementaire (SOC2, ISO 27001, GDPR)",
        "Planification de réponse aux incidents, simulations et gestion de crise",
        "Sensibilisation continue des employés et simulations de phishing"
      ],
      benefits: [
        "Protection complète contre les attaques perturbatrices et les fuites de données",
        "Conformité totale avec les lois mondiales de sécurité et de confidentialité",
        "Confiance renforcée des clients et investisseurs concernant la confidentialité",
        "Capacités de reprise ultra-rapides en cas d'incident de sécurité"
      ],
      industries: ["Banque & Finance", "Santé", "Organismes Publics", "Aviation Privée", "Infrastructures Critiques"],
      caseStudy: {
        title: "Sécurisation numérique pour un courtier en aviation",
        clientType: "Agence d'élite d'acquisition de jets privés",
        challenge: "La gestion de transactions de plusieurs millions de dollars faisait de la firme une cible privilégiée pour les fraudes par courriel.",
        solution: "PESA a déployé un protocole Zero Trust strict, sécurisant les messageries et instaurant des validations systématiques pour chaque virement.",
        result: "Atteinte d'un score de sécurité de 100% avec zéro incident sur 24 mois d'exploitation."
      }
    },
    "financial-advisory": {
      title: "Conseil Financier",
      tagline: "Structurer le capital, gérer les risques et mener à bien les transactions transfrontalières.",
      overview: "Le pôle Conseil Financier de PESA accompagne les organisations lors de transactions critiques, d'expansions de capital et de cadres réglementaires complexes. Nous nous spécialisons dans la finance transfrontalière et la trésorerie.",
      challenges: [
        "Difficultés à naviguer dans des lois fiscales internationales complexes",
        "Gestion inefficace des flux de trésorerie d'entreprise",
        "Coûts de capital élevés en raison d'une structure financière sous-optimisée",
        "Difficulté à préparer les portefeuilles financiers pour les audits institutionnels"
      ],
      approach: "Nous mobilisons des experts financiers et des trésoriers d'entreprise pour auditer vos actifs, optimiser vos réserves de trésorerie et concevoir des cadres fiscalement avantageux.",
      solutions: [
        "Structuration du capital transfrontalier et syndication de dettes",
        "Optimisation de la trésorerie d'entreprise et des flux de trésorerie",
        "Conseil en efficacité fiscale et conformité réglementaire",
        "Évaluation financière dans le cadre des fusions-acquisitions (M&A)",
        "Financement de projets et structuration de coentreprises internationales"
      ],
      benefits: [
        "Efficacité fiscale maximisée pour vos opérations internationales",
        "Liquidité des flux de trésorerie et rendements nettement améliorés",
        "Coût du capital réduit grâce à une structure financière optimisée",
        "Dossiers de transaction professionnels inspirant une totale confiance aux investisseurs"
      ],
      industries: ["Private Equity", "Mines & Ressources Naturelles", "Secteur du Bâtiment", "Gestion de Fortune", "Aviation"],
      caseStudy: {
        title: "Financement d'un complexe hôtelier éco-luxe",
        clientType: "Groupe de construction durable et d'hôtellerie",
        challenge: "Le client devait lever un mix de dettes et de capital mondial pour financer un projet d'aménagement de 45 millions de dollars.",
        solution: "PESA a structuré un ensemble de financement de projet fiscalement optimisé et mené les négociations avec des syndicats bancaires.",
        result: "Clôture réussie du tour de table avec un taux d'intérêt global inférieur de 1,5% aux estimations initiales."
      }
    },
    "training": {
      title: "Formation & Renforcement des Capacités",
      tagline: "Améliorer les compétences, cultiver les leaders et promouvoir l'excellence opérationnelle.",
      overview: "La croissance durable exige une culture d'apprentissage continu. Le pôle Formation de PESA conçoit et dispense des programmes de haut niveau, des formations techniques et des modules de conformité adaptés à vos défis.",
      challenges: [
        "Écarts de compétences ralentissant l'adoption de nouvelles technologies",
        "Manque d'intégration structurée ralentissant la productivité des recrues",
        "Difficultés à préparer les cadres intermédiaires à des rôles de direction",
        "Programmes de formation génériques peu engageants pour les collaborateurs"
      ],
      approach: "Nous réalisons des analyses des écarts de compétences, concevons des parcours d'apprentissage immersifs et mesurons l'impact direct de ces formations sur l'activité.",
      solutions: [
        "Programmes personnalisés de développement du leadership et de coaching",
        "Ateliers de perfectionnement technique et méthodologies Agile",
        "Conception de programmes d'intégration des nouveaux collaborateurs",
        "Campagnes de formation sur la sécurité, l'éthique et la conformité",
        "Stratégie de plateforme de gestion de l'apprentissage (LMS)"
      ],
      benefits: [
        "Main-d'œuvre hautement qualifiée et prête pour les évolutions du marché",
        "Temps d'intégration des nouveaux collaborateurs divisé par deux",
        "Vivier solide de futurs leaders internes alignés sur la vision",
        "Fidélisation des employés accrue grâce à un accompagnement de carrière continu"
      ],
      industries: ["Tous les secteurs désireux d'optimiser leurs talents et d'évoluer"],
      caseStudy: {
        title: "Développement des compétences de leadership pour 120 cadres",
        clientType: "Fournisseur régional d'infrastructures",
        challenge: "Une transition vers des opérations de haute technologie laissait les superviseurs sans les compétences de gestion requises.",
        solution: "PESA a créé un accélérateur de leadership sur 6 mois, combinant modules virtuels, coaching individuel et projets réels.",
        result: "Taux de réussite de 100%, 88% des participants ayant obtenu d'excellentes évaluations et lancé des innovations de processus."
      }
    },
    "government-consulting": {
      title: "Conseil au Secteur Public",
      tagline: "Renforcer les capacités institutionnelles, optimiser les services publics et structurer les politiques.",
      overview: "PESA accompagne les municipalités, États et gouvernements nationaux pour fournir des services publics efficaces, moderniser les systèmes d'information et planifier les infrastructures stratégiques, avec une intégrité absolue.",
      challenges: [
        "Lenteurs bureaucratiques freinant la délivrance des services aux citoyens",
        "Difficultés à mener à bien des projets d'infrastructure multi-institutionnels",
        "Systèmes d'information obsolètes exposant les données publiques aux risques",
        "Allocation inefficace des budgets publics et manque de transparence"
      ],
      approach: "Nous appliquons des cadres de gestion du secteur public rigoureux, veillons au respect des lois et nous concentrons sur la qualité de service pour le citoyen.",
      solutions: [
        "Stratégies de modernisation et de numérisation des services publics",
        "Structuration et conseil pour les partenariats public-privé (PPP)",
        "Évaluation des politiques publiques et audits opérationnels",
        "Analyse de l'impact réglementaire et appui à la rédaction de politiques",
        "Gestion de projets de capital et d'infrastructures publiques"
      ],
      benefits: [
        "Processus administratifs rationalisés, augmentant l'accès et la confiance",
        "Exécution dans les délais et budgets des grands chantiers publics",
        "Sécurité renforcée des registres des citoyens et des bases de données",
        "Impact des budgets publics maximisé grâce à une transparence totale"
      ],
      industries: ["Ministères Nationaux", "Agences d'État", "Autorités Municipales", "Services Publics"],
      caseStudy: {
        title: "Numérisation des licences commerciales municipales",
        clientType: "Administration d'une grande métropole",
        challenge: "L'obtention d'un permis d'exploitation prenait en moyenne 65 jours et exigeait 4 visites physiques, freinant l'économie locale.",
        solution: "PESA a conçu un portail d'enregistrement cloud de bout en bout et formé les équipes municipales aux flux optimisés.",
        result: "Délai d'obtention réduit à 5 jours, générant une hausse de 30% des créations d'entreprises la première année."
      }
    },
    "private-sector": {
      title: "Conseil au Secteur Privé",
      tagline: "Accélérer la croissance commerciale, optimiser les opérations et valoriser l'entreprise.",
      overview: "Notre pôle dédié au Secteur Privé collabore avec les créateurs de startups, les entreprises familiales et les ETI pour structurer leurs opérations, étendre leur présence géographique et optimiser leurs chaînes logistiques.",
      challenges: [
        "Difficultés de croissance entraînant des baisses de qualité de service",
        "Concurrence accrue réduisant les marges sur les produits ou services",
        "Absence de cadres commerciaux structurés freinant l'expansion",
        "Difficulté à obtenir des financements auprès de capitaux-investisseurs"
      ],
      approach: "Nous apportons une expertise pratique pour analyser vos flux, réorganiser l'appareil commercial et structurer une gouvernance d'entreprise professionnelle.",
      solutions: [
        "Stratégies de croissance commerciale et d'expansion géographique",
        "Réduction des coûts d'approvisionnement et de la chaîne logistique",
        "Réorganisation de la force de vente et optimisation de l'acquisition client",
        "Restructuration d'entreprise et amélioration globale des performances",
        "Professionnalisation pré-financement et préparation des dossiers de capital"
      ],
      benefits: [
        "Croissance durable du chiffre d'affaires et gains de parts de marché",
        "Marges bénéficiaires accrues grâce à des opérations rationalisées",
        "Structures organisationnelles évolutives capables d'intégrer de nouveaux effectifs",
        "Préparation de haut niveau menant à des levées de fonds à valorisation optimale"
      ],
      industries: ["Startups Technologiques", "Entreprises Familiales", "ETI Industrielles", "Services aux Entreprises"],
      caseStudy: {
        title: "Multiplication par 2,5 des capacités d'un fabricant de précision",
        clientType: "Fabricant de composants de précision",
        challenge: "L'augmentation rapide des commandes provoquait des goulots d'étranglement, des retards et une baisse des scores de qualité.",
        solution: "PESA a réorganisé les ateliers de fabrication, optimisé l'espace de stockage et déployé un outil CRM de planification en temps réel.",
        result: "Production augmentée de 150% en 12 mois, livraisons à l'heure rétablies à 99% et levée de fonds de 12 millions de dollars en Série B."
      }
    },
    "international-development": {
      title: "Développement International",
      tagline: "Structurer le développement durable, connecter les capitaux et transformer les territoires.",
      overview: "Le pôle Développement International de PESA collabore avec les banques de développement, les ONG et les nations souveraines pour structurer des projets d'infrastructure, d'énergie propre et d'éducation sur les marchés émergents.",
      challenges: [
        "Projets de développement peinant à atteindre l'autonomie financière",
        "Faible alignement de confiance entre les donateurs et les acteurs locaux",
        "Incapacité à mesurer et à prouver l'impact réel des projets sur les populations",
        "Difficultés à structurer des initiatives dans des juridictions complexes"
      ],
      approach: "Nous combinons des stratégies d'investissement privées avec une forte implication locale. Nous mettons en place des équipes sur le terrain et veillons au respect des critères ESG.",
      solutions: [
        "Études de faisabilité d'investissement et évaluation des risques en pays émergents",
        "Structuration de projets d'infrastructures durables et d'énergies renouvelables",
        "Programmes d'autonomisation économique locale et initiatives de microfinance",
        "Conception de cadres de suivi, d'évaluation et d'apprentissage (MEL)",
        "Gestion de la conformité ESG et concertation multi-acteurs"
      ],
      benefits: [
        "Programmes de développement pérennes et autonomes enrichissant l'économie locale",
        "Coopération et confiance totales de la part des leaders et groupes communautaires",
        "Indicateurs d'impact rigoureux et transparents pour les donateurs mondiaux",
        "Atténuation complète des risques environnementaux, sociaux et politiques"
      ],
      industries: ["Banques de Développement", "Fondations Donatrices", "ONG Internationales", "Agences Nationales"],
      caseStudy: {
        title: "Structuration de pôles agricoles durables en Afrique centrale",
        clientType: "Coopératives agricoles de RDC & Fonds de développement mondial",
        challenge: "Les petits agriculteurs manquaient d'infrastructures de stockage frigorifique, entraînant 45% de pertes de récoltes.",
        solution: "PESA a structuré un modèle de développement public-privé, implantant des hubs solaires et sécurisant des contrats d'achat directs.",
        result: "Les pertes de récoltes sont tombées sous les 5%, les revenus des foyers agricoles ont bondi de 65% et les hubs sont devenus autonomes en 18 mois."
      }
    }
  };

  const currentTranslation = language === "fr" ? frenchTranslations[serviceId] : null;

  // Active service object containing translations if active language is French
  const service: ServiceDetail = {
    ...baseService,
    title: currentTranslation?.title || baseService.title,
    tagline: currentTranslation?.tagline || baseService.tagline,
    overview: currentTranslation?.overview || baseService.overview,
    challenges: currentTranslation?.challenges || baseService.challenges,
    approach: currentTranslation?.approach || baseService.approach,
    solutions: currentTranslation?.solutions || baseService.solutions,
    benefits: currentTranslation?.benefits || baseService.benefits,
    industries: currentTranslation?.industries || baseService.industries,
    caseStudy: currentTranslation?.caseStudy ? {
      ...baseService.caseStudy,
      ...currentTranslation.caseStudy
    } : baseService.caseStudy
  };

  const IconMap: { [key: string]: any } = {
    Compass: Compass,
    Cpu: Cpu,
    RefreshCw: RefreshCw,
    Users: Users,
    Briefcase: Briefcase,
    Layers: Layers,
    Zap: Zap,
    BarChart3: BarChart3,
    Shield: Shield,
    TrendingUp: TrendingUp,
    GraduationCap: GraduationCap,
    Landmark: Landmark,
    Building: Building,
    Globe: Globe
  };

  const ServiceIcon = IconMap[service.iconName] || Briefcase;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="service-detail-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="service-detail-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center justify-center gap-2">
            <ServiceIcon className="w-4 h-4 text-blue-400" />
            <span>{language === "en" ? "PESA Consulting Divisions" : "Divisions de Conseil PESA"}</span>
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar: Services Navigation (4 Cols) */}
            <div className="lg:col-span-4 space-y-4" id="service-detail-sidebar">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
                  {language === "en" ? "All Service Divisions" : "Toutes les Divisions de Service"}
                </h4>
                
                <div className="flex flex-col gap-1.5 max-h-[450px] overflow-y-auto no-scrollbar pr-1">
                  {servicesDetailList.map((item) => {
                    const ItemIcon = IconMap[item.iconName] || Briefcase;
                    const isActive = item.id === serviceId;
                    const itemTitle = language === "fr" && frenchTranslations[item.id] 
                      ? frenchTranslations[item.id].title 
                      : item.title;

                    return (
                      <button
                        key={item.id}
                        onClick={() => onNavigate(`/services/${item.id}`)}
                        className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-sans font-bold flex items-center justify-between transition-all group ${
                          isActive 
                            ? "bg-blue-600 border-blue-600 text-white shadow-md" 
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-350"
                        }`}
                        id={`sidebar-link-${item.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <ItemIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-600"}`} />
                          <span className="truncate max-w-[180px]">{itemTitle}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Strict compliance reminder card */}
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300 font-extrabold">{t("PESA Compliance Policy")}</span>
                </div>
                <h5 className="font-sans text-xs font-bold">{language === "en" ? "Strict Wire-Transfer Payments Only" : "Paiements par Virement Bancaire Uniquement"}</h5>
                <p className="text-slate-400 text-[10px] leading-relaxed font-sans">
                  {language === "en"
                    ? "PESA Consulting Group enforces a strict ban on physical cash transactions. All contracts are financed exclusively via standard corporate bank transfers. Official banking details are delivered securely directly upon agreement execution."
                    : "Le Groupe PESA applique une interdiction stricte de transactions en espèces. Tous les contrats sont financés par virements bancaires professionnels standard. Les coordonnées bancaires officielles sont fournies de manière hautement sécurisée lors de la signature."}
                </p>
              </div>
            </div>

            {/* Right Main Body: Detailed Sections (8 Cols) */}
            <div className="lg:col-span-8 space-y-12" id="service-detail-main-content">
              
              {/* Overview & Core Purpose */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">{language === "en" ? "Division Deep-Dive" : "Analyse Détaillée"}</span>
                    <h3 className="font-sans text-xl font-bold text-slate-950">{language === "en" ? "Service Overview" : "Aperçu du Service"}</h3>
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
                  {service.overview}
                </p>
              </div>

              {/* Challenges vs. Solutions split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Challenges Panel */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span>{language === "en" ? "Common Client Challenges" : "Défis Courants des Clients"}</span>
                  </h4>
                  
                  <ul className="space-y-3">
                    {service.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-660 font-sans">
                        <span className="text-rose-500 shrink-0 font-bold mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Panel */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>{language === "en" ? "Tangible Benefits & Impact" : "Bénéfices Tangibles & Impacts"}</span>
                  </h4>
                  
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Methodology & Approach */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
                  {language === "en" ? "Our Strategic Approach" : "Notre Approche Stratégique"}
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans italic">
                  "{service.approach}"
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h5 className="font-sans text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">{language === "en" ? "Solution Deliverables:" : "Livrables de la Solution :"}</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.solutions.map((sol, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-800 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Served */}
              <div className="bg-slate-900 text-white rounded-xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-300 border-b border-slate-800 pb-3">
                  {language === "en" ? "Industries Served By This Practice" : "Secteurs d'Activité Servis par ce Pôle"}
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.industries.map((ind, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Panel */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600">
                    {language === "en" ? "Featured Case Study" : "Étude de Cas Vedette"}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">
                    {language === "en" ? `Client Type: ${service.caseStudy.clientType}` : `Type de Client : ${service.caseStudy.clientType}`}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900">
                    {service.caseStudy.title}
                  </h3>

                  <div className="space-y-3 font-sans text-xs">
                    <div>
                      <strong className="text-slate-900 uppercase tracking-widest text-[10px] block">{language === "en" ? "The Challenge:" : "Le Défi :"}</strong>
                      <p className="text-slate-600 mt-0.5">{service.caseStudy.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 uppercase tracking-widest text-[10px] block">{language === "en" ? "The Solution:" : "La Solution :"}</strong>
                      <p className="text-slate-600 mt-0.5">{service.caseStudy.solution}</p>
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                      <strong className="text-blue-900 uppercase tracking-widest text-[10px] block">{language === "en" ? "The Result:" : "Le Résultat :"}</strong>
                      <p className="text-blue-800 font-bold mt-0.5">{service.caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call To Action & Inquiry Form */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6" id="service-contact-form-section">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">{language === "en" ? "Inquire Globally" : "Inquiéter Globalement"}</span>
                  <h3 className="font-sans text-lg font-extrabold text-slate-950">
                    {language === "en" ? `Connect with the ${service.title} Desk` : `Contacter le Bureau ${service.title}`}
                  </h3>
                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    {language === "en"
                      ? "Submit your organization's criteria to PESA's global advisory division. An executive partner will correspond within 24 business hours."
                      : "Soumettez les critères de votre organisation auprès du pôle conseil de PESA. Un associé de direction vous répondra sous 24 heures ouvrables."}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-sm">{language === "en" ? "Secure Proposal Registered" : "Proposition Enregistrée avec Succès"}</h5>
                    <p className="text-xs">{language === "en" ? "Your inquiry was compiled and sent to our Executive Desk. All files are encrypted securely." : "Votre demande a été enregistrée de manière sécurisée et transmise à notre bureau exécutif."}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="service-inquiry-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Name *" : "Nom complet *"}</label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Jean Kabamba"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Professional Email *" : "Adresse email professionnelle *"}</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. j.kabamba@company.org"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Institution / Company Name" : "Institution / Nom de l'entreprise"}</label>
                      <input 
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="e.g. Kinshasa Commodities SA"
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Inquiry Details & Criteria *" : "Détails de la demande & Critères *"}</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={language === "en" ? "Detail your requirements, project timelines, and operational needs..." : "Détaillez vos besoins opérationnels, calendriers de projet et paramètres requis..."}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                        id="submit-service-inquiry-btn"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>{language === "en" ? "Submit Secure Criteria" : "Soumettre mes critères de conseil"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
