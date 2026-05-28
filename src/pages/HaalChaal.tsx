import { motion, AnimatePresence } from 'motion/react';
import { Wind, Trophy, Timer, Mic, CheckCircle2, QrCode, ArrowRight, ShieldCheck, Activity, Cpu, ArrowUpRight, X, Mail, User, Phone, Check, TrendingUp, Target, Microscope, BookOpen, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export default function HaalChaal() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for registration action from URL
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('action') === 'register') {
      setIsTermsOpen(true);
    }
  }, [location]);

  useEffect(() => {
    // Better countdown timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14); // 14 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsTermsOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-50/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 -z-10" />

        <div className="flex flex-col lg:flex-row items-start gap-12 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-8 py-3 bg-white border border-blue-100 rounded-full shadow-sm">
                <h1 className="text-2xl md:text-3xl font-black text-[#2563EB] tracking-tighter">
                  Haal-Chaal Pravartak 1.0
                </h1>
              </div>
              
              <div className="ml-2">
                <span className="inline-block px-4 py-1 bg-blue-50 text-[#2563EB] text-[10px] font-black rounded-full border border-blue-100 uppercase tracking-widest">
                  Premier Immunity Challenge: The Breathwork Revolution
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-7xl md:text-9xl font-black text-slate-800 leading-[0.85] tracking-tighter uppercase font-display">
                Optimize <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097A7] to-[#3B82F6]">
                  Breath.
                </span> <br />
                Fortify <br />
                <span className="text-brand-blue">Immunity.</span> <br />
                Win Big
              </h2>
            </div>

            <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-xl">
              Revolutionary acoustic screening: track your respiratory health with just 7 seconds of humming. Join our premier immunity challenge and claim your rewards.
              <br /><span className="text-[#0097A7] font-black mt-6 inline-block px-8 py-3 bg-teal-50 border border-teal-100 rounded-2xl uppercase tracking-widest text-sm shadow-sm">Participation fees is INR 500/-</span>
            </p>

            <div className="bg-white border border-slate-100 rounded-[48px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] space-y-6 max-w-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 blur-2xl rounded-full" />
                <div className="space-y-1 text-center">
                  <h4 className="font-bold text-slate-700 text-sm">Online Registration Window Closes In</h4>
                  <p className="text-[#0097A7] text-xs font-black uppercase tracking-widest mt-2">Participation fees is INR 500/-</p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((unit) => (
                    <div key={unit.label} className="text-center space-y-2">
                      <div className="bg-gradient-to-b from-[#0097A7] to-[#3B82F6] text-white py-4 rounded-xl font-black text-2xl shadow-lg font-display">
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 capitalize tracking-wide">{unit.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 pt-2">
                  <button 
                    onClick={() => setIsTermsOpen(true)}
                    className="group w-full py-5 bg-[#0097A7] text-white rounded-2xl font-black text-lg shadow-xl shadow-[#0097A7]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-1 leading-tight"
                  >
                    <span>Register for Challenge</span>
                    <span className="text-[10px] opacity-80 font-medium tracking-tight">Click here to agree to terms & participate</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 font-bold leading-relaxed px-4 cursor-pointer hover:text-brand-teal transition-colors" onClick={() => setIsTermsOpen(true)}>
                    Click here to agree to our terms and conditions and participate in the challenge
                  </p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="bg-white p-3 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100">
               <div className="rounded-[32px] overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/d/13TEduYr7AtBxsvJPP6TNedvtiv0cAxqe" 
                    alt="Haal-Chaal Pravartak Challenge"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
            
            {/* Poster Info Simulation Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-3xl shadow-xl space-y-1 transform rotate-3">
               <p className="text-xs font-black uppercase tracking-widest opacity-80">Powered By</p>
               <p className="font-black text-lg">Tech AtrioCare</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Winners & Feedback Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full font-bold text-xs border border-blue-100 uppercase tracking-widest">
              Smarter Breathing Challenge
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#0097A7] uppercase tracking-tighter">
              Challenge Winners
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Celebrating the participants who demonstrated exceptional consistency and improvement during the Haal-Chaal Pravartak Challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
            {[
              { 
                name: "Ms. Abbha", 
                title: "Level 2 Winner", 
                prize: "₹1500", 
                color: "blue",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
                badge: "🥈",
                desc: "Demonstrated remarkable consistency and significant improvement in respiratory metrics."
              },
              { 
                name: "Mrs. Parinita Sinha", 
                title: "Level 4 Winner", 
                prize: "₹500", 
                color: "teal",
                avatar: "https://lh3.googleusercontent.com/d/14ztaodQTfxZkyF_hKLr9YK-daeeuG0HH",
                badge: "🏆",
                desc: "Achieved the highest overall score through perfect adherence and exceptional airway patency improvement."
              }
            ].map((winner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[64px] border border-slate-100 shadow-xl relative group text-center space-y-8 flex flex-col"
              >
                <div className="w-44 h-44 mx-auto rounded-full border-[12px] border-slate-50 p-1 relative shadow-2xl bg-white group-hover:border-blue-100 transition-colors">
                   <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-xl flex items-center justify-center text-3xl z-10 border-4 border-white">
                     {winner.badge}
                   </div>
                  <div className={cn(
                    "w-full h-full rounded-full overflow-hidden flex items-center justify-center text-5xl font-black text-white",
                    winner.color === 'blue' ? "bg-blue-600" : "bg-brand-teal"
                  )}>
                    <img src={winner.avatar} alt={winner.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className={cn(
                    "absolute -bottom-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white",
                    winner.color === 'blue' ? "bg-blue-600" : "bg-brand-teal"
                  )}>
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow">
                   <h3 className="text-4xl font-black text-slate-800 tracking-tighter font-display uppercase">{winner.name}</h3>
                   <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full border border-blue-100 uppercase tracking-[0.3em] leading-none">
                     {winner.title}
                   </div>
                   <p className="text-slate-500 text-lg font-medium leading-relaxed italic pt-6 px-4">"{winner.desc}"</p>
                </div>

                <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-100 mt-auto">
                   <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 leading-none">Challenge Reward</p>
                   <div className={cn("text-5xl font-black font-display tracking-tight", winner.color === 'blue' ? "text-blue-600" : "text-brand-teal")}>
                    {winner.prize}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#001D21] p-10 md:p-16 rounded-[64px] text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 blur-[80px] rounded-full" />
              
              <div className="relative z-10 flex-1 space-y-10">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Participant Feedback</span>
                </div>
                
                <div className="space-y-8">
                  <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight italic text-white/95 font-display">
                    "हाल-चाल प्रवर्तक एक पारदर्शी, तथ्यपूर्ण और तकनीकियुक्त परियोजना है, जिससे मुझे स्पष्ट स्वास्थ्य लाभ मिला। <br />
                    मेरी शुभकामना है कि यह आम जनों के लिये भी लाभदायक सिद्ध हो।"
                  </p>
                  <p className="text-brand-teal font-black text-sm uppercase tracking-[0.3em]">— MRS. PARINITA SINHA 🙏</p>
                </div>
                
                <div className="flex items-center gap-6 p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors w-fit">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2 shadow-inner overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/d/14ztaodQTfxZkyF_hKLr9YK-daeeuG0HH" referrerPolicy="no-referrer" alt="Mrs. Parinita Sinha" className="w-full h-full object-cover" />
                   </div>
                   <div className="space-y-1">
                     <h4 className="font-black text-xl text-white tracking-tight uppercase font-display">Mrs. Parinita Sinha</h4>
                     <p className="text-brand-teal text-[10px] font-black uppercase tracking-[0.4em] leading-none">Level 4 Winner & Poet</p>
                   </div>
                </div>
              </div>

              <div className="relative z-10 w-full lg:w-[400px] aspect-[9/16] rounded-[48px] overflow-hidden bg-slate-900 border-8 border-white/5 shadow-2xl group/video">
                 <iframe 
                    className="w-full h-full object-cover"
                    src="https://drive.google.com/file/d/1Z9UZQhUhqkYGfMONidA1uIyibhUaA7J6/preview" 
                    title="Mrs. Parinita Sinha Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                 >
                 </iframe>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover/video:opacity-0 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { label: "Humming voice-notes analysed", value: "~4000", icon: <Mic className="w-6 h-6" /> },
                { label: "Haal-Chaal Pravartak reports generated so far", value: "410", icon: <Activity className="w-6 h-6" /> },
                { label: "Pilot cohorts validation so far", value: "8", icon: <CheckCircle2 className="w-6 h-6" /> },
                { label: "Average duration of user retention", value: "~1 month", icon: <Timer className="w-6 h-6" /> },
                { label: "Patient cases during pilot studies in which our tech outperformed PFT results", value: "~19%", icon: <TrendingUp className="w-6 h-6" /> },
                { label: "Mean accuracy in Heart Rate estimation validated with pulse oximeter", value: "89.33%", icon: <ShieldCheck className="w-6 h-6" /> }
              ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-slate-800 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-600 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative flex flex-col md:flex-row items-center gap-12">
               <div className="text-7xl font-black text-brand-teal/20 pointer-events-none absolute left-0 top-0 leading-none">94.83%</div>
               <div className="relative z-10 w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center shrink-0">
                  <Activity className="w-10 h-10 text-brand-teal" />
               </div>
               <div className="relative z-10 space-y-4 text-center md:text-left">
                  <p className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                    94.83% of Accuracy in Heart Rate estimation through our technology when demonstrated before experts/mentor in IIT Delhi
                  </p>
                  <p className="text-white/60 font-medium">Validated technology using advanced signal processing at <span className="text-brand-teal font-bold">FITT, IIT Delhi</span>.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter leading-[0.95] uppercase">
              From unseen risks to clear insights — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">redefine your heart and lung wellness</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Experience scientifically-backed benefits through a structured breathing challenge and proprietary immune system optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Airway Health",
                desc: "Monitor the changes in your airway health, improvise it with detailed insights and potentially benefitting individuals with respiratory conditions.",
                icon: <Wind className="w-10 h-10" />,
                emoji: "🫁",
                color: "teal"
              },
              {
                title: "Optimized Immunity",
                desc: "Optimize your immune system with proprietary immune system optimization kit that utilizes Nitric Oxide level augmentation technology.",
                icon: <ShieldCheck className="w-10 h-10" />,
                emoji: "🛡️",
                color: "blue"
              },
              {
                title: "Stress and Anxiety Reduction",
                desc: "Studies have shown that humming can decrease cortisol levels, heart rate, and blood pressure, indicating relaxation and reduced stress.",
                icon: <Activity className="w-10 h-10" />,
                emoji: "🧘‍♀️",
                color: "indigo"
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-12 rounded-[56px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 space-y-8 relative overflow-hidden"
              >
                <div className="absolute top-6 right-8 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                   {benefit.emoji}
                </div>
                <div className={cn(
                  "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                  benefit.color === 'teal' ? "bg-teal-100 text-teal-600" : 
                  benefit.color === 'blue' ? "bg-blue-100 text-blue-600" : 
                  "bg-indigo-100 text-indigo-600"
                )}>
                  {benefit.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-brand-teal transition-colors leading-tight font-display uppercase">{benefit.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Steps Section (The 7-Day Protocol) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-block px-6 py-2 bg-[#0097A7]/10 text-[#0097A7] text-[10px] font-black rounded-full border border-[#0097A7]/20 uppercase tracking-[0.3em] shadow-sm"
            >
              The 7-Day Journey 📋
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-800 tracking-tighter leading-tight uppercase font-display">
              Simple steps to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097A7] to-[#3B82F6]">lasting health transformation</span>
            </h2>
          </div>

          {/* Simple Steps Tutorial Video */}
          <motion.div 
            id="tutorial-video"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-32 -mt-8"
          >
            <div className="relative rounded-[64px] overflow-hidden aspect-video border-[12px] border-slate-50 shadow-2xl bg-black group ring-1 ring-slate-100">
               <iframe 
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1voO2RQTl3ATIN5BzgUES2OUB-rE3cab3/preview" 
                  title="Simple Steps Tutorial"
                  frameBorder="0"
                  allowFullScreen
               ></iframe>
            </div>
            <p className="text-center mt-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
               Watch the tutorial to understand the 7-day journey
            </p>
          </motion.div>

          <div className="flex flex-col relative w-full pt-10">
            {/* The vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#00D4E5]/40" />
            
            {[
              {
                step: "01",
                title: "Enroll into the challenge",
                image: "https://lh3.googleusercontent.com/d/1hVJRrEOy6oc1AN4aZEbONAs3QPyjznXi"
              },
              {
                step: "02",
                title: "Fill out the registration form",
                image: "https://lh3.googleusercontent.com/d/1esaxiDLzLkvWAYkcYdvdCYySrUjpJtye"
              },
              {
                step: "03",
                title: "Upload the participation fee screenshot",
                image: "https://lh3.googleusercontent.com/d/1De4qA1IvKTP7g-VA-nlN70alMjQg6MoX"
              },
              {
                step: "04",
                title: "Scan the WhatsApp QR code",
                image: "https://lh3.googleusercontent.com/d/1M0G1SnJVpNqYmLDk1kC471dX4lrclFs3"
              },
              {
                step: "05",
                title: "Send a 'Hi' and 'okay' and then start submitting your 7-second humming voice notes for a week during the Challenge",
                image: "https://c8.alamy.com/comp/2GKT0EE/hand-of-woman-holding-smartphones-with-whatsapp-chat-screen-double-check-concept-vector-illustration-flat-colors-2GKT0EE.jpg"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col md:flex-row min-h-[300px] w-full"
              >
                {/* Left Side: Step Text */}
                <div className="w-full md:w-1/2 md:pr-20 py-12 md:py-20 flex flex-col justify-center">
                  <div className="bg-[#E5F9FC] text-[#0B5CBA] font-bold text-sm px-5 py-2 rounded-full w-fit mb-6">
                    Step {item.step}
                  </div>
                  <h3 className="text-3xl md:text-[36px] font-bold text-black leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 md:pl-20 py-8 md:py-20 flex flex-col justify-center border-t border-cyan-100 md:border-t-0">
                  <div className="w-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[20px] overflow-hidden border border-slate-100">
                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Participant & Tutorial */}
      <section className="py-24 md:py-48 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Wind className="absolute top-0 left-0 w-[500px] h-[500px] text-white rotate-12" />
          <Activity className="absolute bottom-0 right-0 w-[500px] h-[500px] text-white -rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none font-display">
              A video tutorial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#3B82F6]">to know better!</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium italic">"Real experiences from our participants"</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Mrs. Parinita Sinha Info & Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full font-black text-[10px] uppercase tracking-widest">
                  Participant Voice ⭐
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-brand-teal/20 shrink-0 shadow-2xl bg-slate-800 relative group">
                      <div className="absolute inset-0 border-4 border-brand-teal rounded-full z-10" />
                      <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full z-20 border-2 border-white flex items-center justify-center text-xl shadow-lg ring-2 ring-brand-teal animate-pulse">
                         🏆
                      </div>
                      <img 
                        src="https://lh3.googleusercontent.com/d/14ztaodQTfxZkyF_hKLr9YK-daeeuG0HH" 
                        alt="Mrs. Parinita Sinha" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                   <div className="space-y-2">

                     <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-display leading-[0.9]">
                       Mrs. Parinita <br />
                       <span className="text-brand-teal">Sinha</span>
                     </h3>
                     <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Level 4 Top Participant</p>
                   </div>
                </div>
                <p className="text-slate-300 text-2xl font-medium leading-relaxed italic max-w-xl">
                  "I experienced clear health benefits. Haal-Chaal is a transparent, fact-based project that bridges technology and wellness seamlessly."
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                 <div className="px-10 py-8 rounded-[40px] bg-white/5 border border-white/10 text-center flex-1 min-w-[200px] group hover:bg-brand-teal/10 hover:border-brand-teal/30 transition-all">
                    <div className="text-brand-teal font-black text-3xl font-display">L4 Reward</div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2 group-hover:text-brand-teal/60 transition-colors">Milestone Achieved</p>
                 </div>
                 <div className="px-10 py-8 rounded-[40px] bg-white/5 border border-white/10 text-center flex-1 min-w-[200px] group hover:bg-blue-600/10 hover:border-blue-600/30 transition-all">
                    <div className="text-white font-black text-3xl font-display uppercase tracking-tighter">Level 4</div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2 group-hover:text-blue-400/60 transition-colors">Overall Rank</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
                <div className="flex flex-col items-center gap-4 text-center">
                   <p className="text-brand-teal font-black text-xs uppercase tracking-[0.4em]">Featured Testimonial & Tutorial</p>
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[48px] w-full flex items-center justify-between">
                      <div className="text-left space-y-1">
                        <h4 className="text-white font-black uppercase tracking-tight">Challenge Tutorial</h4>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Detailed Walkthrough Guide</p>
                      </div>
                      <button 
                        onClick={() => {
                          const el = document.getElementById('tutorial-video');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                            el.classList.add('ring-[20px]', 'ring-brand-teal/20');
                            setTimeout(() => el.classList.remove('ring-[20px]', 'ring-brand-teal/20'), 2000);
                          }
                          window.open('https://drive.google.com/file/d/1voO2RQTl3ATIN5BzgUES2OUB-rE3cab3/view', '_blank');
                        }}
                        className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-xl shadow-brand-teal/20"
                      >
                         <ArrowUpRight className="w-8 h-8" />
                      </button>
                   </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium italic">Essential information about the Haal-Chaal Protocol.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                q: "What is Haal-Chaal Pravartak 1.0?",
                a: "It is India's First Immunity Challenge for Smarter Breathing, using research-backed voice signal processing technology."
              },
              {
                q: "Who can participate?",
                a: "The challenge is open to individuals residing in India who are 18 years or older."
              },
              {
                q: "How to register?",
                a: "Simple: Fill the form, pay the INR 500 participation fee, and connect with us on WhatsApp."
              },
              {
                q: "When does my Challenge start?",
                a: "Immediately after successful registration and WhatsApp confirmation."
              },
              {
                q: "What do I need to do each day?",
                a: "Submit 3 short voice notes (7s each) and stay connected with the community hub."
              },
              {
                q: "Where should I send my daily status video?",
                a: "Via the designated WhatsApp community hub as per the daily prompts."
              },
              {
                q: "How are winners selected?",
                a: "Based on adherence to the protocol and scientifically validated lung health improvement metrics."
              },
              {
                q: "What prizes can I win?",
                a: "Up to ₹50,000 for top rankers across different levels."
              },
              {
                q: "Are there referral rewards?",
                a: "Yes, contact support for details on our ambassador program."
              },
              {
                q: "Are prizes taxable?",
                a: "Yes, prizes exceeding ₹10,000 are subject to TDS as per Indian Income Tax laws."
              },
              {
                q: "What happens if I miss a submission?",
                a: "Missing a submission reduces your score but doesn't instantly disqualify you. 100% adherence is recommended."
              },
              {
                q: "Can I be disqualified?",
                a: "Yes, for submitting fake data, fraudulent screenshots, or abusive behavior."
              },
              {
                q: "Will my data be used publicly?",
                a: "Only with your consent for marketing and research purposes, as outlined in the T&C."
              },
              {
                q: "How is my data handled?",
                a: "Handled securely and used for AI research and wellness profiling under strict privacy protocols."
              },
              {
                q: "Is this a medical program?",
                a: "No, it's a wellness/immunity tracking challenge. Not a substitute for clinical medical advice."
              },
              {
                q: "Will the Challenge guarantee improvements?",
                a: "While science supports humming, individual results vary. It is not a guaranteed medical cure."
              },
              {
                q: "Who can I contact for support?",
                a: "Support is available via WhatsApp and email at contact@techatriocare.com."
              },
              {
                q: "Can these Terms change?",
                a: "Yes, they may be updated to reflect protocol improvements or regulatory changes."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-black text-slate-800 uppercase mb-4 leading-tight">{faq.q}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-[#001D21] rounded-[64px] p-12 md:p-32 text-white relative overflow-hidden text-center space-y-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 text-brand-teal rounded-full font-black text-[10px] border border-white/10 tracking-[0.3em] uppercase">
                🚀 Start Your Transformation
              </div>
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.82] uppercase font-display">
                Your health <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#48DBFB]">has a story</span>
              </h2>
              <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto italic">
                "Uncover the secrets of your heart and lungs in just 7 days."
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="px-16 py-8 bg-white text-[#001D21] rounded-[40px] font-black text-2xl shadow-2xl hover:scale-105 transition-all w-full md:w-auto"
                >
                  Register Now
                </button>
              </div>
              <p className="text-sm text-white/60 font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-brand-teal transition-colors text-center max-w-lg" onClick={() => setIsTermsOpen(true)}>
                Click here to agree to our terms and conditions and participate in the challenge
              </p>
              <p className="text-3xl font-black text-brand-teal font-display tracking-widest uppercase">Participation Fees is INR 500/-</p>
            </div>
          </div>
        </div>
      </section>


      {/* Symptoms & High Risk Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-tight uppercase">
                  Are you at risk from <br />
                  <span className="text-[#0097A7]">hidden respiratory issues?</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Identify signals early. Our technology is specially designed for those who need it the most.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Chronic Smokers", desc: "Monitor lung function impact and airway health changes regularly." },
                  { title: "Polluted Cities", desc: "For residents in AQI extremes who face daily environmental stress." },
                  { title: "Post-Viral Recovery", desc: "Track respiratory biomarkers during recovery from viral infections." },
                  { title: "Pre-existing Issues", desc: "Designed for individuals with known cardiovascular or pulmonary conditions." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2 hover:border-[#0097A7]/30 transition-colors"
                  >
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-[#001D21] p-12 rounded-[56px] text-white space-y-8 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D2D3]/10 blur-3xl rounded-full" />
                 <h3 className="text-2xl font-bold italic">Common Symptoms to Watch:</h3>
                 <ul className="space-y-4">
                   {[
                     "Persistent short-term breathlessness",
                     "Frequent wheezing or chest tightness",
                     "Chronic or recurring dry cough",
                     "Sudden fatigue during physical activity",
                     "Anxiety related to breathing patterns"
                   ].map((symptom, i) => (
                     <li key={i} className="flex items-center gap-4 group">
                       <div className="w-6 h-6 rounded-full bg-[#00D2D3]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00D2D3]/40 transition-colors">
                         <div className="w-2 h-2 rounded-full bg-[#00D2D3]" />
                       </div>
                       <span className="text-white/80 font-medium group-hover:text-white transition-colors">{symptom}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="pt-6 border-t border-white/10">
                   <p className="text-xs text-white/40 leading-relaxed font-medium">
                     *These metrics are for wellness screening and immunity tracking. Always consult a medical professional for clinical diagnosis.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal Removed - Using Terms Modal Logic */}
      
      {/* Terms Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed inset-0 bg-white flex flex-col overflow-hidden z-[210]"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 md:px-12 flex items-center justify-between border-b border-slate-100 bg-white shrink-0">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                      Terms & Conditions
                    </h3>
                    <p className="text-[10px] font-black text-brand-teal uppercase tracking-widest mt-1">Official Participation Protocol</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsTermsOpen(false)}
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-sm group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
              
              {/* Legal Text Content Area */}
              <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12 space-y-16 text-slate-700">
                <div className="max-w-4xl mx-auto space-y-20">
                  {/* Summary & Introduction */}
                  <div className="space-y-8 text-center pb-12 border-b border-slate-50">
                    <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                      Participation fees is INR 500/-
                    </div>
                    <h4 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[0.9]">
                      India's First <br />
                      <span className="text-brand-teal">Immunity Challenge</span>
                    </h4>
                    <p className="text-xl font-medium leading-relaxed italic text-slate-500">
                      "By participating in this Challenge, you agree to be bound by the following Terms and Conditions."
                    </p>
                  </div>

                  <div className="space-y-20 text-lg leading-relaxed">
                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">01</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">1. Acceptance of Terms</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <p>1.1. Your registration for and participation in the Challenge signifies your unconditional acceptance of these Terms and Conditions, as they may be amended from time to time by Tech Atriocare Pvt. Ltd. ("the Company").</p>
                        <p>1.2. The Company reserves the right to modify or update these Terms and Conditions at any time without prior notice. Continued participation after any such changes shall constitute your consent to such changes.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">02</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">2. Eligibility and Registration</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <p>2.1. The Challenge is open to individuals residing in India who are e.g., 18 years or older at the time of registration.</p>
                        <div className="space-y-4 bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                          <p className="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">2.2. To register, Participants must:</p>
                          <ul className="space-y-4 text-lg">
                            <li className="flex gap-3">
                              <span className="text-brand-teal font-black">a.</span>
                              <span>Complete the Google Form provided.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-brand-teal font-black">b.</span>
                              <span>Successfully make the required payment for participation.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-brand-teal font-black">c.</span>
                              <span>Upon successful payment, Participants will be redirected to the Haal-Chaal Pravartak's WhatsApp chat.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-brand-teal font-black">d.</span>
                              <span>Initiate contact by sending a "Hi" message, then send "Okay" as prompted.</span>
                            </li>
                          </ul>
                        </div>
                        <p>2.3. The Company reserves the right to refuse registration or disqualify any Participant at its sole discretion if it believes the Participant does not meet eligibility criteria or has violated these Terms.</p>
                        <p className="text-sm font-bold text-slate-400 italic">2.4. No company members or related are allowed participating in the contest.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">03</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">3. Challenge Period</h5>
                      </div>
                      <p className="font-medium text-slate-600 pl-14">
                        3.1. The Challenge will run for a period of seven (7) consecutive days starting from the date of the Participant's successful enrollment and initiation of the WhatsApp chat protocol.
                      </p>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">04</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">4. Challenge Activities and Adherence</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <div className="grid gap-6">
                          <div className="p-8 bg-teal-50/30 rounded-2xl border border-teal-100/50 space-y-4">
                            <p className="font-black text-slate-900 text-xs uppercase tracking-widest">4.1 Humming Voice Notes:</p>
                            <p className="text-lg text-slate-700">Participants are required to send voice notes of 7 seconds humming, two (2) audios per slot, three (3) times a day, within the following time windows:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base font-bold text-slate-900">
                               <li className="bg-white p-3 rounded-xl border border-slate-100 text-center">a. 9:00 AM - 11:00 AM IST</li>
                               <li className="bg-white p-3 rounded-xl border border-slate-100 text-center">b. 2:00 PM - 4:00 PM IST</li>
                               <li className="bg-white p-3 rounded-xl border border-slate-100 text-center">c. 9:00 PM - 11:00 PM IST</li>
                            </ul>
                          </div>
                          <p>4.2. Self-Assessment Wellness Questionnaire: Participants will receive a daily self-assessment wellness questionnaire, which must be completed and submitted daily.</p>
                          <div className="space-y-4">
                            <p>4.3. Daily Video Submission: Participants are required to create and submit one (1) video per day, detailing their feelings, or providing a review of the Company's technology, formulation, the Challenge itself, or all of the above.</p>
                            <p className="pl-6 border-l-2 border-brand-teal text-slate-500 italic">a. Videos can be shared on any social media platform, tagging the Company, or directly shared via the WhatsApp chat if the Participant is not comfortable with public sharing.</p>
                          </div>
                          <p className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-bold">
                            4.4. Adherence Scoring: Non-adherence to the requirements for voice notes and the daily questionnaire will result in a reduction of the Participant's overall score.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">05</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">5. Scoring and Winner Selection</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <div className="space-y-4">
                          <p>5.1. Winners will be announced based on a final scoring system derived from four (4) key parameters:</p>
                          <ul className="space-y-2 pl-6 list-disc text-slate-500">
                            <li>a. Adherence: Based on timely and complete submission of voice notes.</li>
                            <li>b. Video Submissions: Quality, consistency, and content of daily videos.</li>
                            <li>c. Self-Assessment Wellness Questionnaire: Consistency and completion of daily questionnaires.</li>
                            <li>d. Change in Airway Patency Score: Measured in a lesser time (details of measurement methodology will be provided separately).</li>
                          </ul>
                        </div>
                        <p>5.2. The Company's decision on scoring and winner selection is final and binding. No correspondence will be entered into regarding the results.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center text-xs font-black">06</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">6. Prizes and Referrals</h5>
                      </div>
                      <div className="pl-14 space-y-8">
                        <div className="bg-slate-50 p-10 md:p-12 rounded-[48px] border border-slate-200 space-y-12 shadow-sm">
                          <div className="grid md:grid-cols-2 gap-12">
                             <div className="space-y-6">
                                <h6 className="font-black text-slate-900 uppercase tracking-widest text-xs border-b border-slate-200 pb-4">6.1 Participant Prizes</h6>
                                <ul className="space-y-4">
                                  <li className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-bold group-hover:text-slate-900 transition-colors">Level 1: first-place winner</span> 
                                    <span className="text-brand-teal text-xl font-black">INR 50,000</span>
                                  </li>
                                  <li className="flex justify-between items-center text-slate-700 font-black">
                                    <span>Level 2: next ten (10) Participants</span> 
                                    <span className="text-right">INR 1,500 <span className="text-[10px] text-slate-400 font-bold ml-1">EACH</span></span>
                                  </li>
                                  <li className="flex justify-between items-center text-slate-700 font-black">
                                    <span>Level 3: next twenty (20) Participants</span> 
                                    <span className="text-right">INR 1,000 <span className="text-[10px] text-slate-400 font-bold ml-1">EACH</span></span>
                                  </li>
                                  <li className="flex justify-between items-center text-slate-700 font-black">
                                    <span>Level 4: next thirty (30) Participants</span> 
                                    <span className="text-right">INR 500 <span className="text-[10px] text-slate-400 font-bold ml-1">EACH</span></span>
                                  </li>
                                </ul>
                             </div>
                             <div className="space-y-6">
                                <h6 className="font-black text-slate-900 uppercase tracking-widest text-xs border-b border-slate-200 pb-4">6.2 Referral Prizes</h6>
                                <ul className="space-y-4 text-sm">
                                  <li className="space-y-1">
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-500 font-bold">Level 1 Referral</span> 
                                      <span className="text-brand-teal font-black">INR 5,000</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400">to the referrer of the Level 1 winner</p>
                                  </li>
                                  <li className="space-y-1">
                                    <div className="flex justify-between items-center text-slate-700 font-black">
                                      <span>Level 2 Referrals</span> 
                                      <span>INR 200</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400">to all referrers of Level 2 winners</p>
                                  </li>
                                  <li className="space-y-1">
                                    <div className="flex justify-between items-center text-slate-700 font-black">
                                      <span>Level 3 Referrals</span> 
                                      <span>INR 100</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400">to all referrers of Level 3 winners</p>
                                  </li>
                                </ul>
                             </div>
                          </div>
                          <div className="space-y-4 pt-8 border-t border-slate-200 text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                             <p>6.3. All prize amounts are subject to applicable taxes and deductions as per Indian law. Winners will be responsible for any tax liabilities arising from their prize.</p>
                             <p>6.4. Prizes are non-transferable and non-exchangeable. The Company reserves the right to substitute prizes with items of equal or greater value if advertised prizes become unavailable.</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-8">
                       <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">07</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">7. Disqualification</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <div className="space-y-4">
                           <p>7.1. Participants may be disqualified from the Challenge at the Company's sole discretion for, but not limited to, the following reasons:</p>
                           <ul className="space-y-2 pl-6 list-disc text-slate-500">
                             <li>a. Submitting another person's voice notes or any other content as their own.</li>
                             <li>b. Engaging in any activity intended to disturb, harass, or disadvantage other participants.</li>
                             <li>c. Using any unfair means or fraudulent practices to gain an advantage.</li>
                             <li>d. Violation of any of these Terms and Conditions.</li>
                           </ul>
                        </div>
                        <p>7.2. Disqualified Participants will forfeit any rights to prizes or recognition.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                       <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">08</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">8. Intellectual Property and Data Usage</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <p>8.1. By participating, you grant the Company a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display all content (including but not limited to voice notes, videos, questionnaire responses, feedback, and reviews) submitted by you for the Challenge, in any media, for promotional, marketing, research, or other business purposes related to the Challenge or the Company's products and services, without further compensation or notification to you.</p>
                        <p>8.2. You affirm that you own or have the necessary licenses, rights, consents, and permissions to publish the content you submit.</p>
                        <p>8.3. The Company will collect and process personal data provided by Participants in accordance with its Privacy Policy. By participating, you consent to such data collection and processing.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">09</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">9. Disclaimers and Limitation of Liability</h5>
                      </div>
                      <div className="pl-14 space-y-8">
                        <div className="p-10 bg-amber-50 rounded-[40px] border border-amber-100 text-amber-900 italic font-medium space-y-8 text-[15px] leading-relaxed shadow-sm">
                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.1. NO MEDICAL ADVICE:</p>
                            <p>The Challenge and its components (including breathing exercises, immunity-boosting strategies, and health tips) are intended for general wellness and informational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Participants should always consult with a qualified healthcare professional before starting any new health regimen, especially if they have pre-existing medical conditions or concerns. The Company does not provide medical advice, and participation in the Challenge should not be construed as such.</p>
                          </div>
                          
                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.2. NO GUARANTEE OF RESULTS:</p>
                            <p>The Company makes no representations or warranties, express or implied, regarding the effectiveness, safety, or results of participating in the Challenge. Individual results may vary significantly. The Company does not guarantee any specific improvements in respiratory health, immunity, or overall well-being.</p>
                          </div>

                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.3. TECHNICAL ISSUES & INTERRUPTIONS:</p>
                            <p>The Company shall not be liable for any losses, damages, or inconvenience caused by:</p>
                            <ul className="space-y-2 pl-6 list-disc">
                               <li>a. Technical failures, internet outages, server downtime, or disruptions to communication networks beyond its reasonable control.</li>
                               <li>b. Delays or failures in the transmission or receipt of voice notes, videos, questionnaire responses, or any other data.</li>
                               <li>c. Errors, omissions, or malfunctions in the Google Form, WhatsApp chat, mobile app, website, or any associated platforms used for the Challenge.</li>
                               <li>d. Any virus, bug, tampering, unauthorized intervention, fraud, or technical failures that could corrupt or affect the administration, security, fairness, integrity, or proper conduct of the Challenge.</li>
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.4. PARTICIPANT'S RESPONSIBILITY:</p>
                            <p>Participants are solely responsible for:</p>
                            <ul className="space-y-2 pl-6 list-disc">
                               <li>a. Ensuring their devices and internet connection are adequate to participate in the Challenge.</li>
                               <li>b. Maintaining the confidentiality of their login credentials and WhatsApp account.</li>
                               <li>c. The content and accuracy of all submissions (voice notes, videos, questionnaire responses).</li>
                               <li>d. Adhering to all instructions and guidelines provided by the Company.</li>
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.5. RELEASE AND INDEMNIFICATION:</p>
                            <p>By participating, you hereby release, discharge, and hold harmless the Company, its affiliates, directors, officers, employees, agents, and representatives from and against any and all claims, demands, liabilities, suits, actions, causes of action, losses, costs, and expenses (including reasonable attorney's fees) arising out of or in connection with your participation in the Challenge, including, without limitation:</p>
                            <ul className="space-y-2 pl-6 list-disc">
                               <li>a. Any injury, illness, death, loss, or damage to person or property, whether direct or indirect, arising from or related to your participation in the Challenge or the use of any prize.</li>
                               <li>b. Any reliance on information or advice provided as part of the Challenge.</li>
                               <li>c. Any claim related to the use of your submitted content as per Clause 8.1.</li>
                               <li>d. Any disqualification due to non-adherence or violation of these Terms.</li>
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <p className="font-black uppercase tracking-widest text-xs">9.6. LIMITATION OF LIABILITY:</p>
                            <p>In no event shall the Company be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, including but not limited to, loss of profits, revenue, data, or goodwill, arising out of or in connection with the Challenge, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if the Company has been advised of the possibility of such damages. The Company's total cumulative liability to you for any and all claims arising out of or in connection with these Terms or the Challenge shall not exceed the amount paid by you to participate in the Challenge.</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-8">
                       <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">10</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">10. Governing Law & Jurisdiction</h5>
                      </div>
                      <div className="space-y-6 font-medium text-slate-600 pl-14">
                        <p>10.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>
                        <p>10.2. Any disputes arising out of or in connection with the Challenge or these Terms shall be subject to the exclusive jurisdiction of the courts located in Delhi.</p>
                      </div>
                    </section>

                    <section className="space-y-8">
                       <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">11</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">11. Severability</h5>
                      </div>
                      <p className="font-medium text-slate-600 pl-14">
                        11.1. If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be severed from the remainder of these Terms, which will otherwise remain in full force and effect.
                      </p>
                    </section>

                    <section className="space-y-8">
                       <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">12</span>
                        <h5 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">12. Entire Agreement</h5>
                      </div>
                      <p className="font-medium text-slate-600 pl-14">
                        12.1. These Terms and Conditions constitute the entire agreement between the Participant and the Company concerning the Challenge and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.
                      </p>
                    </section>

                    <section className="space-y-12 pt-16 border-t border-slate-100 text-center pb-12">
                      <div className="space-y-4">
                        <p className="font-black text-slate-900 text-4xl md:text-5xl uppercase tracking-tighter leading-none font-display">Tech Atriocare <br/>Pvt. Ltd.</p>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed max-w-lg mx-auto">
                           Krastay, Saidulajab, Saiyad Ul Ajaib Village, <br className="hidden md:block" /> Sainik Farm, New Delhi, Delhi 110030
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <a href="mailto:service.techatriocare@gmail.com" className="text-brand-teal font-black text-xl hover:scale-105 transition-transform">
                          service.techatriocare@gmail.com
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>


              {/* Action Console Bar */}
              <div className="p-8 md:p-12 bg-white/80 backdrop-blur-xl border-t border-slate-100 z-50">
                 <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-1 text-center md:text-left">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Ready to start your 7-day journey?</p>
                      <p className="text-3xl font-black text-slate-900">₹ 500.00 <span className="text-xs text-slate-300 ml-2 font-black uppercase tracking-widest">Entry Fee</span></p>
                    </div>
                    <button 
                      onClick={() => {
                        setIsTermsOpen(false);
                        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfebqYEWS4uKAd-61QfPpMom-bg8aPCaOZQ7pZ-fV4MWx5ZrQ/viewform', '_blank');
                      }}
                      className="w-full md:w-auto px-12 py-7 bg-slate-950 text-white rounded-[32px] font-black text-xl hover:bg-brand-teal transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 font-display"
                    >
                      Agree & Register Now <ArrowRight className="w-6 h-6" />
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Footer Info */}
      <section className="py-24 text-center space-y-8 bg-white">
          <div className="flex flex-col items-center justify-center gap-4 text-[#006D77] font-black">
             <ShieldCheck className="w-10 h-10 animate-pulse" />
             <div className="text-xs md:text-sm tracking-[0.3em] uppercase">INDIA'S FIRST DIGITAL GYM FOR HEART & LUNG WELLNESS</div>
          </div>
          <div className="h-px w-32 bg-slate-100 mx-auto" />
          <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em]">
            POWERED BY: TECH ATRIOCARE PRIVATE LIMITED
          </p>
      </section>
    </div>
  );
}
