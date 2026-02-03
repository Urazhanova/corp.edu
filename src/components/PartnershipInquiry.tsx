import { useRef, useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const PartnershipInquiry = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        const SERVICE_ID = 'service_aqcyiee';
        const TEMPLATE_ID = 'template_vkhmce8';
        const PUBLIC_KEY = 'BfxXlQv3PM5Dse3qE';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                });
        }
    };

    return (
        <section id="contact" className="py-24 bg-primary relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">BEGIN A STRATEGIC DIALOGUE</h2>
                    <p className="text-gray-300 font-light">
                        Request a private consultation to discuss your operational context, workforce composition, and security requirements.
                    </p>
                </div>

                <div className="bg-surface/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm relative">
                    {status === 'success' ? (
                        <div className="text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-accent-cyan" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Request Sent Successfully</h3>
                            <p className="text-gray-400 mb-8">Thank you. We will contact you shortly to schedule the consultation.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-accent-cyan font-mono text-sm uppercase tracking-wider hover:text-white transition-colors"
                            >
                                Send another request
                            </button>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Name</label>
                                    <input type="text" name="user_name" required className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Company</label>
                                    <input type="text" name="user_company" required className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Organization Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Title</label>
                                    <input type="text" name="user_title" required className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Job Title" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Email</label>
                                    <input type="email" name="user_email" required className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="Work Email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Industry Sector</label>
                                    <select name="industry" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 cursor-pointer">
                                        <option value="Oil & Gas">Oil & Gas</option>
                                        <option value="Mining & Metals">Mining & Metals</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Logistics">Logistics</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Estimated Timeline</label>
                                    <input type="text" name="timeline" className="w-full bg-primary border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors hover:border-white/40 placeholder-primary" placeholder="e.g. Q3 2024" />
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-4 border border-red-500/20 mb-6">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm">There was an error sending your request. Please try again later.</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-white text-primary font-bold py-4 uppercase tracking-widest hover:bg-accent-cyan transition-colors flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending Request...
                                    </>
                                ) : (
                                    <>
                                        Initiate Consultation
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PartnershipInquiry;
