import axios from "axios";
export const fetchProducts = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    if (res && res.status === 200) return res.data;
    return { products: [] };
  } catch (error) {
    if (error) return { products: [] };
  }
};
