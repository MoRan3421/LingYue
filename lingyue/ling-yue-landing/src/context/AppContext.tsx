import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type User = {
    username: string;
    level: number;
    exp: number;
    vip: number;
    rank: string;
    currencies: Record<string, number>;
};

type AppContextType = {
    user: User | null;
    isLoggedIn: boolean;
    login: (username: string, token: string) => void;
    logout: () => void;
    showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
    isAudioEnabled: boolean;
    setAudioEnabled: (enabled: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAudioEnabled, setAudioEnabled] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('aura_token');
        const savedUser = localStorage.getItem('aura_username');
        if (token && savedUser) {
            fetchUserData(savedUser);
        }
    }, []);

    const fetchUserData = async (username: string) => {
        try {
            const res = await fetch(`http://localhost:3000/api/assets/${username}`);
            const data = await res.json();
            setUser({
                username,
                level: 42,
                exp: 1000,
                vip: 3,
                rank: '纵横',
                currencies: data
            });
            setIsLoggedIn(true);
        } catch (e) {
            console.error("Failed to sync sovereign data");
        }
    };

    const login = (username: string, token: string) => {
        localStorage.setItem('aura_token', token);
        localStorage.setItem('aura_username', username);
        fetchUserData(username);
    };

    const logout = () => {
        localStorage.removeItem('aura_token');
        localStorage.removeItem('aura_username');
        setUser(null);
        setIsLoggedIn(false);
    };

    const showToast = (msg: string, type: 'success' | 'error' | 'info' = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    return (
        <AppContext.Provider value={{ user, isLoggedIn, login, logout, showToast, isAudioEnabled, setAudioEnabled }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within AppProvider');
    return context;
};
