import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Wallet,
  BarChart3,
  BookOpen,
  PiggyBank,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const mainServices = [
  {
    icon: Wallet,
    title: "Personalised Financial Planning",
    color: "teal",
    gradient: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    iconBg: "bg-teal-500/10 text-teal-400",
    bullets: [
      "Analysing your current finances",
      "Setting short & long term goals",
      "Making a personalised financial plan",
    ],
  },
  {
    icon: BarChart3,
    title: "Proactive Wealth Management",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400",
    bullets: [
      "The market is always changing your focus",
      "Making your portfolio funds for specific goals",
      "Diversify your portfolio for best results",
    ],
  },
  {
    icon: BookOpen,
    title: "Simplifying Complex Financial Concepts",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400",
    bullets: [
      "Understanding tax and optimisation",
      "Is mutual fund the best choice for you?",
      "Making the most of tax-advantaged accounts",
    ],
  },
];

const additionalServices = [
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    desc: "Build a comprehensive retirement corpus with NPS, EPF, and smart SIP strategies tailored to your lifestyle goals.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Insurance Advisory",
    desc: "Protect your wealth with the right insurance products. We audit your coverage and recommend optimal policies.",
  },
  {
    icon: Briefcase,
    title: "Expense Management",
    desc: "Track, analyse, and optimise your monthly spending patterns to accelerate savings and reduce financial stress.",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 bg-slate-900 border-t border-b border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse,_#042f2e20_0%,_transparent_60%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Summary List
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            How we can help{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              YOU
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We are dedicated to empowering individuals to make smarter financial decisions and make generational wealth.
          </motion.p>
        </div>

        {/* Main service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mainServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative bg-slate-950/60 border ${service.border} rounded-3xl p-8 hover:bg-slate-800/40 transition-all group backdrop-blur-sm overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`} />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-5">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 flex items-center gap-2 text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex gap-4 hover:border-teal-500/20 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
