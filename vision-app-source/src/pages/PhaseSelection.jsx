import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const PHASES = [
    { id: 1, range: 'Days 1–30', title: 'Foundation & Awareness' },
    { id: 2, range: 'Days 31–60', title: 'Building Habits & Consistency' },
    { id: 3, range: 'Days 61–90', title: 'Visual Balance & Screen Mastery' },
    { id: 4, range: 'Days 91–120', title: 'Environment Optimization' },
    { id: 5, range: 'Days 121–150', title: 'Integration & Lifestyle Design' },
    { id: 6, range: 'Days 151–180', title: 'Mastery & Long-Term Sustainability' },
];

export default function PhaseSelection() {
    const navigate = useNavigate();
    const setPhase = useStore((state) => state.setPhase);

    const handleSelectPhase = (phaseId) => {
        setPhase(phaseId);
        navigate(`/app/phase/${phaseId}`);
    };

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-4xl mx-auto px-6 py-10 mt-[60px]">
                <Button variant="ghost" size="sm" onClick={() => navigate('/app/home')} className="mb-6 pl-0">
                    ← Back to Home
                </Button>

                <h1 className="text-3xl font-bold text-primary mb-8">Select Your Phase</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PHASES.map((phase) => (
                        <div
                            key={phase.id}
                            onClick={() => handleSelectPhase(phase.id)}
                            className="bg-softBlue p-6 rounded-xl border-2 border-secondary cursor-pointer hover:border-accent hover:shadow-sm transition-all group"
                        >
                            <h3 className="text-sm font-bold text-accent mb-1 uppercase tracking-wide">PHASE {phase.id} — {phase.range}</h3>
                            <p className="text-lg font-bold text-primary group-hover:text-primary/90">{phase.title}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
