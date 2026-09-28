const ProductBanner = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Welcome to NepalShops
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Shop Everything
              <span className="text-blue-600"> You Love</span>
            </h1>

            <p className="mt-5 text-gray-600 text-lg max-w-lg">
              Discover quality products from trusted sellers
              across Nepal. Find the best products at the best prices.
            </p>

            <div className="mt-7 flex gap-4">
              <a
                href="/products"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Shop Now
              </a>

              <a
                href="/categories"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-white transition"
              >
                Explore Categories
              </a>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="flex justify-center">
            <img
              src="https://fatafatsewa.com/_next/image?url=https%3A%2F%2Fimg.fatafatsewa.com%2Fproducts%2F1934%2Fiphone-13-pink-price-in-nepal-2021-kird.png&w=1920&q=75"
              alt="Featured Products"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductBanner;

