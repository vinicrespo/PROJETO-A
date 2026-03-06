import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
    currentDay: number;
    completedDays: number[];
    streak: number;
    markDayComplete: (day: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
    const [currentDay, setCurrentDay] = useState<number>(1);
    const [completedDays, setCompletedDays] = useState<number[]>([]);
    const [streak, setStreak] = useState<number>(0);
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        // Load from local storage
        const storedCurrentDay = localStorage.getItem('neuromax_current_day');
        const storedCompletedDays = localStorage.getItem('neuromax_completed_days');
        const storedStreak = localStorage.getItem('neuromax_streak');

        // Simulate first login or returning user logic based on timestamps (simplified here to just loads)
        const storedLastLogin = localStorage.getItem('neuromax_last_login');
        const now = new Date().getTime();

        if (storedCurrentDay) setCurrentDay(parseInt(storedCurrentDay));
        if (storedCompletedDays) setCompletedDays(JSON.parse(storedCompletedDays));

        if (storedLastLogin && storedStreak) {
            const lastLoginTime = parseInt(storedLastLogin);
            const daysSinceLastLogin = Math.floor((now - lastLoginTime) / (1000 * 60 * 60 * 24));

            if (daysSinceLastLogin === 1) {
                // Kept streak
                setStreak(parseInt(storedStreak));
            } else if (daysSinceLastLogin > 1) {
                // Lost streak
                setStreak(0);
                localStorage.setItem('neuromax_streak', '0');
            } else {
                // Same day login
                setStreak(parseInt(storedStreak));
            }
        } else if (storedStreak) {
            setStreak(parseInt(storedStreak));
        }

        localStorage.setItem('neuromax_last_login', now.toString());
        setIsInitializing(false);
    }, []);

    const markDayComplete = (day: number) => {
        if (!completedDays.includes(day)) {
            const newCompleted = [...completedDays, day];
            setCompletedDays(newCompleted);
            localStorage.setItem('neuromax_completed_days', JSON.stringify(newCompleted));

            // If we just completed today's assigned day
            if (day === currentDay) {
                const nextDay = Math.min(day + 1, 180); // Cap at 180
                setCurrentDay(nextDay);
                localStorage.setItem('neuromax_current_day', nextDay.toString());

                const newStreak = streak + 1;
                setStreak(newStreak);
                localStorage.setItem('neuromax_streak', newStreak.toString());
            }
        }
    };

    if (isInitializing) return null;

    return (
        <ProgressContext.Provider value={{ currentDay, completedDays, streak, markDayComplete }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}
