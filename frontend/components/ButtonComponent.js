"use client";
import React from "react";
import Icon from "./Icons";
import { useRouter } from "next/navigation";

const ButtonComponent = ({ text, trans, additionalStyle, icon, route }) => {
  const router = useRouter();
  return (
    <button
      className={`px-8 h-[43px] rounded-[32px] p-[10px] ${
        trans && "bg-transparent border-[1px] border-primary "
      } ${trans ? " text-[#0ABF73]" : "text-white"} bg-primary  ${
        icon && "flex items-center"
      } ${additionalStyle}`}
    >
      <p onClick={() => router.push(route)}>{text}</p>
      {icon && <Icon url={icon} additionalStyle="w-8 h-8" />}
    </button>
  );
};

export default ButtonComponent;
