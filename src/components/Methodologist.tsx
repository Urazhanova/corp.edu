import { motion } from 'framer-motion';

const Methodologist = () => {
    return (
        <section className="py-20 bg-bg-lighter">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="absolute inset-0 bg-accent/10 rounded-2xl transform -rotate-3 -translate-x-2 translate-y-2"></div>
                            <img
                                src="/images/profile.jpg"
                                alt="Ирина Уражанова"
                                className="relative rounded-2xl shadow-xl w-full h-full object-cover aspect-[4/5]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl font-bold text-primary mb-2">Ведущий методолог</h2>
                            <h3 className="text-2xl font-semibold text-accent mb-8">Ирина Уражанова</h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                    <p className="text-lg text-gray-700">
                                        Преподаватель AlmaU по курсу MBA «Цифровая трансформация бизнеса»
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                    <p className="text-lg text-gray-700">
                                        Экс-руководитель Ozon University
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                    <p className="text-lg text-gray-700">
                                        Более 10 лет в EdTech — от педагогического дизайна до AI-разработки
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                    <p className="text-lg text-gray-700">
                                        Эксперт по внедрению ИИ в корпоративное обучение
                                    </p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodologist;
