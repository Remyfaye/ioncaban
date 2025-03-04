import ButtonComponent from "@/components/ButtonComponent";
import Filter from "@/components/buy/Filter";
import Footer from "@/components/home/Footer";
import Icon from "@/components/Icons";
import ListingComponent from "@/components/ListingComponent";
import { listings } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="pt-[55px]">
      <div className="lg:flex justify-center flex-col m-auto items-center my-5">
        <h1>Find Houses for sale near me</h1>
        <p>
          Find houses for sale near you. View photos, open house information,
          and property details nearby.
        </p>
        <Filter />
      </div>

      <ListingComponent item={listings} location="Lagos" />
      <ListingComponent item={listings} location="Port Harcourt" />
      <ListingComponent item={listings} location="Abuja" />
      <ListingComponent item={listings} location="Enugu" />
    </div>
  );
};

export default page;
