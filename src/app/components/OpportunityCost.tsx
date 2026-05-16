import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

const portfolioData = [
  { year: "2018", invested: 100000, notInvested: 100000 },
  { year: "2019", invested: 118000, notInvested: 103500 },
  { year: "2020", invested: 124000, notInvested: 107100 },
  { year: "2021", invested: 168000, notInvested: 110900 },
  { year: "2022", invested: 152000, notInvested: 114800 },
  { year: "2023", invested: 193000, notInvested: 118900 },
  { year: "2024", invested: 241000, notInvested: 123100 },
];

const allocationData = [
  { name: "Equities", value: 40, color: "#14b8a6" },
  { name: "Debt", value: 25, color: "#3b82f6" },
  { name: "Gold", value: 15, color: "#f59e0b" },
  { name: "Real Estate", value: 12, color: "#8b5cf6" },
  { name: "Cash", value: 8, color: "#6b7280" },
];

const profileData = [
  { metric: "Growth", value: 90 },
  { metric: "Safety", value: 75 },
  { metric: "Liquidity", value: 65 },
  { metric: "Tax Efficiency", value: 80 },
  { metric: "Income", value: 55 },
  { metric: "Diversification", value: 85 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm shadow-xl">
        <p className="text-slate-300 mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }} className="font-semibold">
            {p.name}: ₹{(p.value / 1000).toFixed(0)}K
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function ChartCard({
  title,
  badge,
  badgeColor,
  children,
  delay,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-900/60 border border-slate-800/60 rounded-3xl p-6 hover:border-teal-500/30 transition-colors backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold">{title}</h3>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border ${badgeColor}`}
        >
          {badge}
        </span>
      </div>
      {children}
    </motion.div>
  );
}

export function OpportunityCost() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opportunity" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#042f2e30_0%,_transparent_60%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Opportunity Cost
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The cost of not making{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              smart investment
            </span>{" "}
            decisions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Whether it's a vacation or an emergency fund, we'll help you get there faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Portfolio Growth Chart */}
          <ChartCard
            title="Portfolio Growth"
            badge="Invested vs Not Invested"
            badgeColor="text-teal-400 border-teal-500/20 bg-teal-500/10"
            delay={0}
          >
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="invested" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="notInvested" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b7280" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="invested"
                  name="Smart Investment"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  fill="url(#invested)"
                />
                <Area
                  type="monotone"
                  dataKey="notInvested"
                  name="No Investment"
                  stroke="#6b7280"
                  strokeWidth={2}
                  fill="url(#notInvested)"
                  strokeDasharray="4 4"
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-slate-500 text-xs mt-3 text-center">
              ₹1L invested in 2018 vs kept in savings
            </p>
          </ChartCard>

          {/* Savings Allocation Pie */}
          <ChartCard
            title="Savings Allocation"
            badge="Diversified Portfolio"
            badgeColor="text-blue-400 border-blue-500/20 bg-blue-500/10"
            delay={0.15}
          >
            <div className="flex justify-center mb-4">
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-slate-400 text-xs">{item.name}</span>
                  <span className="text-white text-xs font-semibold ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Investor Profile Radar */}
          <ChartCard
            title="People Who Invest"
            badge="Risk-Adjusted Returns"
            badgeColor="text-amber-400 border-amber-500/20 bg-amber-500/10"
            delay={0.3}
          >
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={profileData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: "#64748b", fontSize: 10 }}
                />
                <Radar
                  name="Profile"
                  dataKey="value"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-slate-500 text-xs mt-1 text-center">
              Ideal investor profile for long-term wealth
            </p>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
