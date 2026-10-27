import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,


            loginUser: ({ user, token }) => {
                set({
                    user,
                    token,
                    isAuthenticated: true,
                });

                localStorage.setItem("authToken", token);

            },


            registerUser: ({ user, token }) => {
                set({
                    user,
                    token,
                    isAuthenticated: true,
                });
                localStorage.setItem("authToken", token);


            },

            logout: () =>
                set({
                    user: null,
                    isAuthenticated: false,
                }),
        }),
        {
            name: "zustand:auth-storage",
        }
    )
);

export default useAuthStore;