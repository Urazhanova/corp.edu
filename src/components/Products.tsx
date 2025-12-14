
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, MessageSquare } from 'lucide-react';

const Products = () => {
    const solutions = [
        {
            icon: BrainCircuit,
            title: "Тренинги по искусственному интеллекту",
            description: "Практический тренинг в удобном формате (онлайн или очно, от 3 часов до 2 дней), где сотрудники создают собственные AI-инструменты для работы: персональных ассистентов, Telegram-ботов, генерируют контент и автоматизируют коммуникации.",
            result: "Готовые рабочие прототипы и навыки, которые экономят 5-10 часов в неделю."
        },
        {
            icon: BookOpen,
            title: "Разработка онлайн-курсов",
            description: "Создаем интерактивные курсы под ключ в формате SCORM — от онбординга и продуктового обучения до сложных технических регламентов. Три формата на выбор: лонгриды, видеокурсы, тренажеры-симуляторы.",
            result: "Автоматизированное обучение с измеримыми метриками. Загружается в любую LMS за минуту.",
            extra: "Срок разработки: от 3 недель"
        },
        {
            icon: MessageSquare,
            title: "AI-симуляторы и тренажеры",
            description: "Разрабатываем интерактивные тренажеры с живыми AI-персонажами для отработки коммуникативных навыков: переговоры, обратная связь, делегирование, работа с возражениями. Сотрудник практикуется, AI адаптируется и дает персонализированную обратную связь.",
            result: "Навыки применяются в реальной работе. Упаковано в SCORM, работает в вашей LMS.",
            extra: "Срок разработки: 4-6 недель"
        }
    ];

    return (
        <section className="py-20 bg-bg-lighter" id="products">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary mb-16 text-center">Наши решения</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border-t-4 border-accent flex flex-col h-full"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                            <p className="text-gray-700 mb-6 flex-grow">
                                {item.description}
                            </p>

                            <div className="border-t pt-4 mt-auto">
                                <p className="text-sm font-medium text-gray-900 mb-2">
                                    <span className="text-accent font-bold">Результат: </span>
                                    {item.result}
                                </p>
                                <p className={`text-sm text-gray-500 mt-2 ${!item.extra ? 'invisible' : ''}`}>
                                    {item.extra || '\u00A0'}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
