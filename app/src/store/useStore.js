import { create } from 'zustand';

export const useStore = create((set) => ({
    user: null,
    currentPhase: null,
    login: (email) => set({ user: { email } }),
    logout: () => set({ user: null, currentPhase: null }),
    setPhase: (phaseId) => set({ currentPhase: phaseId }),
}));
