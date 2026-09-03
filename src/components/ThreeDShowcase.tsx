import { useState } from "react";
import structureImg from "../assets/images/pesa_business_model_graphic_1783181497093.jpg";
import expansionImg from "../assets/images/pesa_expansion_concept_1783181514956.jpg";
import assemblyImg from "../assets/images/pesa_assembly_concept_1783181528793.jpg";

export default function ThreeDShowcase() {
  const [activeShape, setActiveShape] = useState<"structure" | "expansion" | "assembly">("structure");

  // Map shapes to our custom-generated high-rigor corporate business model graphics
  const images = {
    structure: structureImg,
    expansion: expansionImg,
    assembly: assemblyImg,
  };

  return (
    <div className="w-full h-full relative" id="three-d-section">
      {/* Container */}
      <div 
        className="w-full h-[380px] sm:h-[450px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl border border-slate-800 group"
      >
        {/* Replacing the old Canvas with the generated High-Rigor Corporate Business Model picture */}
        <img 
          src={images[activeShape]} 
          alt={`PESA Business Model - ${activeShape}`}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform group-hover:scale-105"
          referrerPolicy="no-referrer"
          id="pesa-business-model-picture"
        />
        
        {/* Floating tech label/HUD coordinates */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-blue-400 tracking-widest uppercase bg-slate-950/90 px-3 py-1.5 rounded border border-slate-800/85 backdrop-blur-md z-10 shadow-lg">
          PESA Strategic Division // {activeShape.toUpperCase()}
        </div>

        {/* Shape description banner */}
        <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/85 p-3 rounded-xl backdrop-blur-md z-10 shadow-lg">
          <p className="text-xs text-slate-300 font-sans leading-normal">
            {activeShape === "structure" && "Structure: Demonstrating our firm's absolute corporate governance, architectural foundations, and strategic alignments."}
            {activeShape === "expansion" && "Expansion: Representing capital growth, EB-5 visa opportunities, and international reach in 30+ countries."}
            {activeShape === "assembly" && "Assembly: Symbolizing the compilation of elite executives, joint ventures, and premium assets under one PESA umbrella."}
          </p>
        </div>

        {/* Premium visual overlay accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Shapes controller buttons */}
      <div className="flex justify-center gap-2.5 mt-4">
        {(["structure", "expansion", "assembly"] as const).map((shape) => (
          <button
            key={shape}
            onClick={() => setActiveShape(shape)}
            id={`btn-shape-${shape}`}
            className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider border uppercase transition-all duration-300 ${
              activeShape === shape
                ? "bg-blue-600 text-white border-blue-600 font-extrabold shadow-lg shadow-blue-500/20"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {shape}
          </button>
        ))}
      </div>
    </div>
  );
}
