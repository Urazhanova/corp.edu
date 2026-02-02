import { ShieldCheck, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-xl font-display font-bold text-white tracking-widest mb-6">
                            CORP<span className="text-accent-cyan">EDU</span> AI
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Sovereign industrial AI transformation partner. Secure, on-premise, enterprise-grade.
                        </p>
                    </div>

                    {/* Spacing or Links could go here, but sticking to TA specific footer items */}
                    <div className="col-span-1 md:col-span-3 grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-accent-gold" />
                                Compliance
                            </h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>ISO 27001 Certified</li>
                                <li>GDPR Compliant</li>
                                <li>National Data Residency Ready</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-accent-cyan" />
                                Regional Presence
                            </h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>Riyadh</li>
                                <li>Astana</li>
                                <li>Dubai</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Resources</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>
                                    <a href="#" className="hover:text-accent-cyan transition-colors border-b border-transparent hover:border-accent-cyan inline-block pb-0.5">
                                        Security & Compliance White Paper
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} CorpEDU AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
