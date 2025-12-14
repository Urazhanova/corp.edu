
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const History = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Моя история</h2>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center border-4 border-bg-light shadow-inner">
                                    <User className="w-20 h-20 text-gray-400" />
                                    {/* Placeholder for photo if available later */}
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 space-y-6 text-lg text-gray-700">
                                <p>
                                    <span className="font-bold text-primary">Меня зовут Ира Уражанова.</span><br />
                                    Я — методист, разработчик образовательных продуктов и основатель Корп.Еду.
                                </p>

                                <p>
                                    Моя роль сочетает две позиции: предпринимателя и ремесленника. Я не только управляю компанией, но и лично участвую в создании продуктов — от методологии и структуры курсов до сценариев обучения и форматов взаимодействия с аудиторией.
                                </p>

                                <p>
                                    Я пришла в образование из практики работы с бизнесом и командами и хорошо понимаю, что взрослые учатся не ради знаний, а ради изменений. Поэтому в основе всех продуктов Корп.Еду — практичность, ясность и уважение ко времени человека.
                                </p>

                                <div className="bg-bg-light p-6 rounded-xl border-l-4 border-accent mt-4">
                                    <p className="italic text-gray-800">
                                        Корп.Еду выросла из моего профессионального опыта и подхода к обучению, поэтому компания сохраняет «ручную сборку» продуктов и внимание к деталям.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default History;
