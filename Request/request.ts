export async function getAllCategory() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response.json();
}

export async function getAllProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}

export async function getSingleProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
}

export async function getProductByCategory(category: string) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.json();
}
