import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is personal finance consulting?",
    a: "Personal finance consulting involves helping individuals manage their money effectively by offering expert advice on budgeting, saving, investing, debt management, retirement planning, and tax optimisation. We create tailored strategies based on your unique financial situation and goals.",
  },
  {
    q: "Who can benefit from your services?",
    a: "Anyone looking to improve their financial situation can benefit — from young professionals just starting out, to families planning for children's education, to pre-retirees securing their retirement. If you have financial goals, we can help you achieve them faster.",
  },
  {
    q: "What is the process for working with your firm?",
    a: "We begin with a complimentary discovery call to understand your situation. Then we conduct a comprehensive financial assessment, develop a personalised strategy, and meet regularly to review and adjust your plan as your life evolves.",
  },
  {
    q: "What services do you offer?",
    a: "We offer personalised financial planning, investment portfolio management, retirement planning, expense tracking and optimisation, tax efficiency planning, insurance advisory, debt consolidation guidance, and ongoing wealth management.",
  },
  {
    q: "Do you offer one-time consultations or ongoing support?",
    a: "Both! We offer one-time deep-dive consultations for specific questions, as well as ongoing advisory relationships where we serve as your dedicated financial partner throughout the year.",
  },
  {
    q: "How much do your services cost?",
    a: "Our fees vary based on the scope of services and your financial complexity. We offer transparent, flat-fee pricing with no hidden commissions. Fees are discussed openly in your first consultation so you know exactly what to expect.",
  },
  {
    q: "Do you have any hidden fees?",
    a: "Absolutely not. We believe in complete fee transparency. We are a fee-only advisory firm, meaning we do not earn commissions from product recommendations. Your interests always come first.",
  },
  {
    q: "How do you ensure my financial information stays confidential?",
    a: "Your privacy is our top priority. All client information is protected under strict confidentiality agreements, encrypted digital systems, and we never share your data with third parties without your explicit consent.",
  },
  {
    q: "How do I schedule an initial consultation?",
    a: "Simply click 'Book a Call' on our website or reach out via email/WhatsApp. We'll set up a complimentary 30-minute discovery call at a time convenient for you.",
  },
  {
    q: "What documents should I prepare for the first meeting?",
    a: "Bring recent bank statements, investment account statements, pay slips, existing insurance policies, tax returns from the last 2 years, and any outstanding loan documents. Don't worry if you don't have everything — we'll work with whatever you have.",
  },
  {
    q: "Can you help with debt consolidation or repayment plans?",
    a: "Yes. We analyse your existing debts, evaluate consolidation options, and create a prioritised repayment strategy that minimises interest costs while keeping your other financial goals on track.",
  },
  {
    q: "What makes your firm different from others?",
    a: "We operate on a 'done with you' philosophy rather than 'done for you'. We educate and empower you at every step, ensuring you understand every decision. Combined with our conflict-free fee structure and personalised approach, clients see us as lifelong financial partners.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-slate-800/60 rounded-2xl overflow-hidden hover:border-teal-500/20 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-slate-900/40 hover:bg-slate-800/40 transition-colors"
      >
        <span className="text-white font-medium text-sm sm:text-base">{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-teal-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-28 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left column: heading */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Common Q&A
              </div>

              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Common Questions{" "}
                <span className="text-slate-500">&</span>{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Answers
                </span>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Here's everything you need to know to get started with VRPF as your financial advisor.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-teal-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right column: FAQ items */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
