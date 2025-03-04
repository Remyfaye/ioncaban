import Image from "next/image";
import React from "react";

const Icon = ({ url, additionalStyle }) => {
  return (
    <div>
      <img src={url} alt="img" className={`object-cover ${additionalStyle}`} />
    </div>
  );
};

export default Icon;
