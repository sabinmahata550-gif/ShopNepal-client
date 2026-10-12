
"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { login } from "@/api/auth";
import { REGISTER_ROUTE, HOME_ROUTE } from "@/constants/routes";
import PasswordInput from "@/components/PasswordInput";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStote";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginUser = useAuthStore(
    (state) => state.loginUser
  );

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitForm = async (data) => {
    try {
      setLoading(true);

      const response = await login(data);

      console.log("Login response:", response.data);

      // Save the logged-in user in Zustand
      loginUser({
        user: response.data.user,
      });

      toast.success(
        response.data.message || "Login successful!"
      );

      reset();
      router.replace(HOME_ROUTE);
    } catch (error) {
      const response = error.response?.data;

      console.error(
        "Login error:",
        response || error.message
      );

      toast.error(
        response?.message ||
        response?.error ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-900";

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Welcome back to Nepal Shops.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="space-y-5"
        >
          {/* Email or Phone */}
          <div>
            <label
              htmlFor="identifier"
              className={labelClass}
            >
              Email or Phone
            </label>

            <input
              id="identifier"
              type="text"
              autoComplete="username"
              placeholder="Enter email or phone"
              className={inputClass}
              {...register("identifier", {
                required:
                  "Email or phone is required",
              })}
            />

            {errors.identifier && (
              <p className="mt-1 text-sm text-red-500">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className={labelClass}
            >
              Password
            </label>

            <PasswordInput
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember and Forgot Password */}
          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Spinner />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account yet?{" "}

          <Link
            href={REGISTER_ROUTE}
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;

