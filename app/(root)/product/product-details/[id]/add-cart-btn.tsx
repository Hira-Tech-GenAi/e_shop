"use client";
import React from "react";
import { Button } from "../../../../../components/ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../store/cartSlice"; // Import the addItem action creator
import { Product } from "@/Request/typing";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const AddToCartBtn = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Fix the argument
  const addCartHandler = (product: Product) => {
    toast({
      description: "Item added to cart!",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div>
      <Button
        onClick={() => {
          addCartHandler(product);
        }}
        className="mt-6 hover:bg-rose-500 "
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCartBtn;
