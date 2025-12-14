
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold tracking-tight">
                        Corp.Edu
                    </div>

                    <div className="flex gap-8">
                        <a href="mailto:urazhanova.kz@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>urazhanova.kz@gmail.com</span>
                        </a>

                    </div>

                    <div className="text-blue-200 text-sm">
                        © 2025 Corp.Edu
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
