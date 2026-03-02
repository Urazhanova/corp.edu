import simInterface from '../assets/sim-interface.png';
import { AlertTriangle, BookOpen, BrainCircuit, Network } from 'lucide-react';

const IntelligentSimulators = () => {
    return (
        <section id="simulators" className="py-24 bg-primary border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Simulation Solutions</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                            BEYOND TRAINING: <br />
                            <span className="text-accent-gold">INTELLIGENT LEARNING ENVIRONMENTS</span>
                        </h3>

                        <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-8">
                            <p>
                                Training creates knowledge. <strong>Simulation creates mastery.</strong>
                            </p>
                            <p>
                                Our intelligent simulators replicate real operational conditions, allowing teams to practice high-stakes scenarios without operational risk.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-accent-cyan/10 blur-3xl opacity-20"></div>
                        <img
                            src={simInterface}
                            alt="Digital Twin Simulator Interface"
                            className="w-full h-auto border border-accent-cyan/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative z-10"
                        />
                        <div className="absolute top-4 right-4 bg-red-900/80 border border-red-500/50 text-red-200 text-xs font-mono px-2 py-1 z-20 animate-pulse">
                            CRISIS SCENARIO ACTIVE
                        </div>
                    </div>
                </div>

                {/* Simulator Types Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-surface/50 p-6 border border-white/5 hover:border-[#c39f64]/30 transition-all group">
                        <AlertTriangle className="w-8 h-8 text-[#c39f64] mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-2">Operational Crisis</h4>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">Immersive environments replicating equipment failures and emergency scenarios.</p>
                        <span className="text-accent-cyan text-xs font-mono uppercase tracking-wider">Use Case: Emergency Response</span>
                    </div>

                    <div className="bg-surface/50 p-6 border border-white/5 hover:border-[#c39f64]/30 transition-all group">
                        <BookOpen className="w-8 h-8 text-[#c39f64] mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-2">Technical Skills</h4>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">Interactive learning identifying gaps and adapting to individual skill levels.</p>
                        <span className="text-accent-gold text-xs font-mono uppercase tracking-wider">Use Case: Certification</span>
                    </div>

                    <div className="bg-surface/50 p-6 border border-white/5 hover:border-[#c39f64]/30 transition-all group">
                        <BrainCircuit className="w-8 h-8 text-[#c39f64] mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-2">Decision Engines</h4>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">AI scenarios training managers to make better choices under pressure.</p>
                        <span className="text-accent-cyan text-xs font-mono uppercase tracking-wider">Use Case: Resource Planning</span>
                    </div>

                    <div className="bg-surface/50 p-6 border border-white/5 hover:border-[#c39f64]/30 transition-all group">
                        <Network className="w-8 h-8 text-[#c39f64] mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-2">Knowledge Preservation</h4>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">Capturing expertise of senior personnel before they retire.</p>
                        <span className="text-accent-gold text-xs font-mono uppercase tracking-wider">Use Case: Expert Retiring</span>
                    </div>
                </div>

                <div className="mt-16 bg-primary border border-white/10 p-8 text-center">
                    <span className="text-accent-cyan text-sm font-bold uppercase tracking-widest block mb-2">Custom Development Process</span>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
                        <span>1. Discovery (Week 1-2)</span>
                        <span className="hidden md:block w-8 h-px bg-white/20"></span>
                        <span>2. Design (Week 3-4)</span>
                        <span className="hidden md:block w-8 h-px bg-white/20"></span>
                        <span>3. Development (Week 5-10)</span>
                        <span className="hidden md:block w-8 h-px bg-white/20"></span>
                        <span>4. Testing (Week 11-12)</span>
                        <span className="hidden md:block w-8 h-px bg-white/20"></span>
                        <span className="text-white font-bold">5. Deployment (Week 13+)</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default IntelligentSimulators;
