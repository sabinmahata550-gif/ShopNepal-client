
"use client";

import { signup } from "@/api/auth";
import Spinner from "@/components/Spinner";
import PasswordInput from "@/components/PasswordInput";
import { HOME_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStote";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const registerUser = useAuthStore(
        (state) => state.registerUser
    );

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const submitForm = async (data) => {
        try {
            setLoading(true);

            const payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone,
                address: [
                    {
                        street: data.street,
                        city: data.city,
                        province: data.province,
                        country: data.country,
                        district: data.district,
                    },
                ],
            };

            const response = await signup(payload);

            registerUser({
                user: response.data.user,
            });

            toast.success(
                response.data.message || "Registration successful!"
            );

            reset();
            router.replace(HOME_ROUTE);

        } catch (error) {
            const response = error.response?.data;
            if (Array.isArray(response?.errors) && response.errors.length > 0) {
                response.errors.forEach((err) => {
                    toast.error(err.message || String(err));
                });
            } else {
                toast.error(
                    response?.message ||
                    response?.error ||
                    "Registration failed!"
                );
            }
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

    const labelClass =
        "mb-2 block text-sm font-medium text-gray-700";

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
                <h1 className="text-center text-3xl font-bold text-gray-900">
                    Create Account
                </h1>

                <p className="mt-2 text-center text-gray-500">
                    Join Nepal Shops and start shopping today.
                </p>

                <form
                    onSubmit={handleSubmit(submitForm)}
                    className="mt-8 space-y-5"
                >
                    {/* Name */}
                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className={inputClass}
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className={labelClass}>Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className={inputClass}
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                            type="tel"
                            placeholder="98XXXXXXXX"
                            className={inputClass}
                            {...register("phone", {
                                required: "Phone number is required",
                            })}
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    {/* Street */}
                    <div>
                        <label className={labelClass}>Street Address</label>
                        <input
                            type="text"
                            placeholder="House number, street, ward"
                            className={inputClass}
                            {...register("street", {
                                required: "Street address is required",
                            })}
                        />
                        {errors.street && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.street.message}
                            </p>
                        )}
                    </div>

                    {/* District and City */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className={labelClass}>District</label>
                            <input
                                type="text"
                                placeholder="Enter district"
                                className={inputClass}
                                {...register("district", {
                                    required: "District is required",
                                })}
                            />
                            {errors.district && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.district.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelClass}>City</label>
                            <input
                                type="text"
                                placeholder="Enter city"
                                className={inputClass}
                                {...register("city", {
                                    required: "City is required",
                                })}
                            />
                            {errors.city && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.city.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Province */}
                    <div>
                        <label className={labelClass}>Province</label>
                        <select
                            className={inputClass}
                            defaultValue=""
                            {...register("province", {
                                required: "Please select a province",
                            })}
                        >
                            <option value="" disabled>
                                Select Province
                            </option>
                            <option value="Koshi">Koshi</option>
                            <option value="Madhesh">Madhesh</option>
                            <option value="Bagmati">Bagmati</option>
                            <option value="Gandaki">Gandaki</option>
                            <option value="Lumbini">Lumbini</option>
                            <option value="Karnali">Karnali</option>
                            <option value="Sudurpashchim">
                                Sudurpashchim
                            </option>
                        </select>
                        {errors.province && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.province.message}
                            </p>
                        )}
                    </div>

                    {/* Country */}
                    <div>
                        <label className={labelClass}>Country</label>
                        <select
                            className={inputClass}
                            {...register("country", {
                                required: "Please select a country",
                            })}
                        >
                            <option value="Nepal">Nepal</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Bhutan">Bhutan</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div>
                        <label className={labelClass}>Password</label>
                        <PasswordInput
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password must be at least 8 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading && <Spinner />}
                        <span>
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </span>
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;

