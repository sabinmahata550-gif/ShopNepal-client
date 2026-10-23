"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStote";
import { HOME_ROUTE } from "@/constants/routes";
import { ROLE_CUSTOMER } from "@/constants/userRoles";
const customerLayout = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore.getState();
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated) {
            return router.replace(LOGIN_ROUTE);
        }

        if (!user.roles.includes(ROLE_CUSTOMER)) {
            return router.push(HOME_ROUTE);
        }
    }, []);

    if (!isAuthenticated) return;
    return (
        <div>
            {children}
        </div>
    )
}

export default customerLayout
