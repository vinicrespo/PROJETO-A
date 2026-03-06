import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, PlayCircle, Gift, TrendingUp, HelpCircle } from 'lucide-react';

export default function AppLayout() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/app/login', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null;

    const navItems = [
        { name: 'Home', path: '/app/dashboard', icon: Home },
        { name: 'Program', path: '/app/program', icon: PlayCircle },
        { name: 'Bonuses', path: '/app/bonuses', icon: Gift },
        { name: 'Progress', path: '/app/progress', icon: TrendingUp },
        { name: 'Support', path: '/app/support', icon: HelpCircle },
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27] text-white flex flex-col font-sans">
            <main className="flex-1 pb-20 overflow-y-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-[#0A0E27] border-t border-gray-800 pb-safe">
                <div className="flex justify-between px-2 py-3 max-w-md mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex flex-col items-center justify-center w-full space-y-1 transition-colors ${isActive ? 'text-[#3B82F6]' : 'text-gray-400 hover:text-gray-300'
                                    }`
                                }
                            >
                                <Icon className="w-6 h-6" />
                                <span className="text-[10px] font-medium">{item.name}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
