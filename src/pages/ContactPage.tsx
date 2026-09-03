import React, { useState } from "react";
import { 
  Phone, Mail, MessageSquare, Clock, Landmark, Globe, 
  Send, CheckCircle, ShieldCheck, ArrowUpRight 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Advisory Consultation",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Advisory Consultation", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="contact-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="contact-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {t("Executive Desk")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Connect With PESA Group" : "Contacter le Groupe PESA"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Inquire about our comprehensive strategy divisions, global audits, study-abroad programs, or private asset acquisitions."
              : "Pour toute demande concernant nos divisions stratégiques, nos audits mondiaux, nos programmes d'études ou l'acquisition d'actifs privés."}
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Metrics & Opening Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold block">{t("Executive Registry")}</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === "en" ? "Direct Executive Contact Channels" : "Canaux de Contact Direct"}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  {language === "en"
                    ? "PESA's advisory teams correspond through secure corporate channels. Access our US and African operational hubs directly below:"
                    : "Les équipes de PESA communiquent par des canaux d'entreprise sécurisés. Accédez à nos pôles opérationnels aux États-Unis et en Afrique :"}
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4" id="direct-channels">
                
                {/* Channel 1: US Office */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-extrabold block bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                      {language === "en" ? "North America Hub" : "Pôle Amérique du Nord"}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "Dallas Headquarters" : "Siège Social de Dallas"}</h4>
                  <div className="space-y-1.5 font-sans text-xs text-slate-600">
                    <p className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">+1 (682) 424-5857</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">dallas.desk@pesagroup.org</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{language === "en" ? "Mon - Fri: 08:30 - 17:30 (CST)" : "Lun - Ven : 08h30 - 17h30 (CST)"}</span>
                    </p>
                  </div>
                </div>

                {/* Channel 2: DRC Office */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-extrabold block bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                      {language === "en" ? "Central Africa Hub" : "Pôle Afrique Centrale"}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">{language === "en" ? "Kinshasa Operations" : "Opérations de Kinshasa"}</h4>
                  <div className="space-y-1.5 font-sans text-xs text-slate-600">
                    <p className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">+243 821 368 004</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">kinshasa.desk@pesagroup.org</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{language === "en" ? "Mon - Fri: 08:30 - 17:30 (WAT)" : "Lun - Ven : 08h30 - 17h30 (WAT)"}</span>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <a 
                  href="https://wa.me/243821368004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100/70 p-4 rounded-xl border border-emerald-200 shadow-sm flex items-center justify-between group transition-colors cursor-pointer block"
                  id="whatsapp-channel-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      W
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-slate-900">{language === "en" ? "Direct WhatsApp Executive Line" : "Ligne Directe WhatsApp Exécutive"}</h4>
                      <p className="text-[10px] text-slate-500 font-sans">{language === "en" ? "Chat instantly with PESA's international coordinators." : "Discutez instantanément avec nos coordinateurs internationaux."}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform" />
                </a>

              </div>
            </div>

            {/* Right Column: Secure Contact Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7" id="contact-form-panel">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-6">
                
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                    {language === "en" ? "Secure Consultation Portal" : "Portail de Consultation Sécurisé"}
                  </span>
                  <h3 className="font-sans text-xl font-extrabold text-slate-950">
                    {language === "en" ? "Submit Advisory Request" : "Soumettre une demande de conseil"}
                  </h3>
                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    {language === "en"
                      ? "Compile your criteria framework below. Your inputs are cryptographically encrypted and channeled directly to CEO Camy Likobe's executive assistants."
                      : "Saisissez vos critères ci-dessous. Vos informations sont cryptées et transmises directement au secrétariat du PDG Camy Likobe."}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-sm font-sans">{language === "en" ? "Inquiry Submitted Successfully" : "Demande soumise avec succès"}</h5>
                    <p className="text-xs">{language === "en" ? "Your inquiry record was completed. Direct wire bank transfer details or administrative credentials will be processed securely." : "Votre dossier a bien été enregistré. Les détails de virement ou les documents d'accès seront traités de manière sécurisée."}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="executive-contact-form">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Full Name *" : "Nom complet *"}</label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Carole Boboy"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Email Address *" : "Adresse email *"}</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. c.boboy@pesagroup.org"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Telephone Number" : "Numéro de téléphone"}</label>
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. +1 (682) 424-5857"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Advisory Topic *" : "Sujet de consultation *"}</label>
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        >
                          <option value="Advisory Consultation">{language === "en" ? "Strategy or Business Startup Consulting" : "Conseil en stratégie / Création d'entreprise"}</option>
                          <option value="Technology Audit">{language === "en" ? "Enterprise Tech Audit or Modernization" : "Audit technique / Modernisation d'entreprise"}</option>
                          <option value="Executive Recruitment">{language === "en" ? "Global Talent Sourcing & HR Recruitment" : "Recrutement de talents internationaux & RH"}</option>
                          <option value="Mining & Sourcing">{language === "en" ? "Ethical Minerals Sourcing Compliance" : "Conformité d'approvisionnement en minerais éthiques"}</option>
                          <option value="Asset Procurement">{language === "en" ? "Private Jet or Luxury Land Acquisition" : "Acquisition de jets privés / Terrains de luxe"}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Proposal Details & Project Scope *" : "Détails de la proposition & Portée du projet *"}</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={language === "en" ? "Detail your operational timelines, target budgets, and consulting parameters..." : "Décrivez vos échéances, budgets et paramètres de consultation requis..."}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans resize-none"
                      />
                    </div>

                    {/* Wire transfer and secure compliance warning */}
                    <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-normal font-sans">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{language === "en" ? "Security Notice: We strictly prohibit cash processing of any kind. Strategic pre-financing contracts are release-gated exclusively under signed Memorandum of Understanding (MOU) standards." : "Avis de sécurité : Nous interdisons formellement les paiements en espèces. Les contrats de préfinancement sont gérés exclusivement selon les standards de protocoles d'accord (MOU) signés."}</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                        id="submit-executive-request-btn"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>{language === "en" ? "Transmit Advisory Criteria" : "Transmettre mes critères de conseil"}</span>
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
