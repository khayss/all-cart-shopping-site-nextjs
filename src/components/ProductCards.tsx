import { Product } from "@/types/product.type";
import ItemCard from "./ItemCard";
type Props = { products: Product[] };

const ProductCards = ({ products }: Props) => {
  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-8">
      {products.map((product) => {
        return product.stock > 0 ? (
          <div key={product.id}>
            <ItemCard product={product} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ProductCards;
