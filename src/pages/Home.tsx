import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, Cpu, RefreshCw, Users, Briefcase, Layers, Zap, BarChart3, 
  Shield, TrendingUp, GraduationCap, Landmark, Building, Globe, 
  ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Award, 
  Clock, ShieldAlert, Star, Mail, ArrowUpRight, Check, MapPin, Home as HomeIcon,
  Truck, Anchor
} from "lucide-react";
import { servicesDetailList } from "../servicesData";
import { useLanguage } from "../context/LanguageContext";
import { propertiesData, landListingsData } from "../data";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { language, t } = useLanguage();
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Dynamic rotating carousel for partners, events, etc.
  const carouselItems = language === "en" ? [
    { type: "Client Partner", name: "Dangote Industries Limited", logoText: "DIL", detail: "Strategic alignment on heavy industries, supply chain audit, and trade logistics." },
    { type: "Strategic Client", name: "Adé Brunch", logoText: "ADE", detail: "Strategic advisory on luxury hospitality expansion and cross-border operations." },
    { type: "Academic Partner", name: "KCA (Kuwaha Cloud Academy)", logoText: "KCA", detail: "Formulating technical capacity building and academic visa workflows." },
    { type: "Sovereign Utility", name: "SNEL", logoText: "SNEL", detail: "Operational audits on power grid distribution and sustainable energy systems." },
    { type: "Real Estate Alliance", name: "Competitive Edge Realty", logoText: "CER", detail: "Brokerage cooperation on high-value Texas residential listings." },
    { type: "Technology Partner", name: "SFM Technology", logoText: "SFM", detail: "Implementing secure enterprise infrastructure and digital transformations." }
  ] : [
    { type: "Partenaire Client", name: "Dangote Industries Limited", logoText: "DIL", detail: "Alignement stratégique sur les industries lourdes, l'audit et la logistique." },
    { type: "Client Stratégique", name: "Adé Brunch", logoText: "ADE", detail: "Conseil stratégique sur l'expansion hôtelière de luxe et les opérations." },
    { type: "Partenaire Académique", name: "KCA (Kuwaha Cloud Academy)", logoText: "KCA", detail: "Formulation de programmes de formation technique et visas d'études." },
    { type: "Utilitaire Souverain", name: "SNEL", logoText: "SNEL", detail: "Audits opérationnels sur les réseaux électriques et l'énergie durable." },
    { type: "Alliance Immobilière", name: "Competitive Edge Realty", logoText: "CER", detail: "Coopération de courtage sur les propriétés résidentielles de luxe." },
    { type: "Partenaire Technologique", name: "SFM Technology", logoText: "SFM", detail: "Déploiement d'infrastructures sécurisées et transformation digitale." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  // 2. Testimonials
  const testimonials = language === "en" ? [
    {
      quote: "PESA Consulting Group has redefined our understanding of international advisory. Under Camy Likobe's leadership, we structured an extremely complex cross-border financial model with absolute compliance and zero friction.",
      author: "David Vance",
      role: "Managing Director, Apex Global Holdings",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The digital transformation PESA engineered for our logistics framework completely eliminated our operational bottlenecks. Their commitment to deadlines, quality of work, and strict performance metrics is truly exceptional.",
      author: "Marie-Claire Boboy",
      role: "VP of Supply Chain, DRC Trade Union",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "We partnered with PESA for our master-planned real estate development in Texas. Their team handled environmental due diligence, municipal approvals, and structured private capital beautifully. A flawless corporate execution.",
      author: "Marcus Brody",
      role: "Principal Architect, Sundance Chateau Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ] : [
    {
      quote: "Le groupe de conseil PESA a redéfini notre vision de l'advisory international. Sous la direction de Camy Likobe, nous avons structuré un modèle financier transfrontalier extrêmement complexe avec une conformité absolue et zéro friction.",
      author: "David Vance",
      role: "Directeur Général, Apex Global Holdings",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "La transformation numérique conçue par PESA pour notre cadre logistique a complètement éliminé nos goulots d'étranglement opérationnels. Leur respect des délais, la qualité de leur travail et la rigueur de leurs indicateurs de performance sont exceptionnels.",
      author: "Marie-Claire Boboy",
      role: "Vice-présidente de la chaîne d'approvisionnement, DRC Trade Union",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Nous nous sommes associés à PESA pour notre projet d'aménagement immobilier au Texas. Leur équipe a parfaitement géré les audits environnementaux, les autorisations municipales et la structuration du capital privé. Une exécution d'entreprise sans faille.",
      author: "Marcus Brody",
      role: "Architecte Principal, Sundance Chateau Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const frenchServiceTranslations: Record<string, { title: string; overview: string }> = {
    "strategy-consulting": {
      title: "Conseil en Stratégie",
      overview: "Chez PESA Consulting Group, notre pôle de Conseil en Stratégie collabore avec les dirigeants pour définir leur vision, naviguer sur des marchés en mutation et aligner les investissements sur des performances durables. Nous apportons une rigueur analytique, des modèles financiers sur mesure et des feuilles de route exploitables."
    },
    "technology-consulting": {
      title: "Conseil Technologique",
      overview: "Nous aidons les organisations à transformer la technologie d'un centre de coûts en un puissant moteur de croissance. Notre pôle de Conseil Technologique fournit des conseils objectifs et experts sur l'architecture informatique, la modernisation des systèmes et l'optimisation des outils numériques."
    },
    "digital-transformation": {
      title: "Transformation Digitale",
      overview: "La transformation digitale ne consiste pas seulement à adopter de nouvelles technologies, mais à repenser la façon dont votre organisation crée de la valeur. PESA travaille avec les entreprises pour automatiser les flux de travail clés et instaurer des cultures numériques centrées sur l'expérience client."
    },
    "human-resources": {
      title: "Ressources Humaines",
      overview: "Le principal avantage stratégique d'une organisation réside dans ses collaborateurs. Le pôle Ressources Humaines de PESA vous aide à acquérir, développer, retenir et inspirer des talents d'élite. Nous concevons des structures organisationnelles modernes et des systèmes de rémunération attractifs."
    },
    "project-management": {
      title: "Gestion de Projet",
      overview: "Les grandes idées exigent une exécution sans faille. Le pôle Gestion de Projet de PESA déploie des directeurs de projet certifiés et expérimentés pour piloter vos initiatives prioritaires. Nous apportons ordre, prévisibilité et dynamique aux programmes complexes."
    },
    "change-management": {
      title: "Conduite du Changement",
      overview: "Même la meilleure stratégie ou technologie échoue si vos équipes ne l'adoptent pas. Le pôle Conduite du Changement de PESA se concentre sur le facteur humain. Nous préparons et accompagnons vos employés à adopter de nouveaux processus et outils."
    },
    "business-process-improvement": {
      title: "Amélioration des Processus",
      overview: "Dans un paysage concurrentiel, l'efficacité opérationnelle est essentielle. Notre pôle d'Amélioration des Processus applique les principes du Lean et du Six Sigma pour analyser vos flux de travail existants, éliminer les goulets d'étranglement et automatiser les tâches."
    },
    "data-analytics": {
      title: "Données & Analyses",
      overview: "La donnée est votre actif le plus précieux. Notre pôle Données & Analyses vous aide à capturer, nettoyer, organiser et analyser l'information pour prendre des décisions plus rapides et fiables. Des tableaux de bord interactifs à la modélisation prédictive, nous convertissons la complexité en clarté."
    },
    "cybersecurity": {
      title: "Cybersécurité",
      overview: "Avec l'expansion numérique, les cybermenaces se multiplient. Le pôle Cybersécurité de PESA propose une gestion complète des risques, des audits de conformité, une surveillance des menaces et des systèmes de réponse rapide pour protéger vos actifs stratégiques."
    },
    "financial-advisory": {
      title: "Conseil Financier",
      overview: "Le pôle Conseil Financier de PESA accompagne les organisations lors de transactions critiques, d'expansions de capital et de cadres réglementaires complexes. Nous nous spécialisons dans la finance transfrontalière et la trésorerie."
    },
    "training": {
      title: "Formation & Renforcement",
      overview: "La croissance durable exige une culture d'apprentissage continu. Le pôle Formation de PESA conçoit et dispense des programmes de haut niveau, des formations techniques et des modules de conformité adaptés à vos défis."
    },
    "government-consulting": {
      title: "Conseil au Secteur Public",
      overview: "PESA accompagne les municipalités, États et gouvernements nationaux pour fournir des services publics efficaces, moderniser les systèmes d'information et planifier les infrastructures stratégiques, avec une intégrité absolue."
    },
    "private-sector": {
      title: "Conseil au Secteur Privé",
      overview: "Notre pôle dédié au Secteur Privé collabore avec les créateurs de startups, les entreprises familiales et les ETI pour structurer leurs opérations, étendre leur présence géographique et optimiser leurs chaînes logistiques."
    },
    "international-development": {
      title: "Développement International",
      overview: "Le pôle Développement International de PESA collabore avec les banques de développement, les ONG et les nations souveraines pour structurer des projets d'infrastructure, d'énergie propre et d'éducation sur les marchés émergents."
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // 3. Lucide Icon Map for 14 services
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setNewsletterSubscribed(true);
      setEmailValue("");
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in" id="home-page-root">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-32 pb-24 md:py-44 text-white min-h-[95vh] flex flex-col justify-center bg-slate-950 isolate" id="hero">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20" id="hero-media-wrapper">
          <video
            ref={videoRef}
            src="https://uakg9u0vtibqfzny.public.blob.vercel-storage.com/Animate_storyboard_sequence_Pesa%E2%80%A6_202607042233.mp4"
            className="w-full h-full object-cover scale-100 transition-transform duration-700"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
        </div>

        {/* Minimal shadow overlay for legibility */}
        <div className="absolute inset-0 bg-black/40 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-950 to-transparent -z-10 pointer-events-none" />

        {/* Floating premium audio toggle */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-blue-600 hover:text-white px-3.5 py-2 rounded-full text-xs text-blue-300 font-mono border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer select-none active:scale-95"
            title={isMuted ? "Unmute Video" : "Mute Video"}
            id="hero-video-mute-toggle"
          >
            {isMuted ? "UNMUTE AUDIO" : "MUTE AUDIO"}
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 text-blue-300 border border-blue-500/30 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold">
                PESA Consulting Group LLC
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-sans text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.15] mb-6 uppercase"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.8)" }}
            >
              {language === "en" ? (
                <>
                  Turning Vision into <br className="hidden sm:inline" />
                  <span className="text-blue-400 font-black">Global Success</span>
                </>
              ) : (
                <>
                  Transformer la Vision en <br className="hidden sm:inline" />
                  <span className="text-blue-400 font-black">Succès Mondial</span>
                </>
              )}
            </h1>

            <p className="text-blue-300 text-xs sm:text-sm font-mono uppercase tracking-widest font-extrabold mb-4">
              {language === "en" 
                ? "Building Sustainable Businesses. Empowering Communities. Connecting Global Opportunities."
                : "Bâtir des Entreprises Durables. Autonomiser les Communautés. Connecter les Opportunités Mondiales."}
            </p>

            <p 
              className="text-slate-100 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-medium"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
            >
              {language === "en" ? (
                "A Global Consulting & Investment Corporation with Headquarters in the United States and Active Operations in Kinshasa, Democratic Republic of the Congo. Under President Camy Likobe, PESA Consulting Group delivers world-class consulting, infrastructure development, real estate solutions, mining logistics, technology services, environmental management, aviation solutions, and international education support."
              ) : (
                "Une Corporation Mondiale de Conseil et d'Investissement avec Siège aux États-Unis et Opérations Actives à Kinshasa, République Démocratique du Congo. Sous la présidence de Camy Likobe, PESA Consulting Group offre des services de conseil de classe mondiale, de développement d'infrastructures, de solutions immobilières, de logistique minière, de technologies, de gestion environnementale, d'aviation et d'éducation internationale."
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-slate-300 mb-8 uppercase tracking-widest">
              <span className="bg-blue-950/80 px-3 py-1 rounded border border-blue-800/60 font-bold text-blue-300">
                {language === "fr" ? "Expertise Globale" : "Global Expertise"}
              </span>
              <span className="text-blue-500">•</span>
              <span className="bg-blue-950/80 px-3 py-1 rounded border border-blue-800/60 font-bold text-blue-300">
                {language === "fr" ? "Impact Local en RDC" : "DRC Local Impact"}
              </span>
              <span className="text-blue-500">•</span>
              <span className="bg-blue-950/80 px-3 py-1 rounded border border-blue-800/60 font-bold text-blue-300">
                {language === "fr" ? "Solutions Réelles" : "Real Solutions"}
              </span>
            </div>

            {/* Official Brochure Branding: PESA Framework */}
            <div className="max-w-4xl mx-auto mb-10 p-6 sm:p-8 bg-blue-900/10 rounded-2xl border border-blue-500/20 text-center backdrop-blur-md animate-fade-in" id="pesa-acronym-showcase">
              <h4 className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.2em] text-blue-400 font-extrabold mb-6 text-center">
                PESA PHILOSOPHY: PURPOSE • EXPANSION • STRUCTURE • ASSEMBLY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                {/* Card P */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 border border-blue-400 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:scale-102 hover:shadow-blue-500/30">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-white uppercase tracking-widest block">
                    P • PURPOSE
                  </span>
                  <span className="text-[10px] text-blue-100 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Objectif" : "Purpose"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-white font-sans mt-3 text-center px-1 font-medium leading-relaxed">
                    {language === "fr" 
                      ? "Nous donnons un sens stratégique à chaque projet." 
                      : "We provide a strategic purpose and direction to every project."}
                  </p>
                </div>

                {/* Card E */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 border border-blue-400 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:scale-102 hover:shadow-blue-500/30">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-white uppercase tracking-widest block">
                    E • EXPANSION
                  </span>
                  <span className="text-[10px] text-blue-100 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Expansion" : "Expansion"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-white font-sans mt-3 text-center px-1 font-medium leading-relaxed">
                    {language === "fr" 
                      ? "Nous favorisons la croissance durable et l'innovation." 
                      : "We foster sustainable growth and continuous innovation."}
                  </p>
                </div>

                {/* Card S */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 border border-blue-400 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:scale-102 hover:shadow-blue-500/30">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-white uppercase tracking-widest block">
                    S • STRUCTURE
                  </span>
                  <span className="text-[10px] text-blue-100 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Structure" : "Structure"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-white font-sans mt-3 text-center px-1 font-medium leading-relaxed">
                    {language === "fr" 
                      ? "Nous mettons en place des bases solides et performantes." 
                      : "We establish robust, high-performance foundations."}
                  </p>
                </div>

                {/* Card A */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 border border-blue-400 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:scale-102 hover:shadow-blue-500/30">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-white uppercase tracking-widest block">
                    A • ASSEMBLY
                  </span>
                  <span className="text-[10px] text-blue-100 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Assemblage" : "Assembly"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-white font-sans mt-3 text-center px-1 font-medium leading-relaxed">
                    {language === "fr" 
                      ? "Nous coordonnons les ressources pour un impact maximal." 
                      : "We coordinate resources for maximum global impact."}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <button
                onClick={() => onNavigate("/contact")}
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs rounded-lg shadow-lg hover-blue-glow transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                id="hero-request-consultation-cta"
              >
                <span>{language === "fr" ? "Demander un Conseil" : "Request Consultation"}</span>
              </button>
              
              <button
                onClick={() => onNavigate("/services")}
                className="px-4 py-3 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 font-sans font-bold text-xs rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                id="hero-explore-services-cta"
              >
                <span>{language === "fr" ? "Explorer nos Services" : "Explore Our Services"}</span>
              </button>

              <button
                onClick={() => onNavigate("/partnerships")}
                className="px-4 py-3 bg-slate-900/90 hover:bg-slate-800 text-blue-300 border border-blue-500/30 font-sans font-bold text-xs rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                id="hero-become-partner-cta"
              >
                <span>{language === "fr" ? "Devenir Partenaire" : "Become a Partner"}</span>
              </button>

              <button
                onClick={() => onNavigate("/services/investment-global-partnerships")}
                className="px-4 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-bold text-xs rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                id="hero-invest-cta"
              >
                <span>{language === "fr" ? "Investir avec Nous" : "Invest With Us"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC PARTNER SECTION (CAROUSEL) ================= */}
      <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-center font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold">
            {t("PESA Network Portfolio, Events & Alliances")}
          </p>
          
          <div className="relative max-w-5xl mx-auto" id="partners-carousel-wrapper">
            <div className="flex items-center justify-between gap-6 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Active carousel items */}
                {carouselItems.slice(activePartnerIndex % (carouselItems.length - 1), (activePartnerIndex % (carouselItems.length - 1)) + 2).map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 shadow-md flex items-start gap-4 transition-all duration-500 hover:border-blue-500/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 font-mono font-black text-xs border border-blue-900/40">
                      {item.logoText}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest block font-bold mb-1">
                        {item.type}
                      </span>
                      <h4 className="text-white font-sans text-sm font-bold tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 font-sans">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 mt-5">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePartnerIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activePartnerIndex === index ? "bg-blue-500 w-5" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  id={`dot-partner-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PESA DIVISION (WHO WE ARE) ================= */}
      <section className="py-24 bg-white" id="about-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Block */}
            <div className="lg:col-span-5 relative" id="about-visual-container">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                  alt="PESA Consulting Executive Suite" 
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold mb-1">
                    {language === "en" ? "Dual Operational Hubs" : "Pôles Opérationnels"}
                  </span>
                  <p className="font-sans text-lg font-extrabold">
                    {language === "en" ? "United States & Kinshasa, DRC" : "États-Unis & Kinshasa, RDC"}
                  </p>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {language === "en" ? "Connecting Global Markets Through Strategic Partnerships" : "Connecter les Marchés Mondiaux via des Partenariats Stratégiques"}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-10"></div>
            </div>

            {/* Content Block */}
            <div className="lg:col-span-7 space-y-6" id="about-content-container">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                  {language === "en" ? "Who We Are" : "Qui Nous Sommes"}
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  {language === "en" ? "We Build Businesses That Transform Nations" : "Nous Bâtissons des Entreprises qui Transforment les Nations"}
                </h2>
                <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {language === "en" 
                  ? "PESA Consulting Group is an international consulting and business development corporation dedicated to creating sustainable economic growth across Africa, North America, Europe, Asia, and emerging markets. Founded on integrity, innovation, and excellence, our organization brings together experienced professionals from multiple industries to provide comprehensive solutions for public institutions, private enterprises, investors, and individuals."
                  : "PESA Consulting Group est une corporation internationale de conseil et de développement d'affaires dédiée à la création d'une croissance économique durable en Afrique, Amérique du Nord, Europe, Asie et marchés émergents. Fondée sur l'intégrité, l'innovation et l'excellence, notre organisation rassemble des professionnels expérimentés de divers secteurs pour fournir des solutions globales."
                }
              </p>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our multidisciplinary approach enables clients to work with one trusted organization capable of delivering expertise across consulting, engineering, technology, real estate, environmental services, logistics, education, aviation, and international investment."
                  : "Notre approche multidisciplinaire permet aux clients de collaborer avec une seule organisation de confiance capable de fournir une expertise intégrée dans le conseil, l'ingénierie, les technologies, l'immobilier, les services environnementaux, la logistique, l'éducation et les investissements."
                }
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="font-sans text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>{language === "en" ? "OUR MISSION" : "NOTRE MISSION"}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {language === "en"
                      ? "To empower businesses, governments, investors, and communities through innovative consulting, sustainable development, strategic partnerships, and world-class professional services that drive economic growth and improve lives worldwide."
                      : "Autonomiser les entreprises, gouvernements, investisseurs et communautés grâce à des conseils innovants, un développement durable et des partenariats stratégiques mondiaux."
                    }
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span>{language === "en" ? "OUR VISION" : "NOTRE VISION"}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {language === "en"
                      ? "To become one of the world's most respected multinational consulting and investment organizations, recognized for transforming industries, strengthening communities, and connecting global opportunities."
                      : "Devenir l'une des organisations multinationales de conseil et d'investissement les plus respectées au monde, reconnue pour transformer les industries et renforcer les communautés."
                    }
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("/about")}
                  className="px-6 py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                  id="about-learn-more-btn"
                >
                  <span>{language === "en" ? "Read Our Full Corporate Story" : "Lire Notre Histoire D'Entreprise"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR CORE VALUES SECTION ================= */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800" id="core-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold">
              {language === "en" ? "Pillars of Excellence" : "Piliers d'Excellence"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight">
              {language === "en" ? "Our Core Corporate Values" : "Nos Valeurs Fondamentales d'Entreprise"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
            <p className="text-slate-400 text-xs sm:text-sm font-sans pt-2">
              {language === "en" 
                ? "Every decision, partnership, and strategy at PESA Consulting Group is anchored in these eight fundamental principles."
                : "Chaque décision, partenariat et stratégie chez PESA Consulting Group est ancré dans ces huit principes fondamentaux."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { titleEn: "Integrity", titleFr: "Intégrité", descEn: "Honesty and uncompromising ethical standards in all global dealings.", descFr: "Honnêteté et normes éthiques intransigeantes." },
              { titleEn: "Innovation", titleFr: "Innovation", descEn: "Forward-thinking strategies that turn disruption into economic value.", descFr: "Stratégies d'avant-garde transformant le changement en valeur." },
              { titleEn: "Professional Excellence", titleFr: "Excellence Professionnelle", descEn: "Unforgiving rigor and world-class standards of execution.", descFr: "Rigueur absolue et standards d'exécution de premier ordre." },
              { titleEn: "Transparency", titleFr: "Transparence", descEn: "Openness, zero-cash wire compliance, and clear client communications.", descFr: "Transparence totale, conformité zéro-cash et clarté." },
              { titleEn: "Sustainability", titleFr: "Durabilité", descEn: "Long-term environmental, economic, and social stewardship.", descFr: "Gestion environnementale, économique et sociale durable." },
              { titleEn: "Accountability", titleFr: "Responsabilité", descEn: "Full responsibility for measurable results and client commitments.", descFr: "Pleine responsabilité des résultats mesurables." },
              { titleEn: "Global Collaboration", titleFr: "Collaboration Globale", descEn: "Bridging North America, Africa, Europe, Asia, and emerging markets.", descFr: "Relier l'Amérique du Nord, l'Afrique, l'Europe et l'Asie." },
              { titleEn: "Community Development", titleFr: "Développement Communautaire", descEn: "Empowering local communities and creating job opportunities.", descFr: "Autonomiser les communautés et créer des emplois." }
            ].map((val, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 p-5 rounded-xl border border-slate-800/90 shadow-md space-y-2 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 font-mono text-xs font-bold border border-blue-900/40 mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-sans text-sm font-bold text-white tracking-tight">
                  {language === "fr" ? val.titleFr : val.titleEn}
                </h4>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  {language === "fr" ? val.descFr : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMINENT DRC OPERATIONS HUB SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-950 text-white relative overflow-hidden" id="drc-operations-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono uppercase tracking-widest font-extrabold">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Kinshasa, Democratic Republic of the Congo</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                {language === "en" 
                  ? "Proudly Serving the Democratic Republic of the Congo"
                  : "Fièrement au Service de la République Démocratique du Congo"}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "PESA Consulting Group is honored to contribute to the sustainable economic development of the Democratic Republic of the Congo. Operating from Kinshasa, we collaborate with public institutions, private enterprises, investors, international organizations, and local communities to develop projects that strengthen infrastructure, improve public services, encourage responsible resource development, and create employment opportunities."
                  : "PESA Consulting Group est honoré de contribuer au développement économique durable de la République Démocratique du Congo. Travaillant depuis Kinshasa, nous collaborons avec des institutions publiques, des entreprises privées, des investisseurs et des organisations internationales."}
              </p>

              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
                  {language === "en" ? "Central Africa Operations Hub" : "Pôle Opérationnel Afrique Centrale"}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {language === "en"
                    ? "Our presence in Kinshasa allows us to support clients with on-the-ground market intelligence, regulatory guidance, project implementation, stakeholder engagement, and strategic partnerships."
                    : "Notre présence à Kinshasa nous permet d'accompagner nos clients avec une intelligence du marché local, un guidage réglementaire et une mise en œuvre de projets sur le terrain."}
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate("/offices")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === "en" ? "View DRC Office Details" : "Voir le Bureau de Kinshasa"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-6">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-white border-b border-slate-800 pb-4">
                  {language === "en" ? "DRC Active Operations & Service Capabilities" : "Domaines d'Opérations Actives en RDC"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                  {[
                    "Strategic Government Advisory",
                    "Public-Private Partnership (PPP) Development",
                    "Infrastructure & Construction Consulting",
                    "Mining & Mineral Logistics",
                    "Renewable Energy Projects",
                    "Water & Environmental Management",
                    "Waste Management Solutions",
                    "Business Formation & Investment Facilitation",
                    "International Trade Advisory",
                    "Engineering & Project Management",
                    "Real Estate Development",
                    "Community Development Initiatives",
                    "Workforce Development & Training",
                    "Technology & Digital Transformation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES PREVIEW GRID ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
              {language === "en" ? "Consulting Expertise" : "Expertise en Conseil"}
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              {language === "en" ? "Our Professional Services" : "Nos Services Professionnels"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              {language === "en"
                ? "Explore our comprehensive divisions. Click on any card below to dive deep into custom solutions, case studies, and methodologies."
                : "Explorez nos divisions complètes. Cliquez sur une carte ci-dessous pour plonger au cœur de nos solutions sur mesure, études de cas et méthodologies."
              }
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-wrapper">
            {servicesDetailList.map((service) => {
              const ServiceIcon = IconMap[service.iconName] || Briefcase;
              const isFr = language === "fr";
              const title = isFr ? (frenchServiceTranslations[service.id]?.title || service.title) : service.title;
              const overview = isFr ? (frenchServiceTranslations[service.id]?.overview || service.overview) : service.overview;

              return (
                <div 
                  key={service.id}
                  onClick={() => onNavigate(`/services/${service.id}`)}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                  id={`service-card-${service.id}`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed font-sans">
                        {overview}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                    <span>{language === "en" ? "Explore Division" : "Découvrir la Division"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= FEATURED REAL ESTATE & ACREAGE SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60" id="featured-realty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono uppercase tracking-widest font-extrabold">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Somptueux Realty LLC</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              {language === "en" ? "Featured Real Estate & Acreage" : "Immobilier de Prestige & Terrains"}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
              {language === "en"
                ? "View high-value properties and strategic development lands managed by our certified elite brokers under President Camy Likobe."
                : "Découvrez des propriétés de prestige et des terrains de développement stratégiques gérés par nos courtiers d'élite certifiés sous la direction du Président Camy Likobe."
              }
            </p>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Properties Grid */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold border-b border-slate-200 pb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                {language === "en" ? "Featured Luxury Properties" : "Propriétés de Luxe Sélectionnées"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {propertiesData.filter(p => p.featured).slice(0, 3).map((property) => (
                  <div 
                    key={property.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group animate-fade-in"
                    id={`home-property-card-${property.id}`}
                  >
                    <div>
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white font-mono text-xs font-extrabold px-3 py-1.5 rounded shadow-md border border-blue-500">
                          {property.price}
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                          {property.title}
                        </h4>
                        <p className="text-xs text-slate-500 flex items-start gap-1.5 font-sans leading-normal">
                          <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{property.address}</span>
                        </p>
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                          <div className="text-center bg-slate-50 py-1.5 rounded">
                            <span className="font-extrabold text-slate-800 block">{property.beds}</span>
                            <span>{language === "en" ? "Beds" : "Lits"}</span>
                          </div>
                          <div className="text-center bg-slate-50 py-1.5 rounded">
                            <span className="font-extrabold text-slate-800 block">{property.baths}</span>
                            <span>{language === "en" ? "Baths" : "Bains"}</span>
                          </div>
                          <div className="text-center bg-slate-50 py-1.5 rounded">
                            <span className="font-extrabold text-slate-800 block">{property.sqft}</span>
                            <span>{language === "en" ? "SqFt" : "SqFt"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                      <button 
                        onClick={() => onNavigate("/realty")}
                        className="w-full py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-sans font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-1.5 group-hover:bg-blue-600"
                      >
                        <span>{language === "en" ? "Inquire Now" : "S'informer"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold border-b border-slate-200 pb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                {language === "en" ? "Strategic Development Lands" : "Terrains de Développement Stratégiques"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {landListingsData.slice(0, 2).map((land) => (
                  <div 
                    key={land.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col sm:flex-row group animate-fade-in"
                    id={`home-land-card-${land.id}`}
                  >
                    <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                      <img 
                        src={land.image} 
                        alt={land.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white font-mono text-[10px] font-extrabold px-2.5 py-1 rounded shadow-md border border-emerald-500">
                        {land.acres}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                            {land.title}
                          </h4>
                          <span className="text-xs font-mono font-extrabold text-blue-600">{land.price}</span>
                        </div>
                        <p className="text-xs text-slate-500 flex items-start gap-1.5 font-sans leading-normal">
                          <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{land.location}</span>
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-sans pt-1">
                          {land.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <button 
                          onClick={() => onNavigate("/realty")}
                          className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <span>{language === "en" ? "View Land Details" : "Détails du Terrain"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <button 
              onClick={() => onNavigate("/realty")}
              className="px-8 py-3.5 bg-[#0A2540] hover:bg-blue-600 text-white text-xs font-sans font-extrabold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>{language === "en" ? "Explore Full Realty Portfolio" : "Explorer le Portefeuille Immobilier"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE PESA (STATS) ================= */}
      <section className="py-24 bg-[#0A2540] text-white relative overflow-hidden" id="why-choose-pesa">
        <div className="absolute inset-0 bg-radial from-slate-900 via-transparent to-transparent pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold block">
                {language === "en" ? "Performance Record" : "Historique de Performance"}
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                {language === "en" ? "Why Visionary Leaders Trust PESA Group" : "Pourquoi les Dirigeants Visionnaires Font Confiance au Groupe PESA"}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our approach blends world-class consulting standards with absolute tactical execution. We measure our achievements based on real financial outcomes and successful regulatory compliance."
                  : "Notre approche associe des standards de conseil de classe mondiale à une exécution tactique absolue. Nous mesurons nos réalisations sur la base de résultats financiers réels et d'une conformité réglementaire rigoureuse."
                }
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">10+ {language === "en" ? "Years" : "Ans"}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Experience" : "Expérience"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Elite advisory history and asset procurement networks."
                    : "Historique d'advisory d'élite et réseaux d'approvisionnement d'actifs."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">300+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Projects Delivered" : "Projets Livrés"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Successful cross-border and corporate advisory setups."
                    : "Configurations d'advisory d'entreprise et transfrontalières réussies."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">30+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Countries Served" : "Pays Desservis"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Managing international investment visas and logistics."
                    : "Gestion de visas d'investissement internationaux et de la logistique."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">100%</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Approval Record" : "Taux d'Approbation"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Adjudicated approval rate for global study & EB-5 visas."
                    : "Taux d'approbation certifié pour les visas d'études et EB-5."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block tracking-tight">
                  {language === "en" ? "STRICT B wire only" : "VIREMENT UNIQUEMENT"}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Strict Compliance" : "Strict Conformité"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Zero cash handling. Transparent corporate governance and bank-to-bank compliance audits."
                    : "Aucune manipulation d'espèces. Gouvernance d'entreprise transparente et audits de conformité bancaires."
                  }
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURED BUSINESS SECTOR: SOMPTUEUX MINERALS ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800" id="featured-minerals">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[10px] font-mono uppercase tracking-widest font-extrabold">
              <Truck className="w-3.5 h-3.5 text-blue-400" />
              <span>Somptueux Minerals • DRC Sector</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              {language === "en" 
                ? "Mining • Mineral Logistics • Transportation • Investment" 
                : "Mines • Logistique Minérale • Transport • Investissement"}
            </h2>
            <p className="font-serif italic text-blue-400 text-lg sm:text-xl">
              "{language === "en" ? "Connecting Mineral Resources to Global Markets" : "Connecter les Ressources Minières aux Marchés Mondiaux"}"
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
              {language === "en"
                ? "Developing reliable mineral transportation and logistics infrastructure in the Democratic Republic of Congo (DRC) connecting mining operations with processing facilities, warehouses, and international supply chains."
                : "Développement d'infrastructures de transport et de logistique minérale fiables en République Démocratique du Congo (RDC), reliant les exploitations minières aux usines de traitement, entrepôts et chaînes d'approvisionnement mondiales."}
            </p>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
                  {language === "en" 
                    ? "Building the Logistics Infrastructure Behind the DRC's Mineral Economy" 
                    : "Bâtir l'Infrastructure Logistique au Cœur de l'Économie Minière"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === "en"
                    ? "PESA Group is seeking strategic investors, financial partners, logistics companies and industry partners to participate in the development of reliable mineral transportation and logistics infrastructure."
                    : "Le Groupe PESA recherche des investisseurs stratégiques, des partenaires financiers, des compagnies logistiques et des acteurs industriels pour participer au développement d'une infrastructure de transport minier pérenne."}
                </p>
              </div>

              {/* Approach chain teaser */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono uppercase text-blue-400 font-bold tracking-widest block">
                  {language === "en" ? "Integrated Value Chain Pipeline" : "Chaîne de Valeur Intégrée"}
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-200">
                  <span className="bg-slate-800 px-2 py-1 rounded">Mining Site</span>
                  <span className="text-blue-500">→</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Collection</span>
                  <span className="text-blue-500">→</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Transportation</span>
                  <span className="text-blue-500">→</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Storage</span>
                  <span className="text-blue-500">→</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Processing</span>
                  <span className="text-blue-500">→</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Export</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate("/minerals")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono uppercase tracking-widest font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{language === "en" ? "Explore Somptueux Minerals" : "Découvrir Somptueux Minerals"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate("/minerals")}
                  className="px-6 py-3 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 rounded-lg text-xs font-mono uppercase tracking-widest font-bold transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{language === "en" ? "Invest With Us" : "Investir avec Nous"}</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Somptueux Minerals Fleet Logistics" 
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">DRC Infrastructure</span>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {language === "en" 
                      ? "Heavy-duty truck fleets, secured regional hubs, and cross-border mineral logistics corridors." 
                      : "Flottes de camions lourds, hubs régionaux sécurisés et corridors logistiques transfrontaliers."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS SLIDER ================= */}
      <section className="py-24 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
              {language === "en" ? "Client Feedback" : "Retours Clients"}
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              {language === "en" ? "Testimonials From Global Leaders" : "Témoignages de Dirigeants Mondiaux"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto relative px-12" id="testimonial-slider">
            {/* Nav Arrows */}
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer select-none"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer select-none"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Quote block */}
            <div className="space-y-6 transition-all duration-500" id="active-testimonial-panel">
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="font-sans text-base sm:text-lg md:text-xl text-slate-700 italic leading-relaxed max-w-2xl mx-auto">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].author}
                  className="w-10 h-10 rounded-full border border-slate-200" 
                />
                <div className="text-left">
                  <h5 className="font-sans text-xs font-bold text-slate-900">
                    {testimonials[activeTestimonial].author}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= LATEST INSIGHTS ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                {language === "en" ? "Thought Leadership" : "Pensée Stratégique"}
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                {language === "en" ? "Latest Insights & Research" : "Dernières Analyses & Recherches"}
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
            </div>

            <button
              onClick={() => onNavigate("/resources")}
              className="mt-4 md:mt-0 px-5 py-2.5 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-lg text-slate-700 transition-all cursor-pointer flex items-center gap-2"
              id="view-all-insights-btn"
            >
              <span>{language === "en" ? "View Knowledge Center" : "Voir le Centre de Connaissances"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="insights-grid-wrapper">
            
            {/* Article 1 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" 
                    alt="Strategic Advisory Research" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "White Paper" : "Livre Blanc"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "July 10, 2026 // Strategy" : "10 Juillet 2026 // Stratégie"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en" 
                      ? "Multi-Jurisdictional Capital Allocations & Offshore Regulatory Structures" 
                      : "Allocations de capital multi-juridictionnelles & structures réglementaires offshore"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "A deep dive into cross-border tax compliance, project pre-financing frameworks, and securing direct investor alignment on infrastructure deals."
                      : "Une analyse approfondie de la conformité fiscale transfrontalière, des cadres de préfinancement de projet et de la sécurisation des investisseurs sur les accords d'infrastructure."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Article" : "Lire l'Article"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" 
                    alt="Cybersecurity Systems" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "Research Report" : "Rapport de Recherche"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "June 28, 2026 // Cybersecurity" : "28 Juin 2026 // Cybersécurité"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en"
                      ? "Securing Multi-Channel Advisory Portals in the Era of AI & Zero Trust"
                      : "Sécurisation des portails de conseil multi-canaux à l'ère de l'IA & du Zero Trust"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "How enterprise consulting groups are auditing wire transfers, eliminating physical cash transactions, and enforcing cryptographically validated documentation pipelines."
                      : "Comment les groupes de conseil auditent les virements, éliminent les transactions en espèces et imposent des flux documentaires cryptographiquement validés."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Report" : "Lire le Rapport"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400" 
                    alt="Talent Management Meeting" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "Case Study" : "Étude de Cas"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "May 15, 2026 // Case Study" : "15 Mai 2026 // Étude de Cas"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en"
                      ? "The PESA Method: Executing Complete Business Transformation for 1,200 Scholars"
                      : "La méthode PESA : réussir la transformation complète pour 1 200 boursiers"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "An in-depth look at how PESA Education restructured study visa compliance, ensuring 100% approval ratings across selected partner academic institutions."
                      : "Un aperçu détaillé de la façon dont PESA Education a restructuré la conformité des visas d'études, garantissant des taux d'approbation de 100%."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Study" : "Lire l'Étude"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <Mail className="w-3.5 h-3.5 text-blue-400 ml-1" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 font-extrabold pr-2">
              {language === "en" ? "Secure Publication" : "Publication Sécurisée"}
            </span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
            {language === "en" ? "Stay informed through our newsletter" : "Restez informé grâce à notre newsletter"}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Receive the latest job opportunities, company news and industry insights delivered straight from our Executive Desk."
              : "Recevez les dernières opportunités de carrière, les actualités de l'entreprise et les analyses sectorielles directement de notre bureau exécutif."
            }
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-4" id="newsletter-form">
            {newsletterSubscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-center gap-3 animate-fade-in text-emerald-300">
                <Check className="w-5 h-5" />
                <span className="text-xs font-semibold">
                  {language === "en"
                    ? "Thank you for subscribing! We have registered your secure portal link."
                    : "Merci pour votre abonnement ! Nous avons enregistré votre lien de portail sécurisé."
                  }
                </span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input 
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder={language === "en" ? "Enter your professional email address" : "Saisissez votre adresse e-mail professionnelle"}
                  className="w-full bg-slate-900 hover:bg-slate-900/80 focus:bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-500 transition-all font-sans"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg hover-blue-glow transition-all duration-300 shrink-0 cursor-pointer"
                  id="newsletter-subscribe-btn"
                >
                  {language === "en" ? "Subscribe" : "S'abonner"}
                </button>
              </div>
            )}
          </form>

          <p className="text-[10px] text-slate-500 font-mono leading-normal max-w-lg mx-auto">
            {language === "en"
              ? "* By subscribing, you agree to receive strategic briefs from PESA Consulting. Your email is encrypted and never shared with third parties. You may unsubscribe securely at any time."
              : "* En vous abonnant, vous acceptez de recevoir des notes stratégiques de PESA Consulting. Votre e-mail est chiffré et ne sera jamais partagé. Vous pouvez vous désabonner en toute sécurité à tout moment."
            }
          </p>

        </div>
      </section>

    </div>
  );
}
