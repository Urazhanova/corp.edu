import { ShieldCheck, Target, Layers, UserCheck } from 'lucide-react';

const Methodology = () => {
    return (
        <section id="methodology" className="py-24 bg-surface text-center">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Our Methodology</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">WE DELIVER RESULTS, NOT INFORMATION</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">We don't believe in "training theater". Our methodology ensures every participant leaves with working tools they can use immediately.</p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-left border-b border-white/5 pb-16 mb-16">
                    <div className="p-4 border border-white/5 bg-primary/30">
                        <div className="mb-4 text-accent-cyan"><Target className="w-6 h-6" /></div>
                        <h4 className="text-white font-bold text-sm mb-2">1. Your Reality</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">No generic examples. We use your actual documents and data.</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-primary/30">
                        <div className="mb-4 text-accent-gold"><HammerIcon className="w-6 h-6" /></div>
                        <h4 className="text-white font-bold text-sm mb-2">2. Build, Don't Just Learn</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">70% guided building. Create working tools during training.</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-primary/30">
                        <div className="mb-4 text-red-400"><ShieldCheck className="w-6 h-6" /></div>
                        <h4 className="text-white font-bold text-sm mb-2">3. Safety First</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">Strict data protocols and hallucination verification.</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-primary/30">
                        <div className="mb-4 text-white"><Layers className="w-6 h-6" /></div>
                        <h4 className="text-white font-bold text-sm mb-2">4. Gradual Complexity</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">From simple search to complex system integration.</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-primary/30">
                        <div className="mb-4 text-accent-cyan"><UserCheck className="w-6 h-6" /></div>
                        <h4 className="text-white font-bold text-sm mb-2">5. Reinforcement</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">30-day support to ensure skills become habits.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-primary p-8 border border-white/10">
                        <h4 className="text-xl font-bold text-white mb-2">On-Site Intensive</h4>
                        <p className="text-gray-400 text-sm mb-4">We come to you.</p>
                        <ul className="text-left text-sm text-gray-500 space-y-2">
                            <li>• Your equipment & network</li>
                            <li>• Max privacy</li>
                            <li>• Best for sensitive ops</li>
                        </ul>
                    </div>
                    <div className="bg-primary p-8 border border-white/10">
                        <h4 className="text-xl font-bold text-white mb-2">Regional Hub</h4>
                        <p className="text-gray-400 text-sm mb-4">Partner facility training.</p>
                        <ul className="text-left text-sm text-gray-500 space-y-2">
                            <li>• Shared infrastructure</li>
                            <li>• Reduced cost</li>
                            <li>• Peer networking</li>
                        </ul>
                    </div>
                    <div className="bg-primary p-8 border border-white/10">
                        <h4 className="text-xl font-bold text-white mb-2">Hybrid Model</h4>
                        <p className="text-gray-400 text-sm mb-4">Virtual + On-site.</p>
                        <ul className="text-left text-sm text-gray-500 space-y-2">
                            <li>• Virtual foundation</li>
                            <li>• Practical workshop</li>
                            <li>• Ongoing support</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

const HammerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" /><path d="M17.64 15 22 10.64" /><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H14.14c-.83 0-1.64.32-2.25.92L9.62 10.1" /><path d="c-5 5 5 5 5" /></svg>
)

export default Methodology;
