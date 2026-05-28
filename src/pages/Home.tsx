import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Heart,
  Brain,
  Zap,
  ShieldCheck,
  Database,
  Search,
  Microscope,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Cpu,
  ChevronRight,
  Activity,
  Wind,
  Target,
  Stethoscope,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Quote,
  Star,
  ArrowUpRight,
  Calendar,
  BookOpen,
  Leaf,
  Dna,
  Info,
  HelpCircle,
  GraduationCap,
  Building2,
  School,
  Linkedin,
  Instagram,
  MessageSquare,
  ShieldAlert,
  HeartHandshake,
  Pill,
  Clock,
  FileText,
  Mic,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";
import RecognitionsSection from "../components/RecognitionsSection";
import { useState } from "react";
import JoinUsModal from "../components/JoinUsModal";
import NoviculeInfoModal from "../components/NoviculeInfoModal";
import FeaturedInsightsSlider from "../components/FeaturedInsightsSlider";
// Clean imports of custom corporate About Us card assets
import aboutWhoWeAre from "../assets/images/about_who_we_are_1779734460143.png";
import aboutHowWeStarted from "../assets/images/about_how_we_started_1779734477684.png";
import aboutOurVision from "../assets/images/about_our_vision_1779734494009.png";
import clinicalLabDoctors from "../assets/images/clinical_lab_doctors_1779800211382.png";
import neuralAnalysisGirl from "../assets/images/neural_analysis_girl_1779800243404.png";

interface InteractiveCardProps {
  src: string;
  alt: string;
  tag: string;
  title: string;
  delay?: number;
}

