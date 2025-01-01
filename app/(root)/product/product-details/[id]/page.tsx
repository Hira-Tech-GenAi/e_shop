import { getProductByCategory, getSingleProduct } from "@/Request/request";
import { Product } from "@/Request/typing";
import React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddToCartBtn from "@/app/(root)/product/product-details/[id]/add-cart-btn";
import ProductCard from "@/components/Home/ProductCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(
    singleProduct.category
  );
  //?console.log(singleProduct);

  const num = Math.round(singleProduct?.rating?.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      {/*Define grid system*/}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Image */}
        <div className="col-span-3 mb-6 lg:mb-0 flex justify-center">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
            className="object-contain w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Content */}
        <div className="col-span-4">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            {singleProduct.title}
          </h1>

          {/* Rating */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {ratingArray.map(() => (
                <StarIcon
                  key={Math.random() * 5000}
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              {singleProduct?.rating?.count
                ? `${singleProduct.rating.count} Reviews`
                : "No reviews"}
            </p>
          </div>

          {/* Divider */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>

          {/* Price */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-950">
            ${singleProduct.price.toFixed(2)}
          </h1>

          {/* Description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct.description}
          </p>

          {/* Extra Info */}
          <p className="mt-4 text-sm text-black opacity-70 font-semibold">
            Category: {singleProduct.category}
          </p>
          <p className="mt-2 text-sm text-black opacity-70 font-semibold">
            Tag: e-commerce Shop
          </p>
          <p className="mt-2 text-sm text-black opacity-70 font-semibold">
            SKU: {Math.floor(Math.random() * 500)}
          </p>

          {/* Add to Cart Button */}

          <AddToCartBtn product={singleProduct} />
        </div>
      </div>

      {/* Related Products */}
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Products</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
