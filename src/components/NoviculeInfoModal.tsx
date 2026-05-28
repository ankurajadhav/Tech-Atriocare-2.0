import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Dna, 
  ShieldCheck, 
  Heart, 
  Flame, 
  Award, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  TrendingDown,
  Info,
  ChevronRight
} from 'lucide-react';

interface NoviculeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'overview' | 'ingredients' | 'mechanism' | 'amr';
type IngredientName = 'L-Hydroxyproline' | 'L-Citrulline' | 'Vitamin C' | 'L-Glutamine';

export default function NoviculeInfoModal({ isOpen, onClose }: NoviculeInfoModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeIngredient, setActiveIngredient] = useState<IngredientName>('L-Citrulline');
  const [mechanismStep, setMechanismStep] = useState<number>(1);
  const [nitricOxideLevel, setNitricOxideLevel] = useState<number>(40);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, location.hash]);

  const stats = [
    { label: "Sugar-Free Formulation", value: "100%", desc: "Safe for diabetic metabolic profiles" },
    { label: "Innate Immune Efficacy", value: "Advanced", desc: "Host-directed therapeutic response" },
    { label: "Active Biocompounds", value: "4 Synergy", desc: "Clinically selected cardiopulmonary nutrients" },
    { label: "Antimicrobial Resistance Risk", value: "0%", desc: "Zero pathogen selective pressure" },
  ];

  const ingredientsData: Record<IngredientName, {
    icon: any;
    color: string;
    bgGradient: string;
    tagline: string;
    bullets: { title: string; desc: string }[];
    percentageEffect: number;
    effectLabel: string;
  }> = {
    'L-Citrulline': {
      icon: Heart,
      color: 'text-rose-500',
      bgGradient: 'from-rose-500/10 via-pink-500/5 to-transparent border-rose-100',
      tagline: 'Vital Cardiovascular & Nitric Oxide Engine',
      percentageEffect: 94,
      effectLabel: 'Nitric Oxide Enhancement',
      bullets: [
        { title: 'Nitric Oxide Production', desc: 'Precursor to L-Arginine, significantly boosting nitric oxide (NO) synthesize pathways.' },
        { title: 'Improved Blood Circulation', desc: 'Promotes vasodilation, easing tension on the vascular walls.' },
        { title: 'Oxygen Delivery', desc: 'Increases arterial oxygen carrying capacity to fatigue-depleted tissues.' },
        { title: 'Muscle Endurance & Fatigue Recovery', desc: 'Enables rapid excretion of ammonia and lactic acid during recovery lines.' }
      ]
    },
    'L-Hydroxyproline': {
      icon: Wind,
      color: 'text-sky-500',
      bgGradient: 'from-sky-500/10 via-cyan-500/5 to-transparent border-sky-100',
      tagline: 'Lung Tissue Maintenance & Structural Repair',
      percentageEffect: 88,
      effectLabel: 'Respiratory Tissue Elasticity',
      bullets: [
        { title: 'Collagen Production', desc: 'Essential imino acid that serves as a cornerstone of structural collagen synthesis.' },
        { title: 'Lung Tissue Maintenance', desc: 'Supports and repairs the delicate endothelial and alveolar walls of the lungs.' },
        { title: 'Tissue Elasticity', desc: 'Enhances elastic properties of biological membranes, helping in smoother lung expansion.' },
        { title: 'Joint & Fascia Integrity', desc: 'Fortifies surrounding structural barriers, minimizing overall systemic soreness.' }
      ]
    },
    'Vitamin C': {
      icon: ShieldCheck,
      color: 'text-amber-500',
      bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent border-amber-100',
      tagline: 'Cellular Immunomodulator & Free Radical Shield',
      percentageEffect: 95,
      effectLabel: 'Pathogen Neutralization Index',
      bullets: [
        { title: 'Infection Fight Speed', desc: 'Accelerates neutrophil chemotaxis, helping immune cells travel to infection spots faster.' },
        { title: 'Immune Boost Support', desc: 'Potent support for lymphocytes and interferon response pathways.' },
        { title: 'Collagen Synthesis Co-factor', desc: 'Necessary co-catalyst for L-Hydroxyproline collagen assembly.' },
        { title: 'High-Efficacy Antioxidant', desc: 'Directly neutralizes oxidative stress triggered by respiratory viruses.' }
      ]
    },
    'L-Glutamine': {
      icon: Dna,
      color: 'text-indigo-500',
      bgGradient: 'from-indigo-500/10 via-violet-500/5 to-transparent border-indigo-100',
      tagline: 'Primary Immunity Energy & Cellular Integrity Fuel',
      percentageEffect: 90,
      effectLabel: 'Gut Mucosa Protection Rate',
      bullets: [
        { title: 'Immune System Energy Source', desc: 'Acts as prime respiratory fuel for highly active immune system white blood cells.' },
        { title: 'Gut-Immune Link Strength', desc: 'Maintains gut mucosal lining integrity, where over 70% of the active immune system lives.' },
        { title: 'Muscle Catabolism Shield', desc: 'Prevents structural amino acid breakdown during inflammatory conditions.' },
        { title: 'Cellular Restoration Speed', desc: 'Speeds up cellular division cycles to support rapid biological tissue healing.' }
      ]
    }
  };

  const stepsData = [
    {
      id: 1,
      title: "Bioactive Powder Administration",
      subtitle: "Mucosal System Arrival",
      desc: "The high-potency sugar-free powder is ingested, delivering direct synergized actives into the gastrointestinal and mucosal systems under pristine bio-availability conditions.",
      impact: "Actives absorption initiated: L-Citrulline, L-Hydroxyproline, Vitamin C, L-Glutamine reach key vascular junctions.",
      noMultiplier: 1.2
    },
    {
      id: 2,
      title: "Macrophage Command Activation",
      subtitle: "Innate Immunity Mobilization",
      desc: "Actives stimulate internal host cells, particularly macrophages and lymphocytes, triggering an up-regulation of nitric oxide synthase (NOS) enzymes naturally without aggressive stressors.",
      impact: "NOS enzyme activity amplifies, mobilizing immune lines to key defensive zones.",
      noMultiplier: 1.8
    },
    {
      id: 3,
      title: "Local Nitric Oxide (NO) Surge",
      subtitle: "Aerosolized Biological Defense",
      desc: "Triggered NOS enhances Nitric Oxide levels locally, establishing a highly defensive biological shield. Nitric Oxide acts as a crucial gas messenger and potent antimicrobial molecule.",
      impact: "Vascular expansion maximizes; NO gas creates an unfavorable environment for viral spikes to take hold.",
      noMultiplier: 2.5
    },
    {
      id: 4,
      title: "Pathogen Clearance & Elastic Recovery",
      subtitle: "Resolution of Inflammation",
      desc: "Evelated NO halts selective pathogen replication. Simultaneously, L-Hydroxyproline repairs alveolar tissue, while L-Glutamine prevents muscle fatigue. Restoring pristine cellular vitality safely.",
      impact: "Host-Directed Healing complete. Pathogen growth restricted with zero chance of resistance mutational selective pressure.",
      noMultiplier: 3.2
    }
  ];

  const triggerActivation = () => {
    // Animate nitric oxide levels up to target multiplier
    const targetValue = Math.round(40 * stepsData[mechanismStep - 1].noMultiplier);
    setNitricOxideLevel(targetValue);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed left-0 right-0 top-[68px] md:top-[80px] h-[calc(100vh-68px)] md:h-[calc(100vh-80px)] z-[45] bg-slate-50 overflow-hidden flex flex-col w-full border-t border-slate-200/65 shadow-2xl transition-all duration-500 min-h-0">
          {/* Main Full-Screen Container */}
          <motion.div
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="relative w-full h-full bg-slate-50 overflow-hidden flex flex-col focus:outline-none min-h-0"
            id="novicule-modal-content"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:text-slate-900 hover:bg-white hover:border-transparent shadow-xl transition-all cursor-pointer flex items-center gap-2 px-4 shadow-black/10"
              title="Close Panel and Back"
              id="novicule-modal-close-btn"
            >
              <X className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">Back to Products</span>
            </button>

            {/* Premium Header Summary */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-6 pt-16 sm:p-8 sm:pt-12 md:p-12 text-white relative overflow-hidden shrink-0">
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute -bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/10 shrink-0 border border-white/20">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1hDSPUhi5jzwhw1_23GtqYx-bngafO8y5" 
                    alt="Novicule-TA Premium Product Pack" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-rose-500 text-[8px] font-black tracking-widest uppercase">
                    Premium
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-black tracking-wider uppercase text-teal-200">
                      Nutraceutical Supplement
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-black tracking-wider uppercase text-rose-200">
                      Sugar-Free Formulation
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-black tracking-wider uppercase text-sky-200">
                      Host-Directed Therapy
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight font-display">
                    NOVICULE-TA
                  </h2>
                  
                  <p className="text-teal-50/95 text-sm md:text-base font-medium max-w-2xl leading-relaxed italic">
                    “A Premium Gift for your Heart and Lung Wellness” — Engineered by Tech Atriocare Private Limited for robust respiratory strength and immunity.
                  </p>
                </div>
              </div>

              {/* Advanced Tab Bar */}
              <div className="flex border-b border-white/10 mt-8 gap-1 md:gap-3 overflow-x-auto whitespace-nowrap scrollbar-none pb-0">
                {(['overview', 'ingredients', 'mechanism', 'amr'] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 pr-4 pl-4 font-display font-bold text-xs md:text-sm uppercase tracking-wider relative transition-all focus:outline-none cursor-pointer ${
                      activeTab === tab 
                        ? 'text-white font-black translate-y-[1px]' 
                        : 'text-teal-50/85 hover:text-white'
                    }`}
                    id={`novicule-tab-${tab}`}
                  >
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTabIndicator" 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-rose-400 rounded-t-full"
                      />
                    )}
                    {tab === 'overview' && 'Overview'}
                    {tab === 'ingredients' && 'Ingredients Matrix'}
                    {tab === 'mechanism' && 'How it Works'}
                    {tab === 'amr' && 'AMR Fight (Science)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Details Body */}
            <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10" id="novicule-modal-body">
              <div className="max-w-6xl mx-auto w-full pb-12">
                <AnimatePresence mode="wait">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    {/* Bento Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-brand-teal">
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-extrabold text-brand-blue tracking-tight">The Bio-Defense Alternative</h3>
                          <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">
                            Novicule-TA is a pioneering nutraceutical supplement purpose-designed during global post-pandemic observation. Instead of traditional pathocidal tools which encourage pathogen mutation, Novicule targets physiological host cells directly. It facilitates the natural synthesis of vital cell defenders, supporting immediate biological shielding in active days.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-100 text-xs font-black text-slate-800">
                          <span className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" /> Boosts Natural Defense</span>
                          <span className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" /> Restores Lung Vitality</span>
                          <span className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" /> Relieves Fatigue</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-b from-brand-blue to-teal-900 rounded-3xl p-6 md:p-8 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-32 h-32 bg-teal-300/10 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="space-y-4 relative z-10">
                          <div className="inline-flex px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider">
                            Startup R&D
                          </div>
                          <h3 className="text-lg md:text-xl font-bold tracking-tight">Who We Are</h3>
                          <p className="text-white text-xs leading-relaxed font-semibold">
                            Developed by Tech Atriocare Private Limited, a specialized healthcare technology startup founded on deep cardiopulmonary wellness. Supported by founders motivated during the crucial COVID-19 times to create sustainable patient recovery systems.
                          </p>
                        </div>

                        <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold">
                          <span>Lead Innovator:</span>
                          <span className="text-rose-300">Tarun Adarsh</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {stats.map((st, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 border border-slate-200 text-center shadow-sm">
                          <div className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight mb-1">{st.value}</div>
                          <div className="text-xs font-black uppercase tracking-widest text-[#0097a7] mb-1">{st.label}</div>
                          <div className="text-[11px] font-bold text-slate-600">{st.desc}</div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Call Out */}
                    <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 flex flex-col md:flex-row items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <div className="space-y-2 flex-1">
                        <h4 className="font-black text-slate-900 text-sm md:text-base">Why Use Novicule-TA for High Pressure Work & Athletics?</h4>
                        <p className="text-slate-700 font-semibold text-xs md:text-sm leading-relaxed">
                          Whether maintaining vital energy lines before active field races, managing stress during pivotal exam seasons, or shielding bronchial systems during seasonal flu waves, Novicule-TA delivers vital components that safely fuel the metabolic structures. Safe, non-invasive, and completely sugar-free.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. INGREDIENTS MATRIX */}
                {activeTab === 'ingredients' && (
                  <motion.div
                    key="ingredients"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    {/* Component Navigation */}
                    <div className="flex flex-wrap gap-2.5 p-1 bg-slate-200/50 rounded-2xl border border-slate-200">
                      {Object.keys(ingredientsData).map((ing) => {
                        const name = ing as IngredientName;
                        const data = ingredientsData[name];
                        const Icon = data.icon;
                        const isSel = activeIngredient === name;
                        return (
                          <button
                            key={name}
                            onClick={() => setActiveIngredient(name)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all focus:outline-none cursor-pointer flex-1 justify-center ${
                              isSel 
                                ? 'bg-white text-slate-950 shadow-sm border border-slate-200' 
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                            }`}
                            id={`novicule-ing-${name}`}
                          >
                            <Icon className={`w-4 h-4 ${isSel ? data.color : 'text-slate-400'}`} />
                            {name}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Ingredient Content Card */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIngredient}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white rounded-3xl p-6 md:p-8 border shadow-sm ${ingredientsData[activeIngredient].bgGradient}`}
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          
                          {/* Left Panel: Description */}
                          <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                              <span className="px-3 py-1 bg-slate-200 border border-slate-300 rounded-full text-xs font-black uppercase tracking-widest text-slate-700">
                                Active compound info
                              </span>
                              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
                                {activeIngredient}
                              </h3>
                              <p className="font-bold text-[#006D77] text-sm italic">
                                {ingredientsData[activeIngredient].tagline}
                              </p>
                            </div>

                            {/* Scientific Bullets */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {ingredientsData[activeIngredient].bullets.map((bullet, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                                  <h4 className="font-extrabold text-slate-900 text-xs md:text-sm flex items-center gap-2 mb-1.5 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                    {bullet.title}
                                  </h4>
                                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                                    {bullet.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Panel: Interactive Meter visual */}
                          <div className="w-full md:w-80 bg-slate-100 rounded-3xl p-6 border border-slate-300 shadow-inner shrink-0 flex flex-col justify-between min-h-[290px]">
                            <div className="text-center space-y-4">
                              <div className="inline-flex w-16 h-16 rounded-full bg-white items-center justify-center border border-slate-200 shadow-sm animate-pulse">
                                {(() => {
                                  const Icon = ingredientsData[activeIngredient].icon;
                                  return <Icon className={`w-8 h-8 ${ingredientsData[activeIngredient].color}`} />;
                                })()}
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-extrabold text-slate-900 text-xs md:text-sm uppercase">Biological Synergy</h4>
                                <p className="text-slate-705 text-slate-700 text-xs font-semibold">Measured therapeutic effect weight</p>
                              </div>
                            </div>

                            {/* Gauge Animation */}
                            <div className="relative pt-6">
                              <div className="flex justify-between text-xs font-black uppercase text-slate-850 mb-1.5">
                                <span>{ingredientsData[activeIngredient].effectLabel}</span>
                                <span className="text-slate-950 font-black">{ingredientsData[activeIngredient].percentageEffect}%</span>
                              </div>
                              <div className="h-3.5 w-full bg-slate-300 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${ingredientsData[activeIngredient].percentageEffect}%` }}
                                  transition={{ duration: 0.5, ease: 'easeOut' }}
                                  className={`h-full bg-gradient-to-r from-brand-teal to-[#1aa3b2] rounded-full`}
                                />
                              </div>
                              <p className="text-xs font-bold text-slate-750 mt-2.5 text-center leading-relaxed">
                                Tested against respiratory and exhaustion control models.
                              </p>
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* 3. HOW IT WORKS (MECHANISM STAGE) */}
                {activeTab === 'mechanism' && (
                  <motion.div
                    key="mechanism"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
                        <span className="px-3.5 py-1.5 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-[10px] font-black uppercase tracking-widest">
                          Physiological Pathway
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                          The 4-Step Mechanism of Defense
                        </h3>
                        <p className="text-slate-500 font-medium text-xs md:text-sm">
                          Click through each step of the host-directed therapy model to see how Novicule-TA prompts instant immune cells mobilization and triggers vascular defense safely.
                        </p>
                      </div>

                      {/* Stepper Grid layout */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        
                        {/* Stepper buttons (Left Column) */}
                        <div className="md:col-span-5 space-y-3">
                          {stepsData.map((step) => (
                            <button
                              key={step.id}
                              onClick={() => {
                                setMechanismStep(step.id);
                                setNitricOxideLevel(Math.round(40 * step.noMultiplier));
                              }}
                              className={`w-full text-left p-4 rounded-2xl border text-xs md:text-sm transition-all focus:outline-none flex items-center gap-4 cursor-pointer hover:bg-slate-50 group ${
                                mechanismStep === step.id 
                                  ? 'bg-slate-50 border-brand-teal shadow-md ' 
                                  : 'bg-white border-slate-200 animate-none'
                              }`}
                              id={`novicule-step-btn-${step.id}`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-black text-sm transition-all border ${
                                mechanismStep === step.id 
                                  ? 'bg-[#0097a7] text-white border-transparent' 
                                  : 'bg-white text-slate-650 hover:text-slate-800 border-slate-300'
                              }`}>
                                {step.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`font-black uppercase tracking-widest text-[11px] mb-0.5 ${
                                  mechanismStep === step.id ? 'text-teal-750' : 'text-slate-500'
                                }`}>
                                  {step.subtitle}
                                </div>
                                <h4 className={`font-black text-xs md:text-sm uppercase truncate ${
                                  mechanismStep === step.id ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-900'
                                }`}>
                                  {step.title}
                                </h4>
                              </div>
                              <ChevronRight className={`w-4 h-4 transition-transform ${
                                mechanismStep === step.id ? 'translate-x-1 text-[#0097a7]' : 'text-slate-400'
                              }`} />
                            </button>
                          ))}
                        </div>

                        {/* Interactive Visual Dashboard (Right Column) */}
                        <div className="md:col-span-7 bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-300 flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-inner">
                          {/* Inside Grid background overlay */}
                          <div className="absolute inset-0 opacity-15 pointer-events-none noise-texture" />
                          
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={mechanismStep}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -15 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-6 relative z-10"
                            >
                              {/* Title */}
                              <div className="space-y-1">
                                <span className="text-xs font-black tracking-widest uppercase text-brand-teal bg-white border border-slate-300 px-3 py-1 rounded-full">
                                  Current Stage: {mechanismStep} / 4
                                </span>
                                <h4 className="text-xl md:text-2xl font-black font-display text-slate-950 tracking-tight mt-3">
                                  {stepsData[mechanismStep - 1].title}
                                </h4>
                                <p className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider">
                                  {stepsData[mechanismStep - 1].subtitle}
                                </p>
                              </div>

                              <p className="text-slate-850 font-bold text-xs md:text-sm leading-relaxed">
                                {stepsData[mechanismStep - 1].desc}
                              </p>

                              {/* Biological impact box */}
                              <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm flex items-start gap-3">
                                <Info className="w-5 h-5 text-teal-650 shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                  <div className="text-xs font-black text-slate-800 uppercase tracking-widest">Physiological Impact</div>
                                  <p className="text-slate-900 font-extrabold text-xs md:text-sm leading-relaxed">
                                    {stepsData[mechanismStep - 1].impact}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>

                          {/* Dynamic Nitric Oxide Meter Simulation */}
                          <div className="mt-8 pt-6 border-t border-slate-300 relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="space-y-1">
                                <div className="text-xs font-black uppercase text-slate-800 tracking-wider">Nitric Oxide (NO) Level</div>
                                <div className="text-2xl font-black text-brand-blue flex items-baseline gap-1.5 leading-none">
                                  {nitricOxideLevel} 
                                  <span className="text-xs font-bold text-slate-705 uppercase tracking-wider">µmol/L</span>
                                </div>
                              </div>

                              <button
                                onClick={triggerActivation}
                                className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer border border-rose-400/20 shadow-rose-500/10"
                                id="novicule-simulation-trigger-btn"
                              >
                                <Flame className="w-4 h-4 text-orange-200 animate-pulse" />
                                Trigger Bio-Stimulation
                              </button>
                            </div>

                            {/* Signal Indicator bar */}
                            <div className="mt-4 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ 
                                  width: `${(nitricOxideLevel / 128) * 100}%`,
                                  backgroundColor: nitricOxideLevel > 90 ? '#ef4444' : nitricOxideLevel > 60 ? '#f97316' : '#0d9488'
                                }}
                                transition={{ type: 'spring', stiffness: 80 }}
                                className="h-full rounded-full"
                              />
                            </div>
                            <div className="flex justify-between text-xs font-black text-slate-700 uppercase mt-1">
                              <span>Standard</span>
                              <span>Target Activation Cap</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. AMR FIGHT & BIO-DEFENSE SCIENCE */}
                {activeTab === 'amr' && (
                  <motion.div
                    key="amr"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Why Antibiotics Fail (Left column) */}
                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 p-2 bg-red-50 text-red-600 rounded-2xl">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest">Antimicrobial Resistance (AMR)</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">The Antibiotics Overuse Dilemma</h3>
                            <p className="text-slate-800 font-medium text-xs md:text-sm leading-relaxed">
                              Over 80% of common coughs, colds, and seasonal congestions are entirely viral. Taking traditional antibiotics for these viral infections provides zero efficacy, but it forces beneficial gut bacteria and pathogens to undergo dramatic selective mutation pressures, causing highly dangerous Antibiotic Resistance.
                            </p>
                          </div>

                          {/* Critical drawbacks */}
                          <div className="space-y-3 pt-4 border-t border-slate-100">
                            {[
                              "No viral reduction: Antibiotics ONLY target bacteria, failing viral colds.",
                              "Wastes gut flora: Destroys beneficial digestive biomes.",
                              "Drives bacterial resistance mutations.",
                              "Prolonged body fatigue recovery loop."
                            ].map((text, inx) => (
                              <div key={inx} className="flex gap-3 text-xs md:text-sm font-bold text-slate-800 leading-relaxed">
                                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span>{text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 p-4 rounded-2xl bg-slate-100 border border-slate-250 text-center text-xs font-black text-slate-700 uppercase tracking-widest">
                          Not Recommended for Viral Care
                        </div>
                      </div>

                      {/* Why Novicule Wins (Right column) */}
                      <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-brand-teal shadow-lg shadow-[#0097a7]/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 p-2 bg-[#0097a7]/10 text-[#006D77] rounded-2xl">
                            <ShieldCheck className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest text-[#006D77]">Host-Directed Bio-Shield</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">Sustainable Pathogen Clearance</h3>
                            <p className="text-slate-800 font-medium text-xs md:text-sm leading-relaxed">
                              Novicule-TA bypasses the pathogen completely. By equipping the host body's immune command matrix (macrophages and mucosal lining) with specialized synergy precursors (L-Citrulline, L-Glutamine, and Vitamin C), it activates natural local cell defenses to clear the virus naturally.
                            </p>
                          </div>

                          {/* Critical benefits */}
                          <div className="space-y-3 pt-4 border-t border-slate-100">
                            {[
                              "Direct antiviral & biological shielding via natural Nitric Oxide levels.",
                              "No selective pressure: Zero resistance generation in pathogens.",
                              "Protects digestive gut flora structure completely.",
                              "Enhanced lung compliance and rapid muscle exhaustion repair."
                            ].map((text, inx) => (
                              <div key={inx} className="flex gap-3 text-xs md:text-sm font-bold text-slate-800 leading-relaxed font-semibold">
                                <CheckCircle2 className="w-4 h-4 text-[#006D77] shrink-0 mt-0.5" />
                                <span>{text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 p-4 rounded-2xl bg-[#0097a7]/10 text-center text-xs font-black text-[#006D77] uppercase tracking-widest">
                          Highly Sustainable Solution
                        </div>
                      </div>
                    </div>

                    {/* Scientific Summary Quote Card */}
                    <div className="bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden border border-slate-800">
                      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-amber-400" />
                          <span className="text-xs font-black uppercase tracking-wider text-amber-300">Clinical Paradigm</span>
                        </div>
                        <p className="text-slate-100 text-sm md:text-base leading-relaxed font-bold italic">
                          &ldquo;Most respiratory syndromes represent viral surges where pathocidal agents like antibiotics offer no help. Enabling patients to fortify their cells through specific, high-absorption dietary actives stands out as a highly sustainable pathway for cardiopulmonary endurance and community health integrity.&rdquo;
                        </p>
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-widest pt-2">
                          Tech AtrioCare Cardiovascular & Pulmonary R&D Division
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

            {/* Bottom Sachet Purchase Button bar */}
            <div className="bg-white border-t border-slate-200 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-500 leading-normal">
                  Novicule-TA is a premier nutraceutical formulation. Sugar-free and orange flavored.
                </span>
              </div>
              <a 
                href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-bold rounded-2xl text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/15 hover:shadow-brand-teal/20 text-sm flex items-center justify-center gap-2"
                id="novicule-buy-now-btn-footer"
              >
                Buy on TATA 1mg <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
