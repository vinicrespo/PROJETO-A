import React, { useState } from 'react';
import { Mail, ShieldCheck, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: "Do I need to do the sessions every single day?",
        answer: "For optimal neuroplasticity to take effect, daily consistency is highly recommended. However, if you miss a day, simply resume the next day without trying to 'double up' on sessions. Your progress is saved."
    },
    {
        question: "Can I do the dietary triggers alongside my regular diet?",
        answer: "Yes. The dietary triggers are designed to be specific additions (like MCT oil or blueberries) rather than restrictive diets. They compound the cognitive exercises regardless of your base nutrition plan."
    },
    {
        question: "How long until I notice a difference in my memory?",
        answer: "Many members report a noticeable lifting of 'brain fog' within the first 7 to 10 days of Phase 1. Significant memory recall improvements generally solidify during Phase 2 (Days 31-90) as neural pathways strengthen."
    },
    {
        question: "Are the Bonus Protocols required?",
        answer: "No, the core 180-day NeuroLock Protocol is sufficient. However, the Ageless Body detox and Biohacking techniques are powerful accelerators that optimize your physical health to support your brain."
    },
    {
        question: "How do I reset my progress?",
        answer: "If you wish to restart the entire 180-day protocol from Day 1, please contact our support team using the email button below and we will manually reset your account metrics."
    }
];

export default function Support() {
    const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="p-6 pt-10 flex flex-col gap-8 max-w-md mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">We're Here For You</h1>
                <p className="text-gray-400 text-sm">Our team is ready to help you get the most out of your journey</p>
            </div>

            {/* Guarantee Box */}
            <div className="bg-[#10B981]/10 border border-[#10B981]/30 p-5 rounded-2xl flex gap-4 mt-2">
                <div className="bg-[#10B981] p-2 rounded-xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-white font-bold mb-1">Protected Guarantee</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Remember: You are protected by our 60-day 100% money-back guarantee. If you are not completely satisfied, email us. No questions asked.
                    </p>
                </div>
            </div>

            {/* FAQs */}
            <div>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#3B82F6]" /> Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <div
                                key={index}
                                className={`bg-[#1A1F3C] border ${isOpen ? 'border-[#3B82F6]' : 'border-[#2A3158]'} rounded-xl overflow-hidden transition-all`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-4 flex justify-between items-center gap-4 focus:outline-none"
                                >
                                    <span className={`font-semibold text-sm ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="w-4 h-4 text-[#3B82F6] shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 animate-fade-in">
                                        <p className="text-sm text-gray-400 leading-relaxed pt-2 border-t border-[#2A3158]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contact Support Button */}
            <div className="mt-4 pb-6">
                <a
                    href="mailto:support@neuromax.com?subject=Neuromax%20Program%20Support"
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:scale-[1.02] active:scale-95 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                    <Mail className="w-5 h-5" />
                    Email Our Support Team
                </a>
            </div>

        </div>
    );
}
