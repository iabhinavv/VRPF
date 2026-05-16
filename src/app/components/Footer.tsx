import { motion } from "motion/react";
import { TrendingUp, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  Menu: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                VRPF
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              VR Personal Finance — Empowering individuals to make smarter financial decisions and create generational wealth. Done with you, not for you.
            </p>
            <p className="text-slate-600 text-xs mb-4">
              📧 hello@vrpfinancials.com
            </p>
            <p className="text-slate-600 text-xs">
              📞 +91 98765 43210
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-500/20 border border-slate-700/50 hover:border-teal-500/30 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-slate-500 hover:text-slate-200 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800/60 pt-8 mb-6">
          <p className="text-slate-600 text-xs leading-relaxed max-w-4xl">
            <strong className="text-slate-500">Disclaimer:</strong> The information provided by VRPF is for educational and informational purposes only and does not constitute financial, investment, or trading advice. Investments are subject to market risks. Please read all related documents carefully before investing. Past performance is not indicative of future results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} VR Personal Finance. All rights reserved.</span>
          <span className="text-slate-700">SEBI Registration No: INA000000000</span>
        </div>
      </div>
    </footer>
  );
}
