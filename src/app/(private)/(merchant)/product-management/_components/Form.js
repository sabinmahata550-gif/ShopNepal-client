"use client";

import { useForm } from "react-hook-form";
import { FaCloudArrowUp } from "react-icons/fa6";

const Form = () => {
    const{register, handleSubmit} = useForm();
    function submitForm(data){
        console.log(data);
    }
    return (
        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 border-b border-slate-200 pb-5">
                <h2 className="text-2xl font-bold text-slate-800">
                    Add a New Product
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Enter the details below to add a product to your store.
                </p>
            </div>

            <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">

                    {/* Product Name */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Product Name *
                        </label>
                        <input
                            type="text"
                            
                            id="name"
                            placeholder="Enter product name"
                            required
                            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        {...register("name")}
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label
                            htmlFor="brand"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Brand *
                        </label>
                        <input
                            type="text"
                            name="brand"
                            id="brand"
                            placeholder="Enter brand name"
                            required
                            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        
                        {...register("brand")}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label
                            htmlFor="price"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Price (NPR) *
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Rs.300"
                            min="0"
                            required
                            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            {...register("price")}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Category *
                        </label>
                         <input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Enter category name"
                            required
                            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        
                        {...register("category")}
                        />
                    </div>

                    {/* Item Weight */}
                    <div>
                        <label
                            htmlFor="stock"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Stock *
                        </label>
                        <input
                            type="number"
                            name="stock"
                            id="stock"
                            placeholder="1"
                            min="0"
                            required
                            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            {...register("stock")}
                        />
                    </div>

                    {/* Product Image Upload */}
                    <div className="sm:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Product Images
                        </label>

                        <label
                            htmlFor="product-images"
                            className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-indigo-400 hover:bg-indigo-50"
                        >
                            <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
                                <FaCloudArrowUp className="mb-4 h-10 w-10 text-indigo-500" />

                                <p className="mb-2 text-sm text-slate-600">
                                    <span className="font-semibold text-indigo-600">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>

                                <p className="text-xs text-slate-500">
                                    PNG, JPG,  or WEBP 
                                </p>
                            </div>

                            <input
                                id="product-images"
                                name="images"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                multiple
                                className="hidden"
                            />
                        </label>
                    </div>


                    {/* Description */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="description"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            placeholder="Write a detailed description of your product..."
                            required
                            className="block w-full resize-y rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
                    <button
                        type="reset"
                        className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    >
                        + Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;