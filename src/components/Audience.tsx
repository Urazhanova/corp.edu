import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const checklist = [
    "Большой штат или высокая ротация — нужна автоматизация обучения",
    "Новички долго адаптируются — теряете время и деньги",
    "Уникальный продукт — клиентам нужно долго объяснять",
    "Нужны тренажеры для команды продаж без риска для клиентов",
    "Хотите измеримый эффект от L&D, а не \"обучение для галочки\""
];

const Audience = () => {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    >
                        Вам подойдет Corp.Edu, если:
                    </motion.h2>

                    <div className="space-y-6">
                        {checklist.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                            >
                                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-lg md:text-xl font-medium">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Audience;
