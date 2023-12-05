"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    name: "Hotel De Luna",
    location: "Vietnam",
  },
  {
    image: "/find/hotel-2.png",
    name: "Ina Tretes Hotel",
    location: "Vietnam",
  },
  {
    image: "/find/hotel-3.png",
    name: "Delight Hotel",
    location: "Vietnam",
  },
  {
    image: "/find/hotel-4.png",
    name: "Mecusuar Hotel",
    location: "Vietnam",
  },
];

const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2 className="h2 mb-6">Find your best hotel</h2>
          <p className="max-w-[638px] mx-auto mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure
            cum assumenda quibusdam, nostrum iusto ab at inventore repudiandae
            nemo aliquam nulla placeat sapiente fugiat tempora quos libero
            veritatis! Unde.
          </p>
          <div>
            <Button variant="accent" className="px-12 mb-14 xl:mb-28">
              View All
            </Button>
          </div>
        </div>
        {/* hotel grid */}
        <div className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
          {hotelData.map((hotel, index) => {
            return (
              <div
                className="border-2 border-outline w-[270px] h[390px] rounded-xl overflow-hidden hover: cursor-pointer
              group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
                key={index}
              >
                <Image src={hotel.image} width={270} height={270} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Find;
