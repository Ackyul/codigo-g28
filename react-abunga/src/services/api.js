export const fetchProducts = async () => {
  const response = await fetch("https://6952d479a319a928023a15f1.mockapi.io/Productos");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};
