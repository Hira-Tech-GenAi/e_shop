import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/*Define grid */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/*content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl-text-5xl font-bold font-inter text-black uppercase">
            mega sale <span className="text-rose-600">Special</span> offer up
            to <span className="text-orange-500">50%</span> {""}off
          </h1>
          <p className="text-sm  md:text-base lg:text-lg text-black opacity-70 mt-4 font-inter">
            Discover a world of unbeatable deals and premium products at your
            fingertips. Shop the latest trends, find everyday essentials, and
            enjoy fast, reliable shipping—tailored for your convenience. Elevate
            your online shopping experience today!
          </p>
          <div className="flex mt-6 items-center space-x-4">
            {/*buttons import from ui/button*/}
            <Button size={"lg"} className="bg-rose-600 rounded">
              Shop Now
            </Button>
            <Button size={"lg"}  className="bg-blue-600 rounded">
              Explore More
            </Button>
          </div>
        </div>

        {/*image */}
        <div className="hidden lg:block">
          <Image
            src="/images/hero2.svg.jpg"
            width={700}
            height={700}
            alt="hero"
            className="lg:h-[80%] lg:w-[80%] xl:h-[90%] xl:w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
