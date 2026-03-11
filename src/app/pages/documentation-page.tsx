import { useState } from "react";
import { Link, useParams } from "react-router";
import { 
  BookOpen, 
  ChevronRight, 
  Home,
  Settings,
  Activity,
  Code,
  BarChart3,
  FileText,
  Github,
  Signal
} from "lucide-react";
import { CodeBlock } from "../components/code-block";
import { DashboardCard } from "../components/dashboard-card";

const docSections = [
  { id: "introduction", title: "Introduction", icon: BookOpen },
  { id: "setup", title: "Simulation Setup", icon: Settings },
  { id: "scenarios", title: "Traffic Scenarios", icon: Activity },
  { id: "algorithm", title: "Algorithm Logic", icon: Code },
  { id: "experiments", title: "Experiments", icon: BarChart3 },
  { id: "results", title: "Results", icon: FileText },
];

const docContent: Record<string, { title: string; content: JSX.Element }> = {
  introduction: {
    title: "Introduction",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          UrbanFlow is an advanced traffic simulation and optimization platform designed to address 
          the growing challenges of urban traffic congestion. This project leverages the SUMO 
          (Simulation of Urban MObility) framework combined with adaptive signal control algorithms 
          to create intelligent traffic management solutions.
        </p>

        <div className="bg-[#111827]/50 border border-[#1F2937] rounded-lg p-6">
          <h3 className="text-[#00C2FF] font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00E5A8] mt-0.5 flex-shrink-0" />
              <span>Real-time traffic simulation using SUMO</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00E5A8] mt-0.5 flex-shrink-0" />
              <span>Adaptive traffic signal control based on queue length</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00E5A8] mt-0.5 flex-shrink-0" />
              <span>Data-driven decision making with TraCI API</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00E5A8] mt-0.5 flex-shrink-0" />
              <span>Comprehensive analytics and visualization</span>
            </li>
          </ul>
        </div>

        <DashboardCard title="Project Architecture" glowColor="#00C2FF">
          <p className="text-gray-300 mb-4">
            The system consists of four main components working together:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00C2FF] font-semibold mb-2">1. Traffic Simulation</h4>
              <p className="text-gray-400 text-sm">
                SUMO-based microscopic traffic simulation with realistic vehicle behavior
              </p>
            </div>
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00E5A8] font-semibold mb-2">2. Data Collection</h4>
              <p className="text-gray-400 text-sm">
                Real-time traffic data gathering via TraCI API interface
              </p>
            </div>
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00C2FF] font-semibold mb-2">3. Control Algorithm</h4>
              <p className="text-gray-400 text-sm">
                Adaptive signal timing based on traffic conditions and queue analysis
              </p>
            </div>
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00E5A8] font-semibold mb-2">4. Analysis & Visualization</h4>
              <p className="text-gray-400 text-sm">
                Performance metrics and data visualization for insights
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    ),
  },
  setup: {
    title: "Simulation Setup",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Setting up the UrbanFlow simulation environment requires SUMO, Python, and several 
          dependencies. Follow these steps to get started.
        </p>

        <DashboardCard title="Prerequisites" glowColor="#00C2FF">
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-2 flex-shrink-0" />
              <span>SUMO 1.12.0 or higher</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-2 flex-shrink-0" />
              <span>Python 3.8+</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-2 flex-shrink-0" />
              <span>TraCI (included with SUMO)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-2 flex-shrink-0" />
              <span>Required Python packages: numpy, pandas, matplotlib</span>
            </li>
          </ul>
        </DashboardCard>

        <h3 className="text-[#00E5A8] font-semibold">Installation</h3>
        <CodeBlock
          language="bash"
          code={`# Install SUMO (Ubuntu/Debian)
sudo add-apt-repository ppa:sumo/stable
sudo apt-get update
sudo apt-get install sumo sumo-tools sumo-doc

# Install Python dependencies
pip install numpy pandas matplotlib traci

# Clone the repository
git clone https://github.com/urbanflow/traffic-control.git
cd traffic-control`}
        />

        <h3 className="text-[#00E5A8] font-semibold">Network Configuration</h3>
        <p className="text-gray-300">
          Configure your traffic network using SUMO's network editor or import from OpenStreetMap:
        </p>
        <CodeBlock
          language="bash"
          code={`# Import from OpenStreetMap
python osmWebWizard.py

# Or create custom network
netconvert --node-files=nodes.nod.xml \\
           --edge-files=edges.edg.xml \\
           --output-file=network.net.xml`}
        />

        <h3 className="text-[#00E5A8] font-semibold">Running the Simulation</h3>
        <CodeBlock
          language="bash"
          code={`# Start the simulation with adaptive control
python urbanflow_controller.py --config simulation.sumocfg

# Run in GUI mode for visualization
python urbanflow_controller.py --gui --config simulation.sumocfg`}
        />
      </div>
    ),
  },
  scenarios: {
    title: "Traffic Scenarios",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          UrbanFlow supports various traffic scenarios to test the adaptive control algorithm 
          under different conditions.
        </p>

        <DashboardCard title="Scenario Types" glowColor="#00E5A8">
          <div className="space-y-4">
            <div>
              <h4 className="text-[#00C2FF] font-semibold mb-2">1. Peak Hour Traffic</h4>
              <p className="text-gray-400">
                High vehicle density during rush hours with asymmetric flow patterns.
              </p>
              <CodeBlock
                language="python"
                code={`scenario = {
    'name': 'peak_hour',
    'duration': 3600,  # 1 hour
    'vehicle_rate': 2400,  # vehicles/hour
    'flow_ratio': {'NS': 0.65, 'EW': 0.35}
}`}
              />
            </div>

            <div>
              <h4 className="text-[#00C2FF] font-semibold mb-2">2. Off-Peak Traffic</h4>
              <p className="text-gray-400">
                Moderate traffic with balanced directional flow.
              </p>
              <CodeBlock
                language="python"
                code={`scenario = {
    'name': 'off_peak',
    'duration': 3600,
    'vehicle_rate': 800,
    'flow_ratio': {'NS': 0.5, 'EW': 0.5}
}`}
              />
            </div>

            <div>
              <h4 className="text-[#00C2FF] font-semibold mb-2">3. Incident Scenario</h4>
              <p className="text-gray-400">
                Simulation of traffic incidents causing lane closures and congestion.
              </p>
              <CodeBlock
                language="python"
                code={`scenario = {
    'name': 'incident',
    'duration': 1800,
    'incident_time': 600,
    'affected_lanes': ['edge_1_0', 'edge_1_1'],
    'capacity_reduction': 0.5
}`}
              />
            </div>
          </div>
        </DashboardCard>
      </div>
    ),
  },
  algorithm: {
    title: "Algorithm Logic",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          The adaptive traffic signal control algorithm dynamically adjusts signal phases based 
          on real-time queue lengths and traffic density.
        </p>

        <DashboardCard title="Core Algorithm" glowColor="#00C2FF">
          <CodeBlock
            language="python"
            code={`class AdaptiveTrafficController:
    def __init__(self, intersection_id):
        self.intersection = intersection_id
        self.current_phase = 0
        self.min_green_time = 10  # seconds
        self.max_green_time = 60  # seconds
        
    def collect_traffic_data(self):
        """Gather real-time traffic metrics"""
        queue_NS = traci.edge.getLastStepHaltingNumber('edge_NS')
        queue_EW = traci.edge.getLastStepHaltingNumber('edge_EW')
        
        density_NS = traci.edge.getLastStepOccupancy('edge_NS')
        density_EW = traci.edge.getLastStepOccupancy('edge_EW')
        
        return {
            'queue_NS': queue_NS,
            'queue_EW': queue_EW,
            'density_NS': density_NS,
            'density_EW': density_EW
        }
    
    def calculate_green_time(self, queue_length):
        """Calculate optimal green time based on queue"""
        base_time = self.min_green_time
        additional_time = min(queue_length * 0.5, 
                             self.max_green_time - base_time)
        return base_time + additional_time
    
    def decide_phase(self, traffic_data):
        """Determine which phase should be active"""
        queue_NS = traffic_data['queue_NS']
        queue_EW = traffic_data['queue_EW']
        
        # Switch if one direction has significantly more queue
        threshold = 1.5
        
        if queue_NS > queue_EW * threshold:
            return 0  # North-South phase
        elif queue_EW > queue_NS * threshold:
            return 2  # East-West phase
        else:
            return self.current_phase  # Maintain current
    
    def update_signal(self):
        """Main control loop"""
        data = self.collect_traffic_data()
        new_phase = self.decide_phase(data)
        
        if new_phase != self.current_phase:
            traci.trafficlight.setPhase(
                self.intersection, 
                new_phase
            )
            self.current_phase = new_phase
        
        # Calculate and set green time
        if new_phase == 0:
            green_time = self.calculate_green_time(
                data['queue_NS']
            )
        else:
            green_time = self.calculate_green_time(
                data['queue_EW']
            )
        
        traci.trafficlight.setPhaseDuration(
            self.intersection,
            green_time
        )`}
          />
        </DashboardCard>

        <DashboardCard title="Algorithm Features" glowColor="#00E5A8">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00C2FF] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[#00C2FF]">Queue-Based Priority:</strong> Phases with 
                longer queues receive extended green time
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00C2FF] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[#00C2FF]">Dynamic Timing:</strong> Green time 
                calculated proportionally to queue length
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00C2FF] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[#00C2FF]">Safety Constraints:</strong> Minimum and 
                maximum green times to ensure safe operation
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-[#00C2FF] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-[#00C2FF]">Real-Time Adaptation:</strong> Continuous 
                monitoring and adjustment every simulation step
              </div>
            </li>
          </ul>
        </DashboardCard>
      </div>
    ),
  },
  experiments: {
    title: "Experiments",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Multiple experiments were conducted to validate the effectiveness of the adaptive 
          traffic control system compared to static signal timing.
        </p>

        <DashboardCard title="Experiment Setup" glowColor="#00C2FF">
          <div className="space-y-4">
            <div>
              <h4 className="text-[#00E5A8] font-semibold mb-2">Control Group</h4>
              <p className="text-gray-300 mb-2">
                Static signal timing with fixed 60-second cycles:
              </p>
              <ul className="text-gray-400 space-y-1 ml-6">
                <li className="list-disc">North-South green: 30 seconds</li>
                <li className="list-disc">East-West green: 30 seconds</li>
                <li className="list-disc">Yellow/Red transition: 4 seconds each</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#00E5A8] font-semibold mb-2">Treatment Group</h4>
              <p className="text-gray-300 mb-2">
                Adaptive signal control with dynamic timing:
              </p>
              <ul className="text-gray-400 space-y-1 ml-6">
                <li className="list-disc">Green time: 10-60 seconds (queue-based)</li>
                <li className="list-disc">Phase switching: threshold-based (1.5x ratio)</li>
                <li className="list-disc">Update frequency: Every simulation step (1s)</li>
              </ul>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Test Scenarios" glowColor="#00E5A8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00C2FF] font-semibold mb-2">Scenario 1</h4>
              <p className="text-gray-400 text-sm mb-2">Balanced Traffic</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Duration: 1 hour</div>
                <div>Flow rate: 1200 veh/hr</div>
                <div>NS:EW ratio: 50:50</div>
              </div>
            </div>
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00C2FF] font-semibold mb-2">Scenario 2</h4>
              <p className="text-gray-400 text-sm mb-2">Peak Hour</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Duration: 1 hour</div>
                <div>Flow rate: 2400 veh/hr</div>
                <div>NS:EW ratio: 65:35</div>
              </div>
            </div>
            <div className="bg-[#0B0F1A] rounded-lg p-4 border border-[#1F2937]">
              <h4 className="text-[#00C2FF] font-semibold mb-2">Scenario 3</h4>
              <p className="text-gray-400 text-sm mb-2">Incident</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Duration: 30 min</div>
                <div>Lane closure: 10-20 min</div>
                <div>Capacity: -50%</div>
              </div>
            </div>
          </div>
        </DashboardCard>

        <h3 className="text-[#00E5A8] font-semibold">Running Experiments</h3>
        <CodeBlock
          language="python"
          code={`# Run comparative experiment
python experiments/run_comparison.py \\
    --scenarios peak_hour,balanced,incident \\
    --iterations 10 \\
    --output results/

# Generate analysis report
python experiments/analyze_results.py \\
    --input results/ \\
    --report results/report.pdf`}
        />
      </div>
    ),
  },
  results: {
    title: "Results",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          The adaptive traffic control system demonstrated significant improvements across all 
          tested scenarios.
        </p>

        <DashboardCard title="Performance Metrics" glowColor="#00C2FF">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#00E5A8] font-semibold mb-3">Queue Length Reduction</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Peak Hour</span>
                    <span className="text-[#00C2FF] font-semibold">-51%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A8]" style={{ width: '51%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Balanced Traffic</span>
                    <span className="text-[#00C2FF] font-semibold">-34%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A8]" style={{ width: '34%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Incident Scenario</span>
                    <span className="text-[#00C2FF] font-semibold">-42%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00C2FF] to-[#00E5A8]" style={{ width: '42%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[#00E5A8] font-semibold mb-3">Average Delay Improvement</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Peak Hour</span>
                    <span className="text-[#00E5A8] font-semibold">-38%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00E5A8] to-[#00C2FF]" style={{ width: '38%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Balanced Traffic</span>
                    <span className="text-[#00E5A8] font-semibold">-28%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00E5A8] to-[#00C2FF]" style={{ width: '28%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Incident Scenario</span>
                    <span className="text-[#00E5A8] font-semibold">-45%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00E5A8] to-[#00C2FF]" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Key Findings" glowColor="#00E5A8">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#00C2FF] text-sm">1</span>
              </div>
              <div>
                <strong className="text-white">Significant Queue Reduction:</strong> Adaptive 
                control reduced average queue lengths by 42% across all scenarios
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00E5A8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#00E5A8] text-sm">2</span>
              </div>
              <div>
                <strong className="text-white">Lower Travel Delays:</strong> Average vehicle 
                delay decreased by 37%, improving overall traffic flow
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#00C2FF] text-sm">3</span>
              </div>
              <div>
                <strong className="text-white">Better Incident Response:</strong> System 
                adapted quickly to lane closures, minimizing congestion spillback
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00E5A8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#00E5A8] text-sm">4</span>
              </div>
              <div>
                <strong className="text-white">Scalable Solution:</strong> Algorithm 
                performance remained consistent across different traffic volumes
              </div>
            </li>
          </ul>
        </DashboardCard>

        <div className="bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-lg p-6">
          <h4 className="text-[#00C2FF] font-semibold mb-2">Conclusion</h4>
          <p className="text-gray-300 leading-relaxed">
            The UrbanFlow adaptive traffic control system proves to be a viable solution for 
            reducing urban traffic congestion. The queue-based algorithm successfully optimizes 
            signal timing in real-time, leading to substantial improvements in traffic flow and 
            reduced delays. Future work will explore machine learning approaches and multi-intersection 
            coordination.
          </p>
        </div>
      </div>
    ),
  },
};

export function DocumentationPage() {
  const { section } = useParams();
  const currentSection = section || "introduction";
  const content = docContent[currentSection] || docContent.introduction;

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-['Inter']">
      {/* Header */}
      <nav className="sticky top-0 z-50 border-b border-[#1F2937] bg-[#0B0F1A]/95 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#00E5A8] flex items-center justify-center">
                <Signal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                UrbanFlow
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#00C2FF] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#00C2FF] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#111827]/50 border border-[#1F2937] rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-[#00C2FF] font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Documentation
              </h3>
              <nav className="space-y-1">
                {docSections.map((section) => {
                  const isActive = currentSection === section.id;
                  const Icon = section.icon;
                  return (
                    <Link
                      key={section.id}
                      to={`/docs/${section.id}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#00C2FF]/20 text-[#00C2FF] border border-[#00C2FF]/30"
                          : "text-gray-400 hover:text-white hover:bg-[#1F2937]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            <div className="bg-[#111827]/30 border border-[#1F2937] rounded-xl p-8 backdrop-blur-sm">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] bg-clip-text text-transparent">
                {content.title}
              </h1>
              <div className="prose prose-invert prose-lg max-w-none">
                {content.content}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
