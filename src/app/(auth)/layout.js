import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-sm">

        <div className="flex min-h-[700px]">

          {/* Left Image */}
          <div className="hidden md:block md:w-1/2 bg-[#e39bd7]">

            <img
              src="/auth-image.jpg"
              alt="Authentication"
              className="w-full h-full object-contain"
            />

          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 bg-white flex items-start justify-center px-6 py-10 sm:px-8 lg:px-12">

            <div className="w-full max-w-md">
              {children}
            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Layout;