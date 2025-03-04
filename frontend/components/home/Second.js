import React from "react";
import Icon from "../Icons";

const Second = () => {
  return (
    <section className="my-20">
      <h1>Get to Know Us</h1>
      <div className="lg:flex gap-20 my-5">
        <Icon url="/home/house7.png" />
        <div className="lg:w-[65%]">
          <p className="lg:text-right my-5 lg:my-0">
            We specialize in connecting property owners with buyers and renters,
            offering a seamless platform for listing and discovering homes,
            apartments, and commercial spaces.
          </p>
          <Icon url="/home/group.png" />
        </div>
      </div>
    </section>
  );
};

export default Second;
