import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Providers (Lazy loaded)
const AuthProvider = lazy(() => import('./app/context/AuthContext').then(m => ({ default: m.AuthProvider })));
const ProgressProvider = lazy(() => import('./app/context/ProgressContext').then(m => ({ default: m.ProgressProvider })));

// Layout (Lazy loaded)
const AppLayout = lazy(() => import('./app/components/AppLayout'));

// VSL Entry (Static import for immediately loading on index)
import VSL from './pages/VSL';
import VSL39 from './pages/VSL39';
import Upsell1 from './pages/Upsell1';
import Upsell2 from './pages/Upsell2';
import Upsell3 from './pages/Upsell3';
import Upsell1_19 from './pages/Upsell1_19';
import Upsell2_19 from './pages/Upsell2_19';
import Upsell3_19 from './pages/Upsell3_19';
import VSL_19Lead01 from './pages/VSL_19Lead01';
import Thanks from './pages/Thanks';



// App Pages (Lazy loaded for performance code splitting)
const Login = lazy(() => import('./app/pages/Login'));
const Dashboard = lazy(() => import('./app/pages/Dashboard'));
const Program = lazy(() => import('./app/pages/Program'));
const BonusAgeless = lazy(() => import('./app/pages/BonusAgeless'));
const BonusBiohacking = lazy(() => import('./app/pages/BonusBiohacking'));
const Progress = lazy(() => import('./app/pages/Progress'));
const DailyTips = lazy(() => import('./app/pages/DailyTips'));

// Fallback loader while downloading chunk
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-white sm:bg-[#070b14]">
        <div className="w-12 h-12 border-4 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

export default function App() {
    return (
        <Routes>
            {/* VSL Route (Preserved, no suspense to guarantee instant render) */}
            <Route path="/" element={<VSL />} />
            <Route path="/39" element={<VSL39 />} />
            <Route path="/19lead01" element={<VSL_19Lead01 />} />
            <Route path="/upsell1" element={<Upsell1 />} />
            <Route path="/upsell2" element={<Upsell2 />} />
            <Route path="/upsell3" element={<Upsell3 />} />
            <Route path="/19upsell1" element={<Upsell1_19 />} />
            <Route path="/19upsell2" element={<Upsell2_19 />} />
            <Route path="/19upsell3" element={<Upsell3_19 />} />
            <Route path="/thanks" element={<Thanks />} />



            {/* Auth Route */}
            <Route
                path="/app/login"
                element={
                    <Suspense fallback={<PageLoader />}>
                        <AuthProvider>
                            <Login />
                        </AuthProvider>
                    </Suspense>
                }
            />

            {/* Protected App Routes */}
            <Route
                path="/app"
                element={
                    <Suspense fallback={<PageLoader />}>
                        <AuthProvider>
                            <ProgressProvider>
                                <AppLayout />
                            </ProgressProvider>
                        </AuthProvider>
                    </Suspense>
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
                <Route path="support" element={<DailyTips />} />
            </Route>
        </Routes>
    );
}
