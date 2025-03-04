"use client";
import { footerLinks } from "@/constants";
import React from "react";
import Icon from "../Icons";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return null;
  }
  if (pathname.includes("/signup")) {
    return null;
  }
  return (
    <footer className="bg-[#292929] text-white -mx-[60px] px-[60px] py-10 overflow-hidden">
      <div className="lg:flex grid grid-cols-2 justify-between">
        <div>
          <p className="font-semibold text-[20px]">My Caban</p>
          {/* <p className="my-5 text-white/50 text-sm w-[40%] bg-red-400">
            Discover the best Housing properties for your lifestyle.
          </p> */}
        </div>
        {footerLinks.map((item, index) => (
          <div key={index}>
            <p className="font-semibold text-[20px]">{item.header}</p>

            <div className="my-5 text-white/50 text-sm">
              {item.links.map((link, index) => (
                <p key={index} className="my-1">
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:flex justify-between mt-5 pt-5 border-t-white/50 border-t-[1px]">
        <p>Copyrights - © 2025 Prime Realty. All rights reserved</p>
        <div className="flex gap-4 items-center">
          <Icon url="/icons/sqm.png" />
          <Icon url="/icons/sqm.png" />
          <Icon url="/icons/sqm.png" />
          <Icon url="/icons/sqm.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
