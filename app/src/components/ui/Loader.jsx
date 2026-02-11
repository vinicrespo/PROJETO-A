import { Loader2 } from 'lucide-react';

export function Loader({ size = 60, className }) {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <Loader2
                size={size}
                className={`animate-spin text-accent ${className}`}
            />
        </div>
    );
}
