"use client";
import React, { useState } from "react";
import Icon from "./Icons";
import ButtonComponent from "./ButtonComponent";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Buy",
    route: "buy",
  },
  {
    name: "Sell",
    route: "sell",
  },
  {
    name: "Find an Agent",
    route: "findAgent",
  },
  {
    name: "Contact",
    route: "contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return null;
  }
  if (pathname.includes("/signup")) {
    return null;
  }
  const [active, setActive] = useState("home");
  return (
    <div className="fixed w-full bg-white mb-10 -mx-[60px] px-[60px]   flex justify-between py-5 items-center text-primary">
      <Icon url="/logo.png" />
      <div className="lg:flex gap-5 hidden">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={`${
              active === item.route && "text-secondary"
            } cursor-pointer`}
            onClick={() => setActive(item.route)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="lg:flex gap-[8px] hidden">
        <ButtonComponent text="Log in" />
        <ButtonComponent trans text="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
