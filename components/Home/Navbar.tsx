"use client";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "../Helper/SearchBar";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartBtn from "../Helper/ShoppingCartBtn";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between h-full mx-auto w-[95%] md:w-[4/5]">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" width={80} height={80} alt="logo" />
        </Link>

        {/* icons */}
        <div className="flex items-center space-x-6">
          {/* search bar */}
          <SearchBar />

          <HeartIcon size={30} cursor={"pointer"} />

          {/* shopping cart button*/}
          <ShoppingCartBtn />

          {/* sign in button */}

          {/* if user signed in */}

          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* if user signed out */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={30} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
