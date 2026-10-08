"use client";

import { useForm } from "react-hook-form";
import { signup } from "@/api/auth";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";
import authStore from "@/stores/authStote";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "@/components/Spinner";

const RegisterPage = () => {

    const { register, handleSubmit } = useForm();
    const { signupUser } = authStore.getState();
    const [loading, setLoading] = useState(false);

    function submitForm(data) {
        setLoading(true);

        signup(data)
            .then((response) => {
                signupUser({ user: response.user });
                toast.success("Register successful!");
            })
            .catch((error) => {
                console.error("Register error:", error);

                const errors = error.response?.data?.errors;

                if (errors?.length > 0) {
                    errors.forEach((err) => {
                        toast.error(err.message);
                    });
                } else {
                    toast.error(
                        error.response?.data?.message ||
                        "Register failed. Please try again."
                    );
                }
            })
    }

    return (
        <div className="space-y-6">

            {/* Title */}
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    Create an account
                </h1>
            </div>


            {/* OR Divider */}
            <div className="flex items-center gap-3">

                <div className="h-px bg-gray-300 flex-1" />

                <span className="text-sm text-gray-400">
                    OR
                </span>

                <div className="h-px bg-gray-300 flex-1" />

            </div>


            {/* Form */}
            <form
                onSubmit={handleSubmit(submitForm)}
                className="space-y-4"
            >

                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your name
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        required
                        className="
              w-full h-11
              px-3
              bg-gray-50
              border border-gray-300
              text-gray-900
              text-sm
              rounded-lg
              outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
                    />
                </div>


                {/* Address */}
                <div>

                    <h2 className="text-sm font-semibold text-gray-900 mb-3">
                        Address
                    </h2>


                    {/* Province */}
                    <div className="mb-3">

                        <label
                            htmlFor="province"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Province
                        </label>

                        <select
                            id="province"
                            {...register("address.0.province")}
                            required
                            className="
                w-full h-11
                px-3
                bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
                        >
                            <option value="">Select Province</option>
                            <option value="koshi">Koshi</option>
                            <option value="madhesh">Madhesh</option>
                            <option value="bagmati">Bagmati</option>
                            <option value="gandaki">Gandaki</option>
                            <option value="lumbini">Lumbini</option>
                            <option value="karnali">Karnali</option>
                            <option value="sudurpashchim">
                                Sudurpashchim
                            </option>
                        </select>

                    </div>


                    {/* District */}
                    <div className="mb-3">

                        <label
                            htmlFor="district"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            District
                        </label>

                        <select
                            id="district"
                            {...register("address.0.district")}
                            required
                            className="
                w-full h-11
                px-3
                bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
                        >
                            <option value="">Select District</option>
                            <option value="darchula">Darchula</option>
                            <option value="kailali">Kailali</option>
                            <option value="kanchanpur">Kanchanpur</option>
                            <option value="dadeldhura">Dadeldhura</option>
                            <option value="baitadi">Baitadi</option>
                            <option value="bajura">Bajura</option>
                            <option value="bajhang">Bajhang</option>
                            <option value="achham">Achham</option>
                            <option value="doti">Doti</option>
                        </select>

                    </div>


                    {/* City */}
                    <div className="mb-3">

                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            City
                        </label>

                        <select
                            id="city"
                            {...register("address.0.city")}
                            required
                            className="
                w-full h-11
                px-3
                bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
                        >
                            <option value="">Select City</option>
                            <option value="darchula">Darchula</option>
                            <option value="mahakali">Mahakali</option>
                            <option value="lecam">Lecam</option>
                            <option value="malikarjun">Malikarjun</option>
                        </select>

                    </div>


                    {/* Street */}
                    <div>

                        <label
                            htmlFor="street"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Street
                        </label>

                        <input
                            type="text"
                            id="street"
                            placeholder="Bakalbaj"
                            {...register("address.0.street")}
                            required
                            className="
                w-full h-11
                px-3
                bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
                        />

                    </div>

                </div>


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
                        {...register("email")}
                        required
                        className="
              w-full h-11
              px-3
              bg-gray-50
              border border-gray-300
              text-gray-900
              text-sm
              rounded-lg
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
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

                    <PasswordInput
                        id="password"
                        {...register("password")}
                    />

                </div>


                {/* Phone */}
                <div>

                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Phone number
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        placeholder="98XXXXXXXX"
                        {...register("phone")}
                        required
                        className="
              w-full h-11
              px-3
              bg-gray-50
              border border-gray-300
              text-gray-900
              text-sm
              rounded-lg
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
                    />

                </div>


                {/* Terms */}
                <div className="flex items-start gap-2">

                    <input
                        id="terms"
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4"
                    />

                    <label
                        htmlFor="terms"
                        className="text-sm text-gray-500"
                    >
                        I accept the{" "}

                        <Link
                            href="/terms"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Terms and Conditions
                        </Link>

                    </label>

                </div>


                {/* Create Account */}
                <button
                    type="submit"
                    disabled={loading}
                    className="
    w-full
    h-12
    text-white
    bg-blue-600
    hover:bg-blue-700
    active:bg-blue-800
    disabled:bg-blue-400
    disabled:cursor-not-allowed
    font-medium
    rounded-lg
    text-sm
    px-5
    transition
    flex
    items-center
    justify-center
    gap-2
  "
                >
                    {loading ? (
                        <>
                            <Spinner />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>

            </form>


            {/* Login */}
            <div className="flex items-center gap-3">

                <div className="h-px bg-gray-200 flex-1" />

                <p className="text-sm text-gray-500 whitespace-nowrap">
                    Already have an account?{" "}

                    <Link
                        href="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>

                <div className="h-px bg-gray-200 flex-1" />

            </div>


            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

                <button
                    type="button"
                    className="
            flex-1
            h-11
            border border-gray-300
            rounded-lg
            bg-white
            text-sm
            text-gray-700
            hover:bg-gray-50
            flex items-center justify-center gap-2
          "
                >
                    <span className="font-bold text-red-500">
                        G
                    </span>

                    Continue with Google
                </button>


                <button
                    type="button"
                    className="
            flex-1
            h-11
            border border-gray-300
            rounded-lg
            bg-white
            text-sm
            text-gray-700
            hover:bg-gray-50
            flex items-center justify-center gap-2
          "
                >
                    <span className="text-lg">
                        
                    </span>

                    Continue with Apple
                </button>

            </div>

        </div>
    );
};

export default RegisterPage;