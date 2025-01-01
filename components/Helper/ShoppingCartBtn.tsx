"use client";
import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CartSideBar from "./CartSideBar";

const ShoppingCartBtn = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  // console.log(items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative ">
          <span className="absolute -top-3 -right-2 flex h-6 w-6 items-center justify-center flex-col rounded-full bg-red-500 text-xs text-white text-center">
            {totalQuantity}
          </span>
          <ShoppingBagIcon size={30} cursor={"pointer"} />
        </div>
      </SheetTrigger>

      <SheetContent className="over-flow-auto h-full">
        {/* Cart sidebar */}
        <CartSideBar  items={items}/>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartBtn;
