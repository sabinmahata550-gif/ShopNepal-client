import { PRODUCTS_ROUTE } from "@/constants/routes";
import Link from "next/link";

const ProductCard = ({
    name,
    _id,
    brand,
    category,
    description,
    price,
    imageUrls,
}) => {
    const handleAddToCart = () => {
        console.log("Added to cart:", _id);
    };

    return (
        <div className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Product Image */}
            <div className="relative h-48 shrink-0 overflow-hidden bg-gray-100">
                <img
                    src={imageUrls?.[0]}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                    {category}
                </span>
            </div>

            {/* Product Content */}
            <div className="flex flex-1 flex-col p-4">

                {/* Brand */}
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {brand}
                </p>

                {/* Name */}
                <Link
                    href={`${PRODUCTS_ROUTE}/${_id}`}
                    className="group/name"
                >
                    <h2 className="mt-1 line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover/name:text-blue-500">
                        {name}
                    </h2>
                </Link>

              
                {/* Bottom */}
                <div className="mt-auto pt-4">

                    {/* Price */}
                    <div className="mb-4">
                        <p className="text-xs text-gray-400">
                            Price
                        </p>

                        <p className="text-lg font-bold text-red-500">
                            Rs. {price?.toLocaleString()}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">

                        {/* View */}
                        <Link
                            href={`${PRODUCTS_ROUTE}/${_id}`}
                            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                        >
                            View
                        </Link>

                        {/* Add to Cart */}
                        <button
                            type="button"
                            className="flex-1 rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-95"
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;