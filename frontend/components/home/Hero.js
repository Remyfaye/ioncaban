import React from "react";
import ButtonComponent from "../ButtonComponent";
import Icon from "../Icons";

const Hero = () => {
  return (
    <div className="lg:flex items-center py-10 ">
      <div className="lg:w-[70%]">
        <h1 className=" text-[40px] w-full lg:text-[54px] font-semibold">
          Discover the best Housing properties for your lifestyle.
        </h1>
        <p className="py-5 font-medium text-[20px]">
          Find Your Dream Home Today!
        </p>

        <div className="flex mb-10 lg:mb-0">
          <ButtonComponent text="Find Property" additionalStyle="mr-5" />
          <ButtonComponent
            trans
            text="List Property"
            icon="/home/arrow-up.png"
          />
        </div>
      </div>
      <Icon url="/home/herohouse.png" />
    </div>
  );
};

export default Hero;
