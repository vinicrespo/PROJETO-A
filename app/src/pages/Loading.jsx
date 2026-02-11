import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/ui/Loader';

export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/app/home');
        }, 2500); // 2.5 seconds delay

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-softBlue p-4">
            <Loader size={60} />
            <h2 className="text-2xl font-bold text-primary mt-6 mb-2 text-center">
                Checking purchase access…
            </h2>
            <p className="text-text-muted text-sm">
                Please wait a moment.
            </p>
        </div>
    );
}
