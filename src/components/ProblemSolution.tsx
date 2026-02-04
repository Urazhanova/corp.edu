import { AlertTriangle, Clock, Database, BrainCircuit, XCircle } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section id="problem-solution" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">

                {/* The Challenge */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-4">Problem / Solution</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">THE INDUSTRIAL INTELLIGENCE GAP</h3>
                        <p className="text-slate-600 text-lg">
                            Every hour your specialists spend on routine tasks is an hour not spent on strategic work. Meanwhile, competitors are leveraging AI to move faster.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm rounded-none hover:border-red-500/30 transition-colors group">
                            <Clock className="w-8 h-8 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Drowning in Docs</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Searching through hundreds of technical manuals, regulations, and equipment specifications.</p>
                        </div>
                        <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm rounded-none hover:border-red-500/30 transition-colors group">
                            <AlertTriangle className="w-8 h-8 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Reactive Maintenance</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Discovering equipment issues only after failures occur due to slow data analysis.</p>
                        </div>
                        <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm rounded-none hover:border-red-500/30 transition-colors group">
                            <XCircle className="w-8 h-8 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Knowledge Silos</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Critical expertise locked in individual minds, not organizational systems.</p>
                        </div>
                    </div>
                </div>

                {/* The Solution */}
                <div className="grid md:grid-cols-2 gap-12 border-t border-slate-200 pt-16">
                    <div className="bg-slate-50 border border-accent-cyan/20 p-8 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BrainCircuit className="w-32 h-32 text-accent-cyan" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Applied AI Training</h4>
                        <p className="text-accent-cyan text-sm uppercase tracking-wider mb-6">Practical Skills</p>
                        <p className="text-slate-600 leading-relaxed">
                            Hands-on programs that teach your teams to use AI tools safely and effectively—no coding required. Your engineers leave with working prototypes built during training.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-accent-gold/20 p-8 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Database className="w-32 h-32 text-accent-gold" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Intelligent Simulators</h4>
                        <p className="text-accent-gold text-sm uppercase tracking-wider mb-6">Operational Mastery</p>
                        <p className="text-slate-600 leading-relaxed">
                            Custom training environments that replicate real operational scenarios, allowing teams to practice crisis response and decision-making without operational risk.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSolution;
