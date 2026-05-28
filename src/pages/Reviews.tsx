import { motion } from 'motion/react';
import { 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Cpu, 
  Send,
  User,
  Quote
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface Review {
  id: string;
  name: string;
  role: string;
  product: 'Haal-Chaal' | 'V-sync' | 'Novicule-TA' | 'Website';
  content: string;
  rating: number;
  date: string;
  avatar?: string;
}

const initialReviews: Review[] = [
  {
    id: '1',
    name: "Prathyusha Meesala",
    role: "Wellness Enthusiast",
    product: 'Novicule-TA',
    content: "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: '2',
    name: "Siddhartha Chandra",
    role: "Marathon Runner",
    product: 'Novicule-TA',
    content: "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace, and Novicule-TA restored my health and confidence overnight. Highly recommended for elite performance recovery.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: '3',
    name: "Lasya N",
    role: "Health Professional",
    product: 'Novicule-TA',
    content: "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: '4',
    name: "Eakta Kandpal",
    role: "Clinical Researcher",
    product: 'Novicule-TA',
    content: "I had a persistent cough for many days. After taking these sachets before bedtime, my cough completely disappeared. It's a game changer for seasonal allergies.",
    rating: 5,
    date: "3 months ago"
  }
];

export default function Reviews() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const cardStyles = [
    "border-teal-400/50 bg-teal-50/5",
    "border-pink-300/50 bg-pink-50/5",
    "border-blue-300/50 bg-blue-50/5"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-teal/10">
      {/* Header Section */}
      <section className="relative pt-48 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-50 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-teal/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-teal/10 blur-[120px] rounded-full" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-[7rem] font-black font-display text-slate-900 uppercase tracking-tighter leading-[0.8] mb-12 relative z-10"
        >
          What Our <br /> <span className="text-brand-teal italic">Customers</span> Say
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-bold text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed relative z-10"
        >
          Real experiences from people who've tried Tech AtrioCare solutions.
        </motion.p>
      </section>

      {/* Review Cards Section */}
      <section className="pb-40 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {initialReviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={cn(
                "p-12 rounded-[56px] border-2 border-dashed transition-all duration-500 flex flex-col min-h-[500px]",
                cardStyles[i % 3]
              )}
            >
              <div className="mb-10">
                <h3 className="text-3xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-2">
                  {review.name}
                </h3>
                <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">{review.date}</p>
              </div>

              <div className="flex-grow">
                <Quote className="w-12 h-12 text-slate-100 mb-6" />
                <p className="text-slate-700 text-xl font-semibold leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} className="fill-brand-teal text-brand-teal" />
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-teal">Verified Case</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Improvement Form Section - Now Tinted */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-brand-teal/[0.03] rounded-[64px] p-12 md:p-24 border border-brand-teal/10 shadow-2xl shadow-brand-teal/5 relative">
            <div className="text-center mb-20">
              <span className="text-brand-teal font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">Innovation Loop</span>
              <h2 className="text-4xl md:text-7xl font-black font-display text-slate-900 uppercase tracking-tighter mb-8 leading-none">
                Help Us <span className="text-brand-teal">Evolve</span>
              </h2>
              <p className="text-slate-500 font-bold text-xl max-w-xl mx-auto leading-relaxed">
                Your direct feedback on our website functionality and product efficacy drives our next major release.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24 bg-brand-teal/5 rounded-[48px] border-2 border-dashed border-brand-teal/20"
              >
                <div className="w-24 h-24 rounded-full bg-brand-teal flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-brand-teal/20">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Feedback Logged</h3>
                <p className="text-slate-500 font-bold">Thank you for contributing to the AtrioCare ecosystem.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Subject identity</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-10 py-7 rounded-[32px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-xl transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Feedback Domain</label>
                    <div className="relative">
                      <select className="w-full px-10 py-7 rounded-[32px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-xl transition-all appearance-none cursor-pointer">
                        <option>Website UX/UI Improvement</option>
                        <option>Novicule-TA Efficacy</option>
                        <option>Haal-Chaal Protocol</option>
                        <option>Feature Suggestion</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Clinical Observations / Suggestions</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Describe your assessment or suggested improvement..."
                    className="w-full px-10 py-10 rounded-[48px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-xl transition-all resize-none placeholder:text-slate-300"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-8 atrio-gradient text-white rounded-full font-black uppercase tracking-[0.5em] shadow-2xl shadow-brand-teal/30 flex items-center justify-center gap-6 group hover:-translate-y-2 active:scale-95 transition-all text-sm"
                >
                  Broadcast Feedback
                  <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="py-48 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-24 h-24 text-brand-teal/10 mx-auto mb-16" />
          <h2 className="text-4xl md:text-6xl font-black font-display text-slate-900 uppercase tracking-tighter leading-[0.8] mb-16 italic">
            "Your feedback is <span className="text-brand-teal italic underline decoration-brand-teal/20 underline-offset-4 decoration-8">Precision</span>."
          </h2>
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-24 bg-slate-100" />
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.8em]">AtrioCare Research Team</p>
            <div className="h-[1px] w-24 bg-slate-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
