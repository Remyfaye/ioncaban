import React from "react";

const ButtonComponent = ({ text, trans }) => {
  return (
    <button
      className={`w-[109px] h-[40px] rounded-[32px] p-[10px] text-white text-center ${
        trans && "bg-transparent border-[1px] border-primary text-black"
      } bg-primary`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
