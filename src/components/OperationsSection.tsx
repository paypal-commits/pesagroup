import React, { useState } from "react";
import { 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  DollarSign, 
  Users, 
  Layers, 
  BarChart3, 
  Calculator, 
  ShieldAlert,
  Clock,
  ArrowRight,
  Sparkles,
  Ban,
  Building2,
  Globe,
  Coins,
  FileCheck,
  Briefcase,
  AlertCircle,
  ClipboardList
} from "lucide-react";

export default function OperationsSection() {
  const [activeTab, setActiveTab] = useState<"structure" | "financing" | "compensation" | "workflow">("structure");
  
  // Interactive Simulator States
  const [contractValueRange, setContractValueRange] = useState<string>("medium");
  const [customContractValue, setCustomContractValue] = useState<number>(850000);
  
  // Workflow stepper active state
  const [activeStep, setActiveStep] = useState<number>(1);

  // Pricing Brackets/Ranges for Compensation
  const brackets = {
    small: {
      range: "$50,000 – $250,000",
      avgMargin: "15%",
      agentDividendShare: "10% of Margin",
      monthlyRemunRange: "$1,500 – $3,000",
      description: "Applies to short-to-mid term business startup support and localized inventory audits."
    },
    medium: {
      range: "$250,000 – $1,000,000",
      avgMargin: "12%",
      agentDividendShare: "15% of Margin",
      monthlyRemunRange: "$3,000 – $6,000",
      description: "Applies to full-scope internal controls setup, management assistance, and standard 5-year consulting contracts."
    },
    large: {
      range: "$1,000,000 – $5,000,000",
      avgMargin: "10%",
      agentDividendShare: "20% of Margin",
      monthlyRemunRange: "$6,000 – $10,000",
      description: "Applies to large-scale investment project outsourcing and comprehensive corporate startup assistance."
    },
    enterprise: {
      range: "$5,000,000+",
      avgMargin: "8%",
      agentDividendShare: "25% of Margin",
      monthlyRemunRange: "$10,000 – $18,000",
      description: "Applies to strategic multi-state joint ventures and high-yield enterprise level 5-year consulting portfolios."
    }
  };

  // Get parameters based on selected range
  const currentBracket = brackets[contractValueRange as keyof typeof brackets];

  // Dynamic calculations
  const calculateSim = () => {
    let marginPct = 0.12;
    let divPct = 0.15;
    
    if (contractValueRange === "small") {
      marginPct = 0.15;
      divPct = 0.10;
    } else if (contractValueRange === "medium") {
      marginPct = 0.12;
      divPct = 0.15;
    } else if (contractValueRange === "large") {
      marginPct = 0.10;
      divPct = 0.20;
    } else if (contractValueRange === "enterprise") {
      marginPct = 0.08;
      divPct = 0.25;
    }

    const estimatedMarginAmount = customContractValue * marginPct;
    const estimatedAgentDividend = estimatedMarginAmount * divPct;
    
    return {
      marginAmount: estimatedMarginAmount,
      agentDividend: estimatedAgentDividend
    };
  };

  const simResult = calculateSim();

  // Workflow steps (8-step lifecycle revised)
  const steps = [
    {
      num: 1,
      title: "Business Sourcing & Registration",
      dept: "Agent Network & Marketing Team",
      desc: "Agent identifies an investor, business startup prospect, or institutional client requiring management outsourcing. Registration is completed in the secure corporate portal.",
      status: "Prospect Sourcing",
      highlight: "Verification of long-term contract potential (priority given to 5+ year targets)."
    },
    {
      num: 2,
      title: "Synergy & Offer Tailoring",
      dept: "Finance Team (USA & Kinshasa)",
      desc: "Kinshasa finance officers work in close synergy with the USA core financial desk to formulate a bespoke pricing proposal. Specific margins are structured based on predefined ranges.",
      status: "Offer Engineering",
      highlight: "Synergistic pricing adapted precisely to the secured market parameters."
    },
    {
      num: 3,
      title: "Subcontractor Vetting & Audit Prep",
      dept: "Kinshasa Audit & Control Team",
      desc: "For inventory, control, or financial audits, the audit team initiates coordination with pre-approved local subcontractors to execute the physical tasks, ensuring high-quality, rigorous standards.",
      status: "Pre-execution Planning",
      highlight: "Audit contracts rely on qualified subcontractors managed by PESA officers."
    },
    {
      num: 4,
      title: "Contract / MOU Signature",
      dept: "Executive Board / Presidency",
      desc: "Formal contract or Memorandum of Understanding (MOU) is negotiated and signed. This document specifies whether PESA pre-financing or client-installment financing will be utilized.",
      status: "Bilateral Agreement",
      highlight: "Pre-financing strictly requires signed contracts or MOUs first."
    },
    {
      num: 5,
      title: "Exclusively Wire Transfer Settlement",
      dept: "Client / Treasury Desk",
      desc: "Secure bank account details are disclosed to the client upon contract execution. Under NO circumstances is cash accepted by any agent, regardless of rank or position.",
      status: "Bank Transfer",
      highlight: "Strict Cash Prohibition - payments accepted exclusively via bank wire transfer."
    },
    {
      num: 6,
      title: "Task Execution & Quality Delivery",
      dept: "Operations & Subcontractors",
      desc: "Subcontractors and PESA strategy advisors execute administrative document procurement, startup launches, or inventory/financial control audits. Success is based on strict deadline adherence.",
      status: "Operational Delivery",
      highlight: "Quality work, adherence to deadlines, and rigor (friendship factors set aside)."
    },
    {
      num: 7,
      title: "Profit Margin Reconciliation",
      dept: "Finance & Accounting Department",
      desc: "The Finance Department computes the exact realized profit margin of the contract. Senior management establishes the final dividends to be distributed to the securing agent.",
      status: "Financial Close",
      highlight: "Dividends calculated as a percentage of the company's net profit margin."
    },
    {
      num: 8,
      title: "Compensation & Monthly Remuneration",
      dept: "Treasury & Senior Management",
      desc: "The securing agent manages the client account and receives their share of dividends, alongside stable negotiated monthly remuneration until the long-term contract expires.",
      status: "Payout & Account Management",
      highlight: "Stable monthly remuneration for contracts of at least 5 years."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden" id="operations">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 font-bold">
            PESA CG Service Division Portal
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
            Governance, Lean Operations & Compensation
          </h2>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-4 mb-4"></div>
          <p className="text-slate-400 text-sm font-sans">
            PESA Consulting Group has launched a new specialized service division. We prioritize long-term, high-rigor operational outsourcing, business startup consulting, and audits with structured financing models and clear agent compensation policies.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="operations-tabs">
          <button
            onClick={() => setActiveTab("structure")}
            className={`px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border ${
              activeTab === "structure"
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 font-bold"
                : "bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>1. Division & Lean Organization</span>
          </button>
          
          <button
            onClick={() => setActiveTab("financing")}
            className={`px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border ${
              activeTab === "financing"
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 font-bold"
                : "bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Coins className="w-4 h-4" />
            <span>2. Financing & Payment Rules</span>
          </button>
          
          <button
            onClick={() => setActiveTab("compensation")}
            className={`px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border ${
              activeTab === "compensation"
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 font-bold"
                : "bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>3. Agent Compensation Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border ${
              activeTab === "workflow"
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 font-bold"
                : "bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>4. 8-Step Lifecycle & Reports</span>
          </button>
        </div>

        {/* Tab Body Card */}
        <div className="bg-slate-800/40 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
          
          {/* TAB 1: Division & Lean Structure */}
          {activeTab === "structure" && (
            <div className="space-y-10 animate-fadeIn">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] uppercase font-mono tracking-widest font-bold">
                    Strategic Support Services
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Launching the PESA Service Division
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    Rather than forming a new company, PESA CG is deploying a targeted, agile **Service Division** designed to support international and local investors through the complexities of launching, auditing, and administering operations in global markets.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Business Startups & Incubations",
                      "Investment Projects & Modeling",
                      "Investment Consulting & Advisory",
                      "Implementation of Internal Controls",
                      "Financial or Inventory Audits",
                      "Management & Execution Assistance",
                      "Administrative Document Procurement",
                      "Outsourcing of Specialized Operations"
                    ].map((service, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="text-xs text-slate-300 font-sans">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-blue-400" />
                    <span>Our Professional Charter</span>
                  </h4>
                  <p className="text-xs font-serif italic text-blue-100/95 leading-relaxed">
                    "Our success in the international service sector is strictly built on quality work, absolute adherence to deadlines, and rigor in task execution. Personal affinities, friendships, favoritism, and familial factors are entirely set aside to ensure the highest standards of operational excellence."
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-700/80 flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>PESA Directive Code</span>
                    <span className="text-blue-300 font-bold">Article 1.01 (Rigor First)</span>
                  </div>
                </div>
              </div>

              {/* Synergistic Organization Section */}
              <div className="pt-8 border-t border-slate-800/80">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h4 className="font-sans text-lg font-bold text-white">Synergistic & Lean Organizational Structure</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    To maintain speed and financial effectiveness during the division's launch phase, PESA operates with an ultra-lean structure, leveraging a vast, audited network of subcontractors.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* USA Team Card */}
                  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-blue-400">Governance & Technology Desk</p>
                        <h5 className="font-sans text-base font-bold text-white">USA Team (Dallas Headquarters)</h5>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Manages overall governance, presidency, advanced financial operations, and technology. Coordinates corporate strategy, core market development, and international acquisitions.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {["Presidency", "Core Strategy", "Technology", "Financial Operations", "Acquisitions"].map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Kinshasa Team Card */}
                  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-blue-400">Execution & Synergy Desk</p>
                        <h5 className="font-sans text-base font-bold text-white">Kinshasa Team (DRC Regional Office)</h5>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Covers financial management, audits, strategy, and localized business development. Works in close synergy with the USA desk to structure and adapt custom offers to local client parameters.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {["Finance synergy", "Audit & Controls", "Subcontractor Mgmt", "Local Marketing", "Growth Strategy"].map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subcontracting & 5-Year Contract Note */}
                <div className="mt-6 p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-normal font-sans">
                      <strong>Audit Execution Policy:</strong> The Kinshasa audit team structures contracts, while qualified subcontractors execute physical inventory audits and control verifications under strict PESA quality oversight.
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-blue-600 text-white rounded text-xs font-mono uppercase tracking-wider font-bold shrink-0 shadow-lg text-center">
                    5-Year Contract Focus
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: Financing & Payments */}
          {activeTab === "financing" && (
            <div className="space-y-8 animate-fadeIn">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Method 1: Pre-financing */}
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-lg"></div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-9 h-9 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center font-bold text-sm">
                      01
                    </div>
                    <h4 className="font-sans text-base font-bold text-white">PESA Corporate Pre-Financing</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    PESA pre-finances initial setup costs, infrastructure setup, or specialized inventory auditing systems. This strictly requires a completed negotiation and the bilateral signing of an enforceable Contract or Memorandum of Understanding (MOU) between PESA and the client.
                  </p>
                  <div className="p-3 bg-slate-800 rounded-lg text-[10px] font-mono text-slate-400 border border-slate-700/50">
                    <strong className="text-slate-300">Strict Rule:</strong> No pre-financing is disbursed or initiated without an active, executed bilateral MOU/contract.
                  </div>
                </div>

                {/* Method 2: Client Financing */}
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-full blur-lg"></div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-9 h-9 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center font-bold text-sm">
                      02
                    </div>
                    <h4 className="font-sans text-base font-bold text-white">Client-Funded Projects</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    The client directly finances the consulting strategy, audits, or business startup launch parameters. Flexible, predefined installment templates are available, or the client may elect to fund the entire transaction in full upon execution.
                  </p>
                  <div className="p-3 bg-slate-800 rounded-lg text-[10px] font-mono text-slate-400 border border-slate-700/50">
                    <strong className="text-slate-300">Disbursement:</strong> Installments are tracked securely against milestone achievements under direct management oversight.
                  </div>
                </div>

              </div>

              {/* STRICT CASH BAN BLOCK */}
              <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                    <Ban className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">Absolute Cash Prohibition Policy</span>
                    <h4 className="font-sans text-lg font-bold text-white">No Cash Payments Allowed (Under Any Position)</h4>
                  </div>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  To maintain financial tracking rigor, satisfy auditing standards, and guarantee regulatory compliance, **absolutely no agent, officer, executive, or regional partner is authorized to accept cash payments** under any circumstances, regardless of their rank or position within the company. 
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <p className="text-[10px] font-mono uppercase text-slate-400">Accepted Mode</p>
                    <p className="font-bold text-white mt-1">Bank Wire Transfer Only</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <p className="text-[10px] font-mono uppercase text-slate-400">Account Details</p>
                    <p className="font-bold text-white mt-1">Provided Upon Sign-Off</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <p className="text-[10px] font-mono uppercase text-slate-400">Compliance Audit</p>
                    <p className="font-bold text-red-400 mt-1">Immediate Termination for Cash</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Agent Compensation & Dividend Simulator */}
          {activeTab === "compensation" && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Concept introduction */}
              <div className="p-5 bg-blue-950/20 border border-blue-900/40 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-1 max-w-2xl">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-black block">Agent Remuneration Policy</span>
                  <h4 className="font-sans text-base font-extrabold text-white">Dividends, Client Account Management & Monthly Retainers</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Once proposals are reviewed by the finance department, approved by management, and signed, the amount due is communicated to the securing agent. This agent manages the client account, earns a share of dividends (based on predefined profit-margin percentage brackets), and receives **monthly remuneration** negotiated until the contract (minimum 5 years) expires.
                  </p>
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700/80 text-center shrink-0">
                  <p className="text-[9px] font-mono uppercase text-slate-400">Account Strategy</p>
                  <p className="text-xs font-bold text-blue-300">Long-Term Remuneration Guarantee</p>
                </div>
              </div>

              {/* Grid Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Simulator Inputs (5 cols) */}
                <div className="lg:col-span-5 space-y-4 bg-slate-900/30 p-5 rounded-2xl border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 font-bold mb-2">
                    <Calculator className="w-4 h-4 text-blue-400" />
                    <span>Select Deal Parameters</span>
                  </h4>

                  {/* Range Select */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">
                      Contract Valuation Range Brackets
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "small", label: "Small Range ($50k - $250k)" },
                        { id: "medium", label: "Medium Range ($250k - $1M)" },
                        { id: "large", label: "Large Range ($1M - $5M)" },
                        { id: "enterprise", label: "Enterprise ($5M+)" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setContractValueRange(item.id)}
                          className={`p-2.5 text-[11px] font-mono uppercase tracking-tight rounded-lg border transition-all ${
                            contractValueRange === item.id
                              ? "bg-blue-600 border-blue-500 text-white font-bold"
                              : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Contract Slider */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400 font-bold">Custom Contract Value:</span>
                      <span className="text-blue-400 font-black">
                        ${customContractValue.toLocaleString()} USD
                      </span>
                    </div>
                    <input 
                      type="range"
                      min={50000}
                      max={10000000}
                      step={25000}
                      value={customContractValue}
                      onChange={(e) => setCustomContractValue(Number(e.target.value))}
                      className="accent-blue-500 w-full cursor-ew-resize"
                    />
                    <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                      <span>$50K</span>
                      <span>$2.5M</span>
                      <span>$5M</span>
                      <span>$7.5M</span>
                      <span>$10M Max</span>
                    </div>
                  </div>

                  {/* Predefined Rules Summary */}
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2 text-[11px]">
                    <div className="flex justify-between text-slate-300">
                      <span>Estimated Profit Margin Rate:</span>
                      <span className="font-mono font-bold text-white">{currentBracket.avgMargin}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Predefined Dividend Percentage:</span>
                      <span className="font-mono font-bold text-white">{currentBracket.agentDividendShare}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Negotiated Monthly Remuneration Range:</span>
                      <span className="font-mono font-bold text-blue-400">{currentBracket.monthlyRemunRange}</span>
                    </div>
                  </div>

                </div>

                {/* Simulator Outputs (7 cols) */}
                <div className="lg:col-span-7 bg-[#0A2540] border border-blue-900/40 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-blue-300 font-bold">
                        Calculated Estimate & Compensation ranges
                      </span>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/10">
                        Long-term MOU parameters
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Estimated corporate profit margin */}
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <p className="text-[9px] uppercase font-mono text-slate-400 tracking-wider">Estimated Corporate Margin</p>
                        <p className="text-xl font-mono font-bold text-slate-200 mt-1">
                          ${simResult.marginAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} USD
                        </p>
                        <p className="text-[9px] text-slate-400 font-mono mt-1">
                          Based on {currentBracket.avgMargin} range projection
                        </p>
                      </div>

                      {/* Agent dividend payout */}
                      <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                        <p className="text-[9px] uppercase font-mono text-emerald-400 tracking-wider">Estimated Agent Dividend Share</p>
                        <p className="text-xl font-mono font-black text-emerald-300 mt-1">
                          ${simResult.agentDividend.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} USD
                        </p>
                        <p className="text-[9px] text-emerald-400/80 font-mono mt-1">
                          {currentBracket.agentDividendShare} payout
                        </p>
                      </div>

                    </div>

                    {/* Monthly Remuneration Callout */}
                    <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl space-y-1">
                      <p className="text-[9px] font-mono text-blue-300 uppercase tracking-widest">Negotiated Monthly Remuneration (5-Year Expiration Target)</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-mono font-bold text-white">{currentBracket.monthlyRemunRange}</p>
                        <p className="text-xs text-slate-300 font-sans">/ month until expiry</p>
                      </div>
                      <p className="text-[10px] text-slate-300 font-sans leading-normal">
                        This remuneration is negotiated directly between the securing agent and senior management based on range factors.
                      </p>
                    </div>

                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    <div>
                      <p className="text-[9px] uppercase font-mono text-blue-300">Commission Bracket Reference</p>
                      <p className="text-slate-300 font-sans font-medium">Bespoke Launch Pricing Schedule B-42</p>
                    </div>
                    <button
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs uppercase font-mono tracking-wider font-bold transition-colors w-full sm:w-auto text-center"
                    >
                      Apply as Field Agent
                    </button>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* TAB 4: Workflow Stepper & Activity Reports */}
          {activeTab === "workflow" && (
            <div className="space-y-10 animate-fadeIn">
              
              {/* Stepper Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Stepper Selection side (4 cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-black block mb-2">
                    Operational Stages (1 to 8)
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {steps.map((s) => (
                      <button
                        key={s.num}
                        onClick={() => setActiveStep(s.num)}
                        className={`text-left p-3 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                          activeStep === s.num
                            ? "bg-blue-900/30 border-blue-500/40 text-blue-100"
                            : "bg-slate-900/20 border-slate-800 hover:bg-slate-800/80 text-slate-400"
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                          activeStep === s.num ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 border border-slate-700/60"
                        }`}>
                          0{s.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold truncate ${activeStep === s.num ? "text-white" : "text-slate-300"}`}>
                            {s.title}
                          </p>
                          <p className="text-[9px] text-slate-400 font-mono tracking-wide truncate">
                            {s.dept.split(" / ")[0]}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stepper Display side (8 cols) */}
                <div className="lg:col-span-7 bg-slate-900/30 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                  
                  {/* Step Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold shadow-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                      <span>Execution Step 0{activeStep}</span>
                    </div>
                    <span className="text-xs text-blue-300 font-mono font-bold bg-blue-950/40 border border-blue-900/40 px-2.5 py-1 rounded">
                      {steps[activeStep - 1].status}
                    </span>
                  </div>

                  {/* Title & Department */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl text-white font-extrabold tracking-tight leading-tight">
                      {steps[activeStep - 1].title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Users className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>Responsible Authority: <strong className="text-slate-200">{steps[activeStep - 1].dept}</strong></span>
                    </div>
                  </div>

                  {/* Description text */}
                  <p className="text-slate-300 text-sm leading-relaxed font-sans border-t border-slate-800 pt-4">
                    {steps[activeStep - 1].desc}
                  </p>

                  {/* Rule compliance callout */}
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <div>
                        <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Operational Integrity Guideline</p>
                        <p className="text-xs font-bold text-slate-200">{steps[activeStep - 1].highlight}</p>
                      </div>
                    </div>
                    <div className="text-right text-[10px] text-slate-500 font-mono hidden sm:block">
                      MOU Ref S0{activeStep}
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                    <button
                      disabled={activeStep === 1}
                      onClick={() => setActiveStep(prev => prev - 1)}
                      className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white disabled:opacity-40 text-xs font-mono uppercase tracking-wider rounded transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      disabled={activeStep === 8}
                      onClick={() => setActiveStep(prev => prev + 1)}
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 text-xs font-mono uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 shadow-lg shadow-blue-900/10"
                    >
                      <span>Advance</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>

              {/* REPORTING COMPLIANCE NOTICE PANEL */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-blue-400" />
                    <h4 className="font-sans text-base font-bold text-white">Mandatory Activity Reporting Protocol</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    To facilitate efficient management oversight and secure contract tracking, **each active agent is strictly required to submit a comprehensive report on their activities**. The reporting frequency is defined in the procedures manual currently being finalized by executive management. Until full rollout, agents must comply with the interim weekly submission cycle.
                  </p>
                </div>
                
                <div className="md:col-span-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-mono uppercase text-slate-400">Compliance Standard</p>
                    <p className="text-xs font-bold text-white mt-1">Draft Procedures Manual</p>
                    <p className="text-[10px] text-blue-400 mt-0.5">Management Review Pending</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                    <FileCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
