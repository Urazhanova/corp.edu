import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2z6lW5Pzn-M7FVfKeUdSw17ghMfrlbebbiiLBaqgqmbV_kwvkscVZmVwL8w2abtEN/exec';

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Since mode is no-cors, we can't read the response status.
            // We assume success if no network error occurred.
            setStatus('success');
            setFormData({ name: '', contact: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20 bg-bg-lighter" id="contact">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-primary p-8 md:p-10 text-white text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Обсудить задачу</h2>
                            <p className="text-blue-100 text-lg">
                                Если у вас есть задача или идея — напишите. Я посмотрю, сможем ли мы быть полезны.
                            </p>
                        </div>

                        <div className="p-8 md:p-10">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Заявка отправлена!</h3>
                                    <p className="text-gray-600 mb-8">Спасибо за обращение. Я свяжусь с вами в ближайшее время.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        Отправить еще одну заявку
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Ваше имя"
                                            disabled={status === 'sending'}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">Email или Telegram</label>
                                        <input
                                            type="text"
                                            id="contact"
                                            name="contact"
                                            required
                                            value={formData.contact}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Как с вами связаться"
                                            disabled={status === 'sending'}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Короткое описание задачи</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Опишите вашу задачу..."
                                            disabled={status === 'sending'}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            <p className="text-sm">Произошла ошибка при отправке. Пожалуйста, проверьте подключение или напишите нам напрямую на почту.</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Отправка...
                                            </>
                                        ) : (
                                            <>
                                                Отправить запрос
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        Нажимая на кнопку «Оставить заявку», вы даете согласие на обработку персональных данных и соглашаетесь c <Link to="/privacy" className="underline hover:text-primary transition-colors">политикой конфиденциальности</Link>
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
