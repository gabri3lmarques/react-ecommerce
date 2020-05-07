import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        autoComplete="off"
        onChange={handleChange}
        {...props}
      ></input>
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
