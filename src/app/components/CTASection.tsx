import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import imgWallSt from "figma:asset/7264d8a568121b3f52f3b0aef20bae348f355c35.png";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Full-width CTA banner */}
      <div className="relative h-[420px] sm:h-[480px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={imgWallSt}
            alt="Wall Street"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/40 via-transparent to-blue-950/30" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Start Your Journey
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to go from{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                0 investments
              </span>{" "}
              to creating generational wealth?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Book your free consultation today and take the first step toward financial freedom.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById("contact-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-2xl shadow-teal-500/30 text-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Contact form section */}
      <div id="contact-form" className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's build your financial future together
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Book a free 30-minute discovery call. We'll understand your goals, assess your current
                situation, and show you exactly how we can help — with zero obligation.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Free initial consultation — no strings attached",
                  "Personalised financial roadmap within 7 days",
                  "SEBI-registered, conflict-free advice",
                  "Ongoing support and quarterly reviews",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <span>hello@vrpfinancials.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-slate-900/60 border border-slate-800/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-teal-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
                  <p className="text-slate-400">
                    We'll be in touch within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-2">Book a Free Call</h3>
                  <p className="text-slate-400 text-sm mb-7">
                    Fill in your details and we'll reach out to confirm your slot.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        placeholder="Rajesh Kumar"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        placeholder="rajesh@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        What are your main financial goals?
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none"
                        placeholder="e.g. Plan for retirement, grow my investments, manage debt..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                    >
                      Book My Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-center text-slate-600">
                      By submitting, you agree to our Privacy Policy & Terms of Service.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
