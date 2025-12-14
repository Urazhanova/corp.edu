import { motion } from 'framer-motion';
import { RefreshCw, Users, MessageSquare, Zap } from 'lucide-react';

const problems = [
    {
        icon: RefreshCw,
        title: "Автоматизация обучения",
        description: "Вы тратите ресурсы HR и линейных руководителей на повторяющиеся инструктажи. Мы создаем онлайн-курсы, которые берут эту функцию на себя — с прозрачной статистикой и автоматической проверкой знаний."
    },
    {
        icon: Users,
        title: "Адаптация новых сотрудников",
        description: "Новички долго разбираются в процессах компании и архитектуре продукта. Мы разрабатываем интерактивные курсы и симуляции, которые ускоряют онбординг в 2-3 раза."
    },
    {
        icon: MessageSquare,
        title: "Тренажеры для продаж и сервиса",
        description: "Менеджеры учатся на клиентах, допуская дорогостоящие ошибки. Мы создаем AI-тренажеры, где команда отрабатывает переговоры, возражения и сложные кейсы без последствий для бизнеса."
    },
    {
        icon: Zap,
        title: "Повышение личной эффективности",
        description: "Сотрудники не используют возможности ИИ в работе. Мы проводим практические тренинги, где учим применять ИИ-инструменты для автоматизации рутины и роста продуктивности."
    }
];

const Problems = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-primary mb-4"
                    >
                        Какие задачи мы решаем
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
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

export default Problems;
