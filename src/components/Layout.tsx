import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import TelegramFloatButton from './TelegramFloatButton';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Problems', id: 'problem-solution' },
        { label: 'Training', id: 'training' },
        { label: 'Simulators', id: 'simulators' },
        { label: 'Methodology', id: 'methodology' },
        { label: 'Experts', id: 'experts' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-primary text-text-primary font-sans selection:bg-accent-cyan selection:text-primary">
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-display font-bold tracking-wider text-white">
                        CORP<span className="text-accent-cyan">EDU</span> AI
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-10">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm font-medium tracking-wide uppercase hover:text-accent-cyan transition-colors text-gray-300"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-primary border-b border-white/10 p-6 shadow-xl md:hidden flex flex-col gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left py-2 text-white font-medium hover:text-accent-cyan uppercase tracking-wide"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            <main className="flex-grow">
                {children}
            </main>
            <TelegramFloatButton />
        </div>
    );
};

export default Layout;
