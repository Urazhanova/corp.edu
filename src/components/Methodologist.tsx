import { motion } from 'framer-motion';

const Methodologist = () => {
    return (
        <section className="py-20 bg-bg-lighter" id="team">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Наша команда</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Irina Urazhanova */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="relative w-3/4 mx-auto md:w-full md:max-w-sm">
                                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform -rotate-3 -translate-x-2 translate-y-2"></div>
                                <img
                                    src="/images/profile.jpg"
                                    alt="Ирина Уражанова"
                                    className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                                />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-2">Ирина Уражанова</h3>
                                <h4 className="text-xl font-medium text-accent mb-6">Ведущий методолог</h4>

                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Преподаватель AlmaU по курсу MBA «Цифровая трансформация бизнеса»
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Экс-руководитель Ozon University
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Более 10 лет в EdTech — от педагогического дизайна до AI-разработки
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Эксперт по внедрению ИИ в корпоративное обучение
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Alexander Barsky */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="relative w-3/4 mx-auto md:w-full md:max-w-sm">
                                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
                                <img
                                    src="/images/Alexander.jpeg"
                                    alt="Александр Барский"
                                    className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                                />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-2">Александр Барский</h3>
                                <h4 className="text-xl font-medium text-accent mb-6">Старший консультант по технологиям и отраслевым решениям</h4>

                                <div className="space-y-6">
                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Профессиональный опыт</h5>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                                <p className="text-gray-700 leading-relaxed">
                                                    Создавал и масштабировал полноценные образовательные экосистемы: учебные программы, системы оценки, контроль качества и управление.
                                                </p>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                                <p className="text-gray-700 leading-relaxed">
                                                    Более 3 лет внедряет ИИ и работу с данными в образовательный дизайн и креативные академии.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-2 text-lg">Область экспертизы</h5>
                                        <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-accent">
                                            Промышленные системы искусственного интеллекта, системы поддержки операционных решений, экосистемы развития талантов.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodologist;
