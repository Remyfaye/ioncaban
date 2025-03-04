import React from "react";

const FormComponent = ({ label, password }) => {
  return (
    <div className="my-4">
      <p>{label}</p>
      <input
        type={password ? "password" : "text"}
        className="border rounded-xl p-2 w-[100%] h-[52px]"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default FormComponent;
