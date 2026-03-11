import { Link } from "react-router";
import { 
  Activity, 
  Car, 
  Clock, 
  Network, 
  TrendingDown, 
  Zap,
  Code,
  Database,
  BarChart3,
  Github,
  BookOpen,
  ArrowRight,
  MapPin,
  Signal,
  PlayCircle
} from "lucide-react";
import { motion } from "motion/react";
import { MetricCard } from "../components/metric-card";
import { DashboardCard } from "../components/dashboard-card";
import { TechIcon } from "../components/tech-icon";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const trafficData = [
  { time: "00:00", queue: 12, speed: 45, density: 30 },
  { time: "04:00", queue: 8, speed: 55, density: 20 },
  { time: "08:00", queue: 35, speed: 25, density: 65 },
  { time: "12:00", queue: 28, speed: 35, density: 55 },
  { time: "16:00", queue: 42, speed: 20, density: 75 },
  { time: "20:00", queue: 25, speed: 40, density: 45 },
  { time: "23:59", queue: 15, speed: 50, density: 35 },
];

const queueReductionData = [
  { phase: "Before", NS: 45, EW: 38 },
  { phase: "After", NS: 22, EW: 18 },
];

const congestionData = [
  { year: "2020", delay: 42 },
  { year: "2021", delay: 48 },
  { year: "2022", delay: 54 },
  { year: "2023", delay: 61 },
  { year: "2024", delay: 68 },
  { year: "2026", delay: 75 },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-['Inter']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1F2937] bg-[#0B0F1A]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#00E5A8] flex items-center justify-center">
                <Signal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                UrbanFlow
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/docs" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
                Documentation
              </Link>
              <a href="#simulation" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
                Simulation
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
                About
              </a>
              <a 
                href="https://github.com/Jail07/A007_UrbanFlow/tree/master"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-[#00C2FF] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C2FF]/20 via-transparent to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBuaWdodCUyMGxpZ2h0cyUyMGFlcmlhbHxlbnwxfHx8fDE3NzMyNTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Smart City"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(#00C2FF 1px, transparent 1px),
            linear-gradient(90deg, #00C2FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 mb-6">
                <span className="text-[#00C2FF] text-sm">Smart Traffic Management</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#00C2FF] via-[#00E5A8] to-[#00C2FF] bg-clip-text text-transparent">
                  UrbanFlow
                </span>
                <br />
                <span className="text-white">Adaptive Traffic Control Simulation</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A smart traffic management system using SUMO simulation and adaptive signal algorithms 
                to reduce congestion and optimize urban mobility.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#simulation"
                  className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] hover:shadow-lg hover:shadow-[#00C2FF]/50 transition-all"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span className="font-semibold">View Simulation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/docs"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1F2937] bg-[#111827]/50 hover:border-[#00C2FF] transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Read Documentation</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <MetricCard
                icon={Car}
                label="Active Vehicles"
                value="2,847"
                color="blue"
                trend="up"
              />
              <MetricCard
                icon={Clock}
                label="Avg Delay"
                value="12.4"
                unit="sec"
                color="green"
                trend="down"
              />
              <MetricCard
                icon={Network}
                label="Traffic Density"
                value="68"
                unit="%"
                color="orange"
                trend="neutral"
              />
              <MetricCard
                icon={Activity}
                label="Intersection Load"
                value="142"
                color="blue"
                trend="up"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#FF6B3D]">Urban Traffic Congestion</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cities face increasing congestion, inefficient traffic signals, and growing transportation demand. 
              Traditional static signal timing cannot adapt to real-time traffic conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <DashboardCard title="Growing Congestion Trends" glowColor="#FF6B3D">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={congestionData}>
                  <defs>
                    <linearGradient id="delayGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6B3D" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF6B3D" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid #1F2937',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="delay" 
                    stroke="#FF6B3D" 
                    fill="url(#delayGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-500 mt-2">Average delay per vehicle (minutes)</p>
            </DashboardCard>

            <DashboardCard title="Traffic Impact Statistics" glowColor="#FF6B3D">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Peak Hour Congestion</span>
                    <span className="text-[#FF6B3D] font-semibold">+127%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B3D] to-[#FF6B3D]/50" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Fuel Waste (Annual)</span>
                    <span className="text-[#FF6B3D] font-semibold">3.5B gal</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B3D] to-[#FF6B3D]/50" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Economic Loss</span>
                    <span className="text-[#FF6B3D] font-semibold">$166B</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B3D] to-[#FF6B3D]/50" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                How UrbanFlow Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A data-driven pipeline that simulates, analyzes, and optimizes traffic flow in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            {[
              { icon: MapPin, label: "City Map", color: "#00C2FF" },
              { icon: ArrowRight, label: "", color: "#6B7280" },
              { icon: Car, label: "SUMO Simulation", color: "#00C2FF" },
              { icon: ArrowRight, label: "", color: "#6B7280" },
              { icon: Database, label: "Data Collection", color: "#00E5A8" },
              { icon: ArrowRight, label: "", color: "#6B7280" },
              { icon: Zap, label: "Adaptive Algorithm", color: "#00E5A8" },
              { icon: ArrowRight, label: "", color: "#6B7280" },
              { icon: TrendingDown, label: "Optimization", color: "#00C2FF" },
            ].map((item, index) => (
              item.label === "" ? (
                <ArrowRight key={index} className="w-6 h-6 text-gray-600" />
              ) : (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#1F2937] bg-[#111827]/50"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <span className="text-sm text-gray-400 text-center whitespace-nowrap">{item.label}</span>
                </div>
              )
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <TechIcon icon={Code} label="SUMO" color="#00C2FF" />
            <TechIcon icon={Code} label="Python" color="#00E5A8" />
            <TechIcon icon={BarChart3} label="Data Analysis" color="#00C2FF" />
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section id="simulation" className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00C2FF]">Traffic Simulation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time visualization of traffic patterns and adaptive signal control in action.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <DashboardCard title="Live Simulation View" glowColor="#00C2FF">
              <div className="aspect-video rounded-lg bg-[#0B0F1A] border border-[#1F2937] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1611147533125-9ca445f32036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhZmZpYyUyMGNvbmdlc3Rpb24lMjBoaWdod2F5fGVufDF8fHx8MTc3MzI1MDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Traffic Simulation"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C2FF]/20 backdrop-blur-sm flex items-center justify-center border border-[#00C2FF]/50 cursor-pointer hover:bg-[#00C2FF]/30 transition-colors">
                    <PlayCircle className="w-8 h-8 text-[#00C2FF]" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Click to play simulation demo</p>
            </DashboardCard>

            <div className="space-y-4">
              <DashboardCard title="Queue Length Over Time" glowColor="#00E5A8">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                    <XAxis dataKey="time" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #1F2937',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="queue" 
                      stroke="#00E5A8" 
                      strokeWidth={2}
                      dot={{ fill: '#00E5A8', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </DashboardCard>

              <DashboardCard title="Average Vehicle Speed" glowColor="#00C2FF">
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={trafficData}>
                    <defs>
                      <linearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00C2FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                    <XAxis dataKey="time" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #1F2937',
                        borderRadius: '8px'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="speed" 
                      stroke="#00C2FF" 
                      fill="url(#speedGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </DashboardCard>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00E5A8]">Adaptive Traffic Signal Algorithm</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dynamic phase switching based on real-time queue length and traffic density.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <DashboardCard title="Algorithm Logic" glowColor="#00E5A8">
              <div className="rounded-lg bg-[#0B0F1A] border border-[#1F2937] overflow-hidden">
                <div className="px-4 py-2 bg-[#111827] border-b border-[#1F2937]">
                  <span className="text-xs text-gray-500">PYTHON</span>
                </div>
                <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
{`def adaptive_signal_control(traffic_data):
    queue_NS = traffic_data['north_south']
    queue_EW = traffic_data['east_west']
    
    if queue_NS > queue_EW * 1.5:
        switch_phase('north_south')
        green_time = calculate_time(queue_NS)
    elif queue_EW > queue_NS * 1.5:
        switch_phase('east_west')
        green_time = calculate_time(queue_EW)
    else:
        maintain_current_phase()
    
    return optimize_flow(green_time)`}
                </pre>
              </div>
            </DashboardCard>

            <DashboardCard title="Performance Improvement" glowColor="#00E5A8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={queueReductionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                  <XAxis dataKey="phase" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid #1F2937',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="NS" fill="#00C2FF" name="North-South" />
                  <Bar dataKey="EW" fill="#00E5A8" name="East-West" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00E5A8]">-51%</p>
                  <p className="text-sm text-gray-400">Queue Reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00E5A8]">-38%</p>
                  <p className="text-sm text-gray-400">Average Delay</p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00C2FF]">Traffic Data Insights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive analytics and real-time monitoring of traffic patterns.
            </p>
          </motion.div>

          <DashboardCard title="Traffic Density Analysis" glowColor="#00C2FF" className="mb-8">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="densityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00C2FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                <XAxis dataKey="time" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #1F2937',
                    borderRadius: '8px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="density" 
                  stroke="#00C2FF" 
                  fill="url(#densityGradient)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </DashboardCard>

          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard
              icon={TrendingDown}
              label="Avg Queue Length"
              value="18.2"
              unit="vehicles"
              color="green"
              trend="down"
            />
            <MetricCard
              icon={Activity}
              label="Peak Traffic Density"
              value="75"
              unit="%"
              color="orange"
              trend="neutral"
            />
            <MetricCard
              icon={Clock}
              label="System Response Time"
              value="2.4"
              unit="sec"
              color="blue"
              trend="down"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                About the Project
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <DashboardCard title="Project Overview" glowColor="#00C2FF">
              <p className="text-gray-300 mb-6 leading-relaxed">
                UrbanFlow is a research project exploring adaptive traffic signal control using traffic 
                simulation and data-driven algorithms. The project demonstrates how intelligent systems 
                can significantly reduce urban congestion and improve traffic flow efficiency.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#00C2FF] font-semibold mb-2">Project Goals</h4>
                  <ul className="text-gray-400 space-y-2 ml-6">
                    <li className="list-disc">Reduce traffic congestion through adaptive signal control</li>
                    <li className="list-disc">Optimize traffic flow using real-time data analysis</li>
                    <li className="list-disc">Minimize vehicle delay and improve urban mobility</li>
                    <li className="list-disc">Demonstrate scalable smart city solutions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#00E5A8] font-semibold mb-3">Technologies Used</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                      <span>SUMO</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-[#00E5A8]" />
                      <span>Python</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                      <span>TraCI API</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-[#00E5A8]" />
                      <span>OpenStreetMap</span>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1F2937] bg-[#0B0F1A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#00E5A8] flex items-center justify-center">
                  <Signal className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                  UrbanFlow
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Adaptive Traffic Control Simulation for Smart Cities
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/docs" className="block text-gray-400 hover:text-[#00C2FF] transition-colors">
                  Documentation
                </Link>
                <a href="#simulation" className="block text-gray-400 hover:text-[#00C2FF] transition-colors">
                  Simulation
                </a>
                <a href="#about" className="block text-gray-400 hover:text-[#00C2FF] transition-colors">
                  About
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a 
                  href="https://github.com/Jail07/A007_UrbanFlow/tree/master"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00C2FF] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <Link 
                  to="/docs"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00C2FF] transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Full Documentation</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1F2937] text-center text-gray-500 text-sm">
            <p>© 2026 UrbanFlow. A research project in smart traffic management.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
