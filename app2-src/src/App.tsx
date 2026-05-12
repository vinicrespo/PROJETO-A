import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Home, ListChecks, Target, User, LifeBuoy } from 'lucide-react';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Program1 from './screens/Program1';
import Program2 from './screens/Program2';
import Program3 from './screens/Program3';
import Profile from './screens/Profile';
import Support from './screens/Support';

// Custom hook to manage email auth state
export function useAuth() {
  const [email, setEmail] = useState<string | null>(localStorage.getItem('gelatide_email'));

  const login = (newEmail: string) => {
    localStorage.setItem('gelatide_email', newEmail);
    setEmail(newEmail);
  };

  const logout = () => {
    localStorage.removeItem('gelatide_email');
    setEmail(null);
  };

  return { email, login, logout };
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Bottom navigation items
  const navItems = [
    { path: '/dashboard', label: 'Home', icon: Home },
    { path: '/program1', label: 'Programs', icon: Target },
    { path: '/program3', label: 'Progress', icon: ListChecks }, // Program 3 is daily checklist
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/support', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-brand-bg relative pb-[70px]">
      {/* Top Bar Logo */}
      <div className="w-full py-4 flex justify-center items-center bg-brand-bg/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-card">
        <h1 className="text-xl font-bold tracking-widest text-brand-secondary">GELATIDE</h1>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full overflow-x-hidden">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[430px] bg-brand-card border-t border-brand-bg/50 px-2 py-3 z-50 rounded-t-2xl">
        <div className="flex justify-between items-center px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 w-14 transition-colors ${
                  isActive ? 'text-brand-primary' : 'text-brand-secondary/50 hover:text-brand-secondary/80'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'drop-shadow-[0_0_8px_rgba(232,160,180,0.5)]' : ''}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

// Protected Route Wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { email } = useAuth();
  if (!email) {
    return <Navigate to="/login" replace />;
  }
  return <Layout>{children}</Layout>;
}

export default function App() {
  const { email } = useAuth();

  return (
    <BrowserRouter basename="/app2">
      <Routes>
        <Route path="/login" element={email ? <Navigate to="/dashboard" replace /> : <Login />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/program1" element={<ProtectedRoute><Program1 /></ProtectedRoute>} />
        <Route path="/program2" element={<ProtectedRoute><Program2 /></ProtectedRoute>} />
        <Route path="/program3" element={<ProtectedRoute><Program3 /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to={email ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
