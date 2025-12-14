
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-12 text-center">О компании</h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-bg-light p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                                    <span className="font-bold text-primary">Corp.Edu</span> — образовательная компания, которая разрабатывает практичные решения для бизнеса и профессионального развития.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                        <p className="text-lg text-gray-700">
                                            Мы создаём онлайн-курсы и тренинги, ориентированные на взрослых: без лишней теории, с понятной логикой и применением в реальной работе.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                        <p className="text-lg text-gray-700">
                                            Работаем на стыке образования, технологий и бизнеса и учитываем, как люди учатся на практике — быстро, осознанно и под конкретные цели.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
                                <img
                                    src="/images/profile.jpg"
                                    alt="Основатель Корп.Еду"
                                    className="relative rounded-2xl shadow-xl w-full h-full object-cover aspect-[4/5]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
