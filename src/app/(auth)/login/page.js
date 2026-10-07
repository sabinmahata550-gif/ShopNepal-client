"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { REGISTER_ROUTE } from "@/constants/routes";
import { loginUser } from "@/api/auth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  function submitForm(data) {
    console.log("Login data:", data);

    loginUser(data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-8">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white">

        <div className="p-4 sm:p-6 space-y-6">

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h1>
          </div>

          {/* Google & Apple */}
          <div className="flex flex-col lg:flex-row gap-3">

            {/* Google */}
            <button
              type="button"
              className="
                w-full lg:flex-1
                h-12
                flex items-center justify-center
                gap-2
                border border-gray-300
                rounded-lg
                px-4
                bg-white
                text-gray-700
                text-sm font-medium
                hover:bg-gray-50
                transition
              "
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.23c0-.79-.07-1.55-.23-2.23H12v4.22h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.38z"
                />

                <path
                  fill="#34A853"
                  d="M12 21.67c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.67z"
                />

                <path
                  fill="#FBBC05"
                  d="M6.54 13.75A5.84 5.84 0 0 1 6.23 12c0-.61.11-1.2.31-1.75V7.72H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.28l3.25-2.53z"
                />

                <path
                  fill="#EA4335"
                  d="M12 6.22c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.3 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.71 5.39l3.25 2.53C7.31 7.94 9.46 6.22 12 6.22z"
                />
              </svg>

              <span>Log in with Google</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              className="
                w-full lg:flex-1
                h-12
                flex items-center justify-center
                gap-2
                border border-gray-300
                rounded-lg
                px-4
                bg-white
                text-black
                text-sm font-medium
                hover:bg-gray-50
                transition
              "
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35
                  -1.09-.46-2.09-.48-3.24 0
                  -1.44.62-2.2.44-3.06-.35
                  C2.79 15.25 3.51 7.59 9.05 7.31
                  c1.35.07 2.29.74 3.1.8
                  1.21-.25 2.37-.94 3.66-.84
                  1.56.13 2.74.74 3.54 1.84
                  -3.22 1.93-2.46 6.17.5 7.36
                  -.59 1.55-1.36 3.08-2.8 3.81z"
                />

                <path
                  d="M15.53 5.42c.73-.88 1.22-2.12
                  1.08-3.36-1.06.05-2.34.7-3.1
                  1.58-.68.78-1.27 2.04-1.11
                  3.23 1.18.09 2.4-.6 3.13-1.45z"
                />
              </svg>

              <span>Log in with Apple</span>
            </button>

          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">

            <div className="h-px bg-gray-300 flex-1" />

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px bg-gray-300 flex-1" />

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>

              <input
                type="email"
                id="email"
                placeholder="name@company.com"
                required
                className="
                  w-full
                  p-3
                  bg-white
                  border border-gray-300
                  text-gray-900
                  text-sm
                  rounded-lg
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
                {...register("identifier")}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                className="
                  w-full
                  p-3
                  bg-white
                  border border-gray-300
                  text-gray-900
                  text-sm
                  rounded-lg
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
                {...register("password")}
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="w-4 h-4 rounded border-gray-300"
                />

                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="
                w-full
                text-white
                bg-blue-600
                hover:bg-blue-700
                active:bg-blue-800
                font-medium
                rounded-lg
                text-sm
                px-5
                py-3
                transition
              "
            >
              Sign in
            </button>

          </form>

          {/* Register */}
          <p className="text-sm text-center text-gray-500">
            Don't have an account yet?{" "}

            <Link
              href={REGISTER_ROUTE}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
};

export default LoginPage;