import { Cpu, Activity, ShieldCheck, Layers, HelpCircle, Compass, RefreshCw, Zap, Landmark } from "lucide-react";
import ThreeDShowcase from "../components/ThreeDShowcase";
import { useLanguage } from "../context/LanguageContext";

export default function PesaSystemPage() {
  const { language, t } = useLanguage();

  const systemPillars = [
    {
      letter: "P",
      title: language === "en" ? "Purpose" : "Raison d'être (Purpose)",
      tagline: language === "en" ? "Strategic Alignment & Core Intent" : "Alignement Stratégique & Intention",
      desc: language === "en"
        ? "Every corporate transformation begins with a pristine understanding of core intent. We map your purpose against market feasibility, ensuring long-term contracts are structurally feasible from day one."
        : "Chaque transformation d'entreprise commence par une compréhension nette de votre mission. Nous cartographions votre raison d'être face à la faisabilité du marché, garantissant que les contrats à long terme sont structurellement viables dès le départ.",
      icon: Compass
    },
    {
      letter: "E",
      title: language === "en" ? "Expansion" : "Expansion",
      tagline: language === "en" ? "Market Growth & Scalability Vectors" : "Vecteurs de Croissance & d'Échelle",
      desc: language === "en"
        ? "Our consulting blueprints map out geographical growth and operational upscaling. We help Dallas and Kinshasa branches mobilize local subcontractor networks to scale operations seamlessly."
        : "Nos schémas directeurs planifient le développement géographique et l'optimisation opérationnelle. Nous aidons les antennes de Dallas et Kinshasa à mobiliser des réseaux de sous-traitants locaux pour étendre les opérations de manière fluide.",
      icon: RefreshCw
    },
    {
      letter: "S",
      title: language === "en" ? "Structure" : "Structure",
      tagline: language === "en" ? "Rigid Controls & Compliance Standards" : "Contrôles Rigoureux & Normes de Conformité",
      desc: language === "en"
        ? "Corporate performance requires absolute structure. We implement robust, cash-banned transaction wire-transfer verification mechanisms and enforce strict weekly and monthly progress reporting."
        : "La performance de l'entreprise exige une structure absolue. Nous mettons en œuvre des mécanismes robustes de vérification des virements bancaires (avec interdiction d'espèces) et imposons des rapports d'étape hebdomadaires et mensuels rigoureux.",
      icon: ShieldCheck
    },
    {
      letter: "A",
      title: language === "en" ? "Assembly" : "Assemblage (Assembly)",
      tagline: language === "en" ? "Flawless Execution & Project Recovery" : "Exécution sans Faille & Redressement de Projets",
      desc: language === "en"
        ? "Our battle-tested PMO teams mobilize the right materials, technologies, and human capital, assembling resources to deliver complex initiatives on time, within budget, and under absolute rigor."
        : "Nos équipes PMO chevronnées mobilisent les bons équipements, technologies et talents, assemblant les ressources nécessaires pour mener à bien des initiatives complexes dans les délais, le budget et une rigueur absolue.",
      icon: Cpu
    }
  ];

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="pesa-system-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="pesa-system-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {language === "en" ? "Proprietary Framework" : "Méthodologie Brevetée"}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "The PESA System Methodology" : "La Méthodologie PESA System"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Unlocking corporate potential through a systematic four-phase transformation architecture designed to guarantee timeliness, governance, and capital safety."
              : "Libérer le potentiel des entreprises grâce à une architecture de transformation systématique en quatre phases, conçue pour garantir la ponctualité, la gouvernance et la sécurité des capitaux."}
          </p>
        </div>
      </section>

      {/* 2. Interactive 3D Showcase (Metaphor Visualizer) */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="interactive-3d-visualizer">
        <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-slate-950 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 3D Information Sidebar (5 Cols) */}
            <div className="lg:col-span-5 space-y-6" id="three-d-info-panel">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  <span>{language === "en" ? "Interactive Real-time Core" : "Noyau Interactif en Temps Réel"}</span>
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
                  {language === "en" ? "The PESA System Metaphor" : "La Métaphore PESA System"}
                </h2>
                <div className="w-12 h-[1.5px] bg-blue-500 mt-3"></div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Interact with our custom simulated 3D geometry core. Just like PESA structures capital investments and compiles global assets, our interactive 3D module lets you visualize, rotate, and interact with mathematical representations of Structure, Expansion, and Assembly."
                  : "Interagissez avec notre noyau géométrique 3D simulé. Tout comme PESA structure les investissements en capital et rassemble des actifs mondiaux, notre module 3D vous permet de visualiser, de faire pivoter et d'interagir avec les représentations de la Structure, de l'Expansion et de l'Assemblage."}
              </p>

              {/* Specs and guidelines */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                  <p className="text-slate-300 font-mono text-[11px]">
                    {language === "en" ? "Mouse Interaction: Shifts viewport gravity" : "Interaction Souris : Modifie la gravité de la vue"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                  <p className="text-slate-300 font-mono text-[11px]">
                    {language === "en" ? "GPU Optimized WebGL & Particle Buffering" : "Optimisation GPU WebGL & Mise en cache de particules"}
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                {language === "en"
                  ? "* Note: Hover, click, and slide parameters are processed locally to maximize performance."
                  : "* Remarque : Les interactions de survol, de clic et de glissement sont calculées localement pour des performances maximales."}
              </p>
            </div>

            {/* 3D WebGL Canvas (7 Cols) */}
            <div className="lg:col-span-7" id="three-d-canvas-panel">
              <ThreeDShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep Dive into all 4 Pillars */}
      <section className="py-20" id="pesa-four-pillars-deep-dive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
              {language === "en" ? "Transformation Blueprint" : "Schéma de Transformation"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "The Four Dimensions of PESA Transformational Model" : "Les quatre dimensions du modèle transformationnel PESA"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="four-pillars-deep-grid">
            {systemPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={pillar.letter}
                  className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex items-start gap-6 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                  id={`pillar-card-${pillar.letter.toLowerCase()}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-blue-400 flex items-center justify-center text-xl font-serif font-black border border-slate-800 shrink-0 shadow-md">
                    {pillar.letter}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <PillarIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-extrabold">{pillar.tagline}</span>
                    </div>

                    <h4 className="font-sans text-base font-bold text-slate-950">
                      {pillar.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Transformation Model Process */}
      <section className="py-20 bg-slate-100 border-t border-slate-200" id="pesa-transformation-model">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">
                {language === "en" ? "Business Maturity Lifecycle" : "Cycle de maturité des affaires"}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "Our Continuous Improvement Process" : "Notre processus d'amélioration continue"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Transformation is not an event, but a self-sustaining cycle. By combining continuous capacity building, regular weekly controls, and standardized subcontractor execution, PESA guarantees peak operational maturity across our long-term (5+ years) contract portfolios."
                  : "La transformation n'est pas un événement ponctuel, mais un cycle auto-suffisant. En associant un renforcement continu des capacités, des audits hebdomadaires réguliers et une exécution standardisée de nos sous-traitants, PESA garantit un niveau d'excellence opérationnelle optimal."}
              </p>
              
              <div className="space-y-3 pt-3 font-sans text-xs">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">
                    {language === "en" ? "Pre-Financing via Structured Contracts/MOUs" : "Préfinancement par contrats structurés/protocoles d'accord (MOU)"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">
                    {language === "en" ? "Strict Weekly/Monthly Manager Progress Audits" : "Audits rigoureux hebdomadaires/mensuels de l'état d'avancement"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">
                    {language === "en" ? "Dividends Distributed Based on Pre-Established Profit Margins" : "Dividendes distribués sur la base de marges bénéficiaires préétablies"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" id="maturity-graphic-block">
              {/* Process Stages Cards */}
              <div className="space-y-4">
                
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono font-bold shrink-0">1</div>
                  <div className="space-y-1">
                    <h5 className="font-sans text-sm font-bold text-slate-900">
                      {language === "en" ? "Stage 01: Audit & Discovery" : "Étape 01 : Audit & Diagnostic"}
                    </h5>
                    <p className="text-slate-500 text-xs font-sans">
                      {language === "en"
                        ? "Rigorous mapping of existing technical assets, financial structures, compliance gaps, and executive intent variables."
                        : "Cartographie rigoureuse des actifs techniques existants, des structures financières, des écarts de conformité et des objectifs de direction."}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono font-bold shrink-0">2</div>
                  <div className="space-y-1">
                    <h5 className="font-sans text-sm font-bold text-slate-900">
                      {language === "en" ? "Stage 02: Blueprint Architecting" : "Étape 02 : Conception du schéma directeur"}
                    </h5>
                    <p className="text-slate-500 text-xs font-sans">
                      {language === "en"
                        ? "Compiling customized financial, structural, and upskilling frameworks utilizing the certified PESA System metaphor."
                        : "Élaboration de cadres financiers, structurels et de formation sur mesure s'appuyant sur notre métaphore brevetée PESA System."}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono font-bold shrink-0">3</div>
                  <div className="space-y-1">
                    <h5 className="font-sans text-sm font-bold text-slate-900">
                      {language === "en" ? "Stage 03: Distributed Assembly" : "Étape 03 : Assemblage distribué"}
                    </h5>
                    <p className="text-slate-500 text-xs font-sans">
                      {language === "en"
                        ? "Mobilizing highly qualified local subcontractors, managing task lines, and deploying software tools under tight project management governance."
                        : "Mobilisation de sous-traitants locaux hautement qualifiés, planification rigoureuse des tâches et déploiement d'outils logiciels sous une gouvernance étroite de gestion de projet."}
                    </p>
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
