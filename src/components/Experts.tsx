// Image imported via direct path in JSX
// Actually in vite /images/profile.jpg works if in public. Importing from public in code:
// Best practice: just use string path "/images/profile.jpg" or import if in src.
// Since it was working as src="/images/profile.jpg", I will stick to that string.

const Experts = () => {
    return (
        <section id="experts" className="py-24 bg-primary border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Experts in Industrial Knowledge Transformation</h2>
                    <p className="text-xl text-gray-300 font-light leading-relaxed">
                        CorpEDU AI solutions are developed and validated by senior experts combining academic rigor, large-scale corporate leadership, and hands-on experience in AI-enabled transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Expert 1 */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-48 aspect-[3/4] bg-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                                {/* Using existing profile image */}
                                <img src="/images/profile.jpg" alt="Irina Urazhanova" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-display font-bold text-white mb-1">Irina Urazhanova</h3>
                                <p className="text-accent-gold text-sm uppercase tracking-wider mb-6">Lead Methodologist & Academic Director</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Professional Background</h4>
                                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                            <li>Faculty Member, AlmaU (MBA Digital Transformation)</li>
                                            <li>Former Head of Ozon University</li>
                                            <li>10+ years in EdTech & Corporate Education</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Area of Expertise</h4>
                                        <p className="text-sm text-gray-400">AI implementation in corporate leaning, Workforce capability transformation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expert 2 (Placeholder) */}
                    <div className="group relative opacity-80">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-48 aspect-[3/4] bg-gray-800 flex items-center justify-center border border-white/10">
                                <span className="text-gray-600 font-mono text-xs">IMG PLACEHOLDER</span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-display font-bold text-white mb-1">Alexander Barsky</h3>
                                <p className="text-accent-gold text-sm uppercase tracking-wider mb-6">Senior Industry & Technology Advisor</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Professional Background</h4>
                                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                            <li>Senior executive experience in industrial orgs</li>
                                            <li>Expertise in aligning AI with safety regs</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Area of Expertise</h4>
                                        <p className="text-sm text-gray-400">Industrial AI systems, Operational decision support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experts;
