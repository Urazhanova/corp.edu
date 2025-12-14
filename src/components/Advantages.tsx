import { motion } from 'framer-motion';
import { Award, Briefcase, Code2, Database, TrendingUp, CheckCircle2 } from 'lucide-react';

const advantages = [
    {
        icon: Briefcase,
        title: "10+ лет опыта с крупными компаниями",
        description: "ERG, Alageum Electric, AlmaU, Nickol, Balton, Ozon University"
    },
    {
        icon: Award,
        title: "Экспертиза в EdTech более 10 лет",
        description: "Создаем корпоративное обучение — знаем, что работает на практике, а что остается теорией"
    },
    {
        icon: Code2,
        title: "AI-ассистированная разработка",
        description: "Используем современные AI-технологии и LLM-интеграции — делаем быстрее и гибче, чем студии кастомной разработки"
    },
    {
        icon: Database,
        title: "SCORM-совместимость",
        description: "Все наши продукты работают в вашей LMS"
    },
    {
        icon: TrendingUp,
        title: "Измеримые результаты",
        description: "Не курсы ради курсов — фокусируемся на метриках бизнеса: скорость адаптации, качество работы, продуктивность"
    },
    {
        icon: CheckCircle2,
        title: "Работаем под ключ",
        description: "От концепции до аналитики. Методология + дизайн + разработка + сопровождение внедрения"
    }
];

const Advantages = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary mb-16 text-center">Почему Corp.Edu</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
