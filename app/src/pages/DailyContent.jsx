import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

// Placeholder data - would be moved to a separate data file
const DAYS_CONTENT = {
    1: {
        phase: 1,
        title: 'Day 1: Foundation & Visual Awareness',
        date: 'Monday, January 1, 2025',
        focus: 'Understanding your visual habits',
        focusText: 'Today is about becoming aware of how you use your eyes. Most of us go through the day on autopilot, not realizing the subtle strain we place on our visual system.',
        concept: 'Visual Fatigue Definition',
        conceptText: [
            'Visual fatigue, or asthenopia, is the eyes\' reaction to prolonged intense use. It\'s a signal that your visual system is working beyond its comfortable capacity.',
            'Just like your muscles get tired after a long workout, your eyes need recovery time. Recognizing the early signs—dryness, slight blur, or tension—is the first step to prevention.'
        ],
        action: {
            title: 'Complete Visual Awareness Checklist',
            details: 'Throughout the day, pause three times and ask yourself: Are my eyes tense? Am I frowning? Is my jaw clenched?',
            steps: [
                'Set a timer for 10am, 2pm, and 6pm.',
                'When it rings, close your eyes for 10 seconds.',
                'Scan your face for tension and release it.',
            ],
            time: '5 minutes accumulated'
        },
        tips: [
            'Blink intentionally every time you hit "send" on an email.',
            'Keep your screen at arm\'s length.'
        ]
    },
    // ... more days would go here
};

export default function DailyContent() {
    const { dayId } = useParams();
    const navigate = useNavigate();
    const day = DAYS_CONTENT[dayId] || DAYS_CONTENT[1]; // Fallback to Day 1 for demo
    const currentDay = parseInt(dayId);

    const handleNext = () => {
        if (currentDay < 180) {
            navigate(`/app/day/${currentDay + 1}`);
        } else {
            navigate('/app/home');
        }
    };

    const handlePrev = () => {
        if (currentDay > 1) {
            navigate(`/app/day/${currentDay - 1}`);
        }
    };

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-3xl mx-auto px-6 py-10 mt-[60px]">
                {/* Breadcrumb */}
                <div className="text-xs uppercase text-text-muted mb-2 tracking-wide font-semibold">
                    Phase {Math.ceil(currentDay / 30)} &gt; Day {currentDay}
                </div>

                <h1 className="text-3xl font-bold text-primary mb-1">{day.title}</h1>
                <p className="text-text-muted text-sm mb-8">{day.date}</p>

                {/* Section 1: Focus */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-4 mb-4">
                        Today's Focus
                    </h2>
                    <p className="text-text-body leading-relaxed">{day.focusText}</p>
                </section>

                {/* Section 2: Key Concept */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-primary mb-4">
                        Key Concept: {day.concept}
                    </h2>
                    <div className="space-y-4 text-text-body leading-relaxed">
                        {day.conceptText.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {/* Section 3: Action */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-4 mb-4">
                        Your Daily Action
                    </h2>
                    <Card className="bg-softBlue border-accent border-2">
                        <h3 className="text-lg font-bold text-primary mb-2">{day.action.title}</h3>
                        <p className="text-text-body mb-4">{day.action.details}</p>

                        {day.action.steps && (
                            <ol className="list-decimal list-inside space-y-2 mb-4 text-text-body">
                                {day.action.steps.map((step, idx) => (
                                    <li key={idx} className="pl-2">{step}</li>
                                ))}
                            </ol>
                        )}

                        <p className="text-xs text-text-muted italic flex items-center">
                            ⏱️ Time Required: {day.action.time}
                        </p>
                    </Card>
                </section>

                {/* Section 4: Tips */}
                {day.tips && day.tips.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-lg font-bold text-primary mb-4">
                            Quick Tips for Today
                        </h2>
                        <div className="grid gap-3">
                            {day.tips.map((tip, idx) => (
                                <Card key={idx} className="py-3 px-4 bg-white border-secondary">
                                    <p className="text-sm text-text-body">
                                        <span className="font-bold mr-2">💡 Tip:</span>
                                        {tip}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t border-secondary mt-12">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentDay <= 1}
                        className={currentDay <= 1 ? 'opacity-0' : ''}
                    >
                        ← Previous Day
                    </Button>

                    <Button
                        variant="primary"
                        onClick={handleNext}
                    >
                        {currentDay === 180 ? 'Complete Program' : 'Next Day →'}
                    </Button>
                </div>
            </main>
        </div>
    );
}
