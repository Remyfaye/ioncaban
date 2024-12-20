"use client";
import React, { useState } from "react";
import Icon from "./Icons";
import ButtonComponent from "./ButtonComponent";

const nav = [
  {
    name: "Home",
    route: "home",
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
  const [active, setActive] = useState("home");
  return (
    <div className="flex justify-between py-5 items-center text-primary">
      <Icon url="/logo.png" />
      <div className="flex gap-5">
        {nav.map((item, index) => (
          <p
            key={index}
            className={`${
              active === item.route && "text-gray-300"
            } cursor-pointer`}
            onClick={() => setActive(item.route)}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex gap-[8px]">
        <ButtonComponent text="Log in" />
        <ButtonComponent trans text="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
