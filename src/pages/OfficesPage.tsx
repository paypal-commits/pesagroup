import React, { useState } from "react";
import { Landmark, Phone, Mail, Clock, Globe, ArrowUpRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function OfficesPage() {
  const { language, t } = useLanguage();
  const [selectedOffice, setSelectedOffice] = useState("dallas");

  const officesList = language === "en" ? [
    {
      id: "dallas",
      city: "Dallas, Texas",
      country: "United States",
      title: "International Headquarters",
      address: "Preston Road, Dallas, TX 75248",
      phone: "+1 (682) 424-5857",
      email: "dallas.desk@pesagroup.org",
      hours: "Monday - Friday: 08:30 - 17:30 (CST)",
      responsibilities: ["Presidency & Board", "Global Tech Infrastructure", "Treasury & Finance Allocations", "Corporate Strategy & Acquisition"],
      lat: 32.7767,
      lng: -96.7970,
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      id: "kinshasa",
      city: "Kinshasa",
      country: "Democratic Republic of Congo (DRC)",
      title: "National Operational Office",
      address: "Avenue de l'Equateur, Gombe, Kinshasa",
      phone: "+243 821 368 004",
      email: "kinshasa.desk@pesagroup.org",
      hours: "Monday - Friday: 08:30 - 17:30 (WAT)",
      responsibilities: ["Audit & Compliance Contracts", "Strategic Regional Marketing", "Mineral supply-chain logistics", "Local Subcontractor Management"],
      lat: -4.4419,
      lng: 15.2663,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ] : [
    {
      id: "dallas",
      city: "Dallas, Texas",
      country: "États-Unis",
      title: "Siège Social International",
      address: "Preston Road, Dallas, TX 75248",
      phone: "+1 (682) 424-5857",
      email: "dallas.desk@pesagroup.org",
      hours: "Lundi - Vendredi : 08h30 - 17h30 (CST)",
      responsibilities: ["Présidence & Conseil d'administration", "Infrastructure technologique mondiale", "Trésorerie & Allocations de fonds", "Stratégie d'entreprise & Acquisitions"],
      lat: 32.7767,
      lng: -96.7970,
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      id: "kinshasa",
      city: "Kinshasa",
      country: "République Démocratique du Congo (RDC)",
      title: "Bureau Opérationnel National",
      address: "Avenue de l'Equateur, Gombe, Kinshasa",
      phone: "+243 821 368 004",
      email: "kinshasa.desk@pesagroup.org",
      hours: "Lundi - Vendredi : 08h30 - 17h30 (WAT)",
      responsibilities: ["Contrats d'audit & Conformité", "Marketing stratégique régional", "Logistique d'approvisionnement minier", "Gestion des sous-traitants locaux"],
      lat: -4.4419,
      lng: 15.2663,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  const currentOffice = officesList.find(o => o.id === selectedOffice) || officesList[0];

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="offices-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="offices-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {t("Administrative Channels")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Our Global Office Locations" : "Nos Bureaux à l'International"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "PESA Consulting operates seamlessly across North America and Central Africa, structuring local audits, capital programs, and ethical supply-chain models."
              : "PESA Group opère de manière fluide en Amérique du Nord et en Afrique centrale, structurant des audits locaux, des programmes financiers et des modèles d'approvisionnement éthiques."}
          </p>
        </div>
      </section>

      {/* 2. Global Offices Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office Selector Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4" id="offices-list">
              <h4 className="font-sans text-xs font-mono uppercase tracking-widest text-slate-400 font-extrabold border-b border-slate-200 pb-3 block mb-4">
                {language === "en" ? "Office Directories" : "Répertoires des Bureaux"}
              </h4>

              <div className="flex flex-col gap-4">
                {officesList.map((office) => {
                  const isSelected = selectedOffice === office.id;

                  return (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office.id)}
                      className={`w-full text-left p-5 rounded-xl border flex gap-4 transition-all duration-300 group ${
                        isSelected 
                          ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20" 
                          : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/50"
                      }`}
                      id={`office-selector-btn-${office.id}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                        <Landmark className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-1 flex-1 min-w-0">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                          {office.title}
                        </span>
                        <h4 className="font-sans text-base font-bold text-slate-900 leading-snug">
                          {office.city}
                        </h4>
                        <p className="text-xs text-slate-500 font-sans truncate">
                          {office.address}
                        </p>
                      </div>

                      <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-blue-500 rotate-45" : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Strict cashless wire instruction */}
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-2 shadow-md">
                <span className="font-mono text-[9px] uppercase tracking-widest text-blue-300 font-bold block">{t("PESA Financial Security")}</span>
                <h5 className="font-sans text-xs font-bold leading-snug text-white">{language === "en" ? "Direct Wire Transfer Compliance" : "Conformité des virements bancaires"}</h5>
                <p className="text-slate-400 text-[10px] leading-relaxed font-sans">
                  {language === "en"
                    ? "PESA Group enforces strict compliance protocols. Bank coordinates are released solely through certified channels to prevent transaction interception. Under no circumstances should cash payments be delivered to any global representative."
                    : "Le Groupe PESA applique des protocoles de conformité stricts. Les coordonnées bancaires sont transmises uniquement via des canaux sécurisés certifiés. En aucun cas des paiements en espèces ne doivent être remis à nos représentants."}
                </p>
              </div>
            </div>

            {/* Right Column: Office Detailed Deep-Dive & Maps Placeholder (7 Cols) */}
            <div className="lg:col-span-7" id="office-details-deep-dive">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
                
                {/* Image and location overview */}
                <div className="relative h-64 rounded-xl overflow-hidden shadow-inner border border-slate-100">
                  <img 
                    src={currentOffice.image} 
                    alt={currentOffice.city} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold mb-1">
                      {currentOffice.country}
                    </span>
                    <h3 className="font-sans text-xl font-bold leading-none">
                      {language === "en" ? `${currentOffice.city} Office Suite` : `Bureau de ${currentOffice.city}`}
                    </h3>
                  </div>
                </div>

                {/* Info parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs sm:text-sm">
                  
                  <div className="space-y-3">
                    <h5 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                      {language === "en" ? "Contact Information" : "Coordonnées de Contact"}
                    </h5>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 text-slate-700">
                        <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="font-mono text-xs">{currentOffice.phone}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-700">
                        <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="font-mono text-xs">{currentOffice.email}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-700">
                        <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-xs">{currentOffice.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                      {language === "en" ? "Designated Portfolios" : "Portefeuilles Assignés"}
                    </h5>
                    
                    <div className="space-y-1.5">
                      {currentOffice.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-600 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Google Maps Mock Widget */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                    {language === "en" ? "Interactive Location Map" : "Carte Interactive de Localisation"}
                  </h5>

                  <div className="relative h-64 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center text-center p-6" id="interactive-office-maps-widget">
                    {/* Abstract technical grid styling mimicking an elite map system */}
                    <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-slate-950 opacity-90 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                    {/* Styled Map HUD */}
                    <div className="relative z-10 space-y-4 max-w-sm">
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-950 border border-blue-900 rounded text-[10px] text-blue-400 font-mono">
                        <Globe className="w-3.5 h-3.5 text-blue-500 animate-spin-slow" />
                        <span>Lat: {currentOffice.lat} // Lng: {currentOffice.lng}</span>
                      </div>
                      
                      <h4 className="text-white font-sans text-sm font-bold tracking-tight">
                        {language === "en" ? `PESA ${currentOffice.city} Node Active` : `Nœud PESA ${currentOffice.city} Actif`}
                      </h4>
                      
                      <p className="text-slate-400 text-xs font-sans">
                        {language === "en"
                          ? "Google Maps API is configured securely for this administrative domain. Submitting standard coordinate frames via our Dallas tech rail."
                          : "L'API Google Maps est configurée de manière sécurisée pour ce domaine administratif. Transmission des coordonnées de géolocalisation en cours."}
                      </p>

                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentOffice.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs rounded shadow transition-colors"
                        id={`map-link-${currentOffice.id}`}
                      >
                        <span>{language === "en" ? "Open in Google Maps" : "Ouvrir dans Google Maps"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
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
