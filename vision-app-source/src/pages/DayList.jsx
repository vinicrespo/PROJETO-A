import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';

// Helper to generate days based on phase
const getDaysForPhase = (phaseId) => {
    const startDay = (phaseId - 1) * 30 + 1;
    const days = [];
    for (let i = 0; i < 30; i++) {
        days.push({
            day: startDay + i,
            title: `Day ${startDay + i}`,
            subtitle: `Topic for Day ${startDay + i}` // This would come from real data
        });
    }
    return days;
};

const PHASES = {
    1: { title: 'Phase 1 — Days 1–30', subtitle: 'Foundation & Awareness' },
    2: { title: 'Phase 2 — Days 31–60', subtitle: 'Building Habits & Consistency' },
    3: { title: 'Phase 3 — Days 61–90', subtitle: 'Visual Balance & Screen Mastery' },
    4: { title: 'Phase 4 — Days 91–120', subtitle: 'Environment Optimization' },
    5: { title: 'Phase 5 — Days 121–150', subtitle: 'Integration & Lifestyle Design' },
    6: { title: 'Phase 6 — Days 151–180', subtitle: 'Mastery & Long-Term Sustainability' },
};

export default function DayList() {
    const { phaseId } = useParams();
    const navigate = useNavigate();
    const phase = PHASES[phaseId];
    const days = getDaysForPhase(parseInt(phaseId));

    if (!phase) return <div>Phase not found</div>;

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-4xl mx-auto px-6 py-10 mt-[60px]">
                <Button variant="ghost" size="sm" onClick={() => navigate('/app/phases')} className="mb-6 pl-0">
                    ← Back to Phase Selection
                </Button>

                <h1 className="text-3xl font-bold text-primary mb-2">{phase.title}</h1>
                <p className="text-text-muted text-lg mb-8">{phase.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {days.map((day) => (
                        <div
                            key={day.day}
                            onClick={() => navigate(`/app/day/${day.day}`)}
                            className="bg-white border-2 border-secondary p-4 rounded-lg cursor-pointer hover:border-accent hover:bg-softBlue transition-all"
                        >
                            <h3 className="text-lg font-bold text-primary">{day.title}</h3>
                            {/* <p className="text-xs text-text-muted uppercase">Topic</p> */}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
