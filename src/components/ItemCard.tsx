import Image from "next/image";
// import { useContext, useMemo } from "react";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import { numberWithCommas } from "@/utils/numberFormatter";
import { Product } from "@/types/product.type";
import AddToCartButton from "./AddToCartButton";
type ItemProps = { product: Product };
function ItemCard({ product }: ItemProps) {
  return (
    <div className=" flex flex-col overflow-hidden rounded-md bg-slate-50 text-gray-700 border-slate-50 border-2 hover:bg-slate-100 hover:shadow-sm">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-40">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={720}
            height={720}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col w-full px-4">
          <div className="flex pt-3 pb-1.5">
            <StarIcon className="text-yellow-400" />
            <p>({product.rating.toFixed(1)})</p>
          </div>
          <div className="flex gap-x-2">
            {product.discountPercentage > 5 && (
              <p className="line-through text-gray-600">
                $
                {numberWithCommas(
                  Math.round(
                    product.price * (1 + product.discountPercentage / 100)
                  )
                )}
              </p>
            )}
            <p className="text-lg font-medium text-gray-800">
              ${numberWithCommas(product.price)}
            </p>
          </div>
          <div className="flex pb-3">
            <h2 className="font-medium">{product.title}</h2>
          </div>
        </div>
      </Link>
      <div className="flex h-1/4">
        <AddToCartButton item={product} />
      </div>
    </div>
  );
}

export default ItemCard;
