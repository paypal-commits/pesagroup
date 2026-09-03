import React, { useState } from "react";
import { 
  Briefcase, Heart, Globe, GraduationCap, Award, ShieldCheck, 
  Send, ArrowRight, CheckCircle, Users, Landmark, Check,
  MapPin, Clock, Building2, Sparkles
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CareersPage() {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "global-project-lead",
    experience: "",
    portfolioUrl: ""
  });

  const benefits = language === "en" ? [
    { title: "Bilateral Experience", desc: "Gain highly unique corporate advisory experience bridging North American capital models and Central African trade logistics." },
    { title: "Long-Term Security", desc: "Since we prioritize 5+ year contracts, our agents enjoy high-performing dividend distributions and stable monthly remunuration." },
    { title: "Rigorous Training", desc: "Gain continuous capacity building, mentoring under CEO Camy Likobe, and training in legacy enterprise IT modernization." },
    { title: "Meritocratic Growth", desc: "We completely set aside favoritism and personal affinities to reward pure quality of work, strict timeliness, and task precision." }
  ] : [
    { title: "Expérience Bilatérale", desc: "Bénéficiez d'une expérience unique en conseil d'entreprise, liant les modèles financiers nord-américains et la logistique d'Afrique centrale." },
    { title: "Sécurité à Long Terme", desc: "Parce que nous priorisons les contrats de plus de 5 ans, nos collaborateurs bénéficient de revenus stables et de primes de performance élevées." },
    { title: "Formation Rigoureuse", desc: "Profitez d'un développement continu de vos compétences, d'un mentorat sous la direction du PDG Camy Likobe, et de formations avancées." },
    { title: "Croissance Méritocratique", desc: "Nous écartons tout favoritisme personnel afin de récompenser uniquement la qualité pure de votre travail, la ponctualité et la précision." }
  ];

  const handleApplyForRole = (roleId: string) => {
    setFormData(prev => ({ ...prev, program: roleId }));
    const element = document.getElementById("careers-portal");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", program: "global-project-lead", experience: "", portfolioUrl: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="careers-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="careers-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {t("Career Horizons")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Careers at PESA Consulting Group" : "Carrières chez PESA Consulting Group"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Build your professional legacy with a global firm committed to absolute execution rigor, zero-cash transparency, and multi-year strategic infrastructure and corporate advisory contracts."
              : "Bâtissez votre héritage professionnel au sein d'un cabinet mondial engagé pour une rigueur d'exécution absolue, une transparence zéro-cash et des contrats stratégiques pluriannuels d'infrastructure et de conseil."}
          </p>
        </div>
      </section>

      {/* 2. Culture & Benefits */}
      <section className="py-20" id="careers-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">{t("PESA Environment")}</span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "An Elite Culture of Rigorous Execution" : "Une Culture d'Élite d'Exécution Rigoureuse"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "At PESA Consulting Group, we believe that world-class deliverables can only be produced when team members are held to absolute compliance, quality work, and strict deadline adherence. We maintain a lean, high-velocity organization and reward outstanding performance according to pre-established profit margin formulas."
                  : "Chez PESA Consulting Group, nous sommes convaincus que des livrables de classe mondiale ne peuvent être produits que si les membres de notre équipe respectent une conformité stricte et des délais rigoureux. Nous récompensons les performances exceptionnelles selon des formules de marge bénéficiaire prédéfinies."}
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Pre-financing security and zero cash policy" : "Sécurité de préfinancement et politique zéro cash"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Weekly and monthly progress monitoring reports" : "Rapports de suivi hebdomadaires et mensuels"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Distributed administrative hubs in Dallas and Kinshasa" : "Pôles administratifs répartis à Dallas et Kinshasa"}</span>
                </div>
              </div>
            </div>

            {/* Benefits Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="benefits-grid">
              {benefits.map((ben, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-slate-900">{ben.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-sans">{ben.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CURRENT OPEN POSITIONS (FEATURING GLOBAL PROJECT LEAD) */}
      <section className="py-20 bg-slate-100 border-t border-slate-200" id="careers-open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold block">
              {language === "en" ? "Immediate Career Openings" : "Postes Immédiatement Ouverts"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {language === "en" ? "Explore Our Open Leadership & Advisory Roles" : "Explorez Nos Postes de Direction & Conseil"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-2"></div>
            <p className="text-slate-600 text-xs sm:text-sm font-sans pt-1">
              {language === "en"
                ? "Join our expanding multinational team. We are actively seeking distinguished professionals to lead high-stakes projects across North America and Central Africa."
                : "Rejoignez notre équipe multinationale en pleine expansion. Nous recrutons activement des professionnels émérites pour diriger des projets d'envergure en Amérique du Nord et en Afrique centrale."}
            </p>
          </div>

          {/* FEATURED POSITION: GLOBAL PROJECT LEAD (HERITIER BONGOMBE'S FORMER ROLE NOW OPEN) */}
          <div className="mb-10 bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white rounded-2xl border border-blue-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden" id="featured-job-global-project-lead">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {language === "en" ? "Actively Recruiting // Immediate Opening" : "Recrutement Actif // Poste Ouvert"}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
                    {language === "en" ? "Executive Leadership" : "Direction Exécutive"}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-300">
                  {language === "en" ? "Ref: PESA-OPS-GPL-2026" : "Réf: PESA-OPS-GPL-2026"}
                </span>
              </div>

              {/* Title & Dept */}
              <div className="space-y-2">
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {language === "en" ? "Global Project Lead" : "Chef de Projet Global"}
                </h3>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-sans">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <strong>{language === "en" ? "Dept:" : "Dép:"}</strong> {language === "en" ? "Project Management & Infrastructure Development" : "Gestion de Projet & Développement d'Infrastructure"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <strong>{language === "en" ? "Location:" : "Lieu:"}</strong> {language === "en" ? "Kinshasa, DRC & Dallas, TX (Bilateral Operations // Hybrid & Field)" : "Kinshasa, RDC & Dallas, TX (Pôles Bilatéraux // Hybride & Terrain)"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <strong>{language === "en" ? "Contract:" : "Contrat:"}</strong> {language === "en" ? "Full-Time // Multi-Year Executive Contract" : "Temps Plein // Contrat Exécutif Pluriannuel"}
                  </span>
                </div>
              </div>

              {/* Role Mandate & Overview */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans border-t border-slate-800 pt-5">
                <p>
                  {language === "en"
                    ? "PESA Consulting Group is seeking an exceptional Global Project Lead to direct our international project coordination, engineering logistics, and multi-disciplinary infrastructure operations across Central Africa and North America. This senior role oversees the operational execution of PESA's multi-year enterprise and public-sector infrastructure contracts with technical precision, uncompromising zero-cash transparency, and operational velocity."
                    : "PESA Consulting Group recherche un Chef de Projet Global exceptionnel pour diriger la coordination de nos projets internationaux, la logistique d'ingénierie et nos opérations d'infrastructure multidisciplinaires en Afrique centrale et en Amérique du Nord. Ce poste de direction supervise l'exécution opérationnelle de nos contrats pluriannuels d'infrastructure avec rigueur technique et conformité zéro-cash."}
                </p>

                {/* Key Responsibilities & Requirements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2.5">
                    <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "Key Responsibilities" : "Responsabilités Clés"}</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Lead end-to-end execution of commercial, civil, and municipal infrastructure projects." : "Diriger l'exécution complète de projets d'infrastructure commerciale, civile et municipale."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Coordinate local subcontractor networks, engineering teams, and supply chain logistics in the DRC and the US." : "Coordonner les réseaux de sous-traitants, équipes d'ingénieurs et chaînes logistiques en RDC et aux USA."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Enforce strict zero-cash policy, pre-financing audits, and weekly executive milestone reporting." : "Appliquer la politique zéro-cash, les audits de préfinancement et les rapports hebdomadaires de direction."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Interface directly with government stakeholders, institutional investors, and corporate partners." : "Collaborer directement avec les institutions gouvernementales et les investisseurs partenaires."}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2.5">
                    <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "Candidate Requirements" : "Profil & Qualifications"}</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "8+ years in international project coordination, civil engineering logistics, or operational delivery." : "8+ ans d'expérience en coordination de projets internationaux, logistique d'ingénierie civile ou direction opérationnelle."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Professional Project Management certification (PMP, PRINCE2, Agile, or Engineering degree)." : "Certification de gestion de projet (PMP, PRINCE2, Agile ou diplôme d'ingénieur civil/industriel)."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Demonstrated track record of delivering multi-million dollar contracts on-time and within margin." : "Expérience prouvée dans la livraison de contrats d'envergure dans les délais et marges impartis."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{language === "en" ? "Bilingual proficiency in English and French strongly required." : "Bilinguisme professionnel français et anglais vivement requis."}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-sans">
                  {language === "en" ? "Competitive Executive Package // Salary + Performance-linked distributions" : "Rémunération Exécutive Compétitive // Salaire + Allocations de performance"}
                </span>

                <button
                  onClick={() => handleApplyForRole("global-project-lead")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover-blue-glow transition-all flex items-center gap-2 cursor-pointer"
                  id="apply-for-global-project-lead-btn"
                >
                  <span>{language === "en" ? "Apply for Global Project Lead" : "Postuler comme Chef de Projet Global"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* ADDITIONAL OPEN POSITIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "senior-business-analyst",
                titleEn: "Senior Business Analyst",
                titleFr: "Analyste d'Affaires Principal",
                deptEn: "Strategic Consulting",
                deptFr: "Conseil Stratégique",
                locEn: "Dallas, TX // Hybrid",
                locFr: "Dallas, TX // Hybride",
                payEn: "$115,000 - $140,000",
                payFr: "115 000 $ - 140 000 $",
                descEn: "Lead business modeling, feasibility reviews, and transaction memoranda for multinational expansion.",
                descFr: "Piloter la modélisation commerciale, les études de faisabilité et les mémorandums d'expansion."
              },
              {
                id: "managing-logistics-auditor",
                titleEn: "Managing Logistics Auditor",
                titleFr: "Auditeur Logistique Principal",
                deptEn: "Audit & Operations",
                deptFr: "Audit & Opérations",
                locEn: "Kinshasa, DRC // On-site",
                locFr: "Kinshasa, RDC // Sur site",
                payEn: "Competitive Multi-Year Contract",
                payFr: "Contrat Pluriannuel Compétitif",
                descEn: "Conduct on-the-ground supply chain audits, transport security reviews, and vendor compliance checks in Central Africa.",
                descFr: "Réaliser des audits de chaîne d'approvisionnement sur le terrain et le contrôle de conformité en Afrique centrale."
              },
              {
                id: "strategic-technology-engineer",
                titleEn: "Strategic Technology Engineer",
                titleFr: "Ingénieur en Technologie Stratégique",
                deptEn: "Technology Solutions",
                deptFr: "Solutions Technologiques",
                locEn: "Dallas, TX // Remote",
                locFr: "Dallas, TX // À distance",
                payEn: "$130,000 - $165,000",
                payFr: "130 000 $ - 165 000 $",
                descEn: "Design and implement cloud infrastructure, cybersecurity governance, and digital automation systems.",
                descFr: "Concevoir et déployer les infrastructures cloud, la sécurité informatique et l'automatisation numérique."
              }
            ].map((role) => (
              <div 
                key={role.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="px-2.5 py-0.5 bg-slate-100 rounded text-slate-700 font-bold">
                      {language === "fr" ? role.deptFr : role.deptEn}
                    </span>
                    <span className="text-emerald-700 font-bold">{language === "fr" ? "Ouvert" : "Open"}</span>
                  </div>

                  <h4 className="font-sans text-base font-bold text-slate-950">
                    {language === "fr" ? role.titleFr : role.titleEn}
                  </h4>

                  <div className="space-y-1 text-xs text-slate-600 font-sans">
                    <p className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{language === "fr" ? role.locFr : role.locEn}</span>
                    </p>
                    <p className="text-slate-500 font-mono text-[11px]">
                      {language === "fr" ? role.payFr : role.payEn}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                    {language === "fr" ? role.descFr : role.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleApplyForRole(role.id)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    id={`apply-role-btn-${role.id}`}
                  >
                    <span>{language === "fr" ? "Postuler" : "Apply Now"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Internships & Graduate Programs */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800" id="careers-pathways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">{t("Talent Pipelines")}</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">{language === "en" ? "Our Internship & Graduate Entry Programs" : "Nos Programmes de Stages & Jeunes Diplômés"}</h2>
            <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="pathways-grid">
            
            {/* Internship Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">
                {language === "en" ? "PESA Strategic Internship Program" : "Programme de Stage Stratégique PESA"}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "A highly competitive 12-week program designed for elite university students in Dallas and Kinshasa. Interns work directly alongside our senior auditors and consultants, assisting in compiling market evaluations, drafting transaction briefs, and analyzing tech-stack gaps."
                  : "Un programme hautement sélectif de 12 semaines pour les étudiants d'élite à Dallas et Kinshasa. Les stagiaires travaillent directement avec nos auditeurs et consultants pour compiler des analyses, rédiger des briefs de transaction et évaluer les besoins techniques."}
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => handleApplyForRole("internship")}
                  className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-mono font-bold cursor-pointer"
                >
                  <span>{language === "en" ? "Summer & Spring cohorts active — Register Interest" : "Cohortes de printemps & d'été actives — Postuler"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Graduate Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">
                {language === "en" ? "PESA Global Graduate Scheme" : "Programme Global pour Jeunes Diplômés"}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our accelerated path for high-achieving master's graduates. Scheme members are placed immediately into key client account support tracks, rotating through Strategy, Technology Consulting, and Audit practices under direct advisory oversight."
                  : "Notre parcours accéléré pour les diplômés de master à fort potentiel. Les participants intègrent immédiatement les équipes clients et effectuent des rotations dans les pôles de stratégie, de technologie et d'audit sous mentorat direct."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleApplyForRole("graduate")}
                  className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-mono font-bold cursor-pointer"
                >
                  <span>{language === "en" ? "2-Year Rotation Cycle — Apply for Scheme" : "Cycle de rotation de 2 ans — Postuler"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Careers Form / Portal */}
      <section className="py-20" id="careers-portal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
            
            <div className="space-y-1 text-center">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">{t("Candidate Registry")}</span>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">{language === "en" ? "PESA Global Talent Sourcing Portal" : "Portail de Recrutement Global PESA"}</h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                {language === "en"
                  ? "Applying for our open Global Project Lead role, advisory positions, internships, or graduate schemes? Submit your credentials securely to register with PESA's hiring committee."
                  : "Vous postulez pour le poste de Chef de Projet Global, un poste de conseil, un stage ou notre programme jeunes diplômés ? Soumettez votre dossier auprès du comité de recrutement de PESA."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-sm">{language === "en" ? "Application Successfully Submitted" : "Candidature Enregistrée avec Succès"}</h5>
                <p className="text-xs font-sans">{language === "en" ? "Your dossier was securely transmitted to our Talent Acquisition and Executive Committee. You will receive an official response regarding next steps." : "Votre dossier a été transmis de manière sécurisée à notre comité d'acquisition de talents. Vous recevrez une réponse officielle sous peu."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="careers-program-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Full Name *" : "Nom complet *"}</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Johnathan Doe"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Email Address *" : "Adresse email *"}</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. candidate@example.com"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Position / Pathway Applied For *" : "Poste ou Programme Ciblé *"}</label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none font-sans font-medium"
                    >
                      <option value="global-project-lead">{language === "en" ? "★ Global Project Lead (Executive Opening - Infrastructure)" : "★ Chef de Projet Global (Poste Exécutif Ouvert - Infrastructure)"}</option>
                      <option value="senior-business-analyst">{language === "en" ? "Senior Business Analyst (Strategy Consulting)" : "Analyste d'Affaires Principal (Conseil Stratégique)"}</option>
                      <option value="managing-logistics-auditor">{language === "en" ? "Managing Logistics Auditor (Audit & Operations)" : "Auditeur Logistique Principal (Audit & Opérations)"}</option>
                      <option value="strategic-technology-engineer">{language === "en" ? "Strategic Technology Engineer (IT Solutions)" : "Ingénieur en Technologie Stratégique"}</option>
                      <option value="internship">{language === "en" ? "PESA Strategic Internship Program" : "Programme de Stage Stratégique PESA"}</option>
                      <option value="graduate">{language === "en" ? "PESA Global Graduate Scheme" : "Programme Global pour Jeunes Diplômés"}</option>
                      <option value="general-senior">{language === "en" ? "General Senior Advisory Opening" : "Candidature Libre - Conseiller Principal"}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "LinkedIn / Portfolio / CV URL *" : "URL LinkedIn / Portfolio / CV *"}</label>
                    <input 
                      type="text"
                      required
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({...formData, portfolioUrl: e.target.value})}
                      placeholder="e.g. https://linkedin.com/in/my-profile"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Professional Background, Qualifications & Motivation *" : "Expérience Professionnelle, Qualifications & Motivation *"}</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder={language === "en" ? "Briefly outline your years of relevant experience, leadership history, project accomplishments, and alignment with PESA..." : "Résumez vos années d'expérience, réalisations de projets, compétences de gestion et motivation à rejoindre PESA..."}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none font-sans resize-none"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2 text-[10px] text-slate-500 font-sans leading-normal">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{language === "en" ? "Submissions are audited under standard EEOC and international hiring metrics. PESA Consulting Group never charges fees or solicits financial transactions for candidate recruitment." : "Les dossiers sont évalués conformément aux normes de recrutement. PESA Consulting Group ne facture aucuns frais et ne sollicite jamais de transferts de fonds pour l'embauche."}</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-careers-portal-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === "en" ? "Submit Candidate Application" : "Soumettre ma Candidature"}</span>
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
