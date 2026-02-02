import { Activity, BarChart3, LandPlot } from 'lucide-react';

const SectorCapabilities = () => {
    const sectors = [
        {
            title: "OIL & GAS",
            subtitle: "Operational Reliability & HSE Intelligence",
            icon: <Activity className="w-8 h-8 text-accent-cyan" />,
            focus: ["HSE intelligence systems", "Log and incident analysis", "Automated field reporting"],
            impact: "Up to 20% reduction in equipment downtime."
        },
        {
            title: "MINING & METALS",
            subtitle: "Asset Reliability & Maintenance Excellence",
            icon: <LandPlot className="w-8 h-8 text-accent-gold" />,
            focus: ["Equipment intelligence systems", "Predictive maintenance simulators", "Spare parts optimization"],
            impact: "Multi-million-dollar savings through inventory optimization."
        },
        {
            title: "LEADERSHIP",
            subtitle: "Strategic Decision Support",
            icon: <BarChart3 className="w-8 h-8 text-white" />,
            focus: ["AI-assisted scenario planning", "Executive dashboards", "Cross-functional intelligence"],
            impact: "Reclaiming 8+ hours per week for senior leaders."
        }
    ];

    return (
        <section id="capabilities" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Sector Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white">INDUSTRIAL INTELLIGENCE</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sectors.map((sector, idx) => (
                        <div key={idx} className="group bg-primary border border-white/5 hover:border-accent-cyan/50 p-8 transition-all duration-300">
                            <div className="mb-6 p-4 bg-white/5 rounded-none inline-block border border-white/10 group-hover:border-accent-cyan/30 transition-colors">
                                {sector.icon}
                            </div>

                            <h4 className="text-xl font-display font-bold text-white mb-2">{sector.title}</h4>
                            <p className="text-accent-gold text-sm font-medium mb-6 uppercase tracking-wider">{sector.subtitle}</p>

                            <div className="space-y-4 mb-8">
                                {sector.focus.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-dashed border-white/10">
                                <p className="text-white text-sm">
                                    <span className="text-accent-cyan font-bold">IMPACT: </span>
                                    {sector.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectorCapabilities;
