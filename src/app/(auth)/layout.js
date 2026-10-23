"use client";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStote";
import { useEffect } from "react";
import { HOME_ROUTE } from "@/constants/routes";
const authLayout = ({ children }) => {
  const { isAuthenticated } = useAuthStore.getState();

  const router = useRouter();
  useEffect(() => {

    if (isAuthenticated) {
      router.push(HOME_ROUTE);
    }

  }, [])

  if (isAuthenticated) return;
  return (
    <main className=" bg-gray-50 flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-sm ccontainer">

        <div className="flex min-h-[80vh]">

          {/* Left Image */}
          <div className="hidden md:block md:w-1/2 bg-[#e39bd7]">

            <img
              src="/auth-image.jpg"
              alt="Authentication"
              className="w-full h-full object-contain"
            />

          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 bg-white flex items-start justify-center px-6 sm:px-8 lg:px-12">

            <div className="w-full max-w-md">
              {children}
            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default authLayout;