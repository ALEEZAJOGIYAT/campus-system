import React from "react";

const form = ({ type, className, id, name, value, onChange, required }) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default form;
