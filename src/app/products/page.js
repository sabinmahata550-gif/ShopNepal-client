import Link from "next/link";
import React from "react";

const ProductPage = async () => {
  const response = await fetch(
    "https://shop-nepal-puce.vercel.app/api/products"
  );

  const data = await response.json();

  const { products } = data;

  return (

    <>
      <div className="py-16">
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link href={`/products/${product._id}`}>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};

export default ProductPage;