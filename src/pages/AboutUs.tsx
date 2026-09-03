import React from "react";
import { 
  Award, Shield, Users, Globe, BookOpen, Target, Landmark, 
  TrendingUp, CheckCircle, ArrowRight, Briefcase, Mail, Phone, ExternalLink 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface AboutUsProps {
  onNavigate: (path: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const { language, t } = useLanguage();

  const coreValues = language === "en" ? [
    {
      title: "Rigor & Absolute Execution",
      desc: "Our business operations are built strictly on high-quality delivery, adherence to tight deadlines, and absolute structural precision. Personal affinities are set aside to prioritize pure project success.",
      icon: Shield
    },
    {
      title: "Zero-Cash Compliance",
      desc: "To guarantee transparency and eliminate security risks, PESA enforces a strict ban on cash transactions. All operations are processed exclusively through secure corporate bank wires.",
      icon: Landmark
    },
    {
      title: "Long-Term Strategic Focus",
      desc: "We prioritize securing long-term service agreements (minimum 5-year contracts) to foster sustainable development and long-term community growth.",
      icon: TrendingUp
    },
    {
      title: "Global Synergy",
      desc: "We leverage a lean administrative team spanning Dallas and Kinshasa, combining North American technical infrastructures with local African market expertise.",
      icon: Globe
    }
  ] : [
    {
      title: "Rigueur & Exécution Absolue",
      desc: "Nos opérations commerciales sont basées sur une qualité de livraison stricte, le respect rigoureux des délais et une précision structurelle absolue. Les affinités personnelles sont exclues pour garantir le succès des projets.",
      icon: Shield
    },
    {
      title: "Conformité Zéro-Cash",
      desc: "Afin de garantir une transparence totale et d'éliminer tout risque, PESA interdit formellement les transactions en espèces. Toutes les opérations s'effectuent par virements bancaires sécurisés.",
      icon: Landmark
    },
    {
      title: "Vision Stratégique à Long Terme",
      desc: "Nous privilégions l'acquisition de contrats de services à long terme (minimum 5 ans) pour assurer un développement durable et une croissance stable de la communauté.",
      icon: TrendingUp
    },
    {
      title: "Synergie Globale",
      desc: "Nous exploitons une structure administrative agile entre Dallas et Kinshasa, alliant les infrastructures technologiques américaines à l'expertise approfondie du marché africain.",
      icon: Globe
    }
  ];

  const milestones = language === "en" ? [
    { year: "2016", title: "Founding in Texas", desc: "PESA Consulting began as a boutique capital modeling and strategic advisory office in Dallas, Texas, specializing in cross-border partnerships." },
    { year: "2019", title: "Global Expansion", desc: "Established administrative presence in Kinshasa, DRC, facilitating ethical supply chains and international visa pathways." },
    { year: "2022", title: "Structured Funds Milestones", desc: "Revisions to our corporate models reached a record 300+ active investors across multiple sponsored capital programs." },
    { year: "2026", title: "New Service Division Launch", desc: "Officially launched PESA's dedicated Operations Support, Financial Auditing, and Venture Outsourcing Division to secure long-term global contracts." }
  ] : [
    { year: "2016", title: "Fondation au Texas", desc: "PESA Consulting a débuté comme bureau spécialisé en modélisation de capital et conseil stratégique à Dallas, au Texas, axé sur les partenariats transfrontaliers." },
    { year: "2019", title: "Expansion Globale", desc: "Établissement d'une présence administrative à Kinshasa, RDC, facilitant les chaînes d'approvisionnement éthiques et les parcours de visa internationaux." },
    { year: "2022", title: "Jalons de Fonds Structurés", desc: "Les révisions de nos modèles d'investissement ont atteint un record de plus de 300 investisseurs actifs à travers divers programmes de parrainage." },
    { year: "2026", title: "Lancement de la Division Services", desc: "Lancement officiel de la division dédiée au soutien opérationnel, à l'audit financier et à l'externalisation de projets pour garantir des contrats mondiaux à long terme." }
  ];

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="about-us-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="about-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {t("Corporate Identity")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t("About PESA Consulting Group")}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en" 
              ? "Discover our history, strategic methodologies, core corporate tenets, and the leadership directing PESA's multi-national consulting ecosystem."
              : "Découvrez notre histoire, nos méthodologies stratégiques, nos principes fondamentaux et la direction qui guide l'écosystème de conseil multinational de PESA."}
          </p>
        </div>
      </section>

      {/* 2. Who We Are & Overview */}
      <section className="py-20" id="about-history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold">{t("Strategic Background")}</span>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === "en" ? "A Legacy of Purpose-Driven Business Solutions" : "Un Héritage de Solutions d'Affaires Orientées vers un But"}
                </h2>
              </div>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "PESA Consulting Group operates as an elite corporate advisory and management consulting firm. Established to assist individual and institutional clients through high-impact transactions, we maintain critical divisions across Strategy Consulting, Enterprise Technology Modernization, Human Capital Acquisition, and Supply-Chain Security."
                  : "Le groupe PESA Consulting opère en tant que cabinet d'élite de conseil d'entreprise et de gestion. Établi pour assister nos clients individuels et institutionnels dans des transactions à fort impact, nous gérons des divisions clés de conseil en stratégie, modernisation technologique, acquisition de capital humain et conformité logistique."}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our organization is distinguished by its operational rigor. We believe that professional deliverables must be held to the highest standards of timeliness and execution, separate from personal affinities or friendships. This commitment has enabled us to achieve a 100% success rate across our global academic and investment programs."
                  : "Notre organisation se distingue par sa rigueur opérationnelle. Nous sommes convaincus que les livrables professionnels doivent respecter les normes de ponctualité et d'exécution les plus élevées, en dehors de toute affinité personnelle ou amitié. Cet engagement nous a permis d'atteindre un taux de réussite de 100 % dans l'ensemble de nos programmes mondiaux d'études et d'investissement."}
              </p>

              {/* Mission / Vision Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Our Strategic Mission" : "Notre Mission Stratégique"}</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {language === "en"
                      ? "To deliver absolute execution rigor and customized structural blueprints that elevate the efficiency, compliance, and valuation of our partner enterprises globally."
                      : "Fournir une rigueur d'exécution absolue et des plans structurels sur mesure qui améliorent l'efficacité, la conformité et la valorisation de nos entreprises partenaires dans le monde."}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Our Global Vision" : "Notre Vision Globale"}</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {language === "en"
                      ? "To standardize multi-national corporate development by deploying the proprietary PESA Methodology, connecting high-growth frontier markets with secure institutional capital."
                      : "Standardiser le développement d'entreprise multinational en déployant la méthodologie exclusive PESA, reliant les marchés frontières à forte croissance à un capital institutionnel sécurisé."}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative" id="about-office-visual">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Glass Highrise Office" 
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#0A2540] text-blue-300 font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg border border-slate-800 shadow-md">
                {t("Corporate Headquarters")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800" id="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">{t("Strategic Pillars")}</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">{language === "en" ? "Our Core Values & Compliance Standards" : "Nos Valeurs Fondamentales & Normes de Conformité"}</h2>
            <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="values-grid">
            {coreValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/80 p-6 rounded-xl border border-slate-800/80 shadow-md space-y-4 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans text-sm font-bold text-white tracking-tight">{val.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Timeline / History */}
      <section className="py-20" id="about-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">{t("Our Journey")}</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">{language === "en" ? "PESA Group Milestones" : "Jalons du Groupe PESA"}</h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="relative border-l border-slate-200 max-w-3xl mx-auto pl-8 space-y-12" id="timeline-flow">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 text-[10px] font-mono font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors shadow">
                  {idx + 1}
                </span>
                
                <div className="space-y-1">
                  <span className="font-mono text-xs text-blue-600 font-extrabold tracking-widest block">{milestone.year}</span>
                  <h4 className="font-sans text-base font-bold text-slate-950">{milestone.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Global Presence */}
      <section className="py-20 bg-slate-100 border-t border-slate-200" id="about-presence">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">{t("International Reach")}</span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "Our Strategic Global Presence" : "Notre Présence Globale Stratégique"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "PESA Consulting Group utilizes a highly structured, dual-hub operational framework designed to support international trade, capital structuring, and corporate upskilling."
                  : "Le groupe PESA Consulting utilise un cadre opérationnel hautement structuré à double pôle, conçu pour soutenir le commerce international, la structuration du capital et le renforcement des compétences d'entreprise."}
              </p>
              
              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === "en" ? "USA Executive Hub (Dallas, Texas):" : "Pôle Exécutif USA (Dallas, Texas) :"}</strong>
                    <p className="text-slate-500 mt-0.5">
                      {language === "en"
                        ? "Directs global technology infrastructures, financial auditing standards, corporate legal compliance, and field marketing."
                        : "Dirige les infrastructures technologiques mondiales, les normes d'audit financier, la conformité légale et le marketing de terrain."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === "en" ? "Central Africa Hub (Kinshasa, DRC):" : "Pôle Afrique Centrale (Kinshasa, RDC) :"}</strong>
                    <p className="text-slate-500 mt-0.5">
                      {language === "en"
                        ? "Coordinates localized auditing contracts, mineral supply logistics compliance, regional strategic marketing, and local workforce operations."
                        : "Coordonne les contrats d'audit locaux, la conformité logistique pour les minerais, le marketing stratégique régional et l'encadrement des équipes locales."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => onNavigate("/offices")}
                  className="px-5 py-2.5 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors cursor-pointer"
                  id="about-view-offices-btn"
                >
                  {language === "en" ? "Explore Our Offices" : "Explorer nos Bureaux"}
                </button>
                
                <button
                  onClick={() => onNavigate("/team")}
                  className="px-5 py-2.5 border border-slate-300 hover:border-[#0A2540] text-slate-700 font-sans font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  id="about-view-team-btn"
                >
                  {language === "en" ? "Meet Our Executive Team" : "Rencontrer notre Équipe"}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6" id="about-presence-graphic">
              {/* Styled interactive map card */}
              <div className="bg-[#0A2540] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="font-mono text-xs uppercase tracking-widest text-blue-300 font-bold">{language === "en" ? "Secure Global Channels" : "Canaux Globaux Sécurisés"}</span>
                  </div>

                  <h4 className="font-sans text-lg font-bold">{language === "en" ? "Dallas // Kinshasa Bilateral Synergy" : "Synergie Bilatérale Dallas // Kinshasa"}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {language === "en"
                      ? "By structuring operations to distribute technical oversight to Dallas and localized physical tasks to qualified sub-contractors in Kinshasa, PESA Group maximizes efficiency while complying with regional tax laws and employment statutes."
                      : "En structurant les opérations de manière à confier la supervision technique à Dallas et les tâches physiques locales à des sous-traitants qualifiés à Kinshasa, le groupe PESA maximise l'efficacité tout en respectant les lois fiscales et d'emploi régionales."}
                  </p>

                  <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block uppercase font-bold">{language === "en" ? "US Channels" : "Canaux US"}</span>
                      <span className="text-white font-bold block mt-1">{language === "en" ? "Dallas Corporate" : "Siège de Dallas"}</span>
                      <span className="text-blue-400 block text-[10px]">+1 (682) 424-5857</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block uppercase font-bold">{language === "en" ? "Africa Channels" : "Canaux Afrique"}</span>
                      <span className="text-white font-bold block mt-1">{language === "en" ? "Kinshasa Operations" : "Opérations Kinshasa"}</span>
                      <span className="text-blue-400 block text-[10px]">+243 821 368 004</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
