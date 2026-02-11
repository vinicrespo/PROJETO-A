import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';

export default function Home() {
    const navigate = useNavigate();
    const setPhase = useStore((state) => state.setPhase);

    const handleStartFromDay1 = () => {
        setPhase(1); // Set Phase 1
        navigate('/app/phase/1'); // Go to Phase 1 Day List
    };

    const handleJumpToPhase = () => {
        setPhase(null); // Clear phase selection
        navigate('/app/phases');
    };

    const handleExploreMethod = () => {
        navigate('/app/method');
    };

    return (
        <div className="min-h-screen bg-light">
            <main className="max-w-4xl mx-auto px-6 py-10 mt-[60px]">
                <h1 className="text-3xl font-bold text-primary mb-2">Welcome to Vision 20</h1>
                <p className="text-text-muted text-base mb-6">Start from where you are today.</p>
                <div className="w-[60px] h-[2px] bg-accent mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Button
                        variant="primary"
                        className="h-auto flex flex-col items-start p-6 space-y-2 text-left hover:shadow-md"
                        onClick={handleStartFromDay1}
                    >
                        <span className="text-lg font-bold">Start From Day 1</span>
                        <span className="text-sm font-normal opacity-90">Begin the complete 180-day journey</span>
                    </Button>

                    <Button
                        variant="secondary"
                        className="h-auto flex flex-col items-start p-6 space-y-2 text-left hover:shadow-md bg-white"
                        onClick={handleJumpToPhase}
                    >
                        <span className="text-lg font-bold">Jump to Your Phase</span>
                        <span className="text-sm font-normal opacity-90">Choose your starting point</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="h-auto flex flex-col items-start p-6 space-y-2 text-left hover:shadow-md bg-white"
                        onClick={handleExploreMethod}
                    >
                        <span className="text-lg font-bold">Explore the Method</span>
                        <span className="text-sm font-normal opacity-90">Learn the fundamentals</span>
                    </Button>
                </div>
            </main>

            <footer className="text-center py-6 text-[10px] text-text-muted">
                This is an educational program. Not medical advice.
            </footer>
        </div>
    );
}
