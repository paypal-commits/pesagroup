import { useState } from "react";
import { 
  FileText, Download, Play, HelpCircle, ChevronDown, BookOpen, 
  Search, ExternalLink, ShieldCheck, ArrowRight, Video, Bookmark, CheckCircle
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ResourcesPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeActionMsg, setActiveActionMsg] = useState("");

  const resources = [
    {
      id: "r1",
      category: "white-paper",
      categoryFr: "Livre Blanc",
      title: language === "en" 
        ? "Multi-Jurisdictional Capital Allocations & Offshore Regulatory Structures"
        : "Allocations de Capital Multi-Jurisdictionnelles & Structures Réglementaires Offshore",
      date: "July 2026",
      desc: language === "en"
        ? "An in-depth white paper charting cross-border tax compliance, project pre-financing frameworks, and securing direct investor alignment on international infrastructure deals."
        : "Un livre blanc approfondi décrivant la conformité fiscale transfrontalière, les cadres de préfinancement de projet et la sécurisation des investisseurs dans les transactions d'infrastructure.",
      readTime: language === "en" ? "12 min read" : "Lecture 12 min",
      author: "Camy Likobe & Laetitia Kalala",
      downloads: "1,200+"
    },
    {
      id: "r2",
      category: "case-study",
      categoryFr: "Étude de Cas",
      title: language === "en"
        ? "The PESA Method: Executing Complete Business Transformation for 1,200 Scholars"
        : "La Méthode PESA : Réussir la Transformation Complète pour 1 200 Boursiers",
      date: "May 2026",
      desc: language === "en"
        ? "A detailed client case study assessing how PESA Education restructured study visa compliance, ensuring 100% approval ratings across selected partner academic institutions."
        : "Une étude de cas client détaillée évaluant comment PESA Education a structuré la conformité des demandes de visas d'études, garantissant des taux d'approbation de 100%.",
      readTime: language === "en" ? "8 min read" : "Lecture 8 min",
      author: "Carole Boboy",
      downloads: "850+"
    },
    {
      id: "r3",
      category: "research-report",
      categoryFr: "Rapport d'Analyse",
      title: language === "en"
        ? "Sub-Saharan Mineral Supply-Chains: Ethical Compliance & Logistics Security"
        : "Chaînes d'Approvisionnement Minérales d'Afrique Subsaharienne : Conformité Éthique & Sécurité",
      date: "April 2026",
      desc: language === "en"
        ? "Strategic research tracking supply-chain safety parameters, environmental due diligence, and structuring bilateral critical minerals contracts under strict international transparency standards."
        : "Recherche stratégique analysant les paramètres de sécurité des chaînes logistiques, le devoir de vigilance environnemental et la structuration des contrats miniers éthiques.",
      readTime: language === "en" ? "15 min read" : "Lecture 15 min",
      author: "PESA Mining Research Division",
      downloads: "620+"
    },
    {
      id: "r4",
      category: "white-paper",
      categoryFr: "Livre Blanc",
      title: language === "en"
        ? "Securing Multi-Channel Advisory Portals in the Era of AI & Zero Trust"
        : "Sécurisation des Portails de Conseil à l'Ère de l'IA & du Zero Trust",
      date: "June 2026",
      desc: language === "en"
        ? "Technical frameworks designed to audit corporate wire transfers, eliminate physical cash transactions, and enforce cryptographically validated documentation pipelines."
        : "Protocoles techniques conçus pour auditer les virements d'entreprise, interdire totalement les espèces et déployer des flux de documents validés par chiffrement.",
      readTime: language === "en" ? "10 min read" : "Lecture 10 min",
      author: "PESA Tech Board",
      downloads: "980+"
    },
    {
      id: "r5",
      category: "video",
      categoryFr: "Vidéo",
      title: language === "en"
        ? "Executive Address: Scaling Corporate Operations Across Dallas & Kinshasa Channels"
        : "Allocution Executive : Déployer les Opérations Commerciales entre Dallas & Kinshasa",
      date: "March 2026",
      desc: language === "en"
        ? "A masterclass video led by President Camy Likobe detailing the core values of performance, timeliness, and the lean organization structure of PESA Consulting Group."
        : "Une vidéo masterclass menée par le président Camy Likobe détaillant les valeurs de performance, de ponctualité et de structure allégée de PESA Consulting Group.",
      readTime: language === "en" ? "18 min video" : "Vidéo 18 min",
      author: "Camy Likobe",
      downloads: "2,400+ views"
    }
  ];

  const faqs = [
    {
      q: language === "en" 
        ? "What is PESA's policy regarding cash transactions?" 
        : "Quelle est la politique de PESA concernant les transactions en espèces ?",
      a: language === "en"
        ? "PESA Consulting Group enforces a strict cash ban across all global operations. Under no circumstances should cash payments be delivered to any representative. All operations, contracts, and invoices must be funded exclusively via secure corporate bank wire transfers. Detailed coordinate documents are shared directly upon agreement execution."
        : "Le Groupe PESA applique une interdiction stricte de transactions en espèces dans le cadre de ses opérations mondiales. En aucun cas des paiements en espèces ne doivent être remis à un collaborateur. Toutes les opérations, contrats et factures sont réglés exclusivement par virement bancaire professionnel sécurisé. Les coordonnées bancaires officielles sont transmises directement à la signature."
    },
    {
      q: language === "en"
        ? "How does the pre-financing model work?"
        : "Comment fonctionne le modèle de préfinancement ?",
      a: language === "en"
        ? "PESA provides two financing methodologies: 1) Pre-financing by PESA, which strictly requires the execution of an official Contract or Memorandum of Understanding (MOU) first, and 2) Financing by the Client, which can be structured in standard milestone installments or in full."
        : "PESA propose deux modalités de financement : 1) Le préfinancement par PESA, qui requiert obligatoirement la signature préalable d'un contrat officiel ou protocole d'accord (MOU), et 2) Le financement par le client, structuré sous forme d'étapes de paiement convenues ou d'un règlement unique."
    },
    {
      q: language === "en"
        ? "What are the core professional values governing PESA's teams?"
        : "Quelles sont les valeurs professionnelles fondamentales qui guident les équipes de PESA ?",
      a: language === "en"
        ? "Our organizational culture is built strictly on quality of work, strict adherence to deadlines, and absolute rigor in execution. Under CEO Camy Likobe's leadership, personal friendships, affinities, and favoritism are completely set aside to guarantee optimal corporate deliverables."
        : "Notre culture d'entreprise repose strictement sur la qualité du travail, le respect des délais et la rigueur d'exécution. Sous l'impulsion de Camy Likobe, les amitiés personnelles, affinités et le favoritisme sont totalement écartés afin de garantir des résultats optimaux pour nos clients."
    },
    {
      q: language === "en"
        ? "How is PESA's organizational structure optimized?"
        : "Comment la structure organisationnelle de PESA est-elle optimisée ?",
      a: language === "en"
        ? "We maintain a lean, high-speed organization by utilizing professional outsourcing for physical operations, while retaining strategic control: the USA Team (Dallas) manages executive governance, tech infrastructures, and corporate financing, while the Kinshasa Team manages finance, audits, local subcontractors, and regional marketing."
        : "Nous maintenons une organisation agile à haute vitesse en externalisant les fonctions matérielles, tout en conservant le contrôle stratégique : l'équipe des États-Unis (Dallas) gère la gouvernance exécutive, les infrastructures techniques et le financement, tandis que l'équipe de Kinshasa pilote les finances locales, les audits, les sous-traitants régionaux et le marketing."
    },
    {
      q: language === "en"
        ? "Does PESA provide immigration legal advice under PESA Education?"
        : "PESA propose-t-elle des conseils juridiques en matière d'immigration via PESA Education ?",
      a: language === "en"
        ? "PESA Education simplifies study abroad paths and provides expert student visa (F-1) document compiling and interview prep. These programs represent professional administrative consulting and do not constitute official legal immigration advisory services."
        : "PESA Education simplifie les parcours d'études à l'étranger et propose un accompagnement expert pour la constitution des dossiers de visa étudiant (F-1) et la préparation aux entretiens. Ces prestations relèvent du conseil administratif professionnel et ne constituent pas des conseils juridiques officiels d'immigration."
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesTab = activeTab === "all" || res.category === activeTab;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleActionClick = (title: string, isVideo: boolean) => {
    const verb = language === "en" ? "Initiated" : "Lancé";
    const noun = isVideo 
      ? (language === "en" ? "secure streaming interface" : "lecteur vidéo sécurisé")
      : (language === "en" ? "encrypted document download" : "téléchargement chiffré");
    
    setActiveActionMsg(`${verb}: ${noun} for "${title}"`);
    setTimeout(() => {
      setActiveActionMsg("");
    }, 4500);
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="resources-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="resources-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {language === "en" ? "Knowledge Center" : "Centre de Connaissances"}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Insights, White Papers & FAQs" : "Analyses, Livres Blancs & FAQ"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Access our vetted publications, strategic research, case studies, and comprehensive compliance guides from PESA's Executive Board."
              : "Accédez à nos publications vérifiées, recherches stratégiques, études de cas et guides de conformité produits par le conseil exécutif de PESA."}
          </p>
        </div>
      </section>

      {/* Action confirmation notification */}
      {activeActionMsg && (
        <div className="fixed top-24 right-4 sm:right-10 z-50 bg-slate-900 text-white px-5 py-4.5 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3 animate-slide-in font-sans text-xs">
          <CheckCircle className="w-5 h-5 text-emerald-500 animate-bounce" />
          <span className="font-bold">{activeActionMsg}</span>
        </div>
      )}

      {/* 2. Knowledge Center Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Tabs & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-10" id="resources-controls">
            <div className="flex flex-wrap gap-1.5" id="resources-tabs">
              {[
                { id: "all", label: language === "en" ? "All Insights" : "Toutes les Analyses" },
                { id: "white-paper", label: language === "en" ? "White Papers" : "Livres Blancs" },
                { id: "case-study", label: language === "en" ? "Case Studies" : "Études de Cas" },
                { id: "research-report", label: language === "en" ? "Research Reports" : "Rapports de Recherche" },
                { id: "video", label: language === "en" ? "Videos" : "Vidéos" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold border transition-colors ${
                    activeTab === tab.id 
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm" 
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                  id={`tab-resource-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72" id="resources-search-wrapper">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search resources..." : "Rechercher des ressources..."}
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
              />
            </div>
          </div>

          {/* Resources listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="resources-grid">
            {filteredResources.map((res) => (
              <div 
                key={res.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
                id={`resource-card-${res.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded font-bold">
                      {language === "en" ? res.category.replace("-", " ") : res.categoryFr}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{res.date}</span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-slate-950 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-slate-400">
                    {language === "en" ? "Author" : "Auteur"}: {res.author} // {res.readTime}
                  </div>
                  
                  <button 
                    onClick={() => handleActionClick(res.title, res.category === "video")}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-sans font-bold cursor-pointer"
                  >
                    {res.category === "video" ? <Play className="w-3.5 h-3.5 shrink-0" /> : <Download className="w-3.5 h-3.5 shrink-0" />}
                    <span>{res.category === "video" ? (language === "en" ? "Watch Video" : "Visionner") : (language === "en" ? "Download PDF" : "Télécharger PDF")}</span>
                  </button>
                </div>
              </div>
            ))}

            {filteredResources.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-500 text-xs font-sans">
                {language === "en"
                  ? "No articles or papers matched your parameters. Please refine your query keywords."
                  : "Aucun article ou publication ne correspond à vos paramètres. Veuillez affiner votre recherche."}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================= FAQs SECTION ================= */}
      <section className="py-20 bg-slate-100 border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
              {language === "en" ? "Frequently Answered" : "Foire Aux Questions"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "General Compliance & Operations FAQ" : "FAQ Générale Opérations & Conformité"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="space-y-4" id="faq-accordions">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-sans text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans border-t border-slate-50 animate-fade-in whitespace-pre-wrap">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
