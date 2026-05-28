import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const partners = [
  {
    name: 'CIIE Jamia Hamdard',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYo-MRe1YynQ/company-logo_200_200/company-logo_200_200/0/1630619525401?e=2147483647&v=beta&t=cWDdQkbic2d2otoLG-A0fMej9PYs4r12HUpYyl9zdJY',
  },
  {
    name: 'Ministry of MSME',
    logo: 'https://veloxxmedia.com/wp-content/uploads/2025/12/msme.jpg',
  },
  {
    name: 'DPIIT',
    logo: 'https://indiaeducationdiary.in/wp-content/uploads/2025/05/dpiit-0-1681728843_1729501601_880X580_c_c_0_0.webp',
  },
  {
    name: 'TIDE 2.0',
    logo: 'https://entrepreneurloop.com/wp-content/uploads/2025/12/tide-2.0.jpg',
  },
  {
    name: 'Vignan Technology Business Incubator',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFwa2BK7Rs_WQ/company-logo_200_200/company-logo_200_200/0/1712899643101?e=2147483647&v=beta&t=ZEVWER_pBt1H9wL01JAyST9itTTyjPv6xqrroO0QpSw',
  },
  {
    name: 'DST-NIDHI',
    logo: 'https://aic.ccmb.res.in/wp-content/uploads/2023/05/DST-NIDHI_Original-Logo-V.jpg',
  },
  {
    name: 'TATA 1MG',
    logo: 'https://play-lh.googleusercontent.com/yjbAu08_Ahes38IEMV8slP91zgjh2mdh5xpZefvcbYuZxR8O7FZFderRn2Ivaz0uR2Lw',
  }
];

export default function RecognitionsSection() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="partners">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold font-display text-slate-900 tracking-tight mb-8"
        >
          Recognitions & Partnerships
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 text-xl md:text-2xl font-medium"
        >
          Trusted by leading organizations and institutions
        </motion.p>
      </div>

      <div className="relative select-none">
        <div className="flex overflow-hidden py-12">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-24 md:gap-40 items-center whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div 
                key={`${partner.name}-${i}`} 
                className="flex flex-col items-center gap-10 min-w-[320px] group"
              >
                <div className="h-32 w-64 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.name[0]}&background=f8fafc&color=64748b&size=128&bold=true`;
                    }}
                  />
                </div>
                <p className="text-base font-semibold text-slate-600 text-center whitespace-normal max-w-[280px] leading-tight">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Gradients for seamless floating effect */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
