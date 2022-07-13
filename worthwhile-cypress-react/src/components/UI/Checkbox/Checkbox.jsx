import React from "react";

//styles
import scss from "./Checkbox.module.scss";

const Checkbox = ({ checked, onClick, ...props }) => {
  return (
    <div className={scss["checbox-container"]}>
      <label htmlFor="">
        <input className={scss["hidden-checkbox"]} type="checkbox" {...props} />
      </label>
      <div
        className={scss["styled-checkbox"]}
        checked={checked}
        onClick={onClick}
      ></div>
    </div>
  );
};

export default Checkbox;
