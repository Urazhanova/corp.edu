import { ArrowRight, ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Industrial Refinery at Night"
                    className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent-cyan/30 rounded-full bg-accent-cyan/10 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                        <span className="text-accent-cyan text-xs font-mono tracking-widest uppercase">Trusted by Leading Industrial Enterprises</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                        TRANSFORM YOUR WORKFORCE WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-cyan">AI-POWERED TRAINING</span> SOLUTIONS
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-12 leading-relaxed">
                        Practical AI training and intelligent simulators that eliminate routine work, accelerate decision-making, and deliver measurable ROI.
                        <br /><span className="text-white text-lg mt-4 block">We don't replace your engineering systems—we eliminate the routine around them.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-20">
                        <a href="#contact" className="group relative px-8 py-4 bg-accent-cyan text-primary font-bold text-sm tracking-widest uppercase overflow-hidden rounded-none hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3">
                            Schedule a Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 border border-white/20 hover:border-accent-cyan text-white hover:text-accent-cyan font-bold text-sm tracking-widest uppercase bg-white/5 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            Explore Training Programs
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Key Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                        <div>
                            <span className="block text-3xl font-bold text-white mb-1">70%</span>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Reduction in Reporting Time</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white mb-1">5 min</span>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Report Generation</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white mb-1">50+</span>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Regulations Uploaded</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white mb-1">Real-time</span>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Log Analysis</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
