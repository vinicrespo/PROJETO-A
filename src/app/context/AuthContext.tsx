import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    userEmail: string | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        const storedEmail = localStorage.getItem('neuromax_email');
        if (storedEmail) {
            setIsAuthenticated(true);
            setUserEmail(storedEmail);
        }
        setIsInitializing(false);
    }, []);

    const login = async (email: string) => {
        // Simulate API verification delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        localStorage.setItem('neuromax_email', email);
        setIsAuthenticated(true);
        setUserEmail(email);
    };

    const logout = () => {
        localStorage.removeItem('neuromax_email');
        setIsAuthenticated(false);
        setUserEmail(null);
    };

    if (isInitializing) {
        return <div className="min-h-screen bg-[#0A0E27]" />;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
