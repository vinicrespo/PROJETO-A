import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const ROUTINE_ITEMS = [
    {
        title: 'Morning Routine (6:00 AM - 9:00 AM)',
        items: [
            'Spend 5 minutes in natural light exposure',
            'Perform gentle eye stretches',
            'Have a healthy breakfast with vision-supporting foods',
            'Assess your workspace lighting'
        ]
    },
    {
        title: 'Midday Routine (11:00 AM - 2:00 PM)',
        items: [
            'Take your first 20-20-20 visual break',
            'Step outside for 10 minutes if possible',
            'Stay hydrated (drink water)',
            'Check your posture and screen distance'
        ]
    },
    {
        title: 'Afternoon Routine (2:00 PM - 5:00 PM)',
        items: [
            'Implement 20-20-20 break again',
            'Reduce screen brightness as sun position changes',
            'Take a 15-minute walk',
            'Reflect on your visual comfort level'
        ]
    },
    {
        title: 'Evening Routine (5:00 PM - 10:00 PM)',
        items: [
            'Begin reducing blue light on devices',
            'Dim ambient lighting gradually',
            'Spend 20 minutes away from screens',
            'Perform relaxation eye exercises'
        ]
    },
    {
        title: 'Night Routine (10:00 PM - 12:00 AM)',
        items: [
            'Complete transition to warm lighting',
            'Stop all screen use',
            'Perform final eye relaxation',
            'Prepare for sleep in darkness'
        ]
    }
];

export default function DailyRoutine() {
    const navigate = useNavigate();
    // We use local state for checkboxes just for interactivity, it resets on refresh as requested
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheck = (sectionIndex, itemIndex) => {
        const key = `${sectionIndex}-${itemIndex}`;
        setCheckedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-3xl mx-auto px-6 py-10 mt-[60px]">
                <Button variant="ghost" size="sm" onClick={() => navigate('/app/home')} className="mb-6 pl-0">
                    ← Back to Home
                </Button>

                <section className="mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Your Daily Routine</h1>
                    <p className="text-text-muted text-lg mb-4">
                        A simple checklist to integrate vision wellness into your everyday life
                    </p>
                    <div className="bg-softBlue p-3 rounded-lg border border-accent/20 inline-block">
                        <p className="text-xs italic text-primary">
                            This checklist is a guide for your day. You don't need to complete every item perfectly. Focus on consistency and finding what works for you.
                        </p>
                    </div>
                </section>

                <div className="space-y-8">
                    {ROUTINE_ITEMS.map((section, sIndex) => (
                        <div key={sIndex}>
                            <h3 className="text-lg font-bold text-primary mb-3 sticky top-[60px] bg-light py-2 z-10">
                                {section.title}
                            </h3>
                            <div className="space-y-3">
                                {section.items.map((item, iIndex) => {
                                    const isChecked = checkedItems[`${sIndex}-${iIndex}`];
                                    return (
                                        <div
                                            key={iIndex}
                                            onClick={() => toggleCheck(sIndex, iIndex)}
                                            className={`flex items-start p-4 rounded-xl border transition-all cursor-pointer ${isChecked
                                                    ? 'bg-softBlue border-accent'
                                                    : 'bg-white border-secondary hover:border-accent/50'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-md border-2 mr-3 flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'bg-accent border-accent text-white' : 'border-secondary'
                                                }`}>
                                                {isChecked && "✓"}
                                            </div>
                                            <span className={`text-sm ${isChecked ? 'text-primary' : 'text-text-body'}`}>
                                                {item}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
