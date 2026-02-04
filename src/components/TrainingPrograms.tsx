import { useState } from 'react';
import { Droplets, Hammer, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const TrainingPrograms = () => {
    const [activeTab, setActiveTab] = useState(0);

    const programs = [
        {
            id: 'oil-gas',
            title: "Oil & Gas Operations",
            icon: <Droplets className="w-5 h-5" />,
            programTitle: "Applied AI for Engineers & Field Managers",
            audience: ["Production engineers", "HSE coordinators", "Operations supervisors"],
            modules: [
                { title: "Tech Doc Intelligence", desc: "Build searchable knowledge bases from 50+ operating procedures." },
                { title: "Operational Data Analysis", desc: "Analyze equipment logs to identify patterns before failures." },
                { title: "Automated Reporting", desc: "Transform field notes into incident reports in 5 minutes." },
                { title: "Safety & Compliance", desc: "Build HSE assistants and automated permit-to-work checklists." }
            ],
            outcomes: ["Operational knowledge base", "Log analysis templates", "Automated workflows"]
        },
        {
            id: 'mining',
            title: "Metals & Mining",
            icon: <Hammer className="w-5 h-5" />,
            programTitle: "AI-Powered Operations & Maintenance Excellence",
            audience: ["Metallurgical engineers", "Maintenance planners", "Production supervisors"],
            modules: [
                { title: "Equipment Intelligence", desc: "Analyze sensor data to predict bearing failures and wear." },
                { title: "Process Optimization", desc: "Generate 'what-if' scenarios for process parameter changes." },
                { title: "Operational Reporting", desc: "Transform shift handover notes into structured reports." },
                { title: "Safety & Standards", desc: "Automated hazard identification from site photos." }
            ],
            outcomes: ["Diagnostic knowledge base", "Predictive alert prototypes", "Shift reporting system"]
        },
        {
            id: 'corporate',
            title: "Back Office",
            icon: <Briefcase className="w-5 h-5" />,
            programTitle: "AI for Business Process Automation",
            audience: ["Finance teams", "HR & Admin", "Procurement", "Legal"],
            modules: [
                { title: "Document Intelligence", desc: "Extract data from invoices and contracts automatically." },
                { title: "Data Analysis", desc: "Generate financial summaries and recurring reports." },
                { title: "Communication", desc: "Draft professional correspondence in multiple languages." },
                { title: "Process Automation", desc: "Create workflow automation and approval routing." }
            ],
            outcomes: ["Document automation", "Report templates", "Multi-language tools"]
        },
        {
            id: 'leadership',
            title: "Leadership",
            icon: <Users className="w-5 h-5" />,
            programTitle: "AI-Enhanced Executive Leadership",
            audience: ["C-suite executives", "Department directors", "Strategy leaders"],
            modules: [
                { title: "Strategic Intelligence", desc: "Rapid competitive analysis and scenario planning." },
                { title: "Data-Driven Decisions", desc: "Transform complex data into executive summaries." },
                { title: "Knowledge Management", desc: "Preserve and scale expert knowledge." },
                { title: "Team Productivity", desc: "Identify AI opportunities across departments." }
            ],
            outcomes: ["Research assistant", "Executive dashboard", "Strategic toolkit"]
        }
    ];

    return (
        <section id="training" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Industry-Specific Training</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">TRAINING BUILT FOR YOUR REALITY</h3>
                    <p className="text-slate-600 max-w-2xl">Generic AI training doesn't work for industrial operations. Our programs address the specific challenges, regulations, and workflows of your sector.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tabs / Navigation */}
                    <div className="w-full md:w-1/4 flex flex-col gap-2">
                        {programs.map((prog, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`text-left px-6 py-4 flex items-center gap-4 transition-all duration-300 border-l-2 ${activeTab === idx
                                    ? 'bg-white border-accent-cyan text-slate-900 shadow-md'
                                    : 'border-slate-200 text-slate-500 hover:bg-white hover:text-slate-900'
                                    }`}
                            >
                                <span className={`${activeTab === idx ? 'text-accent-cyan' : 'text-slate-400'}`}>
                                    {prog.icon}
                                </span>
                                <span className="font-bold text-sm tracking-wide uppercase">{prog.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-3/4 bg-white border border-slate-200 shadow-sm p-8 md:p-12 relative min-h-[500px]">

                        <div key={activeTab} className="animate-fade-in">
                            <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">{programs[activeTab].programTitle}</h4>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {programs[activeTab].audience.map((role, i) => (
                                    <span key={i} className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">
                                        {role}
                                    </span>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                                {programs[activeTab].modules.map((mod, i) => (
                                    <div key={i}>
                                        <h5 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></span>
                                            {mod.title}
                                        </h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-100 pt-8">
                                <h5 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Practical Outcomes</h5>
                                <div className="flex flex-wrap gap-4">
                                    {programs[activeTab].outcomes.map((outcome, i) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-700 text-sm bg-slate-50 px-4 py-2 rounded-none border border-slate-200">
                                            <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                                            {outcome}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-12 p-6 bg-accent-cyan/5 border border-accent-cyan/20 text-center">
                    <p className="text-accent-cyan font-mono text-sm">
                        FORMAT: 1-2 DAYS INTENSIVE | ON-SITE DELIVERY | CUSTOMIZED TO YOUR DATA
                    </p>
                </div>

            </div>
        </section>
    );
};

export default TrainingPrograms;
