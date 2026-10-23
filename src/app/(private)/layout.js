"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStote";
const privateLayout = ({ children }) => {
    const { isAuthenticated } = useAuthStore.getState();
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated) {
            router.push(LOGIN_ROUTE);
        }
    }, []);

    if (!isAuthenticated) return;
    return (
        <div>
            {children}
        </div>
    )
}

export default privateLayout
