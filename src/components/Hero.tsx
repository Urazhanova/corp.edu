
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-light to-white overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-1/4" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight"
                    >
                        Corp.Edu
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl text-gray-800 mb-6 font-bold"
                    >
                        Обучение, которое работает
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
                    >
                        Создаем интерактивные обучающие продукты с AI для крупных компаний
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg text-gray-500 mb-12 font-medium"
                    >
                        Для HR-директоров и руководителей L&D
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        onClick={scrollToContact}
                        className="group bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                    >
                        Обсудить задачу
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
