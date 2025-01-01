"use client";
import { addItem } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";

import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

import { useDispatch } from "react-redux";
import { Product } from "@/Request/typing";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  const dispatch = useDispatch();

  const { toast } = useToast();

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item added to cart!",
      variant: "success",
    });

    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      <p className="mt-5 text:sm capitalize text-gray-600">
        {product.category}
      </p>

      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-800 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>

      {/* rating */}
      <div className="flex items-center mt-2">
        {ratingArray.map(() => (
          <StarIcon
            key={Math.random() * 1000}
            size={16}
            fill="yellow"
            className="text-yellow-500"
          />
        ))}
      </div>

      <div className="flex items-center space-x-2 mt-3">
        {/* price */}
        <p className="text-black text-base line-through font-semibold opacity-50">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>

        <p className="text-black text-lg font-semibold opacity-80">
          {product.price}
        </p>
      </div>
      {/* buttons */}
      <div className="flex items-center space-x-2 mt-2">
        <Button
          onClick={() => addToCartHandler(product)}
          size={"icon"}
          className="bg-blue-600 rounded"
        >
          <ShoppingBag size={20} />
        </Button>

        <Button size={"icon"} className="bg-rose-600 rounded">
          <Heart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
