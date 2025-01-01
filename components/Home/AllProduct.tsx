"use client";

import { Product } from "@/Request/typing";
import { Loader } from "lucide-react";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  //? Initialize state for products and loading status
  const [product, setProduct] = React.useState<Product[] | null>(null); //* products array or null
  const [loading, setLoading] = React.useState<boolean>(true); //* loading status (true/false)

  //? Log the current product state (for debugging purposes)
  console.log(product);

  //? Use the useEffect hook to fetch products when the component mounts
  useEffect(() => {
    //? Define an async function to fetch products
    const fetchProduct = async () => {
      try {
        //! Fetch products from the fake store API
        const response = await fetch("https://fakestoreapi.com/products");
        //? Parse the response data as JSON
        const data = await response.json();
        //? Update the product state with the fetched data
        setProduct(data);
        //? Set loading status to false
        setLoading(false);
      } catch (error) {
        //? Log any errors that occur during fetching
        console.error("Error fetching products:", error);
        //? Set loading status to false (even if an error occurs)
        setLoading(false);
      } finally {
        //? Ensure loading status is set to false (regardless of outcome)
        setLoading(false);
      }
    };

    // *Call the fetchProduct function to start the fetching process
    fetchProduct();
  }, []); //* empty dependency array means this effect runs only once on mount

  //? Return a placeholder div (to be replaced with actual product rendering)
  return (
    <div className="pt-12 pb-12 ">
     
        <h1 className="text-center text-3xl font-bold capitalize font-inter ">
          All Product
        </h1>
      
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={33} className="animate-spin" />
        </div>
      ) : (
        <div className="mt-16 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-12 ">
          {product?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
