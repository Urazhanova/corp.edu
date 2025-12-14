import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

    return (
        <div className="min-h-screen flex flex-col">
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
                        <img src="/logo.png" alt="Corp.Edu" className="h-14 w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-8">
                        {['Продукты', 'Контакты'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item === 'Контакты' ? 'contact' : item === 'Продукты' ? 'products' : '')}
                                className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg md:hidden flex flex-col gap-4">
                        {['Продукты', 'Контакты'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item === 'Контакты' ? 'contact' : item === 'Продукты' ? 'products' : '')}
                                className="text-left py-2 text-gray-800 font-medium hover:text-accent"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;
