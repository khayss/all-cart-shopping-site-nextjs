import HomeCallToAction from "@/components/HomeCallToAction";
import HomeCards from "@/components/HomeCards";
import { Product } from "@/types/product.type";
import { fetchProducts } from "@/utils/fetchProducts";


export default async function Home() {
  const data = await fetchProducts();
  const products: Product[] = data.products ? data.products : [];

  return (
    <div className="">
      <div className="pb-6">
        <HomeCallToAction />
      </div>
      <div className="pb-6">
        <HomeCards products={products} />
      </div>
      <div className=""></div>
    </div>
  );
}



// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "black friday",
//     text: "All your needs in one go",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "woman shopping",
//     text: "shop with style",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "fast delivery",
//     text: "super fast delivery",
//   },
// ];
