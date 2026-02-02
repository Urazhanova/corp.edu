import { TrendingUp, Clock, Users, Shield } from 'lucide-react';

const Results = () => {
    return (
        <section id="results" className="py-24 bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">MEASURABLE IMPACT</h2>
                    <p className="text-gray-400">We track outcomes, not completion rates.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Operational Efficiency */}
                    <div className="p-6 bg-surface/20 border border-white/5 hover:border-accent-cyan transition-colors">
                        <Clock className="w-8 h-8 text-accent-cyan mb-4" />
                        <h4 className="text-white font-bold mb-4">Operatonal Efficiency</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Reporting Time</p>
                                <p className="text-white font-mono">1 hr → 5 min</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Data Analysis</p>
                                <p className="text-white font-mono">30% failure prevention</p>
                            </div>
                        </div>
                    </div>

                    {/* Knowledge Management */}
                    <div className="p-6 bg-surface/20 border border-white/5 hover:border-accent-gold transition-colors">
                        <TrendingUp className="w-8 h-8 text-accent-gold mb-4" />
                        <h4 className="text-white font-bold mb-4">Knowledge</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Onboarding Speed</p>
                                <p className="text-white font-mono">+40% faster</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Expert Access</p>
                                <p className="text-white font-mono">24/7 available</p>
                            </div>
                        </div>
                    </div>

                    {/* Safety & Compliance */}
                    <div className="p-6 bg-surface/20 border border-white/5 hover:border-red-400 transition-colors">
                        <Shield className="w-8 h-8 text-red-400 mb-4" />
                        <h4 className="text-white font-bold mb-4">Safety</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Compliance</p>
                                <p className="text-white font-mono">70% → 95%</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Permit Accuracy</p>
                                <p className="text-white font-mono">~100%</p>
                            </div>
                        </div>
                    </div>

                    {/* Workforce */}
                    <div className="p-6 bg-surface/20 border border-white/5 hover:border-white transition-colors">
                        <Users className="w-8 h-8 text-white mb-4" />
                        <h4 className="text-white font-bold mb-4">Workforce</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Skill Acquisition</p>
                                <p className="text-white font-mono">+40% acceleration</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Retention</p>
                                <p className="text-white font-mono">Improves high performers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
