import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/*define grid system*/}
      <div className="w-4/5 border-b-slate-500 pb-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/*first column*/}
        <div>
          <h1 className="text-[25px] text-black font-semibold mb-4 capitalize">
            e-commerce shop
          </h1>

          <p className="text-sm text-black opacity-60">
            &quot;Discover a World of Exclusive Deals and Premium
            Products&quot;Shop. Smart, Live Better: Unbeatable Prices and
            Quality You Can Trust
          </p>

          <p className="text-base text-black opacity-80 mt-6">
            (+000) 123 456 789 - info@e-shop.com
          </p>
        </div>

        {/*second column*/}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_links">About Us</p>
          <p className="footer_links">Privacy Policy</p>
          <p className="footer_links">Return Policy</p>
          <p className="footer_links">Dropshipping</p>
          <p className="footer_links">Shipping Policy</p>
        </div>
        {/*third column*/}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_links">Dashboard</p>
          <p className="footer_links">My Order</p>
          <p className="footer_links">Account Details</p>
          <p className="footer_links">Track Orders</p>
          <p className="footer_links">Shipping Policy</p>
        </div>

        {/*forth column*/}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_links">Affiliate</p>
          <p className="footer_links">My Order</p>
          <p className="footer_links">Best Seller</p>
          <p className="footer_links">Latest Product</p>
          <p className="footer_links">Sales Product</p>
        </div>
      </div>

      {/*copy right*/}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 justify-between w-4/5 mx-auto gap-6">
        <p className="text-sm text-black opacity-70">
          Copyright &copy; 2024 E-Shop. All rights reserved by{" "}
          <span className="font-semibold text-orange-600">Hira Khalid</span>
        </p>

        <Image
          src="/images/pay.svg"
          alt="payment"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
