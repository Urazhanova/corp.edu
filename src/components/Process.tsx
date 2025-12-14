
import { motion } from 'framer-motion';

const steps = [
    { number: "01", title: "Запрос и формулирование задачи" },
    { number: "02", title: "Анализ аудитории и целей" },
    { number: "03", title: "Разработка образовательного решения" },
    { number: "04", title: "Внедрение и запуск" }
];

const Process = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary mb-16 text-center">Как мы работаем</h2>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line (Desktop) */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                                )}

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary font-bold text-xl flex items-center justify-center mb-6 shadow-sm z-10">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 max-w-[200px]">{step.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
