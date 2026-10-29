
"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/api/product";
import { FaCog, FaEye, FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { FaPencil } from "react-icons/fa6";

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="p-6 text-center text-gray-600 dark:text-gray-300">
                Loading products...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Created At
                        </th>
                        <th scope="col" className="px-4 py-3">
                            <FaCog />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr
                                key={product._id}
                                className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                            >
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={
                                                product.imageUrls?.[0] ||
                                                product.images?.[0] ||
                                                "/placeholder.png"
                                            }
                                            alt={product.name || "Product"}
                                            className="h-10 w-10 rounded object-cover"
                                        />

                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {product.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-4 py-3 bg-primary/10">
                                    {product.category?.name ||
                                        product.category ||
                                        "N/A"}
                                </td>

                                <td className="px-4 py-3">
                                    {product.brand?.name ||
                                        product.brand ||
                                        "N/A"}
                                </td>

                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                    Rs. {Number(product.price || 0).toLocaleString()}
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`rounded px-2 py-1 text-xs font-medium ${product.stock > 10
                                            ? "bg-green-100 text-green-700"
                                            : product.stock > 0
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {product.stock ?? 0}
                                    </span>
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                    {format(product.createdAt, "dd MMM,yyy")}
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        {/* View Product */}
                                        <button
                                            type="button"
                                            title="View Product"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FaEye size={18} />
                                        </button>

                                        {/* Edit Product */}
                                        <button
                                            type="button"
                                            title="Edit Product"
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <FaPencil size={18} />
                                        </button>

                                        {/* Delete Product */}
                                        <button
                                            type="button"
                                            title="Delete Product"
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <FaTrash size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="px-4 py-8 text-center"
                            >
                                No products found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
