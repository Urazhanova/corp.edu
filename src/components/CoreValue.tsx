import coreValueImg from '../assets/core-value.png';

const CoreValue = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <div className="relative order-2 md:order-1">
                    <div className="absolute inset-0 bg-accent-cyan/20 blur-3xl opacity-20 -z-10"></div>
                    <img
                        src={coreValueImg}
                        alt="Knowledge Transformation Flow"
                        className="w-full h-auto rounded-none border border-white/10 shadow-2xl relative z-10"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-accent-gold/40"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-accent-gold/40"></div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Core Value</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                        PRESERVING INSTITUTIONAL KNOWLEDGE AND <span className="text-accent-gold">OPERATIONAL CONTINUITY</span>
                    </h3>

                    <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                        <p>
                            In industrial sectors where experience defines safety, reliability, and performance, knowledge loss represents a strategic risk.
                        </p>
                        <p>
                            CorpEDU AI does not simply deploy tools. We institutionalize the intelligence of senior engineers and operational leaders — transforming tacit expertise into structured, secure AI systems that remain within the organization and evolve with it.
                        </p>
                        <p className="text-white font-medium border-l-2 border-accent-cyan pl-4">
                            The result is long-term operational resilience, workforce continuity, and sovereign control over critical expertise.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreValue;
