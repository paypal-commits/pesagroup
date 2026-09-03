import React, { useState } from "react";
import { 
  Home, MapPin, DollarSign, Award, Grid, Compass, ArrowRight, 
  Phone, Mail, ShieldCheck, CheckCircle2, User, Key, Search, ChevronRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { propertiesData, landListingsData } from "../data";

export default function SomptueuxRealty() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"residential" | "land">("residential");
  const [searchTerm, setSearchTerm] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyInterest: "",
    budget: "",
    message: ""
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setInquirySubmitted(true);
      setTimeout(() => {
        setInquirySubmitted(false);
        setFormData({ name: "", email: "", phone: "", propertyInterest: "", budget: "", message: "" });
      }, 5000);
    }
  };

  const filteredProperties = propertiesData.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLands = landListingsData.filter(l => 
    l.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="somptueux-realty-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0D1E32] to-slate-950 text-white py-24 relative overflow-hidden" id="realty-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block">
            {language === "en" ? "Bespoke Brokerage & Capital Lands" : "Courtage sur Mesure & Terrains de Capital"}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            SOMPTUEUX REALTY LLC
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Your premier gateway to luxury residential estates in North Texas and strategic, high-value commercial acreage ready for major development."
              : "Votre passerelle privilégiée vers l'immobilier résidentiel de prestige dans le nord du Texas et les terrains commerciaux stratégiques prêts à l'aménagement."}
          </p>
        </div>
      </section>

      {/* 2. Brand Introduction & Core Strengths */}
      <section className="py-20" id="realty-strengths">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block">
                {language === "en" ? "Real Estate Philosophy" : "Philosophie de l'Immobilier"}
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "Exquisite Estates. Solid Land Foundations." : "Domaines d'Exception. Fondations Foncières Solides."}
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600"></div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Somptueux Realty LLC is a licensed corporate brokerage entity operating under the broad advisory umbrella of PESA Consulting Group. We specialize in curating high-net-worth residential holdings, arranging institutional land assembly, and designing strategic entry tracks for overseas investors utilizing EB-5 qualifying real estate investments."
                  : "Somptueux Realty LLC est une entité de courtage agréée opérant sous la direction stratégique de PESA Consulting Group. Nous sommes spécialisés dans la sélection de portefeuilles résidentiels haut de gamme, l'assemblage de terrains institutionnels et la conception de parcours d'investissement stratégiques pour les acheteurs internationaux via des investissements immobiliers éligibles au programme EB-5."}
              </p>

              <div className="space-y-3 text-slate-700 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{language === "en" ? "Certified luxury estate brokers in Texas" : "Courtiers certifiés en immobilier de luxe au Texas"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{language === "en" ? "Complete commercial site preparation and zoning assistance" : "Préparation complète de sites commerciaux et zonage"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{language === "en" ? "Integrated wealth preservation and tax-sheltered acquisitions" : "Préservation intégrée de patrimoine et acquisitions défiscalisées"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="strengths-bento">
              <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-4 hover:border-blue-400 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "Luxury Residential" : "Résidentiel de Luxe"}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en" 
                    ? "Bespoke mansions, architectural landmarks, and premium lock-and-leave townhomes in Collin and Denton counties." 
                    : "Manoirs sur mesure, joyaux d'architecture et résidences de prestige dans les comtés de Collin et Denton."}
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-4 hover:border-blue-400 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "Development Acreage" : "Terrains de Développement"}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en" 
                    ? "Sourcing multi-acre commercial sites, infill parcels, and strategic industrial corridors positioned for maximum growth." 
                    : "Recherche de sites commerciaux multi-acres, de parcelles intermédiaires et de corridors industriels stratégiques."}
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-4 hover:border-blue-400 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Key className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "EB-5 Capital Entry" : "Entrée de Capital EB-5"}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en" 
                    ? "Structuring fully qualifying foreign investments in verified real estate developments to secure stable pathways." 
                    : "Structuration d'investissements étrangers admissibles au programme EB-5 dans des projets immobiliers approuvés."}
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-4 hover:border-blue-400 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "Certified Advisory" : "Conseil Certifié"}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {language === "en" 
                    ? "Combining premier brokerage talent with the regulatory auditing power of PESA Consulting Group." 
                    : "Allier le talent de courtiers de premier plan avec la puissance d'audit réglementaire de PESA Consulting Group."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Listings Section */}
      <section className="py-20 bg-slate-100 border-y border-slate-200" id="realty-listings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
              {language === "en" ? "Exclusive Catalog" : "Catalogue Exclusif"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "Explore Featured Properties & Lands" : "Explorez Nos Propriétés & Terrains d'Exception"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3 mb-6"></div>
            
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              
              {/* Tabs */}
              <div className="bg-white p-1 rounded-lg border border-slate-200 inline-flex">
                <button
                  onClick={() => setActiveTab("residential")}
                  className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-all font-bold ${
                    activeTab === "residential" 
                      ? "bg-[#0A2540] text-white shadow" 
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {language === "en" ? "Exclusive Estates" : "Domaines Exclusifs"}
                </button>
                <button
                  onClick={() => setActiveTab("land")}
                  className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-all font-bold ${
                    activeTab === "land" 
                      ? "bg-[#0A2540] text-white shadow" 
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {language === "en" ? "Strategic Acreage" : "Terrains Stratégiques"}
                </button>
              </div>

              {/* Search bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={language === "en" ? "Search listings..." : "Rechercher..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-slate-250 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans shadow-sm"
                />
              </div>

            </div>
          </div>

          {/* Grid display depending on active tab */}
          {activeTab === "residential" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="residential-properties-grid">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((p) => (
                  <div 
                    key={p.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-400 transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative h-60 bg-slate-200 overflow-hidden shrink-0">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-mono font-extrabold text-blue-700 shadow-sm">
                        {p.price}
                      </div>
                      {p.featured && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded font-bold shadow-sm">
                          {language === "en" ? "Featured Holding" : "Holding Vedette"}
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-sans text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {p.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-sans flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{p.address}</span>
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-slate-600 font-sans text-xs">
                        <div>
                          <strong className="block text-slate-900 font-extrabold">{p.beds}</strong>
                          <span className="text-[10px] text-slate-400 font-mono uppercase">{language === "en" ? "Beds" : "Lits"}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-900 font-extrabold">{p.baths}</strong>
                          <span className="text-[10px] text-slate-400 font-mono uppercase">{language === "en" ? "Baths" : "Bains"}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-900 font-extrabold">{p.sqft}</strong>
                          <span className="text-[10px] text-slate-400 font-mono uppercase">SQFT</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setFormData({ ...formData, propertyInterest: p.title, message: `Hello, I am interested in scheduling a private tour or obtaining information about ${p.title} located at ${p.address}.` });
                            document.getElementById("realty-inquiry-section")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full py-2 bg-slate-50 hover:bg-[#0A2540] hover:text-white text-[#0A2540] border border-slate-200 rounded font-mono text-[10px] uppercase tracking-widest transition-all font-bold flex items-center justify-center gap-1"
                        >
                          <span>{language === "en" ? "Inquire Privately" : "Inquiry Privé"}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 text-slate-500 font-sans text-sm">
                  {language === "en" ? "No residential estates match your search term." : "Aucun domaine résidentiel ne correspond à votre recherche."}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="land-properties-grid">
              {filteredLands.length > 0 ? (
                filteredLands.map((l) => (
                  <div 
                    key={l.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-400 transition-all duration-300 group flex flex-col md:flex-row"
                  >
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-slate-200 overflow-hidden shrink-0">
                      <img 
                        src={l.image} 
                        alt={l.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-[#0A2540] text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded font-bold shadow-sm border border-slate-800">
                        {l.acres}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-[10px] font-mono text-blue-600 uppercase bg-blue-50 px-2.5 py-0.5 rounded font-bold border border-blue-100">
                            {language === "en" ? "Commercial Site" : "Site Commercial"}
                          </span>
                          <strong className="text-sm font-sans text-blue-600 font-bold">{l.price}</strong>
                        </div>
                        <h4 className="font-sans text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {l.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-sans flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{l.location}</span>
                        </p>
                        <p className="text-slate-600 font-sans text-xs leading-relaxed">
                          {l.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setFormData({ ...formData, propertyInterest: l.title, message: `Hello, I am interested in exploring site assembly and commercial potential for the land parcel: ${l.title} (${l.acres}).` });
                            document.getElementById("realty-inquiry-section")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full py-2.5 bg-[#0A2540] hover:bg-slate-800 text-white rounded font-mono text-[10px] uppercase tracking-widest transition-colors font-bold flex items-center justify-center gap-1.5"
                        >
                          <span>{language === "en" ? "Inquire Site Assembly" : "Inquiry d'Assemblage"}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-500 font-sans text-sm">
                  {language === "en" ? "No development lands match your search term." : "Aucun terrain de développement ne correspond à votre recherche."}
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 4. Luxury Private Inquiry Form */}
      <section className="py-20 scroll-mt-20" id="realty-inquiry-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
            
            <div className="space-y-1 text-center">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                {language === "en" ? "Somptueux Private Registry" : "Registre Privé Somptueux"}
              </span>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">
                {language === "en" ? "Inquire Secure Brokerage & Consultation" : "Demande de Courtage Sécurisé & Consultation"}
              </h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                {language === "en"
                  ? "Whether you are listing an estate, structuring land development, or allocating capital funds, our certified brokers deliver absolute discretion."
                  : "Que vous souhaitiez inscrire un domaine, structurer un aménagement foncier ou allouer des capitaux, nos courtiers agréés garantissent une discrétion absolue."}
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-sm font-sans">{language === "en" ? "Private Registry Inquiry Sourced" : "Demande Enregistrée"}</h5>
                <p className="text-xs">{language === "en" ? "Your luxury inquiry package has been safely saved. A licensed broker will contact you directly within 4 hours." : "Votre dossier a été enregistré de manière sécurisée. Un courtier agréé vous contactera directement sous 4 heures."}</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 font-sans" id="realty-inquiry-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Name *" : "Votre Nom *"}</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Private Email *" : "E-mail Privé *"}</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. j.doe@estate.com"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Contact Number" : "Numéro de Contact"}</label>
                    <input 
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Listing / Program Interest" : "Intérêt Propriété / Programme"}</label>
                    <input 
                      type="text"
                      value={formData.propertyInterest}
                      onChange={(e) => setFormData({...formData, propertyInterest: e.target.value})}
                      placeholder="e.g. The Sundance Chateau"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Inquiry Details *" : "Détails de la demande *"}</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={language === "en" ? "Specify your timeline, special requirements, or investment allocation plans..." : "Précisez votre calendrier, vos besoins particuliers ou vos plans d'investissement..."}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans resize-none"
                  />
                </div>

                {/* Secure compliance footer */}
                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-normal">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>
                    {language === "en"
                      ? "In compliance with Texas Real Estate Commission (TREC) guidelines and federal fair housing acts, Somptueux Realty LLC represents clients under written broker service agreements only. Absolute privacy is maintained."
                      : "Conformément aux directives de la Texas Real Estate Commission (TREC) et aux lois fédérales sur le logement équitable, Somptueux Realty LLC représente ses clients uniquement en vertu de contrats écrits de courtage."}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-realty-inquiry-btn"
                  >
                    <span>{language === "en" ? "Register Inquire Packet" : "Enregistrer la Demande"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
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
