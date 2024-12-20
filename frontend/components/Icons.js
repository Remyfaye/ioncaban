import Image from "next/image";
import React from "react";

const Icon = ({ url }) => {
  return (
    <div>
      <img src={url} alt="img" className="object-cover" />
    </div>
  );
};

export default Icon;
