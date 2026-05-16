import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    initials: "P",
    name: "Prachi",
    role: "Co-Founder / Fitness Boss",
    rating: 5,
    text: "I was really struggling with managing my finances alongside running my business. VRPF helped me separate my personal and business finances, set up a proper investment plan, and even plan for retirement. I finally feel in control of my financial future. Couldn't recommend them more!",
  },
  {
    initials: "S",
    name: "Sai Prasad",
    role: "CIO, Amazon",
    rating: 5,
    text: "Working with VRPF has been transformative for both my investment strategy and overall financial knowledge. They took time to understand my goals and risk appetite, then built a portfolio that has consistently outperformed. Their proactive approach to wealth management is unmatched.",
  },
  {
    initials: "M",
    name: "Mayank",
    role: "SDE, Amazon",
    rating: 5,
    text: "As someone who had no idea about personal finance, VRPF simplified everything for me. They explained mutual funds, SIPs, and tax planning in plain language. Now I have a clear roadmap to financial independence. Best investment decision I've made!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#042f2e30_0%,_transparent_60%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What our clients say about us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Real feedback from clients who have taken their financial lives to the next level.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-slate-900/50 border border-slate-800/60 rounded-3xl p-8 flex flex-col hover:border-teal-500/20 transition-colors group backdrop-blur-sm"
            >
              <div className="absolute top-6 right-6 text-teal-500/20 group-hover:text-teal-500/30 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <StarRating count={t.rating} />

              <p className="text-slate-300 leading-relaxed mt-4 mb-8 flex-grow italic text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-800/60 pt-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["P", "S", "M", "A", "R"].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white"
                >
                  {l}
                </div>
              ))}
            </div>
            <span>500+ satisfied clients</span>
          </div>
          <div className="flex items-center gap-1">
            <StarRating count={5} />
            <span className="ml-1">4.9 average rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
