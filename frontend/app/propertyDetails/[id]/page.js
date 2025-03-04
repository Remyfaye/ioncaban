"use client";
import ButtonComponent from "@/components/ButtonComponent";
import Icon from "@/components/Icons";
import Spec from "@/components/Spec";
import { listings } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[2] || "";
  const item = listings.find((list) => list.id === id);
  console.log(parts);
  return (
    <div className="pt-[70px]">
      <h2>Property Details</h2>

      <div className="mb-10 mt-5 flex ">
        <Icon additionalStyle={"rounded-xl w-[90%] "} url={item.image} />
        <div className="bg-[#EBFEF38F] w-[35%] py-10 px-5 rounded-xl">
          <h3 className="font-bold">{item.name}</h3>

          <div className="my-3">
            <p className="font-bold">Location</p>
            <div className="flex gap-1 my-1  items-start">
              <Icon
                // additionalStyle={"rounded-xl w-[370px] h-[326px]"}
                url="/icons/location.png"
              />
              <div>
                <span>{item.street}</span> <span>{item.city}</span>
              </div>
            </div>
          </div>

          <div>
            <p>Price</p>
            <p className="font-bold">&#8358;{item.price}</p>
          </div>

          <div className="my-3">
            <p>Seller</p>
            <div className="flex items-center gap-3">
              <Icon
                additionalStyle={"rounded-full w-[50px] "}
                url={item.seller.image}
              />

              <p className="capitalize">{item.seller.name}</p>
            </div>
          </div>
          <ButtonComponent text="view" />
        </div>
      </div>

      <div>
        <h2>Specifications</h2>
        <div className="flex flex-wrap gap-7">
          <Spec
            title="Size"
            sub={item.specifications.size}
            icon="/icons/bed.png"
          />

          <Spec
            title="Bedrooms"
            sub={item.specifications.Bedrooms}
            icon="/icons/bed.png"
          />

          <Spec
            title="Bathrooms"
            sub={item.specifications.Bathrooms}
            icon="/icons/bath.png"
          />

          <Spec
            title="Toilets"
            sub={item.specifications.Toilets}
            icon="/icons/bed.png"
          />

          <Spec
            title="PowerSupply"
            sub={item.specifications.PowerSupply}
            icon="/icons/power.png"
          />

          <Spec
            title="WaterSupply"
            sub={item.specifications.WaterSupply}
            icon="/icons/water.png"
          />

          <Spec
            title="AirConditioner"
            sub={item.specifications.AirConditioner}
            icon="/icons/bed.png"
          />

          <Spec
            title="Furnishing"
            sub={item.specifications.Furnishing}
            icon="/icons/bed.png"
          />
          <Spec
            title="Parkingspace"
            sub={item.specifications.Parkingspace}
            icon="/icons/bed.png"
          />
        </div>
      </div>

      <div className="my-5">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default page;
