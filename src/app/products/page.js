import { getProducts } from "@/api/product";
import React from "react";
import ProductCard from "./_components/Card";

const ProductPage = async () => {
  const products = await getProducts();

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-2 text-gray-500">
            Discover our latest products
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <li key={product._id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );


};

export default ProductPage;