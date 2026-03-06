import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Providers
import { AuthProvider } from './app/context/AuthContext';
import { ProgressProvider } from './app/context/ProgressContext';

// Layout
import AppLayout from './app/components/AppLayout';

// VSL Entry
import VSL from './pages/VSL';

// App Pages
import Login from './app/pages/Login';
import Dashboard from './app/pages/Dashboard';
import Program from './app/pages/Program';
import BonusAgeless from './app/pages/BonusAgeless';
import BonusBiohacking from './app/pages/BonusBiohacking';
import Progress from './app/pages/Progress';
import Support from './app/pages/Support';

export default function App() {
    return (
        <Routes>
            {/* VSL Route (Preserved) */}
            <Route path="/" element={<VSL />} />

            {/* Auth Route */}
            <Route
                path="/app/login"
                element={
                    <AuthProvider>
                        <Login />
                    </AuthProvider>
                }
            />

            {/* Protected App Routes */}
            <Route
                path="/app"
                element={
                    <AuthProvider>
                        <ProgressProvider>
                            <AppLayout />
                        </ProgressProvider>
                    </AuthProvider>
                }
            >
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="program" element={<Program />} />
                <Route path="bonuses" element={
                    <div className="p-6 pt-10 flex flex-col gap-4">
                        <h1 className="text-3xl font-bold mb-4">Bonuses</h1>
                        <a href="/app/bonuses/ageless" className="bg-[#3B82F6] text-white p-4 rounded-xl font-bold">Bonus 1: Ageless Body</a>
                        <a href="/app/bonuses/biohacking" className="bg-[#3B82F6] text-white p-4 rounded-xl font-bold">Bonus 2: Biohacking Secrets</a>
                    </div>
                } />
                <Route path="bonuses/ageless" element={<BonusAgeless />} />
                <Route path="bonuses/biohacking" element={<BonusBiohacking />} />
                <Route path="progress" element={<Progress />} />
                <Route path="support" element={<Support />} />
            </Route>
        </Routes>
    );
}
