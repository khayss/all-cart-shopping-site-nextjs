// import { ProductContext } from "@/contexts/ProductContext";
import { Product } from "@/types/product.type";
import ItemCard from "./ItemCard";
type Props = { products: Product[] };

const HomeCards = ({ products }: Props) => {
  const randomProducts = (products: Product[]) => {
    return products.sort(() => 0.5 - Math.random()).slice(0, 3);
  };
  const homeCardProducts = randomProducts(products);
  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-8">
      {homeCardProducts.map((product) => {
        return product.stock > 0 ? (
          <div key={product.id}>
            <ItemCard product={product} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default HomeCards;
