import { CartItem, removeItem, addItem } from "@/store/cartSlice";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";


type Props = {
  items: CartItem[];
};

const CartSideBar = ({ items }: Props) => {
  const dispatch = useDispatch();
  
  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
const removeCartHandler = (id: number) => dispatch(removeItem({id}));
  return (
    <div className="mt-6 h-full mb-6">
      {/* title */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>

      {/*if cart items will be empty */}
      {items.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[80vh] flex-col">
          <Image
            src="/images/cart.svg"
            width={200}
            height={200}
            alt="empty cart"
            className="object-cover mx-auto"
          />
          <h1 className="mt-3 text-2xl font-semibold">Your cart is empty</h1>
        </div>
      ) : null}
      {items.length > 0 && (
        <div>
          {/*if cart items will not be empty */}
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              >
                <div>
                  {/*cart image */}
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover nb-4"
                  />
                </div>

                <div>
                  {/*cart title and price */}
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item?.title}
                  </h1>
                  <h1 className="text-base text-blue-950 font-bold">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </h1>

                  {/*cart quantity */}
                  <h1 className="text-base font-bold mb-2">
                    Quantity : {item?.quantity}
                  </h1>

                  {/*add two buttons add button and remove button */}
                  <div className="flex  items-center spaces-x-4">
                    <Button
                      onClick={() => removeCartHandler(item.id)}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button
                      onClick={() => addCartHandler(item)}
                      size={"sm"}
                      variant={"default"}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          <Link href="/cart">
            <SheetClose>
              <Button className="w-full mt-6 mb-6 hover:bg-rose-500">
                View Cart
              </Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSideBar;
