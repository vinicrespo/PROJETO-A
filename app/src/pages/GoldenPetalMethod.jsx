import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function GoldenPetalMethod() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-5xl mx-auto px-6 py-10 mt-[60px]">
                <Button variant="ghost" size="sm" onClick={() => navigate('/app/home')} className="mb-6 pl-0">
                    ← Back to Home
                </Button>

                <section className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-3xl font-bold text-primary mb-3">The Golden Petal Method</h1>
                    <p className="text-text-muted text-lg mb-8">
                        A holistic approach to visual wellness through daily habits
                    </p>
                    <p className="text-text-body leading-relaxed text-left md:text-center">
                        The Golden Petal Method is a structured approach to supporting your visual wellness through simple, daily habits and environmental adjustments. Each 'petal' represents a key pillar of the program, and together they create a complete framework for visual comfort and clarity.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="bg-softBlue p-6 rounded-xl border-l-4 border-accent shadow-sm">
                        <h3 className="text-lg font-bold text-primary mb-3">🌞 Light Exposure Habits</h3>
                        <p className="text-sm text-text-body leading-relaxed">
                            Understanding how light affects your vision and establishing healthy exposure patterns throughout the day.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-softBlue p-6 rounded-xl border-l-4 border-primary shadow-sm">
                        <h3 className="text-lg font-bold text-primary mb-3">💻 Screen Balance</h3>
                        <p className="text-sm text-text-body leading-relaxed">
                            Managing your screen time and reducing visual strain through smart device usage patterns.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-softBlue p-6 rounded-xl border-l-4 border-accent shadow-sm">
                        <h3 className="text-lg font-bold text-primary mb-3">😌 Visual Breaks</h3>
                        <p className="text-sm text-text-body leading-relaxed">
                            Incorporating restorative breaks into your routine to reduce fatigue and support eye health.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-softBlue p-6 rounded-xl border-l-4 border-primary shadow-sm">
                        <h3 className="text-lg font-bold text-primary mb-3">🏠 Daily Environment Adjustments</h3>
                        <p className="text-sm text-text-body leading-relaxed">
                            Optimizing your physical environment for visual comfort and reducing common stressors.
                        </p>
                    </div>
                </div>

                <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-secondary text-center">
                    <h2 className="text-2xl font-bold text-primary mb-4">How It Works</h2>
                    <p className="text-text-body leading-relaxed mb-8">
                        Each day of the 180-day program incorporates one or more of these petals into your routine. You'll learn specific techniques, understand the science behind them, and practice applying them in your daily life. Over time, these habits become natural, creating a sustainable foundation for visual wellness.
                    </p>

                    <Button onClick={() => navigate('/app/phases')}>
                        Return to Phases
                    </Button>
                </section>

            </main>
        </div>
    );
}
