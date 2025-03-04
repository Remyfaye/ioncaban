import React from "react";

const Filter = () => {
  return (
    <div className="lg:flex gap-5 items-center my-5">
      <div>
        <p>Location</p>
        <div className="flex gap-3 flex-col lg:flex-row">
          <input className="border p-2 w-[250px]" placeholder="Address" />
          <select className="border p-2 lg:w-[200px] w-full">
            <option>state</option>
            <option>state</option>
            <option>state</option>
            <option>state</option>
          </select>
        </div>
      </div>

      <div className="my-5">
        <p>Property Type</p>
        <div className="flex gap-3 flex-col lg:flex-row">
          <select className="border p-2 lg:w-[200px] w-full">
            <option>state</option>
            <option>state</option>
            <option>state</option>
            <option>state</option>
          </select>
        </div>
      </div>

      <div>
        <p>Price Range</p>
        <div className="lg:flex gap-2 flex-col lg:flex-row items-center">
          <input className="border p-2 w-[100px] h-[40px]" placeholder="Min" />
          <div className="h-[40px] w-[230px] ">
            <input className="border p-2  w-[50%] h-[100%]" placeholder="Max" />
            <button className="bg-primary text-white p-[7.8px] w-[50%] ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
