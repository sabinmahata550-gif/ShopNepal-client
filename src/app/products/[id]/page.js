async function fetchProductsById(id) {
  const response = await fetch(
    `https://shop-nepal-puce.vercel.app/api/products/${id}`
  );
  const data = await response.json();
  const { product } = data;

  if (!product)
    throw {
      message: "Product not found."
    }

  return product
}

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const product = await fetchProductsById(id);

  return{
    title:product.name,
    description:`${product.name} ${product.brand} ${product.category}`
  }


}
const productDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await fetchProductsById(id);

  return (
    <div className=" py-16">
      <img src={product.imageUrls} alt={product.name} height={300} width={300} />
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};


export default productDetailsPage