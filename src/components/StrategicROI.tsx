// Component uses no icons currently, or checks if used.

const StrategicROI = () => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">STRATEGIC ROI</h2>
                    <p className="text-gray-400">The Long View</p>
                </div>

                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { phase: "Phase 1", title: "Quick Wins", desc: "Reporting efficiency and documentation automation", color: "border-accent-cyan" },
                            { phase: "Phase 2", title: "Scaling", desc: "Workforce capability multiplication and cross-site knowledge transfer", color: "border-accent-gold" },
                            { phase: "Phase 3", title: "Transformation", desc: "Secured intellectual capital, long-term resilience, and sustained leadership", color: "border-white" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-primary p-8 border border-white/5 z-10 hover:-translate-y-2 transition-transform duration-300">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${idx === 0 ? 'via-accent-cyan' : idx === 1 ? 'via-accent-gold' : 'via-white'} to-transparent`}></div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">{item.phase}</span>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicROI;
