import { ShieldCheck, Lock, Server } from 'lucide-react';

const SovereigntySecurity = () => {
    return (
        <section className="py-24 bg-surface text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <ShieldCheck className="w-16 h-16 text-accent-gold mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        SOVEREIGN AI. FULL DATA CONTROL. <br />
                        <span className="text-accent-cyan">ZERO COMPROMISE.</span>
                    </h2>
                    <p className="text-gray-300 text-lg font-light leading-relaxed">
                        Our architectures are designed to align with the most stringent security, data residency, and governance requirements applied by national regulators and energy authorities.
                        <br /><span className="text-white font-medium mt-2 block">Your data remains fully within your perimeter — always.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-primary p-6 border-l-2 border-accent-cyan">
                        <Server className="w-6 h-6 text-white mb-4" />
                        <h4 className="text-white font-bold mb-2">On-Premise Deployment</h4>
                        <p className="text-sm text-gray-400">Full isolation from public networks.</p>
                    </div>
                    <div className="bg-primary p-6 border-l-2 border-accent-cyan">
                        <Lock className="w-6 h-6 text-white mb-4" />
                        <h4 className="text-white font-bold mb-2">Data Anonymization</h4>
                        <p className="text-sm text-gray-400">Proprietary identifiers never exposed.</p>
                    </div>
                    <div className="bg-primary p-6 border-l-2 border-accent-cyan">
                        <ShieldCheck className="w-6 h-6 text-white mb-4" />
                        <h4 className="text-white font-bold mb-2">Air-Gapped Training</h4>
                        <p className="text-sm text-gray-400">Secure offline systems for sensitive ops.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SovereigntySecurity;