function InteractiveCard({
  src,
  alt,
  tag,
  title,
  delay = 0,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isColored, setIsColored] = useState(false);

  // Motion values for tracking cursor position smoothly without re-rendering React
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Spring configuration for extremely fluid, organic movement
  const springConfig = { damping: 25, stiffness: 180, mass: 0.8 };

  // Calculate high fidelity parallax and tilt rotation angles
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);

  // Background image moves slightly in contrast to container rotation, creating 3D depth
  const imageX = useSpring(useTransform(x, [0, 1], [10, -10]), springConfig);
  const imageY = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);

  // Accent and text shift forward in 3D perspective space the closer the cursor gets
  const textX = useSpring(useTransform(x, [0, 1], [-6, 6]), springConfig);
  const textY = useSpring(useTransform(y, [0, 1], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates from 0 to 1 relative to card dimensions
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset back to the perfect center state
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsColored(!isColored)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      className="relative w-1/2 aspect-[3/4.2] rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_28px_60px_rgba(14,165,233,0.14)] border border-slate-100/50 group cursor-pointer select-none"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          x: imageX,
          y: imageY,
        }}
        animate={{
          scale: isHovered ? 1.15 : 1.02,
          filter: isColored
            ? `grayscale(0%) contrast(1.05) brightness(${isHovered ? 0.85 : 0.92})`
            : `grayscale(100%) contrast(1.05) brightness(${isHovered ? 0.85 : 0.92})`,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-[110%] h-[110%] -left-[5%] -top-[5%] absolute object-cover origin-center"
        referrerPolicy="no-referrer"
      />

      {/* High precision atmospheric coloring overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-brand-teal/5 opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-brand-teal/5 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shimmer / light reflection sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[120%] transition-transform duration-[1200ms] ease-out" />
      </div>

      {/* Modern interactive edge glow */}
      <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/15 group-hover:ring-brand-teal/30 transition-all duration-300" />

      {/* Content wrapper with translateZ to separate from image layer in 3D */}
      <motion.div
        style={{
          x: textX,
          y: textY,
          transform: "translateZ(40px)",
        }}
        className="absolute bottom-6 left-6 right-6 z-10"
      >
        <span className="text-[10px] font-black tracking-[0.25em] text-[#00E5FF] uppercase block mb-1 group-hover:text-cyan-300 transition-colors">
          {tag}
        </span>
        <h4 className="text-xl md:text-2xl font-black text-white leading-tight uppercase font-display select-none">
          {title}
        </h4>

        {/* Sleek animation accent bar */}
        <div className="w-0 h-[2px] bg-[#00E5FF] group-hover:w-16 transition-all duration-500 delay-100 mt-3 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
  }>({
    isOpen: false,
    title: "",
    description: "",
  });

  const [isNoviculeModalOpen, setIsNoviculeModalOpen] = useState(false);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [serviceEnquirySuccess, setServiceEnquirySuccess] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsServiceModalOpen(true);
    setServiceEnquirySuccess(false);
    setServiceForm({ name: "", phone: "", email: "", message: "" });
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServiceEnquirySuccess(true);
  };

  const openPartnerModal = () => {
    setModalConfig({
      isOpen: true,
      title: "Partner with Tech AtrioCare",
      description:
        "Join our network of healthcare innovators and help us bring transformative wellness to every doorstep.",
    });
  };

  const openCaseStudyModal = () => {
    setModalConfig({
      isOpen: true,
      title: "Request Case Studies",
      description:
        "Get detailed insights into our clinical pilot studies and technological validation results.",
    });
  };

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 px-4 md:px-8 overflow-hidden bg-gradient-to-tr from-sky-100 via-[#e0f2fe]/95 to-cyan-100/60">
        {/* Cinematic Lung Visualization Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{
              scale: [1.06, 1, 1.06],
              opacity: 0.95,
            }}
            transition={{
              scale: { duration: 60, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2 },
            }}
            className="absolute inset-0 bg-[url('/src/assets/images/futuristic_lung_hero_1779727247618.png')] bg-cover bg-center mix-blend-multiply opacity-[0.88]"
          />

          {/* Core Cinematic Overlays to provide immaculate contrast and negative space */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 via-sky-50/10 to-sky-100/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/70 via-sky-50/55 to-transparent" />

          {/* Animated Biometric Grid */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.08] medical-grid pointer-events-none"
            style={{ backgroundSize: "160px 160px" }}
          />
        </div>

        {/* Breathing Oxygen Particles & Wave Rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Wave Breathing Rings */}
          <div className="absolute inset-x-0 top-[20%] flex items-center justify-center opacity-40">
            <motion.div
              animate={{
                scale: [0.92, 1.15, 0.92],
                opacity: [0.1, 0.28, 0.1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[500px] h-[500px] rounded-full border-2 border-brand-teal/15 blur-[20px] absolute"
            />
            <motion.div
              animate={{
                scale: [0.85, 1.25, 0.85],
                opacity: [0.06, 0.18, 0.06],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="w-[750px] h-[750px] rounded-full border border-cyan-400/10 blur-[35px] absolute"
            />
          </div>

          {/* Glowing Oxygen Micro-particles */}
          {Array.from({ length: 18 }).map((_, i) => {
            const size = Math.random() * 7 + 3;
            const horizontalTravel = (Math.random() - 0.5) * 60;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-tr from-brand-teal/80 to-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 85 + 5}%`,
                  bottom: `${Math.random() * 50 + 5}%`, // float from mid-lower screen
                }}
                animate={{
                  y: [0, -280 - Math.random() * 180],
                  x: [0, horizontalTravel, horizontalTravel * 1.5],
                  opacity: [0, 0.5, 0.8, 0.3, 0],
                  scale: [0.6, 1.3, 0.8, 0.5],
                }}
                transition={{
                  duration: 14 + Math.random() * 16,
                  repeat: Infinity,
                  delay: Math.random() * 12,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-brand-light-teal/15 blur-[240px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.25, 1, 1.25],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-brand-teal/10 blur-[220px] rounded-full pointer-events-none"
          />

          {/* Sophisticated Floating Technical Assets */}
          {[
            { Icon: Heart, top: "15%", left: "15%", size: 52, delay: 0 },
            { Icon: Activity, top: "35%", left: "85%", size: 80, delay: 1 },
            { Icon: Wind, top: "75%", left: "12%", size: 65, delay: 2 },
            { Icon: Sparkles, top: "18%", left: "75%", size: 45, delay: 0.5 },
            { Icon: Microscope, top: "60%", left: "90%", size: 50, delay: 4 },
            { Icon: ShieldCheck, top: "40%", left: "8%", size: 40, delay: 3 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.35, 0.2],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18 + idx * 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className="absolute text-brand-teal hidden lg:flex items-center justify-center"
              style={{ top: item.top, left: item.left }}
            >
              <div className="relative">
                <item.Icon
                  size={item.size}
                  strokeWidth={0.5}
                  className="drop-shadow-sm opacity-35"
                />
                <div className="absolute inset-0 bg-brand-teal/5 blur-xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-full mb-12 bg-white/80 border border-sky-200/40 backdrop-blur-xl shadow-[0_12px_32px_rgba(14,165,233,0.06)]">
              <div className="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center overflow-hidden border border-sky-100 p-0.5">
                <img
                  src="https://lh3.googleusercontent.com/d/1wXu_Vb5F6ihb6wEcXWhDYkfNjz28mPDA"
                  alt="Tech AtrioCare Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-brand-teal drop-shadow-sm">
                AtrioCare Diagnostics
              </span>
              <div className="h-3.5 w-px bg-slate-200" />
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500">
                AI-Powered Hub
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.2, type: "spring", damping: 25 }}
              className="mb-12 relative group cursor-default"
            >
              <div className="relative inline-block w-full">
                <h1 className="block text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter font-display leading-[0.85] mb-6 group-hover:text-brand-teal transition-all duration-700">
                  <span>Future</span>
                  <br />
                  <span className="text-brand-teal relative inline-flex items-center gap-4 md:gap-8 mt-4 md:mt-6 flex-wrap md:flex-nowrap">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.4,
                      }}
                      whileHover={{ scale: 1.08, rotate: 6 }}
                      className="w-24 h-24 md:w-44 md:h-44 rounded-[36px] md:rounded-[56px] bg-white flex items-center justify-center p-4 md:p-8 shadow-[0_30px_70px_rgba(14,165,233,0.22)] border border-sky-100 shrink-0 select-none relative"
                    >
                      {/* Subtle outer glowing element */}
                      <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-2xl animate-pulse pointer-events-none" />
                      <img
                        src="https://lh3.googleusercontent.com/d/1wXu_Vb5F6ihb6wEcXWhDYkfNjz28mPDA"
                        alt="AtrioCare Shield"
                        className="w-full h-full object-contain relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                    <span className="relative">
                      Tech AtrioCare
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="absolute -bottom-3 left-0 h-2.5 bg-gradient-to-r from-brand-teal to-blue-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                      />
                    </span>
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="w-20 h-[4px] bg-gradient-to-r from-brand-teal to-transparent rounded-full shadow-md" />
                <span className="text-[11px] md:text-[12px] font-black text-slate-500 uppercase tracking-[0.8em] leading-none mb-0 drop-shadow-sm">
                  Redefining Respiratory Care
                </span>
              </div>
            </motion.div>

            <p className="text-slate-700 text-lg md:text-2xl max-w-2xl mb-14 leading-relaxed font-sans font-medium drop-shadow-sm opacity-90">
              In the atrium of innovation, research and development craft the
              wonders of tomorrow
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/checkup"
                className="relative atrio-gradient text-white px-12 py-7 rounded-full font-black shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:-translate-y-2.5 transition-all flex items-center gap-7 group w-full sm:w-auto justify-center overflow-hidden active:scale-95"
              >
                {/* Advanced Light dynamics */}
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-white/20 rounded-full blur-3xl"
                />

                <motion.div
                  animate={{ x: "600%" }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[45deg]"
                />

                <div className="flex flex-col items-start leading-tight relative z-10 text-left">
                  <span className="text-xl uppercase tracking-tighter font-display leading-[0.85] mb-1">
                    1-min Digital <br className="md:hidden" /> Check-Up
                  </span>
                  <span className="text-[10px] opacity-80 font-black uppercase tracking-[0.5em]">
                    AI-Powered Bio-Scan
                  </span>
                </div>
                <div className="bg-white p-3 rounded-full relative z-10 text-brand-teal shadow-2xl group-hover:scale-125 transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </div>

            {/* Trusted By / Supported By */}
            <div className="mt-16 pt-8 border-t border-slate-250">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">
                Supported By Elite Institutions
              </p>
              <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-black text-slate-800 border-r pr-8 border-slate-200">
                  <div className="w-8 h-8 rounded bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
                    IIT
                  </div>
                  <span className="text-xs font-bold font-sans">IIT DELHI</span>
                </div>
                <div className="flex items-center gap-2 font-black text-slate-800 border-r pr-8 border-slate-200">
                  <div className="w-8 h-8 rounded bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
                    FITT
                  </div>
                  <span className="text-xs font-bold font-sans">FITT</span>
                </div>
                <div className="flex items-center gap-2 font-black text-slate-800">
                  <div className="w-8 h-8 rounded bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
                    GOI
                  </div>
                  <span className="text-xs font-bold font-sans">MSME</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block lg:translate-x-8 xl:translate-x-16"
          >
            <div className="relative z-10 bg-white/65 backdrop-blur-2xl p-6 rounded-[56px] border border-white/60 shadow-[0_32px_64px_rgba(0,118,129,0.08)]">
              <div className="relative rounded-[40px] overflow-hidden border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                  alt="Health Monitoring"
                  className="w-full h-auto brightness-95 saturate-[0.85] contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Cards - Refined Integration */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-8 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-white min-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
                    <Activity className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-[11px] font-black text-brand-teal uppercase tracking-widest">
                    Real-time Data
                  </span>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">
                  98.4%
                </div>
                <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">
                  Diagnostic Accuracy
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-12 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-white min-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                    <Wind className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">
                    Screening Mode
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-tighter">
                    <span>Analyzing Signal</span>
                    <span className="text-brand-teal">85%</span>
                  </div>
                  <div className="flex gap-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["10%", "85%", "10%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-full bg-gradient-to-r from-brand-teal to-blue-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Official AtrioCare Logo verification bubble */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute -bottom-10 -right-6 bg-white/95 backdrop-blur-xl py-3 px-4 rounded-[24px] shadow-[0_15px_35px_rgba(14,165,233,0.08)] border border-white flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 p-0.5 shadow-inner">
                  <img
                    src="https://lh3.googleusercontent.com/d/1wXu_Vb5F6ihb6wEcXWhDYkfNjz28mPDA"
                    alt="AtrioCare Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-none mb-1">
                    ATRIOCARE ECOSYSTEM
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                    Official Verified
                  </div>
                </div>
              </motion.div>

              {/* Removing potential problematic illustation card from bottom right of hero frame by simply not including it */}
            </div>

            {/* Ambient Shadow glow behind frame */}
            <div className="absolute -inset-10 bg-brand-teal/10 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Press/Challenge Insights Slider */}
      <FeaturedInsightsSlider
        onOpenNoviculeModal={() => setIsNoviculeModalOpen(true)}
      />

      {/* About Our Mission Section */}
      <section
        id="about"
        className="py-32 px-4 md:px-8 bg-gradient-to-b from-[#f0f9fa]/80 via-white to-sky-50/20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Heading matching company look */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-3 px-4.5 py-1.5 bg-white/95 border border-sky-100/60 rounded-full shadow-[0_12px_28px_rgba(14,165,233,0.05)] backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center p-0.5 border border-sky-100 shadow-inner justify-self-center">
                  <img
                    src="https://lh3.googleusercontent.com/d/1wXu_Vb5F6ihb6wEcXWhDYkfNjz28mPDA"
                    alt="AtrioCare Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-slate-800 uppercase tracking-widest leading-none font-sans">
                    TECH ATRIOCARE
                  </p>
                </div>
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-blue mb-4">
              Our Core Purpose
            </h2>
            <p className="text-slate-500 font-medium">
              To deliver holistic, accessible, and high-quality healthcare using
              cutting-edge technology.
            </p>
          </div>

          {/* Cards Timeline Container */}
          <div className="relative mt-20 max-w-6xl mx-auto px-4 mb-8">
            {/* Horizontal Timeline Connector Line with custom gradient spanning the cards */}
            <div className="absolute top-[230px] left-0 right-0 h-[4px] bg-gradient-to-r from-teal-400 via-amber-500/80 to-emerald-400 -translate-y-1/2 hidden md:block z-0" />

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {/* Card 1: Who are we? */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(15,118,110,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#E0F7FA]/80 flex items-center justify-center mb-8 border border-cyan-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutWhoWeAre}
                      alt="Who we are"
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    Who are we?
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    We are a 'health and wellness tech' focused R&D startup. We
                    develop research-driven solutions for a holistic heart and
                    lung wellness ecosystem.
                  </p>
                </motion.div>
                {/* Turquoise timeline dot centered below Card 1 */}
                <div className="hidden md:block w-4.5 h-4.5 rounded-full bg-[#00b4d8] border-[3.5px] border-white shadow-md mt-10 z-20" />
              </div>

              {/* Card 2: How we started */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(202,138,4,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#FFF8E1]/80 flex items-center justify-center mb-8 border border-amber-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutHowWeStarted}
                      alt="How we started"
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    How we started
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    During the pandemic lockdown, when the heart-wrenching
                    numbers of COVID-19 related deaths were floating in every
                    tabloids, during such gloomy days, the founder realized the
                    healing power of simple greetings from the dear ones like
                    'How are you? Haal-chaal kaisa hai?' -symbolizing care and
                    wellness.
                  </p>
                </motion.div>
                {/* No timeline dot centered below Card 2 because it is taller and stretches lower */}
                <div className="hidden md:block w-4.5 h-4.5 invisible mt-10" />
              </div>

              {/* Card 3: Vision */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(16,185,129,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#E8F5E9]/80 flex items-center justify-center mb-8 border border-emerald-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutOurVision}
                      alt="Vision"
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    Vision
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    To empower holistic wellness through 'technology &
                    personalized therapy'.
                  </p>
                </motion.div>
                {/* Emerald green timeline dot centered below Card 3 */}
                <div className="hidden md:block w-4.5 h-4.5 rounded-full bg-[#06d6a0] border-[3.5px] border-white shadow-md mt-10 z-20" />
              </div>
            </div>
          </div>

          {/* Three Core Pillars Cards below timeline */}
          <div className="grid md:grid-cols-3 gap-12 mt-24 max-w-5xl mx-auto text-center px-4">
            {/* Pillar 1: R&D */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#00b4d8] text-white font-black text-sm flex items-center justify-center mb-6 shadow-md shadow-cyan-200/50 group-hover:scale-110 transition-transform">
                R&D
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                Research Driven
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Evidence-based solutions for real-world impact
              </p>
            </div>

            {/* Pillar 2: AI */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#ffb703] text-white font-black text-sm flex items-center justify-center mb-6 shadow-md shadow-amber-200/50 group-hover:scale-110 transition-transform font-sans">
                AI
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                AI Powered
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Intelligent technology for personalized care
              </p>
            </div>

            {/* Pillar 3: Holistic Care */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#06d6a0] text-teal-950 font-black text-sm flex items-center justify-center mb-6 shadow-md shadow-emerald-200/50 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-white stroke-none" />
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                Holistic Care
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Complete wellness ecosystem for heart & lung health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Led Research Section */}
      <section
        id="evidence-research"
        className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white via-cyan-50/20 to-white border-b border-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Bullets */}
            <div className="lg:col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-5xl md:text-[5.5rem] font-black text-[#006064] font-display uppercase leading-[0.85] tracking-tighter">
                  Evidence-Led <br />
                  Research. <br />
                  <span className="text-brand-teal">Intelligent</span> <br />
                  Performance.
                </h2>
              </motion.div>

              <div className="space-y-10 max-w-xl">
                {/* Research-First Approach */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#E0F7FA]/80 border border-cyan-100/80 flex items-center justify-center text-[#0097A7] shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Microscope className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-brand-teal transition-colors">
                      Research-First Approach
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Our solutions are born from rigorous clinical research at
                      IIT Delhi's world-class labs.
                    </p>
                  </div>
                </motion.div>

                {/* AI-Driven Predictive Models */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#FFF8E1]/80 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Brain className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-amber-500 transition-colors">
                      AI-Driven Predictive Models
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Proprietary algorithms that detect early signs of
                      respiratory and cardiac distress.
                    </p>
                  </div>
                </motion.div>

                {/* Holistic Digital Wellness */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#E8F5E9]/80 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-emerald-500 transition-colors">
                      Holistic Digital Wellness
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Moving beyond diagnosis to provide integrated
                      rehabilitation and physical wellness.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider Column */}
            <div className="hidden lg:col-span-1 lg:flex justify-center h-full min-h-[400px] items-center relative select-none">
              <div className="w-px h-[450px] bg-slate-200/40" />
            </div>

            {/* Right Column: Two Custom Portrait Dynamic Interactive Cards */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="flex gap-6 w-full max-w-xl">
                <InteractiveCard
                  src={clinicalLabDoctors}
                  alt="Clinical Lab"
                  tag="RESEARCH HUB"
                  title="Clinical Lab"
                  delay={0}
                />
                <InteractiveCard
                  src={neuralAnalysisGirl}
                  alt="Neural Analysis"
                  tag="AI CORE"
                  title="Neural Analysis"
                  delay={0.15}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="products"
        className="py-40 px-4 md:px-8 bg-gradient-to-b from-sky-100/40 via-white to-[#e0f2fe]/40 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-200/20 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Product Ecosystem
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-blue leading-tight mb-6 tracking-tight">
                Advanced <span className="gradient-text">Health</span> <br />{" "}
                Made Simple
              </h2>
              <p className="text-slate-500 text-lg font-medium max-w-xl">
                A high-precision ecosystem of physical and digital tools
                engineered to transform respiratory and cardiac health
                screening.
              </p>
            </div>
          </div>

          {/* Our Products Heading */}
          <div className="mb-14 flex items-center justify-start gap-4">
            <span className="h-1 bg-gradient-to-r from-brand-teal to-transparent w-20 rounded-full"></span>
            <h4 className="text-3xl font-black text-brand-teal uppercase tracking-widest font-display flex items-center gap-3">
              Our Products
            </h4>
            <span className="h-0.5 bg-slate-100 flex-1 rounded-full"></span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Haal-Chaal Pravartak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/d/1EvUgiFzzksFr0vEBLi6Cr7cC49YNVNf9"
                  alt="Haal-Chaal Pravartak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <Mic className="w-8 h-8 text-brand-teal" />
                </div>
                <Link
                  to="/haal-chaal-pravartak"
                  className="hover:text-[#0097A7] transition-colors text-left"
                >
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">
                    Haal-Chaal Pravartak
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  The World's First Digital Gym for Heart & Lung Wellness
                  tracking your airway health in under a minute.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Acoustic Biomarkers
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    AI-Powered Diagnostics
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/haal-chaal-pravartak"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 cursor-pointer"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Haal-Chaal Pravartak 1.0 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500 relative"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/d/1Eo68kJvgJzO5RasRQ5_L9SMyEPwrxEf9"
                  alt="Haal-Chaal Pravartak Screening"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <Activity className="w-8 h-8 text-brand-teal" />
                </div>
                <Link
                  to="/haal-chaal"
                  className="hover:text-[#0097A7] transition-colors text-left"
                >
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">
                    Haal-Chaal Pravartak 1.0
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  An integrated non-invasive health screening platform for
                  real-time monitoring of vital signs.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    AI-Driven Analytics
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Cloud Integration
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/haal-chaal"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 cursor-pointer"
                  >
                    Explore Haal-Chaal
                  </Link>
                  <Link
                    to="/haal-chaal?action=register"
                    className="w-full py-3 rounded-2xl border-2 border-brand-teal text-brand-teal font-black text-xs uppercase tracking-widest text-center hover:bg-brand-teal hover:text-white transition-all"
                  >
                    Register for Challenge
                  </Link>
                  <Link
                    to="/terms"
                    className="text-xs font-bold text-slate-400 hover:text-brand-teal transition-colors text-center flex items-center justify-center gap-1 mt-3 group underline underline-offset-4 decoration-slate-200 hover:decoration-brand-teal"
                  >
                    View Challenge Terms & Conditions
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* V-sync */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/d/1ptFsvNYiSlaSkINiBjUHMtppYWtrvYSC"
                  alt="V-sync (Digital Physio)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">
                  V-sync (Digital Physio)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  Digital cardiovascular and pulmonary gym syncing exercises
                  with patient biometrics.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Bio-Syncing Technology
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    Remote Monitoring
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/vsync?action=quickstart"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 flex items-center justify-center cursor-pointer"
                  >
                    🚀 Quick Start Tutorial
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/vsync"
                      className="py-3 rounded-2xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wide text-center hover:bg-slate-50 transition-all flex items-center justify-center"
                    >
                      Discover Info
                    </Link>
                    <Link
                      to="/vsync?action=subscribe"
                      className="py-3 rounded-2xl border-2 border-blue-600 text-blue-600 font-extrabold text-xs uppercase tracking-wider text-center hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center"
                    >
                      Get License
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NOVICULE-TA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-slate-50/50 rounded-[40px] border border-brand-border overflow-hidden flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/d/1hDSPUhi5jzwhw1_23GtqYx-bngafO8y5"
                  alt="Novicule-TA Premium Heart and Lung Wellness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-sm mb-8 group-hover:rotate-6 transition-transform">
                  <Leaf className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">
                  NOVICULE-TA
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  A premium sugar-free nutraceutical supplement formulated to
                  boost immunity, respiratory health, and cardiovascular
                  endurance.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                    Heart & Lung Wellness Support
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                    Host-Directed Immunomodulation
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    🛒 Buy on TATA 1mg
                  </a>
                  <button
                    onClick={() => setIsNoviculeModalOpen(true)}
                    className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-brand-teal" /> Discover Info
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services and Expert Solutions Section */}
      <section
        id="services"
        className="py-32 px-4 md:px-8 bg-[#f8fafc] relative overflow-hidden"
      >
        {/* Subtle geometric pattern / glow */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Badges & Hero Title */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#006064] text-xs font-bold tracking-wider uppercase shadow-sm">
                Better Health Decisions
              </span>
              <span className="px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider uppercase shadow-sm">
                Smarter Ideas
              </span>
              <span className="px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase shadow-sm">
                Streamlined Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-slate-950 tracking-tight leading-[1.1] mb-6 uppercase">
              Too Much Confusion.
              <br />
              <span className="bg-gradient-to-r from-[#006064] via-[#00acc1] to-[#0d9488] bg-clip-text text-transparent">
                Not Enough Clarity.
              </span>
              <br />
              We Help You Decide What's Right.
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#006064] to-[#00acc1] mx-auto rounded-full mb-10" />

            {/* Our Services Heading */}
            <div className="mt-8 flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 mb-2">
                Empowering Support
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
                Our{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-display">
                  Services
                </span>
              </h3>
            </div>
          </div>

          {/* Problem Framework / Pain point row vs Clarity Solution Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
            {/* Left: Pain Points Card (Sound Familiar?) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-brand-blue to-[#082f49] text-white rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Decorative background light */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-300 text-xs font-bold uppercase tracking-wider mb-8">
                  <ShieldAlert className="w-4 h-4" /> Sound Familiar?
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display leading-tight mb-8 text-white">
                  Experiencing health information overload?
                </h3>

                <div className="space-y-5">
                  {[
                    {
                      text: "Confused about your health or test reports?",
                      icon: FileText,
                      color:
                        "bg-amber-500/20 text-amber-300 border-amber-500/10",
                    },
                    {
                      text: "Too many medicines, too many opinions?",
                      icon: Pill,
                      color: "bg-rose-500/20 text-rose-300 border-rose-500/10",
                    },
                    {
                      text: "Doctor says something, Google says something else?",
                      icon: Stethoscope,
                      color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/10",
                    },
                    {
                      text: "Have an idea but not sure if it will work?",
                      icon: Lightbulb,
                      color:
                        "bg-yellow-500/20 text-yellow-300 border-yellow-500/10",
                    },
                    {
                      text: "Wasting time, money and energy?",
                      icon: Clock,
                      color:
                        "bg-purple-500/20 text-purple-300 border-purple-500/10",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition-all text-left"
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                          item.color,
                        )}
                      >
                        <item.icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <p className="text-slate-100 font-bold text-sm sm:text-base leading-relaxed self-center">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center lg:text-left">
                <p className="text-cyan-300 font-black text-xs uppercase tracking-widest mb-1.5">
                  Our Core Commitment
                </p>
                <p className="text-xl md:text-2xl font-black font-display text-white uppercase tracking-wide">
                  We Turn Confusion Into Clear Decisions.
                </p>
              </div>
            </div>

            {/* Right: Scientific Pillars & Credential Panel */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              {/* Pillars list */}
              <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#006064] mb-8 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />{" "}
                  Our Scientific Foundations & Philosophy
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Science First",
                      desc: "Formulated on peer-tested guidelines",
                      icon: Microscope,
                      color: "bg-purple-50 text-purple-600 border-purple-100",
                    },
                    {
                      title: "First Principles Approach",
                      desc: "Deconstruct medical claims to baseline factual realities",
                      icon: Cpu,
                      color: "bg-teal-50 text-teal-600 border-teal-100",
                    },
                    {
                      title: "Evidence Based",
                      desc: "Rigorous clinical benchmarks & therapeutic support",
                      icon: ShieldCheck,
                      color: "bg-blue-50 text-blue-600 border-blue-100",
                    },
                    {
                      title: "Impact at Scale",
                      desc: "Bringing high-integrity wellness to millions safely",
                      icon: Award,
                      color: "bg-cyan-50 text-cyan-600 border-cyan-100",
                    },
                  ].map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center p-3 rounded-2xl border border-slate-50 hover:bg-slate-50/50 transition-all"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-xs border ${pillar.color}`}
                      >
                        <pillar.icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get Highlights Container */}
              <div className="bg-gradient-to-r from-teal-50/65 to-[#f0f9fa]/85 border border-teal-100/40 rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-3 max-w-sm text-left">
                  <h4 className="text-2xl font-black font-display text-slate-900 uppercase">
                    What You Get
                  </h4>
                  <p className="text-[#334155] font-semibold text-sm leading-relaxed">
                    Personalized, clinical-grade wellness blueprints explicitly
                    engineered to return command of your biological wellness,
                    eliminating ambiguity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto shrink-0">
                  {[
                    "Clarity you can trust",
                    "Answers that make sense",
                    "Actionable next steps",
                    "Better outcomes",
                    "Peace of mind",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-white py-3 px-4 rounded-xl border border-teal-100/20 shadow-xs text-slate-800 font-black text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Verification Metric Cards */}
              <div className="bg-white border border-slate-100 rounded-[30px] p-6 shadow-xs flex flex-wrap gap-6 items-center justify-around">
                <div className="flex items-center gap-3">
                  <div className="text-3xl lg:text-4xl font-black text-[#006064] font-display">
                    11+ Pilots
                  </div>
                  <div className="text-xs text-slate-600 font-bold max-w-[140px] uppercase tracking-wide leading-tight">
                    Active pilots including TATA 1mg & Nirmal Center
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-100 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="text-3xl lg:text-4xl font-black text-brand-teal font-display">
                    1000+
                  </div>
                  <div className="text-xs text-slate-600 font-bold max-w-[140px] uppercase tracking-wide leading-tight">
                    Clients guided with streamlined results
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-100 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="text-3xl lg:text-4xl font-black text-purple-600 font-display">
                    Incubated
                  </div>
                  <div className="text-xs text-slate-600 font-bold max-w-[140px] uppercase tracking-wide leading-tight">
                    At SP-TBI Mumbai & Jamia Hamdard CIIE Delhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Solutions Grid section header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight uppercase leading-snug">
              Expert Solutions for Individuals, Startups & Organizations
            </h3>
            <p className="text-slate-500 font-extrabold text-sm sm:text-base tracking-wide uppercase mt-4 max-w-3xl mx-auto">
              Select one of our specialized client programmes to view breakdown
              & secure immediate clinical clarity
            </p>
          </div>

          {/* Solutions Cards 5 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch mb-12">
            {[
              {
                id: "health-clarity-prog",
                title: "Health Decision Clarity",
                sub: "Understand your symptoms, tests & treatment options in simple language.",
                points: [
                  "Report interpretation",
                  "Risk assessment",
                  "Personalized guidance",
                  "Action plan",
                ],
                pricing: { inr: "₹499", usd: "$15" },
                color:
                  "border-emerald-500/10 shadow-emerald-500/5 hover:border-emerald-500 hover:shadow-emerald-500/5",
                badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100",
                icon: HeartHandshake,
                iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100/60",
              },
              {
                id: "breathing-wellness-prog",
                title: "Breathing Wellness Programs",
                sub: "Science-backed solutions to assess, improve and protect your breathing.",
                points: [
                  "Breathing assessment",
                  "Airway health insights",
                  "Lifestyle & habit plan",
                  "Progress tracking",
                ],
                pricing: { inr: "₹1,499", usd: "$49" },
                color:
                  "border-cyan-500/10 shadow-cyan-500/5 hover:border-cyan-500 hover:shadow-cyan-500/5",
                badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-100",
                icon: Wind,
                iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100/60",
              },
              {
                id: "hdt-solutions-prog",
                title: "Host Directed Therapy (HDT) Solutions",
                sub: "Pioneer in Host Directed Therapy for safer, smarter treatment approaches.",
                points: [
                  "Research & discovery",
                  "Mechanism mapping",
                  "Strategy & formulation",
                  "Innovation roadmap",
                ],
                pricing: { inr: "₹24,999", usd: "$349" },
                color:
                  "border-purple-500/10 shadow-purple-500/5 hover:border-purple-500 hover:shadow-purple-500/5",
                badgeColor: "bg-purple-50 text-purple-800 border-purple-100",
                icon: Microscope,
                iconBg: "bg-purple-50 text-purple-600 border-purple-100/60",
              },
              {
                id: "complex-problems-prog",
                title: "Complex Problems To Simple Solutions",
                sub: "We break down any complex problem using First Principles approach.",
                points: [
                  "Problem deconstruction",
                  "Root cause analysis",
                  "First principles thinking",
                  "Solution design & decision",
                ],
                pricing: { inr: "₹12,999", usd: "$179" },
                color:
                  "border-amber-500/10 shadow-amber-500/5 hover:border-amber-500 hover:shadow-amber-500/5",
                badgeColor: "bg-amber-50 text-amber-800 border-amber-100",
                icon: Target,
                iconBg: "bg-amber-50 text-amber-600 border-amber-100/60",
              },
              {
                id: "startup-validation-prog",
                title: "Life Science Startup Idea Validation",
                sub: "Validate before you invest precious time, money and effort.",
                points: [
                  "Market need analysis",
                  "Scientific validation",
                  "Feasibility study",
                  "Go-to-market roadmap",
                  "Investor readiness",
                ],
                pricing: { inr: "₹19,999", usd: "$279" },
                color:
                  "border-teal-500/10 shadow-teal-500/5 hover:border-teal-500 hover:shadow-teal-500/5",
                badgeColor: "bg-teal-50 text-teal-800 border-teal-100",
                icon: Lightbulb,
                iconBg: "bg-teal-50 text-teal-600 border-teal-100/60",
              },
            ].map((sol, index) => {
              const IconComp = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-[32px] border ${sol.color} p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden`}
                >
                  <div>
                    {/* Top Icon Block */}
                    <div
                      className={`w-12 h-12 rounded-2xl ${sol.iconBg} flex items-center justify-center mb-6 shadow-xs border group-hover:scale-110 transition-transform`}
                    >
                      <IconComp className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Service title */}
                    <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug tracking-tight mb-3 min-h-[50px] flex items-center">
                      {sol.title}
                    </h4>

                    {/* Sub title details */}
                    <p className="text-[#475569] font-medium text-xs sm:text-sm leading-relaxed mb-6 min-h-[50px]">
                      {sol.sub}
                    </p>

                    {/* Checklists */}
                    <div className="space-y-2 border-t border-slate-100 pt-5 mb-8">
                      {sol.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing labels */}
                  <div>
                    <div className="bg-slate-50/80 border border-slate-100/80 p-4 rounded-2xl mb-4 text-center">
                      <div className="text-[11px] uppercase font-black tracking-widest text-slate-400 mb-1.5">
                        STARTING AT
                      </div>
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-2xl font-black text-slate-900">
                          {sol.pricing.inr}
                        </span>
                        <span className="text-xs text-slate-400 font-extrabold">
                          / INR
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                        {sol.pricing.usd}{" "}
                        <span className="text-[10px] text-slate-400 font-extrabold">
                          / USD
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleServiceClick(sol.title)}
                      className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-brand-blue text-white font-black text-sm uppercase tracking-wider transition-all duration-250 cursor-pointer text-center hover:scale-[1.02] shadow-sm active:scale-[0.98]"
                    >
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Long Term Engagements Banner */}
          <div className="bg-[#e0f7fa]/30 border border-cyan-100/30 rounded-2xl p-5 text-center max-w-4xl mx-auto mb-20 shadow-xs">
            <p className="text-[#006064] text-sm sm:text-base font-extrabold uppercase tracking-widest">
              ★ Custom Packages & Long-Term Engagements Available
            </p>
          </div>

          {/* Who We Serve & Why Choose Us Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
            {/* Left Box: Who We Serve */}
            <div className="lg:col-span-6 bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-lg text-left">
              <h4 className="text-sm sm:text-base uppercase tracking-widest font-black text-brand-blue mb-8 border-b border-slate-50 pb-4">
                Who We Serve
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Individuals & Families",
                    icon: Users,
                    desc: "Personal report translation, symptom guidance & custom treatment clarity plans.",
                  },
                  {
                    name: "Students & Researchers",
                    icon: GraduationCap,
                    desc: "Rigorous scientific deconstruction, literature validation & mechanism verification.",
                  },
                  {
                    name: "Startups & Entrepreneurs",
                    icon: Building2,
                    desc: "Accelerating timelines, auditing scientific claims & structuring investor research packs.",
                  },
                  {
                    name: "Healthcare Professionals",
                    icon: Stethoscope,
                    desc: "Peer-to-peer assistance with hard clinical questions & Host-Directed Therapy validation studies.",
                  },
                  {
                    name: "Institutions & Organizations",
                    icon: School,
                    desc: "Comprehensive air quality, cardiovascular screening metrics & workforce wellness programmes.",
                  },
                ].map((serve, idx) => {
                  const SIconComp = serve.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#fafafa] border border-slate-100 flex gap-3.5 items-start hover:bg-white hover:border-brand-teal/20 transition-all col-span-1 sm:first:col-span-2 text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#006064] flex items-center justify-center shrink-0 border border-teal-100/50">
                        <SIconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-sm text-slate-800 uppercase tracking-widest mb-1.5">
                          {serve.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                          {serve.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Box: Why Choose Us & Quote */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-lg flex-1 flex flex-col justify-center text-left">
                <h4 className="text-sm sm:text-base uppercase tracking-widest font-black text-teal-600 mb-6 border-b border-slate-50 pb-4">
                  Why Choose Us?
                </h4>

                <div className="space-y-4">
                  {[
                    "Deep scientific, clinical & therapeutic core expertise.",
                    "Proven validation frameworks & metrics focused entirely on real-world outcomes.",
                    "Personalized, practical & highly actionable suggestions tailored around root causes.",
                    "Confidential, highly ethical research mapping completely insulated from outside biases.",
                    "Deeply committed to creating real therapeutic value for public wellbeing.",
                  ].map((why, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed">
                        {why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Block */}
              <div className="bg-slate-900 text-white rounded-[32px] p-8 relative overflow-hidden flex items-center gap-6 shadow-xl border border-slate-800 text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00acc1]/10 rounded-full blur-2xl pointer-events-none" />
                <Quote className="w-12 h-12 text-[#00acc1]/60 shrink-0 stroke-1 opacity-75" />
                <div>
                  <p className="text-2xl md:text-3xl font-black font-display text-white tracking-tight leading-snug">
                    "Not just advice. Clarity that changes outcomes."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect & Contact Platforms bar */}
          <div className="bg-white border border-slate-200/90 rounded-[40px] p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-12 xl:col-span-5 space-y-4">
              <span className="text-xs font-black text-[#006064] uppercase tracking-widest bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full inline-block">
                Ready to Get Clarity?
              </span>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Connect directly with Tech Atriocare today.
              </h4>
              <p className="text-[#334155] font-semibold text-sm sm:text-base leading-relaxed">
                Connect on LinkedIn, follow our clinical updates on Instagram,
                or initiate a chat instantly on WhatsApp to discuss your
                project.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="https://in.linkedin.com/company/tech-atriocare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#f8fafc] hover:bg-brand-blue hover:text-white border border-slate-200 py-3.5 px-6 rounded-2xl text-slate-700 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm grow text-center"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </a>
                <a
                  href="https://instagram.com/tech.atriocare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#f8fafc] hover:bg-rose-600 hover:text-white border border-slate-200 py-3.5 px-6 rounded-2xl text-slate-700 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm grow text-center"
                >
                  <Instagram className="w-4 h-4" /> Instagram Hub
                </a>
              </div>
            </div>

            {/* Quick Contact Form or WhatsApp QR Connection */}
            <div className="lg:col-span-12 xl:col-span-7 bg-[#f8fafc] border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4 w-full md:max-w-md text-left">
                <h5 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-widest">
                  DM us on WhatsApp to start!
                </h5>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Scan the QR code with your smartphone camera, or click the
                  direct button to activate WhatsApp chat and share
                  documentation instantly.
                </p>
                <a
                  href="https://wa.me/918451915951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> Connect on
                  WhatsApp
                </a>
              </div>

              {/* QR Mockup Box */}
              <div className="bg-white border border-slate-100 p-4 rounded-3xl flex flex-col items-center justify-center text-center shadow-xs w-44 shrink-0">
                <div className="w-32 h-32 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/d/1VskxWZsXmTIsJVjzeFgyk6nxdz7Y8Qjw"
                    alt="WhatsApp QR Code"
                    className="w-full h-full object-contain p-1"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] uppercase font-black tracking-widest text-[#006064] mt-3">
                  Scan to Connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of R&D Section */}
      <section
        id="randd-areas"
        className="py-40 px-4 md:px-8 bg-gradient-to-b from-white via-[#f0f9fa]/40 to-white relative overflow-hidden"
      >
        {/* Subtle decorative background lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-28 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#006064] mb-4 tracking-tight">
              Areas of R&D
            </h2>
            <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
              Pioneering research in cutting-edge technologies for
              next-generation healthcare solutions
            </p>
          </div>

          {/* Staggered Timeline Container */}
          <div className="relative max-w-6xl mx-auto mb-20 px-4">
            {/* Horizontal Timeline Connector Line with custom gradient linking dots */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-300 via-teal-300 via-blue-300 via-amber-300 to-emerald-300 -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {/* Card 1: Health & Wellness (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 shadow-sm">
                    <Heart className="w-8 h-8 font-light fill-purple-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                    Health & Wellness
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Comprehensive wellness solutions for holistic health
                    management
                  </p>
                </motion.div>
                {/* Purple dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-purple-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>

              {/* Card 2: AI/ML based Digital Healthcare (Lower / Dot above) */}
              <div className="flex flex-col items-center flex-col-reverse justify-end lg:translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 shadow-sm">
                    <Brain className="w-8 h-8 font-light fill-teal-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                    AI/ML based Digital Healthcare
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Leveraging artificial intelligence for personalized
                    healthcare solutions
                  </p>
                </motion.div>
                {/* Teal dot on the timeline line above */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-teal-400 border-[3.5px] border-white shadow-md relative mb-4 -translate-y-3.5 z-20" />
              </div>

              {/* Card 3: Health Tech (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                    <Activity className="w-8 h-8 font-light stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                    Health Tech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Innovative technology solutions for modern healthcare
                    challenges
                  </p>
                </motion.div>
                {/* Blue dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-blue-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>

              {/* Card 4: Biotech (Lower / Dot above) */}
              <div className="flex flex-col items-center flex-col-reverse justify-end lg:translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                    <Dna className="w-8 h-8 font-light stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                    Biotech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Advancing biotechnology solutions for better health outcomes
                  </p>
                </motion.div>
                {/* Orange dot on the timeline line above */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-amber-500 border-[3.5px] border-white shadow-md relative mb-4 -translate-y-3.5 z-20" />
              </div>

              {/* Card 5: Clean Tech (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <Leaf className="w-8 h-8 font-light fill-emerald-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                    Clean Tech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Sustainable technology for environmental wellness
                  </p>
                </motion.div>
                {/* Green dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-emerald-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>
            </div>
          </div>

          {/* Footer signature slogan and multi-color indicator dots */}
          <div className="flex flex-col items-center justify-center gap-3 mt-16 md:mt-24 lg:mt-16">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            </div>
            <p className="text-[#0097A7] font-black text-xs uppercase tracking-widest text-center">
              Innovation drives our research
            </p>
          </div>
        </div>
      </section>

      {/* Precision Engineering Stats Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid xl:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Stat Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto xl:mx-0">
              {/* Card 1 */}
              <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#0097a7]/10 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all min-h-[260px]">
                <div className="w-14 h-14 rounded-2xl bg-[#0097a7]/5 text-[#0097a7] flex items-center justify-center mb-6 border border-[#0097a7]/10">
                  <Microscope className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-4 tracking-tight leading-none">
                  99.2%
                </div>
                <div className="text-[11px] font-bold text-[#0097a7] tracking-[0.2em] uppercase mb-1.5">
                  Clinical Accuracy
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Validated by AIIMS
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#0097a7]/10 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all min-h-[260px]">
                <div className="w-14 h-14 rounded-2xl bg-[#0097a7]/5 text-[#0097a7] flex items-center justify-center mb-6 border border-[#0097a7]/10">
                  <Activity className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-4 tracking-tight leading-none">
                  1.2M+
                </div>
                <div className="text-[11px] font-bold text-[#0097a7] tracking-[0.2em] uppercase mb-1.5">
                  Data Points/S
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Real-Time Processing
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#0097a7]/10 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all min-h-[260px]">
                <div className="w-14 h-14 rounded-2xl bg-[#0097a7]/5 text-[#0097a7] flex items-center justify-center mb-6 border border-[#0097a7]/10">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-4 tracking-tight leading-none">
                  450+
                </div>
                <div className="text-[11px] font-bold text-[#0097a7] tracking-[0.2em] uppercase mb-1.5">
                  Hospitals
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Across Tier 1 & 2
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#0097a7]/10 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all min-h-[260px]">
                <div className="w-14 h-14 rounded-2xl bg-[#0097a7]/5 text-[#0097a7] flex items-center justify-center mb-6 border border-[#0097a7]/10">
                  <Users className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-4 tracking-tight leading-none">
                  2M+
                </div>
                <div className="text-[11px] font-bold text-[#0097a7] tracking-[0.2em] uppercase mb-1.5">
                  Impacted Lives
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  And Counting
                </div>
              </div>
            </div>

            {/* Right: Typography and Badges */}
            <div className="flex flex-col text-center xl:text-left items-center xl:items-start max-w-2xl mx-auto xl:mx-0 xl:pl-4">
              <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-[#006064] font-display leading-[1.1] mb-8 tracking-tighter">
                Engineering
                <br className="hidden xl:block" />
                Precision.
                <br className="hidden xl:block" />
                Advancing Life.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                Our R&D pipeline extends beyond simple diagnostics. We are
                engineering the next generation of predictive biometrics for
                diverse high-stakes environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Pill 1 */}
                <div className="px-6 py-5 rounded-[24px] border border-[#0097a7]/20 bg-white shadow-sm hover:border-[#0097a7]/50 hover:shadow-md transition-all flex items-center gap-4 cursor-default group justify-start">
                  <Target className="w-6 h-6 text-[#0097a7] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#006064] tracking-[0.1em] uppercase mt-0.5">
                    Public Wellness
                  </span>
                </div>
                {/* Pill 2 */}
                <div className="px-6 py-5 rounded-[24px] border border-[#0097a7]/20 bg-white shadow-sm hover:border-[#0097a7]/50 hover:shadow-md transition-all flex items-center gap-4 cursor-default group justify-start">
                  <Target className="w-6 h-6 text-[#0097a7] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#006064] tracking-[0.1em] uppercase mt-0.5">
                    Elite Sports
                  </span>
                </div>
                {/* Pill 3 */}
                <div className="px-6 py-5 rounded-[24px] border border-[#0097a7]/20 bg-white shadow-sm hover:border-[#0097a7]/50 hover:shadow-md transition-all flex items-center gap-4 cursor-default group justify-start">
                  <Target className="w-6 h-6 text-[#0097a7] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#006064] tracking-[0.1em] uppercase mt-0.5">
                    Industrial Health
                  </span>
                </div>
                {/* Pill 4 */}
                <div className="px-6 py-5 rounded-[24px] border border-[#0097a7]/20 bg-white shadow-sm hover:border-[#0097a7]/50 hover:shadow-md transition-all flex items-center gap-4 cursor-default group justify-start">
                  <Target className="w-6 h-6 text-[#0097a7] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#006064] tracking-[0.1em] uppercase mt-0.5">
                    Early Diagnosis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-blue mb-6 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              Real experiences from people who've tried Novicule TA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Prathyusha Meesala",
                time: "2 months ago",
                content:
                  "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet. It's definitely a must-have for flu season! Super convenient, effective, and something I'll be keeping stocked from now on. Highly recommend it to anyone who wants quick and reliable relief!",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400",
              },
              {
                name: "Siddhartha Chandra",
                time: "a month ago",
                content:
                  "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace on Sunday, and I got my hands on Novicule-TA on Friday. On Friday I was down with a severe throat congestion and weakness and felt unsure about being able to run. All it took was 1 sachet on Friday night to restore my health and confidence. Not only did I run the race in prime conditions, but also honored the time commitment of completing in 70 mins. My utmost gratitude to the creators of Novicule-TA. I would highly recommend keeping a few packets handy in your medical box.",
                rating: 5,
                borderColor: "border-pink-200",
                accentColor: "text-pink-400",
              },
              {
                name: "Lasya N",
                time: "2 months ago",
                content:
                  "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time. What I loved most is how easy it is to use and how well it keeps symptoms under control. I've tried other remedies before, but Novicule TA truly delivers both fast relief and lasting benefits. Definitely keeping this on hand—highly recommend it!\"",
                rating: 5,
                borderColor: "border-blue-200",
                accentColor: "text-blue-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor,
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-slate-800">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Eakta Kandpal",
                time: "3 months ago",
                content:
                  "I had been having a cough for many days, and it would get worse at night as soon as I tried to sleep. I tried cough syrup, but it didn't have any effect. Then I started taking these sachets before bedtime. After taking 6 sachets, my cough completely disappeared. I am also highly allergic to cold weather and dust, which causes me to cough frequently. But after taking these sachets, I feel much better, and my nighttime cough completely stopped. I will definitely recommend this product. If you have a persistent cough problem, please try it.",
                rating: 5,
                borderColor: "border-orange-200",
                accentColor: "text-orange-400",
              },
              {
                name: "Tanushree Shrivastav",
                time: "2 months ago",
                content:
                  "I've struggled with recurring colds and coughs due to weather changes for years. However, I've always avoided antibiotics. Luckily, Tarun Adarsh introduced me to Novicule, and I saw instant results after trying it. For the past 6 months, I've stopped relying on medicines and instead opt for Novicule. Simply tearing open a sachet and consuming it helps me recover overnight – it's truly a remarkable solution!\"",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 3) * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor,
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-slate-800">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section
        id="blogs"
        className="py-32 px-4 md:px-8 bg-gradient-to-b from-[#e0f2fe]/40 to-slate-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/15 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-brand-teal font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                Our Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-blue leading-tight">
                Enhance Your <br />
                <span className="gradient-text">Knowledge</span>
              </h2>
              <p className="text-slate-500 mt-4 font-medium max-w-lg leading-relaxed">
                Scientific insights and updates from our research and
                development
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blogs"
                className="flex items-center gap-3 px-8 py-4 bg-white border border-brand-border rounded-full text-brand-blue font-bold shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all group"
              >
                Explore All Insights{" "}
                <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 flex flex-col"
              >
                <div className="p-3">
                  <Link to={`/blogs/${blog.id}`} className="block">
                    <div className="aspect-[1.6] overflow-hidden rounded-[20px] bg-slate-100 flex items-center justify-center">
                      {blog.image ? (
                        <motion.img
                          src={blog.image}
                          alt={blog.title}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full atrio-gradient opacity-10 flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-brand-blue opacity-40" />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-teal bg-brand-teal/5 px-2 py-0.5 rounded">
                      {blog.category}
                    </span>
                  </div>
                  <Link to={`/blogs/${blog.id}`} className="block group/title">
                    <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-brand-teal transition-colors mb-3 line-clamp-2 leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                    {blog.desc}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="mt-auto w-full py-4 bg-slate-50 rounded-2xl font-bold text-gray-800 text-sm flex items-center justify-center gap-2 group/btn hover:bg-brand-teal hover:text-white transition-all shadow-sm hover:shadow-brand-teal/10"
                  >
                    Read Insight{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto rounded-[64px] atrio-gradient p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-teal/40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-16 h-16 rounded-[24px] bg-white mb-8 flex items-center justify-center p-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-white/20 select-none"
            >
              <img
                src="https://lh3.googleusercontent.com/d/1wXu_Vb5F6ihb6wEcXWhDYkfNjz28mPDA"
                alt="AtrioCare Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-bold font-display mb-8 tracking-tighter leading-none">
              Catalyzing the <br /> Future of Health
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 font-medium">
              Join our network of innovators and bring world-class healthcare to
              every doorstep. Experience the Tech AtrioCare difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
              <button
                onClick={openPartnerModal}
                className="px-10 py-5 bg-white text-brand-teal font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer"
              >
                Partner with Us
              </button>
              <button
                onClick={openCaseStudyModal}
                className="px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full uppercase tracking-widest transition-all text-center cursor-pointer"
              >
                Request Case Studies
              </button>
            </div>
          </div>
        </div>

        <JoinUsModal
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
          title={modalConfig.title}
          description={modalConfig.description}
        />

        <NoviculeInfoModal
          isOpen={isNoviculeModalOpen}
          onClose={() => setIsNoviculeModalOpen(false)}
        />

        {/* Service Enquiry Modal */}
        <AnimatePresence>
          {isServiceModalOpen && (
            <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
                onClick={() => setIsServiceModalOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-[40px] shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative z-[101] flex flex-col"
              >
                {/* Accent line */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-brand-blue w-full" />

                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#006064] uppercase bg-cyan-50 border border-cyan-100 px-3.5 py-1 rounded-full">
                        Expert Solutions Consultation
                      </span>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight mt-3 uppercase leading-none">
                        Enquire About
                      </h3>
                      <p className="text-sm font-bold tracking-tight mt-1 text-teal-700">
                        {selectedService}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsServiceModalOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer transition-colors font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {!serviceEnquirySuccess ? (
                    <form
                      onSubmit={handleServiceSubmit}
                      className="space-y-4 pt-2"
                    >
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          value={serviceForm.name}
                          onChange={(e) =>
                            setServiceForm({
                              ...serviceForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your full name"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            value={serviceForm.phone}
                            onChange={(e) =>
                              setServiceForm({
                                ...serviceForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            value={serviceForm.email}
                            onChange={(e) =>
                              setServiceForm({
                                ...serviceForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="you@domain.com"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                          Message (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={serviceForm.message}
                          onChange={(e) =>
                            setServiceForm({
                              ...serviceForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Detailed requirements or symptoms..."
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-brand-blue text-white font-black text-xs uppercase tracking-widest transition-colors cursor-pointer mt-4"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 px-4 space-y-5"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                        <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                          Request Received Successfully!
                        </h4>
                        <p className="text-slate-500 font-semibold text-xs leading-relaxed max-w-sm mx-auto">
                          Thank you for connecting,{" "}
                          <span className="text-slate-800 font-bold">
                            {serviceForm.name}
                          </span>
                          . Our lead Atriocare medical advisor will reach out to
                          you within 2 hours.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                          Need Immediate Response?
                        </p>
                        <a
                          href={`https://wa.me/918451915951?text=Hello%20Tech%20Atriocare!%20My%20name%20is%20${encodeURIComponent(serviceForm.name)}.%20I%20just%20submitted%20a%20consultation%20request%20for%20the%20"${encodeURIComponent(selectedService)}"%20program.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-lg w-full"
                        >
                          <MessageSquare className="w-4 h-4 fill-white font-light" />{" "}
                          Jump to WhatsApp Chat
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <RecognitionsSection />
    </div>
  );
}
