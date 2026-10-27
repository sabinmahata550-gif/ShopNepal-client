"use client";

import { useForm } from "react-hook-form";
import { FaCloudArrowUp } from "react-icons/fa6";
import { useState } from "react";
import { addProduct } from "@/api/product";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const Form = () => {
    const { register, handleSubmit,reset } = useForm();
    const [productImages, setProductImages] = useState([]);
    const [localImagesUrls, setLocalImagesUrls] = useState([]);
    const [loading, setLoading] = useState(false);

    function prepareData(data) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("brand", data.brand);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("stock", data.stock);

        if (data.description) {
            formData.append("description", data.description);
        }

        if (productImages.length > 0) {
            productImages.forEach((image) => {
                formData.append("images", image);
            });
        }

        return formData;

    }
    function submitForm(data) {
        setLoading(true)
        const input = prepareData(data);
        addProduct(input).then((response) => {
            console.log(response.data);
            toast.success("Product create successfull.");
            reset();
            setProductImages([]);
            setLocalImagesUrls([]);
        }).catch((error) => {
            console.error(error);
            toast.error(error.response.data)
        }).finally(() => {
            setLoading(false)
        });
        console.log("data is", data);
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
                                onChange={(event) => {
                                    const files = [];
                                    const urls = [];
                                    Array.from(event.target.files).map((file) => {
                                        files.push(file);
                                        urls.push(URL.createObjectURL(file));
                                    })
                                    setProductImages(files);
                                    setLocalImagesUrls(urls);
                                }}
                            />
                        </label>
                    </div>
                    {localImagesUrls.length > 0 && (
                        <div className="sm:col-span-2">
                            <p className="mb-2 text-sm font-semibold text-slate-700">Preview</p>
                            <div className="flex flex-wrap gap-3">
                                {localImagesUrls.map((url, index) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt={`Preview ${index + 1}`}
                                        className="h-20 w-20 rounded-lg object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

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
                            rows={5}
                            placeholder="Write a detailed description of your product..."
                            className="block w-full resize-y rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            {...register("description")}

                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Spinner />
                                Adding Product...
                            </>
                        ) : (
                            "+ Add Product"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;