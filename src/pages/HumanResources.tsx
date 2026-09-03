import React, { useState } from "react";
import { 
  Users, UserPlus, GraduationCap, Award, Heart, CheckCircle, 
  Send, ShieldCheck, ArrowRight, Briefcase, FileText, Check, 
  Search, Upload, UserCheck, Target, BarChart2, Layers, Compass,
  Clock, FileUp, Sparkles, CheckCircle2, ChevronRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HumanResources() {
  const { language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedService, setSelectedService] = useState<"recruitment" | "training" | "placement" | "evaluation">("recruitment");
  
  // File upload state for candidate CV
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceArea: "Personnel Placement",
    desiredRole: "",
    experienceYears: "5-10 years",
    resumeLink: "",
    statement: ""
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, desiredRole: jobTitle }));
    const element = document.getElementById("submit-cv-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceArea: "Personnel Placement",
          desiredRole: "",
          experienceYears: "5-10 years",
          resumeLink: "",
          statement: ""
        });
        setCvFile(null);
        setSelectedJob("");
      }, 6000);
    }
  };

  // 1. Personnel Management Sub-pillars
  const personnelPillars = {
    recruitment: {
      id: "recruitment",
      title: language === "en" ? "1. Recruitment (Recrutement)" : "1. Recrutement",
      tagline: language === "en" ? "Executive Search & Cross-Border Sourcing" : "Chasse de Têtes & Recrutement Transfrontalier",
      desc: language === "en"
        ? "We identify, screen, and recruit high-caliber executives, technical leads, and operational experts tailored to complex multi-national environments."
        : "Nous identifions, sélectionnons et recrutons des cadres de haut niveau, des responsables techniques et des experts opérationnels adaptés aux environnements multinationaux.",
      points: [
        language === "en" ? "Executive headhunting & confidential C-suite search" : "Chasse de têtes de dirigeants et recrutement confidentiel",
        language === "en" ? "Rigorous background auditing & credential verification" : "Vérification rigoureuse des antécédents et des diplômes",
        language === "en" ? "Bilingual (English/French) candidate evaluation" : "Évaluation bilingue (anglais/français) des candidats",
        language === "en" ? "Cross-border talent pipeline building" : "Création de viviers de talents transfrontaliers"
      ],
      icon: UserPlus
    },
    training: {
      id: "training",
      title: language === "en" ? "2. Onboarding & Initial Training" : "2. Formation Initiale & Intégration",
      tagline: language === "en" ? "Standardizing Operational Competence" : "Standardisation des Compétences Opérationnelles",
      desc: language === "en"
        ? "Immersive induction modules ensuring newly placed personnel immediately align with compliance protocols, project safety, and organizational rigor."
        : "Modules d'intégration immersifs garantissant que le personnel recruté s'aligne immédiatement sur les protocoles de conformité et de rigueur.",
      points: [
        language === "en" ? "Structured corporate onboarding frameworks" : "Cadres d'intégration d'entreprise structurés",
        language === "en" ? "Compliance and zero-cash protocol training" : "Formation à la conformité et aux protocoles zéro-cash",
        language === "en" ? "Safety & industrial standard certifications" : "Certifications de sécurité et de normes industrielles",
        language === "en" ? "Role-specific technical skill acceleration" : "Accélération des compétences techniques spécifiques"
      ],
      icon: GraduationCap
    },
    placement: {
      id: "placement",
      title: language === "en" ? "3. Strategic Placement (Placement)" : "3. Placement Stratégique",
      tagline: language === "en" ? "Deploying Teams with Speed & Match Precision" : "Déploiement d'Équipes Rapide et Précis",
      desc: language === "en"
        ? "Matching skilled contractors and permanent personnel with critical energy, infrastructure, finance, and technology projects across Dallas and Central Africa."
        : "Mettre en adéquation des sous-traitants qualifiés et du personnel permanent avec des projets d'énergie, d'infrastructure et de technologie.",
      points: [
        language === "en" ? "Project-based subcontractor team assembly" : "Assemblage d'équipes de sous-traitants par projet",
        language === "en" ? "International mobility & visa workflow guidance" : "Mobilité internationale et gestion des visas",
        language === "en" ? "Interim executive management placement" : "Placement de dirigeants de transition",
        language === "en" ? "Contract negotiation and SLA alignment" : "Négociation de contrats et alignement SLA"
      ],
      icon: Briefcase
    },
    evaluation: {
      id: "evaluation",
      title: language === "en" ? "4. Evaluation & Appraisal (Évaluation)" : "4. Évaluation & Performance",
      tagline: language === "en" ? "Merit-Based Performance Analytics" : "Analyse de Performance Basée sur le Mérite",
      desc: language === "en"
        ? "Continuous, objective performance assessment frameworks that measure output timeliness, quality metrics, and alignment with enterprise goals."
        : "Cadres d'évaluation continus et objectifs mesurant la ponctualité, la qualité des livrables et l'alignement stratégique.",
      points: [
        language === "en" ? "360-degree executive performance audits" : "Audits de performance à 360 degrés",
        language === "en" ? "KPI dashboard creation & milestone tracking" : "Tableaux de bord KPI et suivi des jalons",
        language === "en" ? "Meritocratic promotion matrices" : "Matrices de promotion méritocratiques",
        language === "en" ? "Productivity & yield optimization feedback" : "Optimisation de la productivité et du rendement"
      ],
      icon: BarChart2
    }
  };

  const openRoles = [
    { 
      id: "role-1",
      title: language === "en" ? "Senior Business Analyst" : "Analyste d'Affaires Senior",
      dept: language === "en" ? "Strategic HR & Advisory" : "Conseil RH & Stratégie",
      location: "Dallas, TX // Hybrid",
      salary: "$115k - $140k"
    },
    { 
      id: "role-2",
      title: language === "en" ? "Managing HR & Logistics Auditor" : "Auditeur Principal RH & Logistique",
      dept: language === "en" ? "Personnel Management" : "Gestion du Personnel",
      location: "Kinshasa, DRC // On-site",
      salary: language === "en" ? "Executive Contract" : "Contrat Dirigeant"
    },
    { 
      id: "role-3",
      title: language === "en" ? "Talent & Development Specialist" : "Spécialiste Talent & Développement",
      dept: language === "en" ? "Training & Development" : "Formation & Développement",
      location: "Dallas, TX // Remote US",
      salary: "$95k - $120k"
    }
  ];

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="hr-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="hr-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mx-auto">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === "en" ? "Human Capital Division" : "Pôle Capital Humain"}</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Human Resources Department" : "Département des Ressources Humaines"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Comprehensive Personnel Management, Strategic HR Consulting, Professional Talent Placement, and Continuous Training & Development."
              : "Gestion complète du personnel, conseil stratégique en ressources humaines, placement de talents et programmes de formation continue."}
          </p>
          
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-sans">
            <a 
              href="#personnel-management-section"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <span>{language === "en" ? "Personnel Management" : "Gestion du Personnel"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#submit-cv-form-section"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
            >
              <FileUp className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === "en" ? "Submit Your CV" : "Déposer votre CV"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Overview of the 4 Primary HR Department Services */}
      <section className="py-20" id="primary-hr-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">
              {language === "en" ? "Core Department Capabilities" : "Services Principaux du Département"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === "en" ? "Our 4 Primary HR Solutions" : "Nos 4 Solutions RH Principales"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="primary-hr-grid">
            
            {/* Service 1: Personnel Management */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">01. Service</span>
                  <h3 className="font-sans text-base font-extrabold text-slate-950">
                    {language === "en" ? "Personnel Management" : "Gestion du Personnel"}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en"
                    ? "End-to-end management spanning recruitment, onboarding training, project placement, and evaluation."
                    : "Gestion intégrale couvrant le recrutement, la formation, le placement de projets et l'évaluation."}
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-sans text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Recruitment (Recrutement)" : "Recrutement"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Training (Formation)" : "Formation"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Placement (Affectation)" : "Placement"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Évaluation (Performance)" : "Évaluation"}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="#personnel-management-section"
                  className="text-xs font-mono uppercase font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Explore Details" : "Voir Détails"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 2: Strategic HR Consulting */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">02. Service</span>
                  <h3 className="font-sans text-base font-extrabold text-slate-950">
                    {language === "en" ? "Strategic HR Consulting" : "Conseil RH Stratégique"}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en"
                    ? "Advising multi-national leadership on organizational structure, labor compliance, and global workforce planning."
                    : "Conseiller les dirigeants sur la structure organisationnelle, la conformité du travail et le calendrier de croissance."}
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-sans text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Organizational Design" : "Design Organisationnel"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Labor Compliance Audits" : "Audits de Conformité"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Compensation Structuring" : "Grilles de Rémunération"}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="#strategic-consulting-section"
                  className="text-xs font-mono uppercase font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Explore Advisory" : "Voir Conseil"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 3: Submit Your CV */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">03. Candidate Portal</span>
                  <h3 className="font-sans text-base font-extrabold text-slate-950">
                    {language === "en" ? "Submit Your CV" : "Déposez Votre CV"}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en"
                    ? "Interactive candidate registration portal to index CVs and target executive or subcontractor placements."
                    : "Portail d'inscription candidat interactif pour indexer votre CV et cibler nos opportunités."}
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-sans text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Direct CV Upload / File Attach" : "Dépôt Direct de Fichier CV"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Confidential Talent Index" : "Registre Confidentiel"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Instant Candidate Verification" : "Vérification Immédiate"}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="#submit-cv-form-section"
                  className="text-xs font-mono uppercase font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Open Form" : "Ouvrir le Formulaire"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 4: Training & Development */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">04. Growth</span>
                  <h3 className="font-sans text-base font-extrabold text-slate-950">
                    {language === "en" ? "Training & Development" : "Formation & Développement"}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en"
                    ? "Continuous capacity building, executive mentoring, technical upskilling, and career advancement matrices."
                    : "Renforcement continu des capacités, mentorat des cadres, perfectionnement technique et avancement."}
                </p>
                <div className="space-y-1.5 pt-2 text-xs font-sans text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Capacity Upskilling Modules" : "Modules de Perfectionnement"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Executive Leadership Mentoring" : "Mentorat des Dirigeants"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{language === "en" ? "Continuous Learning Track" : "Parcours d'Apprentissage"}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="#training-development-section"
                  className="text-xs font-mono uppercase font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Explore Programs" : "Voir Programmes"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Deep-Dive Section: Personnel Management (1) */}
      <section className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-12" id="personnel-management-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">
              {language === "en" ? "Service Module 01" : "Module de Service 01"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "Personnel Management" : "Gestion du Personnel"}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 font-sans">
              {language === "en"
                ? "A complete lifecycle framework encompassing Recruitment, Initial Training, Strategic Placement, and Objective Evaluation."
                : "Un cadre complet englobant le Recrutement, la Formation initiale, le Placement stratégique et l'Évaluation objective."}
            </p>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Sub-Pillar Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" id="personnel-tabs">
            {(["recruitment", "training", "placement", "evaluation"] as const).map((key) => {
              const item = personnelPillars[key];
              const isActive = selectedService === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`px-4 py-2.5 rounded-lg font-sans text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive 
                      ? "bg-[#0A2540] text-white shadow-md" 
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                  <span>{item.title.split(". ")[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Sub-Pillar Display Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="personnel-active-detail">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-mono uppercase font-bold">
                <CheckCircle2 className="w-3 h-3 text-blue-600" />
                <span>{personnelPillars[selectedService].tagline}</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">
                {personnelPillars[selectedService].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {personnelPillars[selectedService].desc}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  {language === "en" ? "Key Deliverables & Standards:" : "Livrables et Normes Clés :"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-800">
                  {personnelPillars[selectedService].points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0A2540] text-white p-6 sm:p-8 rounded-xl space-y-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold">
                {language === "en" ? "Execution Guarantee" : "Garantie d'Exécution"}
              </span>
              <h4 className="font-sans text-base font-extrabold text-white">
                {language === "en" ? "Zero-Cash & Meritocratic Assurance" : "Assurance de Transparence & Méritocratie"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {language === "en"
                  ? "Every personnel placement and evaluation cycle is audited under PESA's strict governance rules. We guarantee zero hidden recruitment fees, direct bank payroll settlements, and performance rewards tied purely to output metrics."
                  : "Chaque cycle de placement et d'évaluation est audité selon les règles strictes de PESA. Nous garantissons zéro frais cachés et un traitement méritocratique."}
              </p>
              <div className="pt-2">
                <a
                  href="#submit-cv-form-section"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-[10px] uppercase font-bold tracking-widest rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <FileUp className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "Register In Candidate Pool" : "S'inscrire comme Candidat"}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Strategic HR Consulting & Training & Development Grid (2 & 4) */}
      <section className="py-20" id="strategic-and-training-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Strategic HR Consulting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="strategic-consulting-section">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">
                {language === "en" ? "Service Module 02" : "Module de Service 02"}
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "Strategic Human Resources Consulting" : "Conseil RH Stratégique"}
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600"></div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "We partner with corporate boards and public institutions to transform HR departments from administrative centers into proactive growth drivers. Our strategic consultants design resilient organizational charts, align labor practices across North American and African jurisdictions, and optimize compensation structures."
                  : "Nous accompagnons les conseils d'administration pour transformer les départements RH en moteurs de croissance proactifs, en optimisant la conformité et les grilles de rémunération."}
              </p>

              <div className="space-y-3 font-sans text-xs text-slate-800">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-950 font-bold">{language === "en" ? "Labor Compliance & Auditing" : "Audits & Conformité du Travail"}</strong>
                    <span className="text-slate-500 text-[11px]">{language === "en" ? "Ensuring complete adherence to local labor laws and international standards." : "Conformité totale aux lois locales et normes internationales."}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                  <Compass className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-950 font-bold">{language === "en" ? "Organizational Chart Restructuring" : "Restructuration des Organigrammes"}</strong>
                    <span className="text-slate-500 text-[11px]">{language === "en" ? "Designing clear hierarchies, role definitions, and decision matrices." : "Définition claire des rôles et matrices de décision."}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                  <BarChart2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-950 font-bold">{language === "en" ? "Compensation Benchmarking" : "Études & Grilles de Rémunération"}</strong>
                    <span className="text-slate-500 text-[11px]">{language === "en" ? "Creating competitive salary packages and merit incentive programs." : "Rémunérations compétitives et primes de performance."}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Training & Development */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-10 rounded-2xl space-y-6 shadow-lg border border-slate-800" id="training-development-section">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
                {language === "en" ? "Service Module 04" : "Module de Service 04"}
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === "en" ? "Training & Development" : "Formation & Développement"}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Empowering workforces with continuous capacity building. We design specialized training academies, leadership development pipelines, and technical upskilling workshops to keep teams at peak efficiency."
                  : "Autonomiser les équipes grâce au renforcement continu des capacités, aux académies de leadership et aux ateliers de perfectionnement technique."}
              </p>

              <div className="space-y-3 pt-2 text-xs font-sans">
                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{language === "en" ? "Executive Leadership Coaching" : "Coaching de Dirigeants"}</strong>
                    <span className="text-slate-400 text-[11px]">{language === "en" ? "1-on-1 mentoring for C-suite and project directors." : "Mentorat individuel pour dirigeants et chefs de projets."}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{language === "en" ? "Technical Certification Workshops" : "Ateliers de Certification Technique"}</strong>
                    <span className="text-slate-400 text-[11px]">{language === "en" ? "Standardizing subcontractor skill levels in technology and logistics." : "Mise aux normes des sous-traitants en technologie."}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{language === "en" ? "Career Pathing & Skill Mapping" : "Planification de Carrière & Compétences"}</strong>
                    <span className="text-slate-400 text-[11px]">{language === "en" ? "Clear progression frameworks that retain high performers." : "Parcours de promotion motivants pour retenir les meilleurs."}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Open Positions Quick Apply */}
      <section className="py-16 bg-slate-100 border-y border-slate-200" id="open-roles-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
                {language === "en" ? "Active Opportunities" : "Opportunités Actives"}
              </span>
              <h3 className="font-sans text-xl font-extrabold text-slate-900">
                {language === "en" ? "Selected Positions Ready For Placement" : "Postes Ouverts au Recrutement"}
              </h3>
            </div>
            <a
              href="#submit-cv-form-section"
              className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-mono font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>{language === "en" ? "Submit Unsolicited Application" : "Candidature Spontanée"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openRoles.map((role) => (
              <div 
                key={role.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {role.dept}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 pt-1">{role.title}</h4>
                  <p className="text-xs text-slate-500 font-sans">{role.location}</p>
                  <p className="text-xs font-mono font-extrabold text-blue-700">{role.salary}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleApply(role.title)}
                    className="w-full py-2 bg-slate-50 hover:bg-[#0A2540] hover:text-white text-slate-800 border border-slate-200 rounded font-mono text-[10px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <span>{language === "en" ? "Apply for Role" : "Postuler à ce poste"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Interactive "Submit Your CV" Form (Service Module 03) */}
      <section className="py-20 scroll-mt-20" id="submit-cv-form-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
            
            <div className="space-y-1 text-center">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                {language === "en" ? "Service Module 03 • Candidate Portal" : "Module de Service 03 • Portail Candidat"}
              </span>
              <h3 className="font-sans text-2xl font-extrabold text-slate-950">
                {language === "en" ? "Submit Your CV / Resume" : "Déposer Votre CV / Candidature"}
              </h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                {language === "en"
                  ? "Register directly into PESA's confidential executive candidate database for strategic placement, recruitment, or advisory positions."
                  : "Inscrivez-vous directement dans la base de données de PESA pour nos opportunités de placement, de recrutement ou de conseil."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-3 animate-fade-in font-sans">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-base font-sans">
                  {language === "en" ? "CV & Candidate Credentials Indexed!" : "CV & Profil Indexés avec Succès !"}
                </h5>
                <p className="text-xs max-w-md mx-auto">
                  {language === "en" 
                    ? "Your profile and CV file have been safely recorded in our encrypted HR registry. Candidate ID: "
                    : "Votre profil et votre fichier CV ont été enregistrés dans notre registre RH sécurisé. ID Candidat : "}
                  <strong className="font-mono text-emerald-900">PESA-HR-2026-{(Math.floor(Math.random() * 89999) + 10000)}</strong>
                </p>
                <p className="text-[11px] text-emerald-700 font-mono">
                  {language === "en" ? "A confirmation has been routed to your email." : "Une confirmation a été envoyée sur votre boîte email."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans" id="hr-submit-cv-form">
                
                {/* Selected Job Alert */}
                {selectedJob && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 font-bold flex items-center justify-between">
                    <span>{language === "en" ? `Selected Role: ${selectedJob}` : `Poste ciblé : ${selectedJob}`}</span>
                    <button 
                      type="button" 
                      onClick={() => { setSelectedJob(""); setFormData(p => ({...p, desiredRole: ""})); }}
                      className="text-slate-500 hover:text-slate-800 text-[10px] font-mono uppercase underline"
                    >
                      {language === "en" ? "Clear" : "Effacer"}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Full Name *" : "Nom Complet *"}
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Carole Boboy"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Email Address *" : "Adresse Email *"}
                    </label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. c.boboy@example.com"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Phone Number" : "Numéro de Téléphone"}
                    </label>
                    <input 
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +1 (214) 555-0182"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Target Service Area *" : "Domaine de Service *" }
                    </label>
                    <select
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({...formData, serviceArea: e.target.value})}
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    >
                      <option value="Personnel Placement">1. Personnel Management & Placement</option>
                      <option value="Strategic HR Consulting">2. Strategic HR Consulting</option>
                      <option value="Training & Development">4. Training & Development</option>
                      <option value="Executive Management">Executive Management Search</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Desired Role / Specialization" : "Poste ou Spécialisation Désirée"}
                    </label>
                    <input 
                      type="text"
                      value={formData.desiredRole}
                      onChange={(e) => setFormData({...formData, desiredRole: e.target.value})}
                      placeholder="e.g. Logistics Auditor / Project Manager"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {language === "en" ? "Years of Professional Experience" : "Années d'Expérience Professionnelle"}
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({...formData, experienceYears: e.target.value})}
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    >
                      <option value="1-3 years">1 - 3 Years</option>
                      <option value="3-5 years">3 - 5 Years</option>
                      <option value="5-10 years">5 - 10 Years</option>
                      <option value="10+ years">10+ Years (Senior / Director)</option>
                    </select>
                  </div>
                </div>

                {/* Interactive CV Upload / File Attachment Box */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    {language === "en" ? "Upload Your CV / Resume File *" : "Télécharger votre fichier CV *"}
                  </label>
                  
                  <div 
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
                      dragActive ? "border-blue-500 bg-blue-50/50" : cvFile ? "border-emerald-400 bg-emerald-50/30" : "border-slate-300 bg-slate-50 hover:bg-slate-100/50"
                    }`}
                  >
                    <input 
                      type="file" 
                      id="cv-file-input" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden" 
                    />

                    {cvFile ? (
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-emerald-200 shadow-sm max-w-md mx-auto">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
                          <div className="text-left truncate">
                            <strong className="block text-xs text-slate-900 truncate">{cvFile.name}</strong>
                            <span className="text-[10px] text-slate-400 font-mono">{(cvFile.size / 1024).toFixed(1)} KB</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCvFile(null)}
                          className="text-slate-400 hover:text-red-500 text-xs font-mono font-bold px-2 py-1"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="cv-file-input" className="cursor-pointer space-y-2 block">
                        <Upload className="w-8 h-8 text-blue-600 mx-auto" />
                        <div className="text-xs text-slate-700 font-sans">
                          <strong className="text-blue-600 underline font-bold">{language === "en" ? "Click to upload your CV" : "Cliquez pour charger votre CV"}</strong>
                          <span> {language === "en" ? "or drag and drop file here" : "ou glissez-déposez le fichier ici"}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono uppercase">PDF, DOC, DOCX (Max 15MB)</p>
                      </label>
                    )}
                  </div>
                </div>

                {/* Alternative Portfolio Link */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    {language === "en" ? "LinkedIn Profile / Portfolio Link (Optional)" : "Profil LinkedIn / Lien de Portfolio (Optionnel)"}
                  </label>
                  <input 
                    type="url"
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                    placeholder="https://linkedin.com/in/my-profile"
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                  />
                </div>

                {/* Cover Statement */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    {language === "en" ? "Summary of Qualifications & Alignment *" : "Résumé des Qualifications & Motivations *"}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.statement}
                    onChange={(e) => setFormData({...formData, statement: e.target.value})}
                    placeholder={language === "en" ? "Summarize your key achievements, languages spoken, and availability..." : "Résumez vos principales réalisations, vos langues parlées et votre disponibilité..."}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans resize-none"
                  />
                </div>

                {/* Privacy & Compliance Disclaimer */}
                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 font-sans">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>
                    {language === "en"
                      ? "Your CV and contact information are protected under strict international privacy standards and encrypted during transmission. PESA Consulting Group never sells candidate data."
                      : "Votre CV et vos informations personnelles sont protégés selon des normes strictes de confidentialité et chiffrés durant la transmission."}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-cv-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === "en" ? "Register CV in HR Database" : "Enregistrer mon CV dans la Base RH"}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
