import React from "react";
import Icon from "./Icons";
import ButtonComponent from "./ButtonComponent";

const ListingComponent = ({ item, location }) => {
  return (
    <div className="my-10">
      <h1>{location}</h1>
      <div className="grid lg:grid-cols-3 gap-10 my-5">
        {item.map((item, index) => (
          <div key={index} className="">
            <Icon
              additionalStyle={"rounded-xl w-full h-[326px]"}
              url={item.image}
            />
            <div>
              <div className="flex justify-between items-center my-4">
                <div className="flex items-center gap-2">
                  <Icon
                    // additionalStyle={"rounded-xl w-[370px] h-[326px]"}
                    url="/icons/location.png"
                  />
                  <small>{item.street}</small>
                </div>
                <ButtonComponent
                  text="view"
                  route={`/propertyDetails/${item.id}`}
                />
              </div>
              <div className="flex justify-between items-center my-3">
                <p className="font-bold text-lg">{item.city}</p>
                <p className="font-bold text-lg">{item.price}</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center">
                  <Icon
                    // additionalStyle={"rounded-xl w-[370px] h-[326px]"}
                    url="/icons/bed.png"
                  />
                  <small className="border-r-black/50 pr-3 border-r-[2px] text-xs">
                    3 Bedroom{" "}
                  </small>
                </span>
                <span className="flex items-center">
                  <Icon
                    // additionalStyle={"rounded-xl w-[370px] h-[326px]"}
                    url="/icons/furnished.png"
                  />
                  <small className="border-r-black/50 pr-3 border-r-[2px] text-xs">
                    Semi-furnished
                  </small>
                </span>
                <span className="flex items-center">
                  <Icon
                    // additionalStyle={"rounded-xl w-[370px] h-[326px]"}
                    url="/icons/sqm.png"
                  />
                  <small className=" pr-3 text-xs">472 Sqm</small>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingComponent;
