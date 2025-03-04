"use client";
import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { listings } from "@/constants";
import Icon from "../Icons";
import ListingComponent from "../ListingComponent";

const Explore = () => {
  const nav = ["Flats", "Apartments", "Duplexes", "Condos", "Shop space"];
  const [active, setActive] = useState(nav[0]);

  return (
    <section className="flex justify-center flex-col items-center my-10">
      <h1 className="text-center lg:w-[70%] ">
        Explore Our Highly Rated Apartments & Buildings
      </h1>

      <div className="flex gap-5 my-5 overflow-x-scroll invisible-scrollbar w-[390px]">
        {nav.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-8 h-[43px] rounded-[32px] p-[10px] ${
              active !== item && "bg-transparent border-[1px] border-primary "
            } ${active === item ? " text-white" : "text-primary"} bg-primary`}
          >
            <p>{item}</p>
          </button>
        ))}
      </div>

      <ListingComponent item={listings} />
    </section>
  );
};

export default Explore;
