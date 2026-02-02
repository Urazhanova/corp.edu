import { Send } from 'lucide-react';

const PartnershipInquiry = () => {
    return (
        <section id="contact" className="py-24 bg-primary relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">BEGIN A STRATEGIC DIALOGUE</h2>
                    <p className="text-gray-300 font-light">
                        Request a private consultation to discuss your operational context, workforce composition, and security requirements.
                    </p>
                </div>

                <form className="bg-surface/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Name</label>
                            <input type="text" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Company</label>
                            <input type="text" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Organization Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Title</label>
                            <input type="text" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Job Title" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Industry Sector</label>
                            <select className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 cursor-pointer">
                                <option>Oil & Gas</option>
                                <option>Mining & Metals</option>
                                <option>Manufacturing</option>
                                <option>Logistics</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2 mb-12">
                        <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Estimated Timeline</label>
                        <input type="text" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="e.g. Q3 2024" />
                    </div>

                    <button type="submit" className="w-full bg-white text-primary font-bold py-4 uppercase tracking-widest hover:bg-accent-cyan transition-colors flex items-center justify-center gap-4">
                        Initiate Consultation
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PartnershipInquiry;
