import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlaneTakeoff, Award, Calendar, Volume2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center py-20 md:py-28 overflow-hidden border-b border-outline/10 isolate">
        {/* Dusk Tarmac Background Image */}
        <div className="absolute inset-0 bg-cover bg-center -z-20 transition-all duration-700 hero-bg-custom" />
        
        {/* Dusk Overlay to match target website screenshot */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent [.light-mode_&]:from-background/95 [.light-mode_&]:via-background/80" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div
            className="flex-1 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight"
              variants={fadeInUp}
            >
              Prepare like
              <br />
              the real thing.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-200 max-w-lg mb-10 leading-relaxed font-normal"
              variants={fadeInUp}
            >
              DGCA exam preparation platform built by pilots, for future commercial pilots.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <button
                onClick={() => onNavigate('training')}
                className="bg-primary text-white hover:bg-secondary px-8 py-4 rounded-lg text-sm font-semibold transition-all active:scale-95 cursor-pointer flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Start Learning
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('mock-config')}
                className="border border-outline-variant hover:border-on-background hover:bg-surface/30 px-8 py-4 rounded-lg text-sm font-semibold transition-all active:scale-95 cursor-pointer"
              >
                Explore Platform
              </button>
            </motion.div>

          </motion.div>

          {/* Right cockpit space is left open for background tarmac layout */}
          <div className="flex-1 hidden lg:block" />
        </div>
      </section>



      {/* Feature Grid / Cards Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="mb-16 text-center">
          <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">PRECISION TRAINING</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-background">Features built for first-attempt success.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award size={36} className="text-primary" />,
              title: "Exam Pattern",
              desc: "Simulations strictly based on the latest DGCA examination patterns and protocols."
            },
            {
              icon: <PlaneTakeoff size={36} className="text-primary" />,
              title: "Latest Scenarios",
              desc: "Freshly updated question banks featuring current aviation scenarios and challenges."
            },
            {
              icon: <CheckCircle2 size={36} className="text-primary" />,
              title: "Detailed Feedback",
              desc: "Get granular performance insights and improvement tracks after every session."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-surface border border-outline/10 rounded-2xl p-8 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:border-primary/50 hover:shadow-xl cursor-pointer hover:-translate-y-1 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">{card.icon}</div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-on-background">{card.title}</h4>
                <p className="text-on-surface-variant leading-relaxed text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Re-themed Asymmetrical Roadmap */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 relative">
        <div className="flex flex-col gap-20 relative">
          {/* SVG Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline/25 hidden md:block overflow-hidden">
            <svg className="h-full w-full" height="100%" width="2">
              <line className="text-outline/40" stroke="currentColor" strokeDasharray="8 8" x1="1" x2="1" y1="0" y2="100%"></line>
            </svg>
          </div>

          {[
            { num: "01", title: "Book Your Slot", desc: "Choose a time that fits your schedule. Our instructors are ready when you are.", icon: <Calendar size={20} />, left: true },
            { num: "02", title: "Join the Cockpit", desc: "Enter our high-fidelity virtual examination room with a certified pilot evaluator.", icon: <Volume2 size={20} />, left: false },
            { num: "03", title: "Attend the Mock", desc: "Execute the mission. Handle emergency scenarios and standard comms under pressure.", icon: <PlaneTakeoff size={20} />, left: true },
            { num: "04", title: "Master Your Skill", desc: "Review your recording and feedback report to refine your communication precision.", icon: <ShieldCheck size={20} />, left: false }
          ].map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <div className={`md:w-1/2 flex flex-col order-2 ${step.left ? 'md:items-end md:text-right md:order-1' : 'md:items-start md:text-left md:order-3'}`}>
                <span className="text-4xl font-extrabold text-primary/25 mb-1">{step.num}</span>
                <h3 className="text-2xl font-bold text-on-background mb-2">{step.title}</h3>
                <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">{step.desc}</p>
              </div>

              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white z-10 shrink-0 border-4 border-background order-1 md:order-2 shadow-md">
                {step.icon}
              </div>

              <div className={`md:w-1/2 hidden md:block ${step.left ? 'order-3 md:order-3' : 'order-3 md:order-1'}`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* bottom CTA Bento Banner Card */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <motion.div
          className="bg-surface border border-outline/10 rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 w-full">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-background mb-6 leading-tight">Elevate your standards. The runway is clear.</h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Skyly provides the structural clarity required to turn aspiring students into confident aviators.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-left md:text-right shrink-0 w-full md:w-auto">
              <div>
                <p className="text-5xl md:text-6xl font-extrabold text-primary mb-1">98%</p>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-extrabold text-primary mb-1">12k+</p>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Hours Logged</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
