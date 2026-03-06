import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Brain, Lock } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'verifying' | 'confirmed'>('idle');
    const [progress, setProgress] = useState(0);
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // If already logged in, go straight to dashboard
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/app/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('verifying');

        // Simulate progress bar filling up
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) clearInterval(interval);
        }, 100);

        // Initial delay for verification
        await new Promise(r => setTimeout(r, 2000));

        setStatus('confirmed');
        // Second message delay
        await new Promise(r => setTimeout(r, 1500));

        // Trigger actual context login
        await login(email);
        navigate('/app/dashboard', { replace: true });
    };

    return (
        <div className="min-h-screen bg-[#0A0E27] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3B82F6] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-sm relative z-10 flex flex-col items-center text-center">
                {/* Logo Area */}
                <div className="mb-8 flex flex-col items-center">
                    <img src="/logo.png" alt="Neuromax Logo" className="w-24 h-24 mb-4 object-contain" />
                    <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        NEUROMAX
                    </h1>
                    <p className="text-[#3B82F6] text-sm tracking-widest font-semibold uppercase mt-1">
                        Program Access
                    </p>
                </div>

                {status === 'idle' ? (
                    <div className="w-full animate-fade-in">
                        <h2 className="text-2xl font-bold mb-2">Access Your Program</h2>
                        <p className="text-gray-400 text-sm mb-8 px-4">
                            Enter the email used during your enrollment to access your account.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col items-start gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                                    Enrollment Email
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full bg-[#1A1F3C] border border-[#2A3158] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#4F46E5] hover:to-[#3B82F6] text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all transform hover:scale-[1.02] active:scale-95 mt-4"
                            >
                                Verify & Access My Program
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center animate-fade-in py-10">
                        {status === 'verifying' ? (
                            <>
                                <Brain className="w-16 h-16 text-[#3B82F6] animate-pulse mb-6" />
                                <p className="text-lg font-medium text-white mb-2">Verifying your enrollment...</p>
                                <p className="text-sm text-gray-400 mb-8">Please wait</p>
                            </>
                        ) : (
                            <>
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                </div>
                                <p className="text-lg font-medium text-white mb-2">Access confirmed.</p>
                                <p className="text-sm text-gray-400 mb-8">Loading your program...</p>
                            </>
                        )}

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-[#1A1F3C] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transition-all duration-300 rounded-full"
                                style={{ width: `${status === 'confirmed' ? 100 : progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}

            </div>
            {/* Footer */}
            <div className="absolute bottom-8 flex items-center justify-center gap-2 text-xs text-gray-500 w-full">
                <Lock className="w-3.5 h-3.5" />
                <span>Your information is protected and encrypted</span>
            </div>
        </div>
    );
}
