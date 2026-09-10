import React, { useState } from "react";
import { 
  Truck, ShieldCheck, TrendingUp, Globe2, Layers, Anchor, 
  ArrowRight, CheckCircle2, ChevronRight, FileText, Send, 
  Building2, HardHat, Compass, BarChart3, AlertCircle, Phone, Mail, Award,
  Cpu, Warehouse, ArrowUpRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SomptueuxMineralsProps {
  onNavigate?: (path: string) => void;
}

type InquiryType = "invest" | "partner" | "info";

export default function SomptueuxMinerals({ onNavigate }: SomptueuxMineralsProps) {
  const { language, t } = useLanguage();
  const [inquiryType, setInquiryType] = useState<InquiryType>("invest");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    partnerCategory: "Investor",
    capitalScope: "Under $1M",
    interests: [] as string[],
    message: ""
  });

  const investmentAreas = [
    {
      title: language === "en" ? "Mineral Transportation Fleets" : "Flottes de Transport Minier",
      desc: language === "en" ? "Dedicated heavy freight transport assets operating across primary mining corridors." : "Véhicules lourds opérant sur les corridors miniers stratégiques.",
      icon: Truck
    },
    {
      title: language === "en" ? "Heavy-Duty Trucks & Specialized Equipment" : "Camions Lourds & Équipements Spécialisés",
      desc: language === "en" ? "High-capacity articulated dump trucks, flatbeds, and off-road industrial haulage units." : "Bennes articulées, plateaux et unités de traction industrielle tout-terrain.",
      icon: HardHat
    },
    {
      title: language === "en" ? "Regional Logistics Operations" : "Opérations Logistiques Régionales",
      desc: language === "en" ? "Coordinated transit networks linking remote extraction concessions with commercial nodes." : "Réseaux de transit coordonnés reliant les concessions d'extraction aux pôles commerciaux.",
      icon: Layers
    },
    {
      title: language === "en" ? "Mineral Storage & Warehousing" : "Stockage & Entreposage Minier",
      desc: language === "en" ? "Secure, monitored transit hubs and containment yards ensuring cargo integrity." : "Centres de transit sécurisés et dépôts sous surveillance garantissant l'intégrité des cargaisons.",
      icon: Warehouse
    },
    {
      title: language === "en" ? "Transportation Hubs" : "Hubs de Transport Multimodaux",
      desc: language === "en" ? "Strategic transfer stations facilitating road, rail, and maritime transshipment." : "Gares de transfert stratégiques facilitant le transbordement route, rail et maritime.",
      icon: Compass
    },
    {
      title: language === "en" ? "Supply-Chain Management" : "Gestion de la Chaîne d'Approvisionnement",
      desc: language === "en" ? "End-to-end oversight, inventory control, and precision route scheduling." : "Supervision de bout en bout, contrôle d'inventaire et ordonnancement précis des itinéraires.",
      icon: BarChart3
    },
    {
      title: language === "en" ? "Road & Logistics Infrastructure" : "Infrastructures Routières & Logistiques",
      desc: language === "en" ? "Targeted access corridor improvements, maintenance depots, and fueling terminals." : "Aménagements de corridors d'accès, ateliers de maintenance et terminaux de ravitaillement.",
      icon: Building2
    },
    {
      title: language === "en" ? "Mineral Handling & Consolidation" : "Manutention & Consolidation des Minerais",
      desc: language === "en" ? "Sampling, quality validation, bagging, and bulk payload aggregation." : "Échantillonnage, validation qualité, mise en sacs et agrégation de charges en vrac.",
      icon: Layers
    },
    {
      title: language === "en" ? "Cross-Border Logistics" : "Logistique Transfrontalière",
      desc: language === "en" ? "Customs bonded transit, export corridor clearances, and seaport connectivity." : "Transit sous douane, dédouanement sur corridors d'exportation et connectivité portuaire.",
      icon: Anchor
    },
    {
      title: language === "en" ? "Tracking & Shipment Technology" : "Technologie de Suivi & Télématique",
      desc: language === "en" ? "Real-time IoT sensors, GPS tracking, and digital chain-of-custody verification." : "Capteurs IoT en temps réel, géolocalisation GPS et traçabilité numérique de la chaîne de possession.",
      icon: Cpu
    }
  ];

  const valueChainSteps = [
    { step: "01", label: language === "en" ? "Mining Site" : "Site Minier", desc: language === "en" ? "Extraction & extraction-site staging" : "Extraction et zone de préparation" },
    { step: "02", label: language === "en" ? "Collection" : "Collecte", desc: language === "en" ? "Aggregated batch pickup & documentation" : "Prise en charge et documentation" },
    { step: "03", label: language === "en" ? "Transportation" : "Transport", desc: language === "en" ? "Heavy-duty road haulage & secured transit" : "Roulage lourd et transit sécurisé" },
    { step: "04", label: language === "en" ? "Storage" : "Stockage", desc: language === "en" ? "Bonded warehousing & security containment" : "Entreposage sous douane et surveillance" },
    { step: "05", label: language === "en" ? "Processing" : "Traitement", desc: language === "en" ? "Refining, smelting, and concentration hubs" : "Raffinage, fonderie et concentration" },
    { step: "06", label: language === "en" ? "Market" : "Marché", desc: language === "en" ? "Regional commodity trading & commercialization" : "Négociation et commercialisation régionale" },
    { step: "07", label: language === "en" ? "Export" : "Exportation", desc: language === "en" ? "Seaport access & global buyer delivery" : "Accès portuaire et livraison internationale" }
  ];

  const partnerCategories = [
    {
      title: language === "en" ? "Investors" : "Investisseurs",
      desc: language === "en" 
        ? "Individuals, investment groups, private equity funds, and institutions interested in mineral logistics and transportation capital assets."
        : "Particuliers, groupes d'investissement, fonds privés et institutions intéressés par les actifs de transport minier.",
      tag: language === "en" ? "Capital Growth" : "Croissance du Capital",
      icon: TrendingUp
    },
    {
      title: language === "en" ? "Logistics Companies" : "Compagnies Logistiques",
      desc: language === "en" 
        ? "Transportation operators, fleet owners, and freight forwarders seeking strategic joint ventures, contract routes, and fleet expansion."
        : "Opérateurs de transport, propriétaires de flottes et transitaires recherchant des partenariats stratégiques et corridors dédiés.",
      tag: language === "en" ? "Operational Synergy" : "Synergie Opérationnelle",
      icon: Truck
    },
    {
      title: language === "en" ? "Mining Companies" : "Compagnies Minières",
      desc: language === "en" 
        ? "Licensed industrial and semi-industrial mining concessionaires requiring dependable, high-tonnage off-take transport and supply-chain solutions."
        : "Concessionnaires miniers industriels recherchant un transport d'évacuation fiable et à fort tonnage.",
      tag: language === "en" ? "Reliable Off-Take" : "Évacuation Fiable",
      icon: HardHat
    },
    {
      title: language === "en" ? "Equipment Partners" : "Partenaires Équipementiers",
      desc: language === "en" 
        ? "OEMs, heavy truck manufacturers, trailer fabricators, telematics providers, and maintenance service suppliers."
        : "Constructeurs de camions, fabricants de remorques, fournisseurs de télématique et services de maintenance.",
      tag: language === "en" ? "Fleet & Systems" : "Flotte & Systèmes",
      icon: Cpu
    },
    {
      title: language === "en" ? "Financial Partners" : "Partenaires Financiers",
      desc: language === "en" 
        ? "Development finance institutions, trade credit underwriters, equipment leasing entities, and infrastructure debt providers."
        : "Institutions de financement du développement, assureurs crédit-bail et bailleurs d'infrastructures.",
      tag: language === "en" ? "Asset Financing" : "Financement d'Actifs",
      icon: Building2
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          partnerCategory: "Investor",
          capitalScope: "Under $1M",
          interests: [],
          message: ""
        });
      }, 6000);
    }
  };

  const scrollToInquiry = (type: InquiryType) => {
    setInquiryType(type);
    const element = document.getElementById("partner-inquiry-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 animate-fade-in bg-slate-50 text-slate-900" id="somptueux-minerals-page-root">
      
      {/* 1. Header Banner & Sector Identity */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0C1B2E] to-slate-950 text-white pt-24 pb-20 relative overflow-hidden border-b border-slate-800" id="minerals-hero">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Super-title */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>PESA CONSULTING GROUP • SOMPTUEUX MINERALS</span>
            </div>

            {/* Main Sector Title */}
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-tight">
              SOMPTUEUX MINERALS
            </h1>

            {/* Pillars subtitle */}
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-bold">
              MINING • MINERAL LOGISTICS • TRANSPORTATION • INVESTMENT
            </p>

            {/* Core Tagline */}
            <div className="relative py-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-slate-200 font-normal">
                "{language === "en" ? "Connecting Mineral Resources to Global Markets" : "Connecter les Ressources Minières aux Marchés Mondiaux"}"
              </h2>
              <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-4"></div>
            </div>

            {/* Narrative Mission Statement */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              {language === "en"
                ? "Somptueux Minerals is developing opportunities in the Democratic Republic of Congo (DRC) focused on mineral logistics, transportation, supply-chain solutions and strategic partnerships. Our vision is to build an efficient logistics network that connects mining operations with processing facilities, warehouses, regional markets and international destinations."
                : "Somptueux Minerals développe des opportunités en République Démocratique du Congo (RDC) axées sur la logistique minière, le transport, les solutions de chaîne d'approvisionnement et les partenariats stratégiques. Notre vision est de bâtir un réseau logistique efficient reliant les exploitations minières aux usines de traitement, entrepôts, marchés régionaux et destinations internationales."}
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button 
                onClick={() => scrollToInquiry("invest")}
                id="hero-btn-invest-with-us"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs uppercase font-mono tracking-widest font-bold shadow-lg shadow-blue-600/25 transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>{language === "en" ? "Invest With Us" : "Investir avec Nous"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollToInquiry("partner")}
                id="hero-btn-become-partner"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-blue-200 hover:text-white border border-slate-700 rounded-lg text-xs uppercase font-mono tracking-widest font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>{language === "en" ? "Become a Partner" : "Devenir Partenaire"}</span>
                <Globe2 className="w-4 h-4 text-blue-400" />
              </button>

              <button 
                onClick={() => scrollToInquiry("info")}
                id="hero-btn-request-info"
                className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-600 rounded-lg text-xs uppercase font-mono tracking-widest font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>{language === "en" ? "Request Investor Info" : "Dossier Investisseur"}</span>
                <FileText className="w-4 h-4 text-slate-400" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INVEST WITH US - DRC Economy Deep Dive */}
      <section className="py-20 bg-white border-b border-slate-200" id="invest-with-us-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono uppercase tracking-widest font-extrabold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Strategic Investment Thesis" : "Thèse d'Investissement Stratégique"}</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {language === "en" 
                  ? "Building the Logistics Infrastructure Behind the DRC's Mineral Economy"
                  : "Bâtir l'Infrastructure Logistique au Cœur de l'Économie Minière en RDC"}
              </h2>
              
              <div className="w-12 h-[2px] bg-blue-600"></div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  {language === "en"
                    ? "Through Somptueux Minerals, a business sector of PESA Group, we are developing opportunities in mining, mineral logistics and transportation in the Democratic Republic of Congo (DRC)."
                    : "À travers Somptueux Minerals, un secteur d'activité du Groupe PESA, nous développons des opportunités dans les mines, la logistique minérale et le transport en République Démocratique du Congo (RDC)."}
                </p>
                <p>
                  {language === "en"
                    ? "PESA Group is seeking strategic investors, financial partners, logistics companies and industry partners to participate in the development of reliable mineral transportation and logistics infrastructure."
                    : "Le Groupe PESA recherche des investisseurs stratégiques, des partenaires financiers, des compagnies logistiques et des acteurs industriels pour participer au développement d'une infrastructure de transport minier fiable et pérenne."}
                </p>
                <p className="font-medium text-slate-800">
                  {language === "en"
                    ? "Our objective is to connect mining operations with processing facilities, storage locations, regional markets and international supply chains through efficient and responsible logistics solutions."
                    : "Notre objectif est de relier les exploitations minières aux installations de traitement, sites d'entreposage, marchés régionaux et chaînes d'approvisionnement internationales grâce à des solutions logistiques efficientes et responsables."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">DRC</div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{language === "en" ? "Global Minerals Hub" : "Cœur Minier Mondial"}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">100%</div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{language === "en" ? "Traceable Routes" : "Routes Traçables"}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">B2B</div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{language === "en" ? "Institutional Scale" : "Échelle Institutionnelle"}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=900" 
                  alt="Mineral Transportation Fleet" 
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">
                    {language === "en" ? "Heavy Logistics Corridor" : "Corridor Logistique Lourd"}
                  </span>
                  <h4 className="font-sans text-lg font-bold">
                    {language === "en" ? "Safe & Secured Multi-Axle Haulage" : "Transport Sécurisé Multi-Essieux"}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {language === "en" 
                      ? "High-tonnage fleet solutions engineered for Central African mining corridors." 
                      : "Solutions de flottes à fort tonnage adaptées aux corridors miniers d'Afrique Centrale."}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INVEST IN THE FUTURE OF MINERAL LOGISTICS - 10 Core Opportunities */}
      <section className="py-20 bg-slate-900 text-white" id="investment-opportunities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block">
              {language === "en" ? "Targeted Capital Deployment" : "Déploiement Stratégique de Capital"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
              {language === "en" ? "Invest in the Future of Mineral Logistics" : "Investir dans l'Avenir de la Logistique Minière"}
            </h2>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto"></div>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {language === "en"
                ? "The growth of the mining sector creates a strong need for reliable transportation, logistics infrastructure and supply-chain services. Somptueux Minerals is seeking strategic investors, logistics partners and business partners interested in participating in the development of mineral transportation and logistics capabilities in the DRC."
                : "La croissance soutenue du secteur minier génère un besoin fondamental en matière de transport fiable, d'infrastructures logistiques et de gestion de chaîne d'approvisionnement. Somptueux Minerals recherche des investisseurs et partenaires désireux de participer au déploiement de ces capacités en RDC."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                  id={`investment-area-card-${idx}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
                        {area.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="uppercase tracking-wider font-semibold text-blue-400">
                      {language === "en" ? "Opportunity Profile" : "Profil d'Opportunité"}
                    </span>
                    <span className="text-slate-600 font-bold">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY MINERAL LOGISTICS? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="why-mineral-logistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold block">
                {language === "en" ? "Market Rationale & Thesis" : "Justification & Analyse de Marché"}
              </span>
              
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === "en" ? "Why Mineral Logistics?" : "Pourquoi la Logistique Minérale ?"}
              </h2>

              <blockquote className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 text-slate-900 font-serif italic text-base sm:text-lg">
                "{language === "en" ? "Minerals cannot reach markets without an efficient supply chain." : "Les minerais ne peuvent atteindre les marchés mondiaux sans une chaîne d'approvisionnement efficiente."}"
              </blockquote>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-sans">
                <p>
                  {language === "en"
                    ? "Our objective is to create a logistics platform that helps move mineral products safely, efficiently and responsibly from production areas to processing facilities and markets."
                    : "Notre mission est d'établir une plateforme logistique permettant d'acheminer les minerais de façon sécurisée, efficiente et responsable depuis les zones d'extraction jusqu'aux installations de transformation et aux marchés finaux."}
                </p>
                <p>
                  {language === "en"
                    ? "By investing in transportation and logistics capacity, investors can participate in the infrastructure that supports the broader mining economy without taking on the exploration risks of direct extraction."
                    : "En investissant dans les capacités de transport et d'infrastructure logistique, les investisseurs participent activement aux fondations de l'économie minière tout en évitant les aléas géologiques directs de l'extraction."}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  language === "en" ? "Critical infrastructure bottleneck solved through modern fleet management" : "Goulot d'étranglement résolu par une gestion moderne de flotte",
                  language === "en" ? "Predictable revenue structures tied to commercial off-take contracts" : "Revenus prévisibles adossés à des contrats commerciaux d'évacuation",
                  language === "en" ? "Stringent anti-illicit trade standards, security escorts, and digital seals" : "Normes anti-fraude rigoureuses, escortes sécurisées et scellés numériques"
                ].map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-sans font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow border border-slate-200 h-52">
                    <img 
                      src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=600" 
                      alt="Mining extraction and handling" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">{language === "en" ? "Asset Backed" : "Actifs Tangibles"}</div>
                    <p className="text-xs text-slate-600 font-sans">{language === "en" ? "Physical, heavy-duty commercial equipment and dedicated regional warehouses." : "Équipements industriels lourds et entrepôts régionaux dédiés."}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="p-5 rounded-xl bg-[#0A2540] text-white border border-slate-800 shadow-sm space-y-2">
                    <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">{language === "en" ? "Global Demand" : "Demande Mondiale"}</div>
                    <p className="text-xs text-slate-300 font-sans">{language === "en" ? "Connecting critical energy transition minerals to international refiners." : "Connexion des minerais de transition énergétique aux raffineurs mondiaux."}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow border border-slate-200 h-52">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                      alt="Global container shipment logistics" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH - Value Chain Process Flow */}
      <section className="py-20 bg-white border-b border-slate-200" id="our-approach-value-chain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold block">
              {language === "en" ? "End-to-End Execution Pipeline" : "Pipeline d'Exécution Intégral"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {language === "en" ? "Our Approach: The Full Value Chain" : "Notre Approche : La Chaîne de Valeur Complète"}
            </h2>
            <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              {language === "en"
                ? "We aim to develop partnerships across this value chain while maintaining strong standards for safety, traceability, regulatory compliance and responsible sourcing."
                : "Nous visons à développer des partenariats tout au long de cette chaîne de valeur tout en maintenant des normes rigoureuses en matière de sécurité, traçabilité, conformité légale et approvisionnement responsable."}
            </p>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3" id="approach-value-chain-stepper">
            {valueChainSteps.map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600">{step.step}</span>
                    {idx < valueChainSteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-300 hidden lg:block group-hover:text-blue-500 transition-colors" />
                    )}
                  </div>
                  <h4 className="font-sans text-sm font-extrabold text-slate-900 mb-1">
                    {step.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-sans leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Standards Row */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">{language === "en" ? "Safety" : "Sécurité"}</div>
              <p className="text-xs text-slate-300 font-sans">{language === "en" ? "Rigorous fleet maintenance & operator certification." : "Maintenance rigoureuse des flottes et certification des chauffeurs."}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">{language === "en" ? "Traceability" : "Traçabilité"}</div>
              <p className="text-xs text-slate-300 font-sans">{language === "en" ? "Tamper-evident seals, lot tagging & digital documentation." : "Scellés infalsifiables, étiquetage des lots et documentation numérique."}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">{language === "en" ? "Compliance" : "Conformité"}</div>
              <p className="text-xs text-slate-300 font-sans">{language === "en" ? "Full alignment with DRC Mining Code, CEEC & international export rules." : "Conformité intégrale au Code Minier de la RDC, au CEEC et aux normes d'exportation."}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">{language === "en" ? "Responsible Sourcing" : "Approvisionnement Responsable"}</div>
              <p className="text-xs text-slate-300 font-sans">{language === "en" ? "Strict due diligence against conflict financing and illicit trade." : "Diligence raisonnable stricte contre le financement des conflits et le commerce illicite."}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. INVESTMENT & PARTNERSHIP OPPORTUNITIES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="partnership-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold block">
              {language === "en" ? "Who We Collaborate With" : "Nos Interlocuteurs & Partenaires"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {language === "en" ? "Investment & Partnership Opportunities" : "Opportunités d'Investissement & de Partenariat"}
            </h2>
            <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              {language === "en"
                ? "Somptueux Minerals welcomes high-level discussions with institutional capital, operators, and industry leaders across five core engagement tracks:"
                : "Somptueux Minerals invite aux discussions de haut niveau les acteurs de capitaux institutionnels, les opérateurs et les industriels selon cinq axes prioritaires :"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
                  id={`partner-cat-card-${idx}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                        {cat.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-slate-950">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed mt-2">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button 
                      onClick={() => scrollToInquiry("partner")}
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{language === "en" ? "Discuss Collaboration" : "Initier un Échange"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Direct Connect Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2540] to-slate-900 text-white border border-slate-800 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase tracking-widest font-bold">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "Bespoke Structuring" : "Montage Sur Mesure"}</span>
                </div>
                <h3 className="font-sans text-lg font-bold text-white">
                  {language === "en" ? "Custom Logistics Mandates" : "Mandats Logistiques Dédiés"}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {language === "en"
                    ? "Need a dedicated dedicated corridor assessment or tailored fleet concession? Our executive leadership in Dallas and Kinshasa coordinates directly."
                    : "Besoin d'une analyse de corridor dédié ou d'une concession de flotte sur mesure ? Notre direction exécutive à Dallas et Kinshasa vous accompagne directement."}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2 font-mono text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>US: +1 (682) 424-5857</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>DRC: +243 821 368 004</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. BUILD WITH US & INTERACTIVE INQUIRY FORM */}
      <section className="py-24 bg-white" id="partner-inquiry-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono uppercase tracking-widest font-extrabold">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Build With Us" : "Bâtir avec Nous"}</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              {language === "en" ? "Partner With Somptueux Minerals" : "Partenaire de Somptueux Minerals"}
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-blue-600 font-normal">
              "{language === "en" ? "Invest in Logistics. Connect Resources. Create Opportunity." : "Investir dans la Logistique. Connecter les Ressources. Créer l'Opportunité."}"
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
              {language === "en"
                ? "We are looking for partners who share our vision of developing efficient, responsible and scalable mineral logistics infrastructure in the DRC. Whether you are interested in financing transportation equipment, partnering on logistics operations, providing fleet capacity or developing infrastructure, we invite you to explore opportunities with Somptueux Minerals."
                : "Nous recherchons des partenaires partageant notre vision de développer une infrastructure de logistique minérale efficiente, responsable et évolutive en RDC. Que vous souhaitiez financer du matériel de transport, vous associer à des opérations logistiques, fournir des capacités de flotte ou développer des infrastructures, nous vous invitons à explorer ces opportunités avec Somptueux Minerals."}
            </p>
          </div>

          {/* Form container */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Mode selector tab bar */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-white">
              <button 
                type="button"
                onClick={() => setInquiryType("invest")}
                className={`py-4 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
                  inquiryType === "invest" 
                    ? "border-blue-600 text-blue-600 bg-blue-50/50" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "en" ? "Invest With Us" : "Investir avec Nous"}</span>
                <span className="sm:hidden">Invest</span>
              </button>

              <button 
                type="button"
                onClick={() => setInquiryType("partner")}
                className={`py-4 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
                  inquiryType === "partner" 
                    ? "border-blue-600 text-blue-600 bg-blue-50/50" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "en" ? "Become a Partner" : "Devenir Partenaire"}</span>
                <span className="sm:hidden">Partner</span>
              </button>

              <button 
                type="button"
                onClick={() => setInquiryType("info")}
                className={`py-4 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
                  inquiryType === "info" 
                    ? "border-blue-600 text-blue-600 bg-blue-50/50" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "en" ? "Request Investor Info" : "Dossier Investisseur"}</span>
                <span className="sm:hidden">Info</span>
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleFormSubmit} className="p-6 sm:p-10 space-y-6">
              
              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-sans text-xl font-bold">
                    {language === "en" ? "Confidential Inquiry Received" : "Demande Confidentielle Enregistrée"}
                  </h4>
                  <p className="text-xs font-sans max-w-md mx-auto text-emerald-700 leading-relaxed">
                    {language === "en"
                      ? "Thank you for reaching out to Somptueux Minerals / PESA Group. Our executive minerals advisory desk will review your credentials and contact you directly."
                      : "Merci d'avoir contacté Somptueux Minerals / Groupe PESA. Notre direction exécutive examinera vos informations et prendra contact avec vous."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Full Name *" : "Nom Complet *"}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === "en" ? "e.g. Johnathan Carter" : "ex. Jean-Paul Mbemba"}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Entity / Organization Name *" : "Nom de l'Entité / Organisation *"}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={language === "en" ? "e.g. Apex Global Logistics Ltd." : "ex. Groupe Minier Congolais"}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Corporate Email Address *" : "Adresse Email Professionnelle *"}
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="executive@company.com"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Direct Phone / WhatsApp" : "Téléphone Direct / WhatsApp"}
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000 / +243 ..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Engagement Track" : "Axe d'Engagement"}
                      </label>
                      <select 
                        value={formData.partnerCategory}
                        onChange={(e) => setFormData({ ...formData, partnerCategory: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Investor">{language === "en" ? "Strategic Investor (Equity / Infrastructure Debt)" : "Investisseur Stratégique (Capital / Dette)"}</option>
                        <option value="Logistics Company">{language === "en" ? "Logistics / Fleet Operator" : "Compagnie Logistique / Opérateur de Flotte"}</option>
                        <option value="Mining Company">{language === "en" ? "Mining Operator (Off-Take Haulage)" : "Compagnie Minière (Évacuation de Minerais)"}</option>
                        <option value="Equipment Partner">{language === "en" ? "Equipment Partner (Trucks, Spares, Telematics)" : "Partenaire Équipementier (Camions, Télématique)"}</option>
                        <option value="Financial Partner">{language === "en" ? "Financial Institution / Credit Partner" : "Partenaire Financier / Crédit-Bail"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {language === "en" ? "Target Scope / Fleet Scale" : "Envergure Visée / Volume de Flotte"}
                      </label>
                      <select 
                        value={formData.capitalScope}
                        onChange={(e) => setFormData({ ...formData, capitalScope: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Under $1M">$500,000 – $1,000,000 USD (Pilot Fleet)</option>
                        <option value="$1M - $5M">$1,000,000 – $5,000,000 USD (Regional Corridor)</option>
                        <option value="$5M - $20M">$5,000,000 – $20,000,000 USD (Multi-Regional Hub)</option>
                        <option value="$20M+">$20,000,000+ USD (Major Infrastructure)</option>
                        <option value="Non-Capital Partner">{language === "en" ? "Operational / Technical Joint Venture" : "Partenariat Opérationnel / Technique"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      {language === "en" ? "Executive Summary & Objectives" : "Résumé Exécutif & Objectifs"}
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === "en" 
                        ? "Detail your organization's background, current fleet or mineral throughput, and specific partnership or financing objectives..."
                        : "Détaillez le profil de votre entité, vos volumes actuels de transport ou de minerais, et vos objectifs de partenariat ou de financement..."}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Submission Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                    <p className="text-[10px] text-slate-500 font-sans max-w-md">
                      {language === "en" 
                        ? "Submissions are treated with strict corporate confidentiality and reviewed under PESA Group compliance protocols."
                        : "Toutes les soumissions sont traitées avec une stricte confidentialité d'entreprise et soumises aux protocoles de conformité du Groupe PESA."}
                    </p>

                    <button 
                      type="submit"
                      id="submit-minerals-inquiry-btn"
                      className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs uppercase font-mono tracking-widest font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>
                        {inquiryType === "invest" && (language === "en" ? "Submit Investment Inquiry" : "Soumettre la Demande d'Investissement")}
                        {inquiryType === "partner" && (language === "en" ? "Submit Partnership Proposal" : "Soumettre la Proposition de Partenariat")}
                        {inquiryType === "info" && (language === "en" ? "Request Full Investor Pack" : "Demander le Dossier Investisseur")}
                      </span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              )}

            </form>
          </div>

        </div>
      </section>

      {/* 8. LEGAL & STATUTORY DISCLOSURES */}
      <section className="py-12 bg-slate-100 border-t border-slate-200 text-slate-600 font-sans text-xs" id="minerals-statutory-disclosures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">
                  {language === "en" ? "Investment Feasibility & Regulatory Conditions:" : "Faisabilité d'Investissement & Conditions Réglementaires :"}
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {language === "en"
                    ? "Investment opportunities are subject to project feasibility, due diligence, applicable laws and regulatory requirements and appropriate investment agreements. Somptueux Minerals and PESA Consulting Group LLC operate under strict anti-money laundering, zero-cash settlement, and anti-illicit mineral trade frameworks in both the United States and the Democratic Republic of Congo."
                    : "Les opportunités d'investissement sont soumises à la faisabilité des projets, à des contrôles préalables de diligence raisonnable, aux lois et exigences réglementaires applicables ainsi qu'à des accords d'investissement appropriés. Somptueux Minerals et PESA Consulting Group LLC opèrent sous des cadres rigoureux de lutte contre le blanchiment, de politique zéro-espèces et de traçabilité des minerais aux États-Unis et en RDC."}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-500">
              <span className="font-mono uppercase font-bold text-slate-700">{language === "en" ? "Texas Real Estate Brokerage Notice:" : "Avis Réglementaire Immobilier (Texas) :"}</span>{" "}
              {language === "en"
                ? "Texas law requires all real estate license holders to give the Information About Brokerage Services to prospective buyers, tenants, sellers and landlords."
                : "La loi du Texas exige que tous les titulaires d'une licence immobilière fournissent les Informations sur les Services de Courtage (IABS) aux acheteurs, locataires, vendeurs et propriétaires potentiels."}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
