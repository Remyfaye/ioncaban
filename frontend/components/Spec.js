import React from "react";
import Icon from "./Icons";

function Spec({ title, sub, icon }) {
  return (
    <div className="flex gap-2 items-center">
      <Icon url={icon} />
      <div>
        <span>{title}: </span>
        <span>{sub}</span>
      </div>
    </div>
  );
}

export default Spec;
