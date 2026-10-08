import { create } from "zustand";
import { persist } from "zustand/middleware";


const authStore = create(persist((set, get) => ({
    user: null,
    isAuthenticated: false,
    loginUser: (user) => set({
        user,
        isAuthenticated: true
    }),

    registerUser: (user) => set({
        user,
        isAuthenticated: true
    }),
    logout: () => set({
        user: null,
        isAuthenticated: false
    })
}), { name: "auth" }))


export default authStore;