import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "consulting",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate elite secure pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interest: "consulting",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Directory (5 Cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-directories-column">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                Global Network
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                Connect with PESA Group
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600 mt-3 mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Whether you seek bespoke financial advisory, private jet acquisition, luxury estates, or ethical mining logistics, our managing directors in Texas and Central Africa are ready to serve.
              </p>
            </div>

            {/* Global channels directory */}
            <div className="space-y-6">
              
              {/* US Headquarters */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-bold text-slate-900 text-base">United States Headquarters</h4>
                </div>
                
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="font-sans text-slate-600">Dallas / Fort Worth Sector, Texas, USA</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href="tel:+16824245857" className="font-mono hover:text-blue-600 transition-colors">
                      +1 (682) 424-5857
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href="mailto:info@pesagroup.org" className="font-mono hover:text-blue-600 transition-colors">
                      info@pesagroup.org
                    </a>
                  </div>
                </div>
              </div>

              {/* DRC Branch */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-bold text-slate-900 text-base">Central Africa Hub (DRC)</h4>
                </div>
                
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="font-sans text-slate-600">Kinshasa Sector, Democratic Republic of Congo</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href="tel:+243821368004" className="font-mono hover:text-blue-600 transition-colors">
                      +243 821368004
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href="mailto:info@pesagroup.org" className="font-mono hover:text-blue-600 transition-colors">
                      info@pesagroup.org
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Secure Advisory Form (7 Cols) */}
          <div className="lg:col-span-7" id="secure-contact-form-column">
            <div className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Backdrops */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-550/5 rounded-full blur-2xl"></div>

              {isSuccess ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95" id="form-success-alert">
                  <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/25">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-white">Advisory Request Transmitted</h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans">
                    Thank you for connecting with PESA Consulting Group. Your portfolio inquiry has been securely routed to Camy Likobe and Charles Adekola. An executive director will follow up with your office shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-[10px] uppercase tracking-widest rounded transition-all font-bold"
                    >
                      Transmit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-advisory-form">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
                      Interactive Portal
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mt-1">
                      Request Secure Advisory
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Full Name</label>
                      <input 
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="bg-slate-950 border border-slate-800/80 focus:border-blue-500 text-xs text-white px-4 py-3 rounded focus:outline-none transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Business Email</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-slate-950 border border-slate-800/80 focus:border-blue-500 text-xs text-white px-4 py-3 rounded focus:outline-none transition-all font-sans"
                        placeholder="john@corporation.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Phone Contact</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="bg-slate-950 border border-slate-800/80 focus:border-blue-500 text-xs text-white px-4 py-3 rounded focus:outline-none transition-all font-sans"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Primary Sector of Interest</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                        className="bg-slate-950 border border-slate-800/80 focus:border-blue-500 text-xs text-white px-4 py-3 rounded focus:outline-none transition-all font-sans"
                      >
                        <option value="consulting">Strategy Consulting & EB-5</option>
                        <option value="realestate">Luxury Real Estate Sourcing</option>
                        <option value="land">Land Sourcing & Construction</option>
                        <option value="visa">US Student Visa Services</option>
                        <option value="aviation">Private Jet Acquisition</option>
                        <option value="mining">Mining & Critical Minerals</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Message / Request Parameters</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="bg-slate-950 border border-slate-800/80 focus:border-blue-500 text-xs text-white px-4 py-3 rounded focus:outline-none transition-all resize-none font-sans"
                      placeholder="Outline your strategic objectives or assets inquiry here..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white font-mono text-xs uppercase tracking-widest rounded transition-all font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Encrypting Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Transmit Secure advisory request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
