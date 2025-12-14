
import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap, Lightbulb } from 'lucide-react';

const clients = [
    {
        icon: <Building2 className="w-8 h-8 text-white" />,
        title: "Корпоративные команды",
        color: "bg-primary"
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Руководители и менеджеры",
        color: "bg-accent"
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-white" />,
        title: "Образовательные проекты",
        color: "bg-primary"
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        title: "Эксперты и специалисты",
        desc: "создающие собственные курсы",
        color: "bg-accent"
    }
];

const Clients = () => {
    return (
        <section className="py-20 bg-bg-light">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary mb-16 text-center">С кем мы работаем</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${client.color} group-hover:scale-110 transition-transform duration-300`}>
                                {client.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{client.title}</h3>
                            {client.desc && <p className="text-sm text-gray-500">{client.desc}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
