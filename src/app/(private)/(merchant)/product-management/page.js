"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/product";
import { FaPlus, FaBox, FaChartLine } from "react-icons/fa";

import ProductTable from "./_components/Table";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";

const ProductManagementPage = () => {
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setTotalProducts(products.length);
            } catch (error) {
                console.error("Failed to fetch product count:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="min-h-screen bg-gray-50 py-5 dark:bg-gray-900 sm:py-8">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Product Management
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Manage, view, and organize your products.
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                    {/* Header */}
                    <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap items-center gap-4">
                            {/* Total Products */}
                            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                <FaBox className="text-xl text-blue-600" />

                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Total Products
                                    </p>

                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                        {totalProducts}
                                    </p>
                                </div>
                            </div>

                            {/* Total Sales */}
                            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                <FaChartLine className="text-xl text-green-600" />

                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Total Sales
                                    </p>

                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                        Not available
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Add Product Button */}
                        <Link
                            href={`${PRODUCT_MANAGEMENT_ROUTE}/add`}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            <FaPlus />
                            Add New Product
                        </Link>
                    </div>

                    {/* Products Table */}
                    <ProductTable />
                </div>
            </div>
        </section>
    );
};

export default ProductManagementPage;
