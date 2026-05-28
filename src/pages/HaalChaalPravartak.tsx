import { motion, useScroll, useTransform } from "motion/react";
import {
  Wind,
  Mic,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowUpRight,
  ShieldAlert,
  BookOpen,
  Clock,
  Heart,
  MoveRight,
  Users,
  Stethoscope,
  QrCode,
  Zap,
  PlayCircle,
  Fingerprint,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { cn } from "../lib/utils";
import airwayObstructionImg from "../assets/images/airway_health_obstruction_1779969348663.png";

export default function HaalChaalPravartak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 50]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8FAFC] relative overflow-hidden font-sans"
    >
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-brand-teal/10 via-cyan-100/30 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-80"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -right-[10%] w-[80vw] h-[80vw] bg-gradient-to-tl from-brand-blue/10 via-indigo-100/30 to-transparent blur-[150px] rounded-full mix-blend-multiply opacity-70"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-48 pb-32 max-w-[1400px] mx-auto z-10 min-h-screen flex items-center">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full"
        >
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full mb-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </div>
                <span className="text-xs font-black tracking-[0.2em] uppercase bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                  World's First
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase font-display">
                Breathe
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                  Strong.
                </span>
                <br />
                <span className="relative">
                  Live{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500">
                    Strong.
                  </span>
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-brand-teal/20"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.20336 8.52048C33.4326 -1.25816 112.527 -2.48398 198.814 10.1585"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 tracking-tight max-w-2xl font-display">
                Introducing Haal-Chaal Pravartak — the Digital Gym for Heart &
                Lung Wellness.
              </p>

              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                Your airways are working every second of every day, yet most of
                us never think about them until something goes wrong. With just{" "}
                <strong className="text-brand-blue font-bold">
                  one hum and your smartphone
                </strong>
                , track your airway health in under a minute. No clinics, no
                equipment, no hassle.
              </p>

              <Link
                to="/checkup"
                className="inline-flex px-8 py-4 rounded-full bg-brand-teal text-white font-bold tracking-widest text-sm uppercase shadow-lg shadow-brand-teal/30 hover:bg-brand-blue transition-all gap-4 items-center group hover:-translate-y-1"
              >
                TRY THE WEB PLATFORM DEMO
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="bg-white/60 p-3 rounded-[3rem] backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative group bg-gradient-to-br from-slate-100 to-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-teal/5 z-0 transition-transform duration-1000" />
                  <Mic className="w-64 h-64 text-brand-teal opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000" />

                  <img
                    src="https://lh3.googleusercontent.com/d/17IBh0H4u4P38fqa1npFWxPyk6_4Ub6Fu"
                    alt="Haal-Chaal Pravartak"
                    className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                  />

                  {/* Floating Metric 1 */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-12 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-white/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200/50">
                      <Activity className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Airway Status
                      </p>
                      <p className="font-black text-slate-800 text-lg">
                        Optimal
                      </p>
                    </div>
                  </motion.div>

                  {/* Floating Metric 2 */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-12 -right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col gap-3 z-20 border border-white/50"
                  >
                    <div className="flex gap-1.5 items-end h-10 w-24">
                      {[30, 60, 40, 85, 55, 90, 70].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [`${h}%`, `${h * 0.4}%`, `${h}%`],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className="flex-1 bg-gradient-to-t from-brand-blue to-brand-teal rounded-sm"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Patency
                      </p>
                      <p className="font-black text-brand-blue text-xl">94</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: The Reality */}
      <section className="py-32 px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-900/5 whitespace-nowrap z-0 pointer-events-none uppercase tracking-tighter">
              Reality
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white/40 backdrop-blur-md border border-white p-2 rounded-full inline-flex mx-auto mb-8 shadow-sm"
            >
              <div className="bg-brand-teal/10 px-6 py-2 rounded-full text-brand-teal font-black text-xs uppercase tracking-widest">
                Air Quality & Health
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-display tracking-tight relative z-10 uppercase leading-[1.1]"
            >
              The Air Around You Is Affecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                You More Than You Think
              </span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed relative z-10">
              India is home to some of the most polluted air on the planet.
              Millions of people from urban professionals to children breathe
              air laced with particulate matter, dust, and pollutants every
              single day.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 mb-20 relative">
            {/* Background Blob for Bento */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white/40 blur-3xl rounded-full pointer-events-none z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-white/80 backdrop-blur-xl rounded-[48px] p-12 lg:p-16 border border-white shadow-2xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden relative group z-10 hover:bg-white transition-all duration-500"
            >
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-colors duration-1000 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto flex justify-between items-start">
                  <div>
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl mb-8 border border-slate-100">
                      <Wind className="w-8 h-8 text-brand-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">
                      Global Impact
                    </h3>
                    <p className="text-slate-500 font-medium text-lg max-w-sm">
                      Breathe air that exceeds WHO safety limits
                    </p>
                  </div>
                </div>
                <div className="mt-16">
                  <h2 className="text-6xl lg:text-8xl font-black text-slate-900 font-display tracking-tighter leading-none mb-4">
                    9<span className="text-brand-teal">/</span>10
                  </h2>
                  <p className="text-brand-teal font-black uppercase tracking-[0.2em] text-lg">
                    People Worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-gradient-to-br from-brand-blue to-slate-900 rounded-[48px] p-12 border border-brand-blue/50 shadow-2xl relative overflow-hidden group z-10"
            >
              <div className="absolute inset-0 noise-texture opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">
                    Indian Cities
                  </h3>
                  <p className="text-brand-teal-light/80 font-medium text-lg">
                    Of the world's most polluted cities are in India.
                  </p>
                </div>
                <h2 className="text-6xl lg:text-8xl font-black text-white font-display tracking-tighter mt-12 leading-none">
                  21
                  <span className="text-brand-teal-light/50 text-4xl">/30</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-white/80 backdrop-blur-xl rounded-[48px] p-12 border border-white shadow-xl flex flex-col justify-center gap-6 z-10 group hover:bg-white transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-teal/5 transition-colors">
                <span className="text-4xl font-black text-brand-teal font-display">
                  2nd
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-2xl leading-tight mb-2 font-display">
                  Leading risk factor globally
                </h4>
                <p className="text-slate-500 font-medium text-lg">
                  For non-communicable diseases.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 bg-white/80 backdrop-blur-xl rounded-[48px] p-12 border border-white shadow-xl flex flex-col md:flex-row items-center gap-10 justify-between relative overflow-hidden z-10 group hover:bg-white transition-all duration-500"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none group-hover:from-slate-100/50 transition-colors" />
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-slate-900 mb-4 font-display uppercase tracking-tight">
                  Most at Risk <br />& Unaware
                </h4>
                <p className="text-slate-600 font-medium text-lg">
                  Children, the elderly, and outdoor workers.
                </p>
              </div>
              <div className="flex -space-x-6 relative z-10">
                {[Users, Heart, Stethoscope].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                  >
                    <Icon className="w-8 h-8 text-brand-teal" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-50 to-orange-50 border border-white p-12 rounded-[48px] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-3xl rounded-full pointer-events-none" />
            <h4 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight font-display leading-[1.3] relative z-10">
              Pollution doesn't just affect your lungs on bad AQI days.
              <br className="hidden md:block" />
              <span className="text-rose-500">
                {" "}
                It silently narrows your airways
              </span>
              , day after day.
            </h4>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: UAO */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-brand-blue/20 to-transparent mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-1000" />
              <img
                src={airwayObstructionImg}
                alt="Airway Health"
                className="object-cover w-full h-full grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />

              {/* overlay frame */}
              <div className="absolute inset-0 border-[1px] border-white/30 rounded-[3rem] m-6 z-20 pointer-events-none mix-blend-overlay" />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 bottom-20 bg-white/80 backdrop-blur-2xl p-8 rounded-[32px] shadow-2xl border border-white/50 z-30 max-w-[300px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mb-6 shadow-inner border border-rose-200/50">
                <ShieldAlert className="w-8 h-8 text-rose-500" />
              </div>
              <p className="text-lg font-bold text-slate-800 leading-snug">
                Operates silently at the very entry point of your respiratory
                system.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
              <span className="text-brand-teal font-black uppercase tracking-widest text-xs">
                The Silent Threat
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter font-display uppercase leading-[1]">
              What Is Upper <br /> Airway Obstruction?
            </h2>
            <p className="text-slate-600 text-2xl font-medium leading-relaxed mb-12">
              Upper Airway Obstruction (UAO) refers to the narrowing or blockage
              of the passages through which we breathe — the nose, throat, and
              upper trachea.
            </p>

            <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-10 lg:p-12 border border-white shadow-xl shadow-slate-200/40 mb-10">
              <h4 className="font-black text-slate-900 mb-8 font-display text-2xl uppercase tracking-tight">
                Causes & Aggravators
              </h4>
              <ul className="space-y-6">
                {[
                  "Chronic exposure to polluted or dusty air",
                  "Allergies and inflammatory responses",
                  "Occupational hazards (construction, manufacturing)",
                  "Lifestyle factors and posture",
                  "Ageing and natural tissue changes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-5 text-slate-700 font-bold text-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 border border-brand-teal/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 lg:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h4 className="font-black text-brand-teal-light mb-6 font-display uppercase tracking-tight text-3xl relative z-10 flex items-center gap-4">
                <ShieldAlert className="w-8 h-8" />
                Why it matters
              </h4>
              <p className="text-slate-300 font-medium text-xl leading-relaxed relative z-10">
                Left untracked, narrowed airways reduce oxygen efficiency,
                strain your heart, disrupt sleep, and reduce stamina.
                <span className="text-white font-black block mt-6 text-2xl border-l-4 border-brand-teal pl-6">
                  The problem isn't just that people have UAO. It's that most
                  don't know they do.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Ancient Wisdom */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10" />

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-24 relative z-20 text-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md">
                <BookOpen className="w-10 h-10 text-brand-teal" />
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 font-display tracking-tighter text-white uppercase leading-[0.9]">
                Our Ancestors{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light block mt-4 drop-shadow-[0_0_30px_rgba(0,151,167,0.5)]">
                  Knew.
                </span>
              </h2>
              <div className="h-1.5 w-32 bg-brand-teal mb-10 rounded-full shadow-[0_0_20px_rgba(0,151,167,0.8)]" />
              <p className="text-4xl text-white font-black leading-tight mb-8 font-display uppercase tracking-tight">
                Science Now Confirms It.
              </p>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl text-center">
                Thousands of years ago, Indian yogic tradition developed
                Bhramari Pranayama, the "bee breath" — a humming breathing
                exercise known to calm the mind, open airways, and strengthen
                the respiratory system.
              </p>
              <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl max-w-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-white font-medium text-xl leading-relaxed relative z-10 text-left">
                  <strong className="text-brand-teal-light">
                    Modern science now validates what ancient practitioners knew
                    intuitively:
                  </strong>{" "}
                  the resonant frequency of a hum carries measurable information
                  about the state of your airways.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Technology */}
      <section className="py-32 px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tighter leading-none">
              The Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                Behind the Hum
              </span>
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-teal/10 rounded-full mb-8 border border-brand-teal/20">
              <p className="text-xl text-brand-teal font-black uppercase tracking-widest text-sm">
                Digital Signal Processing meets Respiratory Medicine
              </p>
            </div>
            <p className="text-slate-600 text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              When you hum, your vocal cords, nasal passages, and upper airway
              work together to produce a unique acoustic signal. Our proprietary
              DSP engine decodes what your airways are telling us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl rounded-[48px] p-12 lg:p-16 border border-white shadow-2xl flex flex-col items-start relative overflow-hidden group hover:bg-white transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-[28px] flex items-center justify-center mb-10 shadow-sm relative z-10">
                <Activity className="w-10 h-10 text-brand-teal" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 font-display uppercase tracking-tight relative z-10">
                Airway Patency Score
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed mb-12 font-medium relative z-10 max-w-lg">
                Airway patency refers to how open and unobstructed your airway
                is. Our algorithm generates a patency score by analysing the
                harmonic content and resonance characteristics of your humming
                signal.
              </p>

              <div className="bg-slate-50/80 p-8 rounded-[32px] border border-slate-100 w-full relative z-10 mt-auto">
                <h4 className="font-black text-slate-900 mb-6 uppercase tracking-[0.2em] text-sm">
                  Status Categories
                </h4>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-lg">
                        Optimal
                      </span>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-lg">
                        Less Optimal
                      </span>
                    </div>
                    <Activity className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-lg">
                        Least Optimal
                      </span>
                    </div>
                    <ShieldAlert className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 font-bold mt-8 text-center w-full relative z-10 uppercase tracking-widest">
                Wellness assessment tool only. Not a diagnostic device.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 rounded-[48px] p-12 lg:p-16 border border-slate-800 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-white/5 rounded-[28px] flex items-center justify-center mb-10 border border-white/10 backdrop-blur-md">
                  <Cpu className="w-10 h-10 text-brand-teal-light" />
                </div>
                <h3 className="text-4xl font-black text-white mb-12 font-display uppercase tracking-tight">
                  What the Report <br />
                  Tells You
                </h3>

                <ul className="space-y-4 mb-auto">
                  {[
                    {
                      title: "Airway Patency Score",
                      desc: "Colour-coded instant visual feedback",
                    },
                    {
                      title: "Narrowing Likelihood",
                      desc: "Probability of airway obstruction",
                    },
                    {
                      title: "Airway Stability",
                      desc: "Day-wise and audio-wise analysis",
                    },
                    {
                      title: "Engagement Trends",
                      desc: "Track improvements over time",
                    },
                    {
                      title: "AI-Generated Summary",
                      desc: "Plain-language insights, no medical jargon",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-5 p-6 bg-white/5 rounded-[24px] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-7 h-7 text-brand-teal-light shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-xl leading-tight mb-2">
                          {item.title}
                        </p>
                        <p className="text-slate-400 font-medium text-base">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How it works */}
      <section className="py-40 px-6 md:px-12 lg:px-24 mb-16 relative z-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-28">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-100 rounded-full mb-8 border border-slate-200">
              <Zap className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-800">
                Under 1 Minute
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tighter leading-none">
              Your Phone Is Now <br />
              <span className="text-brand-blue">Your Digital Gym</span>
            </h2>
            <p className="text-3xl text-slate-600 font-medium max-w-3xl mx-auto">
              An instant airway check, powered purely by your voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                step: "01",
                title: "Open Platform",
                desc: "Scan the WhatsApp QR Code or open the web platform directly",
                icon: QrCode,
              },
              {
                step: "02",
                title: "Position Mic",
                desc: "Orient your smartphone mic towards your mouth",
                icon: Mic,
              },
              {
                step: "03",
                title: "Hum for 7s",
                desc: "Hum for 7 seconds, inspired by the Bhramari breathing technique",
                icon: Clock,
              },
              {
                step: "04",
                title: "Get Score",
                desc: "Check your visualiser, submit and get your airway score instantly",
                icon: Activity,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-slate-50/50 p-10 pt-16 rounded-[40px] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 z-10"
              >
                <div className="text-8xl font-black text-slate-900/[0.03] absolute -top-12 -left-8 font-display select-none transition-transform duration-700 group-hover:scale-105 group-hover:text-slate-900/[0.05] pointer-events-none leading-none z-0">
                  {item.step}
                </div>
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-lg shadow-slate-200/50 mb-10 relative z-10 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-brand-teal" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 relative z-10 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium text-lg relative z-10 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Choose your mode */}
      <section className="bg-slate-950 py-40 px-6 md:px-12 lg:px-24 mb-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-24 font-display uppercase tracking-tighter leading-none">
            Choose Your Mode
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 mb-24 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-14 rounded-[48px] hover:bg-white/10 transition-colors shadow-2xl"
            >
              <div className="w-20 h-20 bg-brand-teal rounded-[28px] flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(0,151,167,0.4)]">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight font-display">
                WhatsApp Mode
              </h3>
              <p className="text-slate-300 leading-relaxed font-medium text-xl">
                Weekly trend assessment. Track how your airway health evolves
                over days and weeks, delivered directly in WhatsApp, no app
                download needed.
              </p>
              
              <div className="mt-10">
                 <img
                    src="https://lh3.googleusercontent.com/d/1M0G1SnJVpNqYmLDk1kC471dX4lrclFs3"
                    alt="WhatsApp Info Detail"
                    className="max-w-[280px] w-full rounded-2xl shadow-xl border border-white/10 object-contain hover:scale-105 transition-transform duration-500"
                  />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-14 rounded-[48px] shadow-[0_0_50px_rgba(255,255,255,0.05)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-[28px] flex items-center justify-center mb-10 shadow-xl">
                  <PlayCircle className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight font-display">
                  Web Platform Mode
                </h3>
                <p className="text-white/90 leading-relaxed font-medium text-xl mb-10">
                  Instant score. Open the platform, hum, and get your result in
                  real time. Ideal for first-time users and quick check-ins.
                </p>
                <Link
                  to="/checkup"
                  className="inline-flex px-8 py-4 rounded-xl bg-white text-brand-blue font-black tracking-widest text-sm uppercase hover:bg-brand-teal hover:text-white transition-all shadow-lg gap-3 items-center group hover:-translate-y-1"
                >
                  Try the Web Platform
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Who is this for */}
      <section className="py-20 px-6 md:px-12 lg:px-24 mb-32 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-display uppercase tracking-tighter leading-none">
            Built for Every <br />
            <span className="text-brand-teal">Breathing Person</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Urban Professionals",
              desc: "Battling daily pollution and stress",
              icon: Users,
            },
            {
              title: "Industrial & Field Workers",
              desc: "Exposed to dust, fumes, and particulates",
              icon: ShieldCheck,
            },
            {
              title: "Senior Citizens",
              desc: "Monitoring age-related airway changes",
              icon: Heart,
            },
            {
              title: "Children & Parents",
              desc: "Early detection for the next generation",
              icon: Fingerprint,
            },
            {
              title: "Healthcare Professionals",
              desc: "A complementary wellness screening tool",
              icon: Stethoscope,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "bg-white/60 backdrop-blur-md p-10 rounded-[48px] border border-white shadow-lg flex flex-col items-start gap-8 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden",
                idx === 4 ? "md:col-span-2 lg:col-span-1" : "",
              )}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-2xl rounded-full group-hover:bg-brand-teal/10 transition-colors duration-500 pointer-events-none" />
              <div className="w-20 h-20 bg-slate-50 flex items-center justify-center rounded-[24px] shrink-0 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
                <item.icon className="w-10 h-10 text-brand-teal" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 mb-3 font-display uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 9: Footer CTA */}
      <section className="text-center px-6 md:px-12 py-40 max-w-[1200px] mx-auto mb-20 bg-gradient-to-b from-brand-teal/5 to-transparent rounded-[80px] border border-brand-teal/10 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-50" />

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 font-display uppercase tracking-tighter leading-[0.9]">
          Start Your Airway <br />
          Journey Today
        </h2>
        <p className="text-2xl md:text-3xl text-slate-600 mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
          No equipment. No clinic visit. Just your voice, your phone, and 7
          seconds.
        </p>

        <Link
          to="/checkup"
          className="inline-flex px-14 py-7 rounded-[2rem] bg-brand-blue text-white font-black tracking-[0.2em] text-sm uppercase hover:bg-brand-teal transition-all shadow-[0_20px_50px_-15px_rgba(0,151,167,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(0,151,167,0.8)] mb-20 gap-5 items-center group hover:-translate-y-2"
        >
          Try Haal-Chaal Pravartak
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <div className="text-slate-400 font-medium space-y-6 pt-16 border-t border-brand-teal/10 w-full max-w-xl mx-auto">
          <p className="text-brand-teal uppercase tracking-[0.3em] font-black text-sm">
            Breathe Strong. Live Strong.
          </p>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
            By Tech AtrioCare Private Limited: An Atrium for Innovation
          </p>
        </div>
      </section>
    </div>
  );
}
