import React, { useState } from "react";
import { Mail, ArrowUpRight, ShieldCheck, Award, Briefcase, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { teamData, teamDataFR } from "../data";

export default function ExecutiveTeam() {
  const { language, t } = useLanguage();
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(0);

  const translatedTeamData = language === "en" ? teamData : teamDataFR;

  const selectedLeader = translatedTeamData[selectedLeaderIndex] || translatedTeamData[0];

  // Specific contact info or details for team members like Arsene Mulolo Mulapia
  const isArsene = selectedLeader.name === "Arsene Mulolo Mulapia";

  const getPortfolios = (name: string) => {
    if (name === "Camy Likobe") {
      return language === "en" 
        ? "Capital Projections, EB-5 Portfolios, Luxury Asset Brokerage, Dallas Infrastructure Core." 
        : "Projections de capital, portefeuilles EB-5, courtage d'actifs de luxe, infrastructure principale de Dallas.";
    }
    if (name === "Charles Adekola") {
      return language === "en" 
        ? "Corporate Debt Structures, Local US-DRC Lending Syndication, Bilateral Joint Ventures." 
        : "Structures de dette d'entreprise, syndication locale de prêts US-RDC, coentreprises bilatérales.";
    }
    if (name === "Carole Boboy") {
      return language === "en" 
        ? "DRC Administrative Audits, Mineral Sourcing Compliance, Study Abroad Logistics Sourcing." 
        : "Audits administratifs en RDC, conformité de l'approvisionnement en minerais, logistique d'études à l'étranger.";
    }
    if (name === "Laetitia Kalala") {
      return language === "en" 
        ? "Tax Compliance, Treasury Allocations, Profit Margin Formula Adjustments." 
        : "Conformité fiscale, allocations de trésorerie, ajustements de formule de marge bénéficiaire.";
    }
    if (name === "Yannick Matadi") {
      return language === "en"
        ? "Compliance Risk Auditing, Zero Cash Audit Operations, Financial Compliance, Anti-Money Laundering Frameworks."
        : "Audit des risques de conformité, opérations d'audit zéro cash, conformité financière, cadres de lutte contre le blanchiment d'argent.";
    }
    if (name === "Sourya Nyabolondo") {
      return language === "en"
        ? "Dallas-Kinshasa Liaison Core, Board of Directors Alignments, Executive Coordination Systems."
        : "Liaison principale Dallas-Kinshasa, alignements du conseil d'administration, systèmes de coordination de direction.";
    }
    if (name === "Arsene Mulolo Mulapia") {
      return language === "en"
        ? "Global Account Consulting, Multinational Partnerships, Strategic Account Planning, High-Value Contract Negotiations."
        : "Conseil de comptes globaux, partenariats multinationaux, planification stratégique des comptes, négociations de contrats de grande valeur.";
    }
    if (name === "Deborah Akinkuolie") {
      return language === "en"
        ? "Global Academic Sourcing, Study Abroad Program Assembly, Timeline Coordination, Stakeholder Communication Systems."
        : "Approvisionnement académique mondial, assemblage de programmes d'études à l'étranger, coordination des calendriers, systèmes de communication avec les parties prenantes.";
    }
    if (name === "Deborah Kayiba") {
      return language === "en"
        ? "Executive Administration Support, Document Portal Control, Customer Scheduling Channels, Records Security."
        : "Soutien à l'administration de la direction, contrôle des portails documentaires, canaux de planification client, sécurité des dossiers.";
    }
    return language === "en" ? "General PESA Consulting Operations Portfolio." : "Portefeuille d'opérations générales de PESA Consulting.";
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="executive-team-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="team-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {t("Advisory Council")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t("Our Executive Leadership Team")}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Meet the multi-national directors steering PESA Consulting Group's operations across Dallas, Kinshasa, and global financial channels."
              : "Rencontrez les directeurs multinationaux qui dirigent les opérations de PESA Consulting Group à Dallas, Kinshasa et sur les marchés financiers mondiaux."}
          </p>
        </div>
      </section>

      {/* 2. Executive Biographies & Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Team Profile Selector Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4" id="team-cards-list">
              <h4 className="font-sans text-xs font-mono uppercase tracking-widest text-slate-400 font-extrabold border-b border-slate-200 pb-3 block mb-4">
                {language === "en" ? "Executive Directories" : "Répertoires Exécutifs"}
              </h4>

              <div className="flex flex-col gap-3 max-h-[750px] overflow-y-auto pr-2 custom-scrollbar">
                {translatedTeamData.map((member, idx) => {
                  const isSelected = selectedLeaderIndex === idx;

                  return (
                    <button
                      key={member.name}
                      onClick={() => setSelectedLeaderIndex(idx)}
                      className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 group ${
                        isSelected 
                          ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20" 
                          : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/50"
                      }`}
                      id={`team-selector-btn-${member.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-14 h-14 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-extrabold block">
                          {member.role.split(" (")[0]}
                        </span>
                        <h4 className="font-sans text-sm font-bold text-slate-900 truncate">
                          {member.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate font-sans">
                          {member.experience}
                        </p>
                      </div>

                      <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-blue-500 rotate-45" : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Operations integrity pledge */}
              <div className="bg-[#0A2540] text-white p-5 rounded-xl border border-slate-800 space-y-2 shadow-md">
                <span className="font-mono text-[9px] uppercase tracking-widest text-blue-300 font-bold block">{t("PESA Leadership Pact")}</span>
                <h5 className="font-sans text-xs font-bold text-white leading-snug">{language === "en" ? "Execution Integrity, Over Favoritism" : "Intégrité de l'Exécution Avant Tout"}</h5>
                <p className="text-slate-400 text-[10px] leading-relaxed font-sans">
                  {language === "en"
                    ? "Under CEO Camy Likobe's mandate, PESA's organizational values prioritize rigor and absolute performance. Friends, affinities, and external relationships are set aside to maintain objective, premium results for all our strategic stakeholders."
                    : "Sous l'égide du PDG Camy Likobe, les valeurs de PESA accordent la priorité à la rigueur et à la performance absolue. Les amitiés, affinités et relations externes sont écartées pour garantir des résultats objectifs et de qualité à toutes nos parties prenantes."}
                </p>
              </div>
            </div>

            {/* Right Column: Profile Detailed Deep-Dive View (7 Cols) */}
            <div className="lg:col-span-7" id="team-profile-deep-dive">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-40"></div>

                {/* Profile Header Block */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-100 pb-6">
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-slate-200 shadow-md animate-fade-in"
                  />
                  <div className="text-center sm:text-left space-y-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] text-blue-600 font-mono font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "OFFICIALLY CREDENTIALED" : "CRÉDENTIALS OFFICIELS"}</span>
                    </span>
                    
                    <h3 className="font-sans text-2xl font-extrabold text-slate-900 leading-none">
                      {selectedLeader.name}
                    </h3>
                    
                    <p className="font-sans text-sm font-bold text-blue-600">
                      {selectedLeader.role}
                    </p>
                  </div>
                </div>

                {/* Bio Description */}
                <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                    {language === "en" ? "Executive Biography" : "Biographie de l'Exécutif"}
                  </h4>
                  <p className="whitespace-pre-wrap leading-relaxed">{selectedLeader.bio}</p>
                </div>

                {/* Detailed experience breakdown */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                    {language === "en" ? "Designated Experience & Credentials" : "Expériences & Titres Désignés"}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-1.5 flex items-start gap-3">
                      <Award className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-950 font-sans text-xs block">{language === "en" ? "Operational Experience:" : "Expérience Opérationnelle :"}</strong>
                        <p className="text-slate-500 font-sans text-[11px] leading-relaxed mt-0.5">{selectedLeader.experience}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-1.5 flex items-start gap-3">
                      <Briefcase className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-950 font-sans text-xs block">{language === "en" ? "Global Portfolios Managed:" : "Portefeuilles Mondiaux Gérés :"}</strong>
                        <p className="text-slate-500 font-sans text-[11px] leading-relaxed mt-0.5">
                          {getPortfolios(selectedLeader.name)}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Contact and Location Details (Especially for Arsene Mulolo Mulapia) */}
                {isArsene && (
                  <div className="pt-6 border-t border-slate-100 space-y-3 font-sans text-xs">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                      {language === "en" ? "Global Direct Access Contacts" : "Contacts Directs d'Accès Globaux"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px] text-slate-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>+90 533 838 4684 (Turkey)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>+243 832 298 734 (DRC)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>US Office: +1 682 424 5857</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Congo Office: +243 826 778 267</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Email: arsene.mulolo@pesagroup.org | infos@pesagroup.org</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact and LinkedIn Link */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{isArsene ? "arsene.mulolo@pesagroup.org" : "info@pesagroup.org"}</span>
                  </div>

                  <a 
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-sans font-bold"
                    id={`linkedin-link-${selectedLeader.name.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <span>{language === "en" ? "View LinkedIn Profile" : "Voir le profil LinkedIn"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
