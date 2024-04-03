import ProductCards from "@/components/ProductCards";
import { Product } from "@/types/product.type";
import { fetchProducts } from "@/utils/fetchProducts";
import React from "react";

const Shop = async () => {
  const data = await fetchProducts();
  const products: Product[] = data.products ? data.products : [];
  return (
    <div className="">
      <div
        className="flex items-center justify-center w-full h-24"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683796112978-fa4b9fa79e58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-2xl bg-slate-200 bg-opacity-85 px-6 py-1 text-slate-700 font-light w-1/3 text-center">
          Shop
        </h1>
      </div>
      <div className="py-6">
        <ProductCards products={products} />
      </div>
    </div>
  );
};

export default Shop;
